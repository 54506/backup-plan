import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// ─── Hub Data ───────────────────────────────────────────────────────────────
// dotX / dotY: position of city on the SVG map (viewBox 0 0 340 520)
const hubs = [
    {
        city: 'Noida',
        label: 'North India Office',
        role: 'Business Support',
        description: 'Located in Noida, this office helps with customer support and business services.',
        image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=900',
        dotX: 215, dotY: 160,
        color: '#2F80ED',
    },
    {
        city: 'Indore',
        label: 'Central India Office',
        role: 'Support and Tech',
        description: 'Located in Indore, this office helps us support clients from all over India.',
        image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=900',
        dotX: 185, dotY: 260,
        color: '#7C3AED',
    },
    {
        city: 'Hyderabad',
        label: 'Head Office',
        role: 'Software and Business Support',
        description: 'Located in Hyderabad, this is our main office where we manage our software and global teams.',
        image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=900',
        dotX: 205, dotY: 370,
        color: '#2F80ED',
    },
    {
        city: 'Chennai',
        label: 'South India Office',
        role: 'Customer Support',
        description: 'Located in Chennai, this office focuses on helping customers around the world.',
        image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=900',
        dotX: 235, dotY: 460,
        color: '#7C3AED',
    },
    {
        city: 'Bangalore',
        label: 'Tech Center',
        role: 'Smart Tech and Software',
        description: 'Located in Bangalore, this is where we build our latest software and smart tools.',
        image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=900',
        dotX: 200, dotY: 440,
        color: '#2F80ED',
    },
]

// ─── India Map Paths ─────────────────────────────────────────────────────────
const MAP_W = 550
const MAP_H = 700

