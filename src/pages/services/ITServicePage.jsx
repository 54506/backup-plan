import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
    Code2, Globe, Layers, Cpu, ArrowRight, CheckCircle2,
    Monitor, Database, Zap, GitBranch, ShieldCheck, BarChart2
} from 'lucide-react'
import StarfieldBackground from '@/animations/StarfieldBackground'

const capabilities = [
    { icon: Monitor, title: 'Custom Enterprise Web Apps', desc: 'Multi-role, workflow-driven applications that replace spreadsheets and paper-based systems.' },
    { icon: Layers, title: 'ERP & Workflow Platforms', desc: 'End-to-end business platforms covering procurement, operations, HR, and finance in one system.' },
    { icon: BarChart2, title: 'Digital Monitoring Systems', desc: 'Real-time dashboards and alerting systems for field operations and distributed teams.' },
    { icon: Globe, title: 'Corporate Website Development', desc: 'Fast, responsive, and SEO-optimised corporate websites built with modern frameworks.' },
    { icon: Database, title: 'API & Systems Integration', desc: 'Connecting third-party platforms, legacy systems, and modern APIs into a unified data layer.' },
    { icon: GitBranch, title: 'DevOps & Deployment', desc: 'CI/CD pipelines, cloud hosting, and ongoing maintenance for reliable, scalable delivery.' },
]

const stack = [
    { label: 'React', color: '#61DAFB' },
    { label: 'Node.js', color: '#68A063' },
    { label: 'PHP', color: '#8892BE' },
    { label: 'PostgreSQL', color: '#336791' },
    { label: 'MySQL', color: '#F29111' },
    { label: 'AWS', color: '#FF9900' },
    { label: 'Vite', color: '#646CFF' },
    { label: 'Tailwind', color: '#38BDF8' },
    { label: 'Docker', color: '#2496ED' },
    { label: 'REST APIs', color: '#2F80ED' },
]

const deliverables = [
    'Requirement doc & wireframes within 5 days',
    'Mobile-first, fully responsive designs',
    'Secure user auth with role-based access',
    'Source code ownership on delivery',
    'Post-launch bug support for 60 days',
    'Scalable cloud-ready architecture',
]

