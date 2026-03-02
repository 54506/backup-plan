import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import {
    Phone, Globe, Users, TrendingUp, CheckCircle2, ArrowRight,
    Headphones, BarChart3, Clock, Shield, Zap, Target
} from 'lucide-react'
import StarfieldBackground from '@/animations/StarfieldBackground'

const stats = [
    { value: '90+', label: 'Agents on Campaign', icon: Users },
    { value: '99.2%', label: 'Quality Score', icon: Target },
    { value: '24/7', label: 'Operations', icon: Clock },
    { value: '5+', label: 'Global Clients', icon: Globe },
]

const capabilities = [
    {
        icon: Headphones,
        title: 'Inbound Customer Support',
        desc: 'Multi-channel support covering phone, chat, and email with consistent SLA adherence.',
    },
    {
        icon: Phone,
        title: 'Outbound Sales & Engagement',
        desc: 'Structured outbound campaigns with defined scripts, CRM integration, and live monitoring.',
    },
    {
        icon: Globe,
        title: 'International Voice Operations',
        desc: 'US, UK, and AU market operations with neutral-accent trained agents and compliance controls.',
    },
    {
        icon: BarChart3,
        title: 'Amazon Marketplace Support',
        desc: 'Dedicated Amazon seller support including listing management, buyer queries, and A-to-Z claims.',
    },
    {
        icon: Shield,
        title: 'Quality & Compliance',
        desc: 'Call recording, QA audits, and real-time dashboards for full operational transparency.',
    },
    {
        icon: Zap,
        title: 'Non-Voice Data Processing',
        desc: 'Back-office data entry, verification, and annotation services at scale.',
    },
]

const workflow = [
    { step: '01', title: 'Scope & Requirement', desc: 'We analyze your campaign requirements, target audience, and KPIs.' },
    { step: '02', title: 'Team Assembly', desc: 'Hand-picked agents trained specifically for your product and market.' },
    { step: '03', title: 'Go Live & Monitor', desc: 'Launch with real-time dashboards and daily performance reports.' },
    { step: '04', title: 'Optimize & Scale', desc: 'Weekly reviews to refine scripts, handle objections, and scale capacity.' },
]

function AnimatedCounter({ value }) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })
    return (
        <motion.span ref={ref} initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}}>
            {value}
        </motion.span>
    )
}