export default function LocationsSection() {
    const [activeIdx, setActiveIdx] = useState(0)

    // Auto-cycle every 3.5 seconds
    useEffect(() => {
        const id = setInterval(() => setActiveIdx(i => (i + 1) % hubs.length), 3500)
        return () => clearInterval(id)
    }, [])

    const hub = hubs[activeIdx]

    return (
        <section className="section-pad relative overflow-hidden bg-[#03142A]" id="locations">
            {/* Ambient glows */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-[#2F80ED]/6 blur-[160px] rounded-full -translate-y-1/2" />
                <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-[#7C3AED]/6 blur-[160px] rounded-full -translate-y-1/2" />
            </div>

            <div className="container-opmw relative z-10">
                {/* ── Section Header ── */}
                <header className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="uppercase tracking-[0.3em] text-[#7C3AED] text-xs font-bold mb-4"
                    >
                        Where We Are
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-4xl md:text-5xl font-display font-bold text-[#E6EDF7] mb-5"
                    >
                        Our Offices Across India
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-[#9FB3D1] max-w-2xl mx-auto leading-relaxed text-lg opacity-80"
                    >
                        We have offices in key cities across India to help your business grow. Click a city to learn more.
                    </motion.p>
                </header>

                {/* ── Main Layout: [Map] ──── [City Card] ── */}
                <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-8 max-w-[1400px] mx-auto">

                    {/* LEFT: India Map */}
                    <div className="relative flex-shrink-0 group/map w-full max-w-[550px] lg:w-[550px] aspect-[5/6] sm:aspect-auto sm:h-[500px] md:h-[600px] lg:h-[700px]">
                        <svg viewBox="0 0 500 600" width="100%" height="100%" className="absolute inset-0 overflow-visible">
                            {/* India outline with enhanced glow */}
                            <defs>
                                <linearGradient id="mapGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" stopColor="rgba(47,128,237,0.2)" />
                                    <stop offset="100%" stopColor="rgba(124,58,237,0.2)" />
                                </linearGradient>
                                <filter id="glow">
                                    <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
                                    <feMerge>
                                        <feMergeNode in="coloredBlur" />
                                        <feMergeNode in="SourceGraphic" />
                                    </feMerge>
                                </filter>
                            </defs>
                            {/* India outline */}
                            <path
                                d="M130 30 L200 20 L240 50 L260 90 L280 130 L300 180 L310 230 L290 280 L270 320 L250 370 L220 410 L200 440 L175 460 L150 440 L130 410 L100 370 L80 320 L60 270 L50 220 L60 170 L80 120 L100 70 Z"
                                fill="url(#mapGradient)"
                                stroke="rgba(47,128,237,0.4)"
                                strokeWidth="2"
                                transform="translate(40, 40) scale(1.2)"
                                style={{ filter: 'drop-shadow(0 0 15px rgba(47,128,237,0.3))' }}
                            />
                            {/* subtle inner lines */}
                            <path d="M50 220 L310 230" stroke="rgba(47,128,237,0.1)" strokeWidth="1" fill="none" transform="translate(40, 40) scale(1.2)" />
                            <path d="M60 270 L290 280" stroke="rgba(47,128,237,0.1)" strokeWidth="1" fill="none" transform="translate(40, 40) scale(1.2)" />

                            {/* All dots */}
                            {hubs.map((h, i) => {
                                const isActive = i === activeIdx
                                return (
                                    <g key={h.city} onClick={() => setActiveIdx(i)} style={{ cursor: 'pointer' }}>
                                        {/* Outer glow — plain circle, no motion r animation */}
                                        <circle
                                            cx={h.dotX} cy={h.dotY} r={isActive ? 18 : 0}
                                            fill={h.color} opacity={0.12}
                                            style={{ transition: 'r 0.4s' }}
                                        />
                                        {/* Ping ring — CSS keyframe via framer opacity only (no r animation) */}
                                        {isActive && (
                                            <motion.circle
                                                cx={h.dotX} cy={h.dotY} r={20}
                                                fill="none" stroke={h.color} strokeWidth="1"
                                                initial={{ opacity: 0.8, scale: 0.4 }}
                                                animate={{ opacity: 0, scale: 1.6 }}
                                                transition={{ duration: 1.8, repeat: Infinity, ease: 'easeOut' }}
                                            />
                                        )}
                                        {/* Core dot */}
                                        <circle
                                            cx={h.dotX} cy={h.dotY} r={isActive ? 8 : 5}
                                            fill={isActive ? h.color : 'rgba(47,128,237,0.4)'}
                                            style={{
                                                transition: 'r 0.3s, fill 0.3s',
                                                filter: isActive ? `drop-shadow(0 0 8px ${h.color})` : 'none'
                                            }}
                                        />
                                        {/* City label */}
                                        <text
                                            x={h.dotX + (h.dotX > 170 ? 10 : -10)}
                                            y={h.dotY - 10}
                                            textAnchor={h.dotX > 170 ? 'start' : 'end'}
                                            fontSize={isActive ? '13' : '11'}
                                            fontWeight={isActive ? '700' : '500'}
                                            fill={isActive ? '#E6EDF7' : 'rgba(159,179,209,0.7)'}
                                            style={{ transition: 'all 0.3s' }}
                                        >
                                            {h.city}
                                        </text>
                                    </g>
                                )
                            })}
                        </svg>
                    </div>



                    {/* RIGHT: Animated City Image Card */}
                    <div className="flex-1 w-full max-w-xl">
                        <AnimatePresence mode="wait">
                            <motion.article
                                key={hub.city}
                                initial={{ opacity: 0, x: 40, scale: 0.96 }}
                                animate={{ opacity: 1, x: 0, scale: 1 }}
                                exit={{ opacity: 0, x: -40, scale: 0.96 }}
                                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                                className="relative rounded-[2.5rem] overflow-hidden border border-white/10 group"
                                style={{
                                    aspectRatio: '16/10',
                                    boxShadow: `0 0 80px -20px ${hub.color}40, 0 40px 100px rgba(0,0,0,0.8)`
                                }}
                            >
                                {/* ── Lightning & Shimmer Effects ── */}
                                <div className="absolute inset-0 z-[5] pointer-events-none overflow-hidden">
                                    {/* Corner glow pulse */}
                                    <div className="absolute top-0 left-0 w-48 h-48 bg-white/5 blur-[50px] -translate-x-1/2 -translate-y-1/2 animate-pulse" />

                                    {/* Sweeping lightning shimmer */}
                                    <motion.div
                                        animate={{ x: ['-250%', '250%'] }}
                                        transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-[25deg]"
                                    />
                                </div>

                                {/* Multi-layered glowing border */}
                                <div
                                    className="absolute inset-0 z-[1] opacity-60 group-hover:opacity-100 transition-opacity duration-700"
                                    style={{
                                        boxShadow: `inset 0 0 60px ${hub.color}25`,
                                        border: `1.5px solid ${hub.color}30`
                                    }}
                                />
                                {/* Photo */}
                                <img
                                    src={hub.image}
                                    alt={`${hub.city} office`}
                                    className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-[2s] ease-out"
                                />

                                {/* Gradient overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#03142A] via-[#03142A]/50 to-transparent" />
                                <div
                                    className="absolute inset-0"
                                    style={{ background: `linear-gradient(to right, rgba(3,20,42,0.7), transparent 60%)` }}
                                />

                                {/* Top-right label badge */}
                                <div className="absolute top-5 right-5 z-10">
                                    <div
                                        className="text-[10px] uppercase tracking-widest font-bold px-3 py-1.5 rounded-full border backdrop-blur-md"
                                        style={{ color: hub.color, borderColor: hub.color + '50', background: hub.color + '18' }}
                                    >
                                        {hub.label}
                                    </div>
                                </div>

                                {/* Bottom text */}
                                <div className="absolute bottom-0 left-0 w-full p-7 z-10">
                                    <motion.div
                                        initial={{ opacity: 0, y: 12 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: 0.15 }}
                                    >
                                        <div className="flex items-center gap-2.5 mb-3">
                                            <div
                                                className="w-2 h-2 rounded-full animate-pulse"
                                                style={{ background: hub.color, boxShadow: `0 0 8px ${hub.color}` }}
                                            />
                                            <span className="text-[10px] uppercase tracking-widest font-bold" style={{ color: hub.color }}>
                                                LIVE HUB
                                            </span>
                                        </div>
                                        <h3 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white mb-1.5 tracking-tight leading-none drop-shadow-xl">
                                            {hub.city}
                                        </h3>
                                        <p className="text-sm font-semibold uppercase tracking-widest text-[#9FB3D1] mb-4">
                                            {hub.role}
                                        </p>
                                        <p className="text-sm text-[#9FB3D1] leading-relaxed opacity-90 max-w-sm">
                                            {hub.description}
                                        </p>
                                    </motion.div>
                                </div>

                                {/* Shimmer top line */}
                                <motion.div
                                    initial={{ scaleX: 0, opacity: 0 }}
                                    animate={{ scaleX: 1, opacity: 1 }}
                                    exit={{ scaleX: 0, opacity: 0 }}
                                    transition={{ duration: 0.6 }}
                                    className="absolute top-0 left-0 h-[2px] w-full origin-left"
                                    style={{ background: `linear-gradient(to right, ${hub.color}, transparent)` }}
                                />
                            </motion.article>
                        </AnimatePresence>

                        {/* ── Dot navigation ── */}
                        <div className="flex items-center justify-center gap-3 mt-6">
                            {hubs.map((h, i) => (
                                <button
                                    key={h.city}
                                    onClick={() => setActiveIdx(i)}
                                    title={h.city}
                                    className="transition-all duration-300 rounded-full"
                                    style={{
                                        width: i === activeIdx ? 28 : 8,
                                        height: 8,
                                        background: i === activeIdx ? hub.color : 'rgba(159,179,209,0.3)',
                                        boxShadow: i === activeIdx ? `0 0 10px ${hub.color}` : 'none',
                                    }}
                                />
                            ))}
                        </div>

                        {/* ── City selector pills ── */}
                        <div className="flex flex-wrap items-center justify-center gap-3 mt-5">
                            {hubs.map((h, i) => (
                                <button
                                    key={h.city}
                                    onClick={() => setActiveIdx(i)}
                                    className="text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full border transition-all duration-300"
                                    style={{
                                        color: i === activeIdx ? '#fff' : 'rgba(159,179,209,0.6)',
                                        borderColor: i === activeIdx ? h.color + '80' : 'rgba(255,255,255,0.08)',
                                        background: i === activeIdx ? h.color + '25' : 'transparent',
                                        boxShadow: i === activeIdx ? `0 0 14px ${h.color}30` : 'none',
                                    }}
                                >
                                    {h.city}
                                </button>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
