import { useRef, useEffect } from 'react'
import { motion, useMotionValue, useSpring, useTransform, animate } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Zap, Shield, Maximize, Activity, ArrowRight, Globe, Cpu } from 'lucide-react'

const capabilities = [
    {
        icon: <Globe size={22} />,
        label: 'Multi-City Operations',
        desc: 'Chennai, Hyderabad, Bangalore, Noida, Indore.'
    },
    {
        icon: <Cpu size={22} />,
        label: 'Scalable Workforce',
        desc: '300+ trained professionals and growing.'
    },
    {
        icon: <Shield size={22} />,
        label: 'Cost-Optimized',
        desc: 'Reliable execution with structured delivery.'
    },
    {
        icon: <Zap size={22} />,
        label: 'Integrated BPO + IT',
        desc: 'Operations and technology under one system.'
    },
]

export default function HeroSection() {
    return (
        <section
            className="relative flex flex-col justify-center overflow-hidden min-h-screen"
            aria-label="Enterprise Operating Platform"
        >
            {/* ── Background Video Section ── */}
            <div className="absolute inset-0 z-0 bg-[#03142A] overflow-hidden pointer-events-none">
                <motion.video
                    autoPlay
                    loop
                    muted
                    playsInline
                    poster="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.65 }}
                    transition={{ duration: 1 }}
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

            {/* ── Dynamic Grid System ── */}
            <div
                className="absolute inset-0 z-[1] pointer-events-none opacity-15"
                style={{
                    backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0)',
                    backgroundSize: '40px 40px'
                }}
            />

            {/* Top Noise Overlay */}
            <div className="noise-overlay z-1" />

            <div className="container-opmw relative z-20 pt-32 pb-12">
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
                            OPMW – <br /> One Place <br /> Multi Work
                        </motion.h1>

                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.15 }}
                            className="flex flex-wrap gap-x-4 gap-y-2 mb-6 text-sm font-bold tracking-widest uppercase text-[#2F80ED]"
                        >
                            <span>Integrated BPO</span>
                            <span className="opacity-30">|</span>
                            <span>International Voice</span>
                            <span className="opacity-30">|</span>
                            <span>Web Applications</span>
                            <span className="opacity-30">|</span>
                            <span>Enterprise HRMS</span>
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                            className="text-lg md:text-xl mb-10 leading-relaxed font-normal"
                            style={{ color: '#9FB3D1', maxWidth: '600px', opacity: 0.85 }}
                        >
                            Modern businesses don’t just need vendors — they need reliable execution partners. OPMW brings operations, technology, and workforce management together under one structured system.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                            className="flex flex-col sm:flex-row gap-4 mb-16"
                        >
                            <Link to="/contact" className="btn-primary relative z-10 overflow-hidden group">
                                <span className="relative z-10 flex items-center gap-2">
                                    Start Your Transformation <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                </span>
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
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pt-10 border-t border-white/5 w-full mt-auto">
                            {capabilities.map((cap, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.6 + idx * 0.1 }}
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
                        </div>
                    </div>

                    {/* Right Side: Intentionally Empty for Minimalist Balance */}
                    <div className="hidden lg:block lg:col-span-4" />

                </div>
            </div>
        </section>
    )
}