export default function BPOServicePage() {
    return (
        <main className="bg-[#03142A] text-[#E6EDF7] min-h-screen overflow-x-hidden">
            <StarfieldBackground className="opacity-30" />

            {/* ── Hero ── */}
            <section className="relative min-h-[90vh] flex items-center overflow-hidden">
                {/* Background image with overlay */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="/assets/bpo_hero.png"
                        alt="BPO Operations"
                        className="w-full h-full object-cover opacity-25"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#03142A] via-[#03142A]/80 to-[#03142A]/40" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#03142A] via-transparent to-transparent" />
                </div>

                {/* Animated orbs */}
                <motion.div
                    animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
                    transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute top-20 right-[20%] w-80 h-80 bg-[#2F80ED]/10 rounded-full blur-3xl pointer-events-none"
                />
                <motion.div
                    animate={{ x: [0, -20, 0], y: [0, 30, 0] }}
                    transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
                    className="absolute bottom-20 right-[10%] w-60 h-60 bg-[#7C3AED]/8 rounded-full blur-3xl pointer-events-none"
                />

                <div className="container-opmw relative z-10 pt-28 pb-20">
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-3xl"
                    >
                        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-[#2F80ED]/30 bg-[#2F80ED]/5 mb-6">
                            <Headphones size={14} className="text-[#2F80ED]" />
                            <span className="text-xs font-bold tracking-[0.3em] uppercase text-[#2F80ED]">BPO & International Voice</span>
                        </div>

                        <h1 className="text-4xl sm:text-5xl md:text-7xl font-display font-bold mb-6 leading-[1.05]">
                            Global Voice Ops.<br />
                            <span className="text-gradient">Measurable Results.</span>
                        </h1>

                        <p className="text-lg md:text-xl text-[#9FB3D1] max-w-2xl leading-relaxed mb-10">
                            Our voice and non-voice teams operate with defined KPIs and monitored quality standards. We handle large-scale international campaigns with operational accuracy.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <Link to="/contact" className="btn-primary px-8 py-4 text-base rounded-2xl">
                                Start a Campaign <ArrowRight size={18} />
                            </Link>
                            <Link to="/services" className="btn-secondary px-8 py-4 text-base rounded-2xl">
                                All Services
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ── Stats ── */}
            <section className="py-12 border-y border-white/5 bg-white/[0.015]">
                <div className="container-opmw">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                        {stats.map((stat, i) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="text-center py-6 px-4 rounded-3xl bg-white/[0.02] border border-white/5 group hover:border-[#2F80ED]/30 transition-all"
                            >
                                <div className="w-12 h-12 rounded-2xl bg-[#2F80ED]/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                                    <stat.icon size={22} className="text-[#2F80ED]" />
                                </div>
                                <div className="text-3xl md:text-4xl font-display font-bold text-white mb-1">
                                    <AnimatedCounter value={stat.value} />
                                </div>
                                <div className="text-xs text-[#9FB3D1]/70 uppercase tracking-widest font-bold">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Capabilities ── */}
            <section className="section-pad">
                <div className="container-opmw">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <div className="section-label mx-auto mb-4">What We Handle</div>
                        <h2 className="text-3xl md:text-5xl font-display font-bold text-white">
                            Full-Spectrum BPO Capabilities
                        </h2>
                    </motion.div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {capabilities.map((cap, i) => (
                            <motion.div
                                key={cap.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.08 }}
                                whileHover={{ y: -6 }}
                                className="p-8 rounded-3xl border border-white/5 bg-white/[0.02] hover:border-[#2F80ED]/25 hover:bg-white/[0.04] transition-all group"
                            >
                                <div className="w-14 h-14 rounded-2xl bg-[#2F80ED]/10 border border-[#2F80ED]/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    <cap.icon size={24} className="text-[#2F80ED]" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">{cap.title}</h3>
                                <p className="text-sm text-[#9FB3D1] leading-relaxed">{cap.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── How It Works ── */}
            <section className="section-pad bg-white/[0.015] border-y border-white/5">
                <div className="container-opmw">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <div className="section-label mx-auto mb-4">Our Process</div>
                        <h2 className="text-3xl md:text-5xl font-display font-bold text-white">How We Deploy</h2>
                    </motion.div>

                    <div className="relative">
                        {/* Connector line on desktop */}
                        <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-[#2F80ED]/40 to-transparent" />

                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            {workflow.map((step, i) => (
                                <motion.div
                                    key={step.step}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.15 }}
                                    className="text-center relative"
                                >
                                    <div className="w-20 h-20 rounded-full bg-[#081E3A] border-2 border-[#2F80ED]/40 flex items-center justify-center mx-auto mb-6 relative z-10">
                                        <span className="text-2xl font-display font-bold text-[#2F80ED]">{step.step}</span>
                                    </div>
                                    <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                                    <p className="text-sm text-[#9FB3D1] leading-relaxed">{step.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Visual Showcase ── */}
            <section className="section-pad">
                <div className="container-opmw">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="section-label mb-6">Amazon Partnership</div>
                            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
                                Powering Amazon Marketplace Operations
                            </h2>
                            <p className="text-[#9FB3D1] text-lg leading-relaxed mb-8">
                                We run dedicated Amazon Seller Support desks that handle listing management, buyer queries, A-to-Z claims, and performance account health — all from our Hyderabad hub.
                            </p>
                            <ul className="space-y-4">
                                {['Amazon Seller Central expertise', 'A-to-Z claim management', 'Buyer query resolution', 'Listing optimization support', 'Account health monitoring'].map(item => (
                                    <li key={item} className="flex items-center gap-3 text-[#9FB3D1]">
                                        <CheckCircle2 size={18} className="text-[#2F80ED] shrink-0" />
                                        <span className="text-sm">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.02 }}
                            className="relative"
                        >
                            <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                                <img src="/assets/bpo_hero.png" alt="BPO Operations" className="w-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#03142A]/50 via-transparent to-transparent rounded-3xl" />
                            </div>
                            {/* Floating stat card */}
                            <motion.div
                                animate={{ y: [0, -8, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                                className="absolute -bottom-6 -left-6 p-5 bg-[#081E3A] border border-[#2F80ED]/30 rounded-2xl shadow-xl"
                            >
                                <div className="text-3xl font-bold text-white">90+</div>
                                <div className="text-xs text-[#2F80ED] uppercase tracking-widest font-bold">Active Agents</div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ── CTA ── */}
            <section className="section-pad">
                <div className="container-opmw">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center p-12 md:p-20 rounded-[2.5rem] relative overflow-hidden"
                        style={{ background: 'linear-gradient(135deg, #071C36 0%, #03142A 100%)', border: '1px solid rgba(47,128,237,0.15)' }}
                    >
                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(47,128,237,0.08)_0%,transparent_70%)]" />
                        <div className="relative z-10">
                            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
                                Ready to Launch Your Campaign?
                            </h2>
                            <p className="text-[#9FB3D1] text-lg max-w-xl mx-auto mb-8">
                                Tell us your campaign goals. We'll set up a dedicated team within days.
                            </p>
                            <Link to="/contact" className="btn-primary px-10 py-4 text-base rounded-2xl">
                                Get Started Today <ArrowRight size={18} />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </main>
    )
}
