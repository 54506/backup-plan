import { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, Shield, Zap, Globe } from 'lucide-react'
import StarfieldBackground from '@/animations/StarfieldBackground'

const badges = [
    { icon: Shield, label: 'SOC 2 Compliant' },
    { icon: Zap, label: '99.9% Uptime SLA' },
    { icon: Globe, label: 'Global Operations' },
]

const stats = [
    { value: '500+', label: 'Enterprise Clients' },
    { value: '12+', label: 'Global Locations' },
    { value: '98%', label: 'Client Retention' },
    { value: '$2B+', label: 'Revenue Managed' },
]

export default function HeroSection() {
    return (
        <section
            className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
            style={{
                background: 'linear-gradient(160deg, #0B0B0F 0%, #0D0718 35%, #150D2E 60%, #0B0B0F 100%)',
            }}
            aria-label="Hero section"
        >
            {/* Starfield Canvas */}
            <StarfieldBackground />

            {/* Deep violet radial glow — center */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: 'radial-gradient(ellipse 70% 55% at 50% 50%, rgba(92,47,191,0.18) 0%, rgba(124,58,237,0.06) 50%, transparent 80%)',
                }}
            />

            {/* Bottom fade */}
            <div
                className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none"
                style={{
                    background: 'linear-gradient(to top, #0B0B0F 0%, transparent 100%)',
                }}
            />

            {/* Content */}
            <div className="container-opmw relative z-10 text-center pt-24 pb-16 md:pt-32 md:pb-24">
                {/* Top badge */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="flex justify-center mb-8"
                >
                    <div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold"
                        style={{
                            background: 'rgba(124,58,237,0.12)',
                            border: '1px solid rgba(124,58,237,0.3)',
                            color: '#9F6EFF',
                            boxShadow: '0 0 20px rgba(124,58,237,0.15)',
                        }}
                    >
                        <Sparkles size={12} />
                        Introducing OPMW Enterprise Platform 2.0
                        <span
                            className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold ml-1"
                            style={{ background: 'rgba(124,58,237,0.3)', color: '#C4A7FF' }}
                        >
                            NEW
                        </span>
                    </div>
                </motion.div>

                {/* Main Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="font-display font-bold leading-tight tracking-tight mb-6"
                    style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', color: '#F0F0F5' }}
                >
                    Integrated Execution.
                    <br />
                    <span className="text-gradient glow-text-md">Unified Growth.</span>
                </motion.h1>

                {/* Sub headline */}
                <motion.p
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="text-lg md:text-xl max-w-2xl mx-auto mb-4 leading-relaxed"
                    style={{ color: '#7A7A8A' }}
                >
                    OPMW is a unified enterprise operating system spanning{' '}
                    <span style={{ color: '#A0A0B0' }}>BPO</span>,{' '}
                    <span style={{ color: '#A0A0B0' }}>Voice Operations</span>,{' '}
                    <span style={{ color: '#A0A0B0' }}>Web Development</span>, and{' '}
                    <span style={{ color: '#A0A0B0' }}>HRMS SaaS</span> —
                    engineered for enterprises that operate at scale.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-10 mb-16"
                >
                    <Link to="/contact" className="btn-primary text-base px-7 py-3.5">
                        Schedule Demo
                        <ArrowRight size={16} />
                    </Link>
                    <Link to="/hrms" className="btn-secondary text-base px-7 py-3.5">
                        Explore HRMS Platform
                    </Link>
                </motion.div>

                {/* Trust badges */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="flex flex-wrap items-center justify-center gap-6 mb-16"
                >
                    {badges.map(({ icon: Icon, label }) => (
                        <div key={label} className="flex items-center gap-2">
                            <Icon size={14} style={{ color: '#5B2FBF' }} />
                            <span className="text-xs font-medium" style={{ color: '#606070' }}>{label}</span>
                        </div>
                    ))}
                </motion.div>

                {/* Stats Strip */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-px max-w-3xl mx-auto rounded-2xl overflow-hidden"
                    style={{
                        background: 'rgba(255,255,255,0.04)',
                        border: '1px solid rgba(255,255,255,0.07)',
                    }}
                >
                    {stats.map(({ value, label }) => (
                        <div
                            key={label}
                            className="flex flex-col items-center py-6 px-4"
                            style={{ background: 'rgba(11,11,15,0.60)' }}
                        >
                            <span
                                className="font-display font-bold mb-1"
                                style={{
                                    fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                                    color: '#F0F0F5',
                                }}
                            >
                                {value}
                            </span>
                            <span className="text-xs text-center" style={{ color: '#5A5A6A' }}>{label}</span>
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
            >
                <span className="text-xs tracking-widest uppercase" style={{ color: '#3A3A4E' }}>Scroll</span>
                <motion.div
                    animate={{ y: [0, 6, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                    className="w-px h-8"
                    style={{ background: 'linear-gradient(to bottom, rgba(124,58,237,0.5), transparent)' }}
                />
            </motion.div>
        </section>
    )
}
