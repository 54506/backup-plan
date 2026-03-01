import { useEffect, useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

/**
 * LandingAnimation — Cinematic Reveal
 * High-end corporate/tech aesthetic. Plays ONCE per session.
 */
export default function LandingAnimation() {
    const [visible, setVisible] = useState(() => {
        if (typeof window === 'undefined') return false
        // Play once per hard page load. Replays on F5, but not on React Router internal navigation.
        return !window.__OPMW_INTRO_PLAYED
    })

    const [phase, setPhase] = useState('init') // init → grid → logo → text → out
    const timers = useRef([])

    useEffect(() => {
        if (!visible) return

        // Prevent playing again in this session
        window.__OPMW_INTRO_PLAYED = true

        const add = (fn, ms) => {
            const id = setTimeout(fn, ms)
            timers.current.push(id)
        }

        // Timeline
        add(() => setPhase('grid'), 100)
        add(() => setPhase('logo'), 800)
        add(() => setPhase('text'), 2000)
        add(() => setPhase('out'), 4500)
        add(() => setVisible(false), 5500)

        return () => timers.current.forEach(clearTimeout)
    }, [visible])

    if (!visible) return null

    const TITLE = "One Place Multi Work"

    return (
        <AnimatePresence>
            {phase !== 'out' && (
                <motion.div
                    key="landing-overlay"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 1.05, filter: 'blur(10px)' }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="fixed inset-0 flex flex-col items-center justify-center overflow-hidden"
                    style={{
                        zIndex: 2147483647,
                        background: '#03142A',
                    }}
                >
                    {/* Ambient Background Glows */}
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 0.15, scale: 1 }}
                            transition={{ duration: 3, ease: 'easeOut' }}
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#2F80ED] blur-[150px] rounded-full"
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 0.1, scale: 1.2 }}
                            transition={{ duration: 4, ease: 'easeOut' }}
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-[#7C3AED] blur-[150px] rounded-full mix-blend-screen"
                        />
                    </div>

                    {/* Subtle Grid / Data Lines overlay */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: phase !== 'init' ? 0.05 : 0 }}
                        transition={{ duration: 2 }}
                        className="absolute inset-0"
                        style={{
                            backgroundSize: '60px 60px',
                            backgroundImage: `
                                linear-gradient(to right, rgba(255,255,255,1) 1px, transparent 1px),
                                linear-gradient(to bottom, rgba(255,255,255,1) 1px, transparent 1px)
                            `,
                            maskImage: 'radial-gradient(circle at center, black 20%, transparent 80%)',
                            WebkitMaskImage: 'radial-gradient(circle at center, black 20%, transparent 80%)'
                        }}
                    />

                    <div className="relative z-10 flex flex-col items-center px-6 text-center select-none">

                        {/* ── Level 1: Emblem ── */}
                        <AnimatePresence>
                            {phase === 'logo' || phase === 'text' ? (
                                <motion.div
                                    key="emblem"
                                    initial={{ opacity: 0, scale: 0.5, y: 20, filter: 'blur(10px)' }}
                                    animate={{ opacity: 1, scale: 1, y: 0, filter: 'blur(0)' }}
                                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                                    className="relative flex items-center justify-center"
                                >
                                    {/* Layered glowing rings */}
                                    <motion.div
                                        className="absolute rounded-full"
                                        animate={{
                                            rotate: 360,
                                            boxShadow: [
                                                '0 0 40px 10px rgba(47,128,237,0.3)',
                                                '0 0 80px 20px rgba(124,58,237,0.5)',
                                                '0 0 40px 10px rgba(47,128,237,0.3)',
                                            ]
                                        }}
                                        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                                        style={{ width: 'clamp(160px, 55vw, 280px)', height: 'clamp(160px, 55vw, 280px)' }}
                                    />
                                    <motion.div
                                        animate={{ rotate: -360 }}
                                        transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                                        className="absolute rounded-full border-2 border-dashed border-[#2F80ED]/40"
                                        style={{ width: 'clamp(200px, 70vw, 320px)', height: 'clamp(200px, 70vw, 320px)' }}
                                    />
                                    {/* THE LOGO — huge, pure transparent PNG, no background box */}
                                    <motion.img
                                        src="/logo.png"
                                        alt="OPMW"
                                        animate={{
                                            filter: [
                                                'drop-shadow(0 0 15px rgba(47,128,237,0.6)) brightness(1.1)',
                                                'drop-shadow(0 0 35px rgba(124,58,237,0.9)) brightness(1.25)',
                                                'drop-shadow(0 0 15px rgba(47,128,237,0.6)) brightness(1.1)',
                                            ],
                                            scale: [1, 1.05, 1],
                                        }}
                                        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                                        style={{
                                            width: 'clamp(120px, 45vw, 250px)',
                                            height: 'clamp(120px, 45vw, 250px)',
                                            objectFit: 'contain',
                                            position: 'relative',
                                            zIndex: 2,
                                        }}
                                    />
                                </motion.div>
                            ) : null}
                        </AnimatePresence>

                        {/* ── Level 2: Full Title & Tagline ── */}
                        <div className="mt-12 h-24 relative flex flex-col items-center">
                            {phase === 'text' && (
                                <>
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 0.5 }}
                                        className="text-center overflow-hidden"
                                    >
                                        <motion.h1
                                            initial={{ y: 50, opacity: 0 }}
                                            animate={{ y: 0, opacity: 1 }}
                                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                            className="font-display font-bold tracking-tight text-2xl md:text-5xl lg:text-5xl text-white mb-4"
                                        >
                                            {TITLE}
                                        </motion.h1>
                                    </motion.div>

                                    <motion.div
                                        initial={{ opacity: 0, filter: 'blur(5px)' }}
                                        animate={{ opacity: 1, filter: 'blur(0)' }}
                                        transition={{ duration: 1, delay: 0.4 }}
                                        className="flex items-center gap-3 text-sm md:text-base font-mono uppercase tracking-[0.3em] text-[#9FB3D1]"
                                    >
                                        <span className="w-8 h-[1px] bg-[#2F80ED]/50" />
                                        Enterprise Operating Platform
                                        <span className="w-8 h-[1px] bg-[#2F80ED]/50" />
                                    </motion.div>
                                </>
                            )}
                        </div>

                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
