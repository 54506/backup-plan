import { useRef, useEffect } from 'react'
import { motion, useMotionValue, useSpring, useTransform, animate } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Zap, Shield, Maximize, Activity, ArrowRight, Globe, Cpu } from 'lucide-react'

const capabilities = [
    {
        icon: <Zap size={22} />,
        label: 'Smart Analytics',
        desc: 'Understand your business with smart data.'
    },
    {
        icon: <Shield size={22} />,
        label: 'Safe and Secure',
        desc: 'We keep your data safe and private.'
    },
    {
        icon: <Maximize size={22} />,
        label: 'Ready to Grow',
        desc: 'Built to grow as your business gets bigger.'
    },
    {
        icon: <Activity size={22} />,
        label: 'Smart Workflows',
        desc: 'Save time with automated tasks.'
    },
]

export default function HeroSection() {
    const containerRef = useRef(null)

    // Mouse tracking for Parallax and Glow
    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)

    // Smooth springs for fluid motion
    const springX = useSpring(mouseX, { stiffness: 60, damping: 25 })
    const springY = useSpring(mouseY, { stiffness: 60, damping: 25 })

    // Parallax transforms with diverse depths for "Floating Modules"
    const depth1X = useTransform(springX, (v) => v * 35) // Deep layer
    const depth1Y = useTransform(springY, (v) => v * 35)

    const depth2X = useTransform(springX, (v) => v * 20) // Mid layer
    const depth2Y = useTransform(springY, (v) => v * 20)

    const depth3X = useTransform(springX, (v) => v * 10) // Shallow layer
    const depth3Y = useTransform(springY, (v) => v * 10)

    const gridX = useTransform(springX, (v) => v * -12)
    const gridY = useTransform(springY, (v) => v * -12)

    // Glow position relative to mouse
    const glowX = useSpring(mouseX, { stiffness: 40, damping: 20 })
    const glowY = useSpring(mouseY, { stiffness: 40, damping: 20 })

    const handleMouseMove = (e) => {
        if (!containerRef.current) return
        const rect = containerRef.current.getBoundingClientRect()
        const x = (e.clientX - rect.left) / rect.width - 0.5
        const y = (e.clientY - rect.top) / rect.height - 0.5
        mouseX.set(x)
        mouseY.set(y)
    }

    const handleMouseLeave = () => {
        mouseX.set(0)
        mouseY.set(0)
    }

    return (
        <section
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative flex flex-col justify-center overflow-x-hidden"
            aria-label="Enterprise Operating Platform"
        >
            {/* ── Background Video Section ── */}
            <div className="absolute inset-0 z-0 bg-[#03142A] overflow-hidden pointer-events-none">
                <motion.video
                    autoPlay
                    loop
                    muted
                    playsInline
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.65 }}
                    transition={{ duration: 1.5 }}
                    className="absolute w-full h-full object-cover"
                >
                    <source src="/hero-bg.mp4" type="video/mp4" />
                    <source src="https://media.pixverse.ai/pixverse%2Fmp4%2Fmedia%2Fweb%2Fori%2F0ce2fc9e-85dd-4123-9161-648980795295_seed1814303338.mp4" type="video/mp4" />
                </motion.video>

                {/* Visual Overlay */}
                <div
                    className="absolute inset-0"
                    style={{
                        background: 'linear-gradient(105deg, rgba(3,20,42,0.95) 0%, rgba(3,20,42,0.6) 55%, rgba(3,20,42,0.1) 100%)'
                    }}
                />
            </div>

            {/* Mouse-Follow Glow Light */}
            <motion.div
                className="absolute hidden lg:block pointer-events-none z-1 w-[600px] h-[600px] rounded-full"
                style={{
                    left: '50%',
                    top: '50%',
                    x: useTransform(glowX, (v) => `${(v + 0.5) * 100}%`),
                    y: useTransform(glowY, (v) => `${(v + 0.5) * 100}%`),
                    translateX: '-50%',
                    translateY: '-50%',
                    background: 'radial-gradient(circle, rgba(47,128,237,0.1) 0%, transparent 70%)',
                    filter: 'blur(80px)',
                }}
            />

            {/* ── Dynamic Grid System ── */}
            <motion.div
                className="absolute inset-0 z-[1] pointer-events-none opacity-25"
                style={{
                    x: gridX, y: gridY,
                    backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0)',
                    backgroundSize: '40px 40px'
                }}
                animate={{
                    opacity: [0.15, 0.25, 0.15]
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Top Noise Overlay */}
            <div className="noise-overlay z-1" />

            <div className="container-opmw relative z-20 pt-24 pb-6">
                <div className="grid lg:grid-cols-12 gap-12 items-center">

                    {/* Left & Main Content: Integrated Statistics */}
                    <div className="lg:col-span-8 flex flex-col items-start text-left max-w-2xl">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="inline-flex items-center gap-2 px-3 py-1 mb-8 rounded text-xs font-bold tracking-widest uppercase border"
                            style={{
                                color: '#9FB3D1',
                                borderColor: 'rgba(255,255,255,0.08)',
                                backgroundColor: 'rgba(8,30,58,0.4)',
                                backdropFilter: 'blur(8px)'
                            }}
                        >
                            <Cpu size={14} className="text-[#2F80ED]" /> Business Support Platform
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                            className="font-display font-semibold leading-tight tracking-tight mb-6"
                            style={{ fontSize: 'clamp(2rem, 9vw, 3.8rem)', color: '#E6EDF7' }}
                        >
                            The Best Way<br /> to Manage Your<br /> Business.
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                            className="text-lg md:text-xl mb-10 leading-relaxed font-normal"
                            style={{ color: '#9FB3D1', maxWidth: '600px', opacity: 0.85 }}
                        >
                            OPMW helps you manage your team, software, and customer support all in one place. We make big business easy.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                            className="flex flex-col sm:flex-row gap-4 mb-16"
                        >
                            <Link to="/contact" className="btn-solid-premium justify-center flex items-center text-base font-semibold px-8 py-4 rounded-md">
                                Get Started <ArrowRight size={18} className="ml-2" />
                            </Link>
                            <Link
                                to="/services"
                                className="flex items-center justify-center text-base font-medium px-8 py-4 rounded-md transition-all duration-300 border"
                                style={{
                                    borderColor: 'rgba(255,255,255,0.1)',
                                    color: '#E6EDF7'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.03)'
                                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.backgroundColor = 'transparent'
                                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'
                                }}
                            >
                                See Our Work
                            </Link>
                        </motion.div>

                        {/* Integrated Capabilities Grid (The "Strategic Pillars") */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.5 }}
                            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pt-10 border-t border-white/5 w-full mt-auto"
                        >
                            {capabilities.map((cap, idx) => (
                                <motion.div
                                    key={idx}
                                    style={{
                                        // Varied subtle parallax shifts
                                        translateY: useTransform(springY, (v) => v * (12 + idx * 4)),
                                        translateX: useTransform(springX, (v) => v * (12 + idx * 4))
                                    }}
                                    className="flex flex-col group cursor-default"
                                >
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="p-2.5 rounded-lg bg-[#2F80ED]/5 border border-[#2F80ED]/20 text-[#2F80ED] group-hover:bg-[#2F80ED]/10 group-hover:border-[#2F80ED]/40 transition-all duration-300">
                                            {cap.icon}
                                        </div>
                                        <div className="text-[#E6EDF7] font-display font-bold tracking-wide text-sm">
                                            {cap.label}
                                        </div>
                                    </div>
                                    <div className="text-[#9FB3D1] text-[11px] leading-relaxed opacity-60 group-hover:opacity-100 transition-opacity">
                                        {cap.desc}
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Right Side: Intentionally Empty for Minimalist Balance */}
                    <div className="hidden lg:block lg:col-span-4" />

                </div>
            </div>
        </section>
    )
}
