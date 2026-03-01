import { useEffect, useRef } from 'react'

/**
 * StarfieldBackground — Canvas-based premium multi-layer parallax starfield
 * Premium SaaS atmospheric depth effect (Vercel-style).
 * Three depth layers: far, mid, near — each with different sizes, speeds, opacity.
 * Mouse-parallax for subtle depth on desktop.
 * Reduced motion / mobile: still renders but disables parallax.
 */
export default function StarfieldBackground({ className = '' }) {
    const canvasRef = useRef(null)
    const animRef = useRef(null)
    const mouseRef = useRef({ x: 0, y: 0 })
    const starsRef = useRef([])

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return
        const ctx = canvas.getContext('2d')

        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
        const isMobile = window.innerWidth < 768

        // --- Star Layer Configuration ---
        const layers = [
            // Far — tiny, very faint, slow
            { count: 180, minSize: 0.4, maxSize: 0.9, minAlpha: 0.08, maxAlpha: 0.25, speed: 0.008, parallaxFactor: 0.005 },
            // Mid — medium, moderate
            { count: 90, minSize: 0.8, maxSize: 1.4, minAlpha: 0.15, maxAlpha: 0.45, speed: 0.018, parallaxFactor: 0.012 },
            // Near — slightly larger, brighter, twinkle
            { count: 40, minSize: 1.2, maxSize: 2.0, minAlpha: 0.3, maxAlpha: 0.7, speed: 0.03, parallaxFactor: 0.025, twinkle: true },
        ]

        function initStars(width, height) {
            const stars = []
            layers.forEach((layer, layerIdx) => {
                for (let i = 0; i < layer.count; i++) {
                    const twinkleSpeed = 0.002 + Math.random() * 0.004
                    const twinkleOffset = Math.random() * Math.PI * 2
                    stars.push({
                        x: Math.random() * width,
                        y: Math.random() * height,
                        size: layer.minSize + Math.random() * (layer.maxSize - layer.minSize),
                        alpha: layer.minAlpha + Math.random() * (layer.maxAlpha - layer.minAlpha),
                        baseAlpha: layer.minAlpha + Math.random() * (layer.maxAlpha - layer.minAlpha),
                        speed: layer.speed * (0.6 + Math.random() * 0.8),
                        parallaxFactor: layer.parallaxFactor,
                        layer: layerIdx,
                        twinkle: layer.twinkle || false,
                        twinkleSpeed,
                        twinkleOffset,
                        offsetX: 0,
                        offsetY: 0,
                    })
                }
            })
            starsRef.current = stars
        }

        function resizeCanvas() {
            canvas.width = canvas.offsetWidth
            canvas.height = canvas.offsetHeight
            initStars(canvas.width, canvas.height)
        }

        let tick = 0

        function draw() {
            const w = canvas.width
            const h = canvas.height
            if (w <= 0 || h <= 0 || !Number.isFinite(w) || !Number.isFinite(h)) return

            // Clear with very slight trail for smooth motion
            ctx.clearRect(0, 0, w, h)

            tick += 1

            // Very subtle radial gradient overlay — center slightly lighter
            const radial = ctx.createRadialGradient(w * 0.5, h * 0.45, 0, w * 0.5, h * 0.45, w * 0.8)
            radial.addColorStop(0, 'rgba(30, 16, 64, 0.04)')
            radial.addColorStop(0.5, 'rgba(13, 7, 24, 0.03)')
            radial.addColorStop(1, 'rgba(11, 11, 15, 0)')
            ctx.fillStyle = radial
            ctx.fillRect(0, 0, w, h)

            const mx = mouseRef.current.x
            const my = mouseRef.current.y

            starsRef.current.forEach(star => {
                // Parallax offset from mouse (desktop only)
                let px = 0, py = 0
                if (!isMobile && !prefersReducedMotion) {
                    const normX = (mx / w - 0.5) * 2
                    const normY = (my / h - 0.5) * 2
                    px = normX * star.parallaxFactor * w * 0.5
                    py = normY * star.parallaxFactor * h * 0.3
                }

                // Drift
                if (!prefersReducedMotion) {
                    star.x -= star.speed
                    if (star.x + px < -2) star.x = w + 2
                }

                // Twinkle
                let alpha = star.baseAlpha
                if (star.twinkle) {
                    alpha = star.baseAlpha * (0.5 + 0.5 * Math.sin(tick * star.twinkleSpeed + star.twinkleOffset))
                }

                const drawX = star.x + px
                const drawY = star.y + py

                ctx.beginPath()
                ctx.arc(drawX, drawY, star.size, 0, Math.PI * 2)
                ctx.fillStyle = `rgba(200, 180, 255, ${alpha})`
                ctx.fill()

                // Add subtle glow to near-layer stars
                if (star.layer === 2 && star.size > 1.5 && Number.isFinite(drawX) && Number.isFinite(drawY) && Number.isFinite(star.size)) {
                    ctx.beginPath()
                    ctx.arc(drawX, drawY, star.size * 2.5, 0, Math.PI * 2)
                    const radius = star.size * 2.5
                    if (radius > 0) {
                        const grd = ctx.createRadialGradient(drawX, drawY, 0, drawX, drawY, radius)
                        grd.addColorStop(0, `rgba(159, 110, 255, ${alpha * 0.3})`)
                        grd.addColorStop(1, 'rgba(159, 110, 255, 0)')
                        ctx.fillStyle = grd
                        ctx.fill()
                    }
                }
            })

            animRef.current = requestAnimationFrame(draw)
        }

        // Mouse tracking
        const handleMouseMove = (e) => {
            const rect = canvas.getBoundingClientRect()
            mouseRef.current = {
                x: e.clientX - rect.left,
                y: e.clientY - rect.top,
            }
        }

        let resizeTimer
        const handleResize = () => {
            clearTimeout(resizeTimer)
            resizeTimer = setTimeout(resizeCanvas, 200)
        }

        resizeCanvas()
        draw()

        window.addEventListener('resize', handleResize)
        window.addEventListener('mousemove', handleMouseMove)

        return () => {
            cancelAnimationFrame(animRef.current)
            window.removeEventListener('resize', handleResize)
            window.removeEventListener('mousemove', handleMouseMove)
            clearTimeout(resizeTimer)
        }
    }, [])

    return (
        <canvas
            ref={canvasRef}
            className={`absolute inset-0 w-full h-full ${className}`}
            aria-hidden="true"
            style={{ pointerEvents: 'none' }}
        />
    )
}