export default function ITServicePage() {
    return (
        <main className="bg-[#03142A] text-[#E6EDF7] min-h-screen overflow-x-hidden">
            <StarfieldBackground className="opacity-30" />

            {/* ── Hero ── */}
            <section className="relative min-h-[90vh] flex items-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/assets/it_hero.png"
                        alt="IT Development"
                        className="w-full h-full object-cover opacity-25"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#03142A] via-[#03142A]/80 to-[#03142A]/40" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#03142A] via-transparent to-transparent" />
                </div>

                {/* Animated orbs */}
                <motion.div
                    animate={{ x: [0, 25, 0], y: [0, -25, 0] }}
                    transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute top-40 right-[15%] w-96 h-96 bg-[#7C3AED]/10 rounded-full blur-3xl pointer-events-none"
                />
                <motion.div
                    animate={{ x: [0, -15, 0], y: [0, 20, 0] }}
                    transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
                    className="absolute bottom-40 right-[30%] w-64 h-64 bg-[#2F80ED]/8 rounded-full blur-3xl pointer-events-none"
                />

                <div className="container-opmw relative z-10 pt-28 pb-20">
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-3xl"
                    >
                        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-[#7C3AED]/30 bg-[#7C3AED]/5 mb-6">
                            <Code2 size={14} className="text-[#7C3AED]" />
                            <span className="text-xs font-bold tracking-[0.3em] uppercase text-[#7C3AED]">IT & Web Applications</span>
                        </div>

                        <h1 className="text-4xl sm:text-5xl md:text-7xl font-display font-bold mb-6 leading-[1.05]">
                            Systems That<br />
                            <span className="bg-gradient-to-r from-[#7C3AED] via-[#2F80ED] to-[#9F6EFF] bg-clip-text text-transparent">Actually Scale.</span>
                        </h1>

                        <p className="text-lg md:text-xl text-[#9FB3D1] max-w-2xl leading-relaxed mb-10">
                            We build web-based systems that support real operational needs. Our focus is clarity and functionality — designing systems that teams can actually use and scale reliably.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <Link to="/contact" className="btn-primary px-8 py-4 text-base rounded-2xl">
                                Discuss Your Project <ArrowRight size={18} />
                            </Link>
                            <Link to="/projects" className="btn-secondary px-8 py-4 text-base rounded-2xl">
                                View Our Work
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ── Tech Stack ── */}
            <section className="py-12 border-y border-white/5 bg-white/[0.015]">
                <div className="container-opmw">
                    <p className="text-center text-xs font-bold uppercase tracking-widest text-[#9FB3D1]/50 mb-8">Technologies We Build With</p>
                    <div className="flex flex-wrap justify-center gap-3">
                        {stack.map((tech, i) => (
                            <motion.div
                                key={tech.label}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                whileHover={{ scale: 1.1, y: -3 }}
                                className="px-5 py-2.5 rounded-full border text-sm font-bold transition-all cursor-default"
                                style={{
                                    borderColor: `${tech.color}40`,
                                    color: tech.color,
                                    background: `${tech.color}08`,
                                }}
                            >
                                {tech.label}
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
                        <div className="section-label mx-auto mb-4">What We Build</div>
                        <h2 className="text-3xl md:text-5xl font-display font-bold text-white">
                            End-to-End Development Capabilities
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
                                className="p-8 rounded-3xl border border-white/5 bg-white/[0.02] hover:border-[#7C3AED]/25 hover:bg-white/[0.04] transition-all group"
                            >
                                <div className="w-14 h-14 rounded-2xl bg-[#7C3AED]/10 border border-[#7C3AED]/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    <cap.icon size={24} className="text-[#7C3AED]" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">{cap.title}</h3>
                                <p className="text-sm text-[#9FB3D1] leading-relaxed">{cap.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── What You Get ── */}
            <section className="section-pad bg-white/[0.015] border-y border-white/5">
                <div className="container-opmw">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.02 }}
                            className="relative order-2 lg:order-1"
                        >
                            <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl aspect-[4/3]">
                                <img src="/assets/it_hero.png" alt="IT Development" className="w-full h-full object-cover" />
                            </div>
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                                className="absolute -top-6 -right-6 p-4 bg-[#081E3A] border border-[#7C3AED]/30 rounded-2xl shadow-xl"
                            >
                                <div className="flex items-center gap-2">
                                    <ShieldCheck size={18} className="text-[#7C3AED]" />
                                    <span className="text-xs font-bold text-white">Secure & Scalable</span>
                                </div>
                            </motion.div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="order-1 lg:order-2"
                        >
                            <div className="section-label mb-6">Standard Deliverables</div>
                            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
                                What Every Project Includes
                            </h2>
                            <p className="text-[#9FB3D1] text-lg leading-relaxed mb-8">
                                We don't just build and leave. Our projects come with clear documentation, ownership transfer, and post-delivery support.
                            </p>
                            <ul className="space-y-4">
                                {deliverables.map(item => (
                                    <li key={item} className="flex items-start gap-3 text-[#9FB3D1]">
                                        <CheckCircle2 size={18} className="text-[#7C3AED] shrink-0 mt-0.5" />
                                        <span className="text-sm">{item}</span>
                                    </li>
                                ))}
                            </ul>
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
                        style={{ background: 'linear-gradient(135deg, #0D0A1E 0%, #071C36 100%)', border: '1px solid rgba(124,58,237,0.2)' }}
                    >
                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(124,58,237,0.08)_0%,transparent_70%)]" />
                        <div className="relative z-10">
                            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
                                Have a Project in Mind?
                            </h2>
                            <p className="text-[#9FB3D1] text-lg max-w-xl mx-auto mb-8">
                                Share your idea, and we'll have a scoping call within 24 hours.
                            </p>
                            <Link to="/contact" className="btn-primary px-10 py-4 text-base rounded-2xl">
                                Start Your Project <ArrowRight size={18} />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </main>
    )
}
