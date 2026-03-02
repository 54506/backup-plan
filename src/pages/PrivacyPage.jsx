import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Shield, Lock, Eye, Database, Globe, ArrowRight, CheckCircle2, FileCheck, Scale } from 'lucide-react'

const privacySections = [
    {
        icon: Shield,
        number: '01',
        title: 'Data Sovereignty & Security',
        color: '#2F80ED',
        content: 'OPMW operates with an "Enterprise-First" security mindset. Whether we are handling international voice campaigns or managing workforce data through our HRMS, your information is protected by industry-standard encryption and operational controls.',
        bullets: ['End-to-end data encryption', 'Strict operational access controls', 'Regular security audits', 'ISO-aligned protocols']
    },
    {
        icon: Database,
        number: '02',
        title: 'Information Collection',
        color: '#7C3AED',
        content: 'We only collect information essential for operational delivery and platform functionality. This minimizes risk and ensures we remain focused on results without overstepping privacy boundaries.',
        bullets: ['Client account metadata', 'HRMS workforce records', 'Infrastructure logs', 'Communication metadata']
    },
    {
        icon: Eye,
        number: '03',
        title: 'Consent & Transparency',
        color: '#9F6EFF',
        content: 'Transparency is our core pillar. We ensure all data subjects (employees, clients, and partners) are clearly informed about how their data is used, stored, and protected within the OPMW ecosystem.',
    },
    {
        icon: Globe,
        number: '04',
        title: 'Global Compliance Standards',
        color: '#2F80ED',
        content: 'Our infrastructure and processes are designed to meet the Digital Personal Data Protection (DPDP) Act of India, alongside GDPR for our European partners and SOC2 principles for our US-based clients.',
    },
    {
        icon: FileCheck,
        number: '05',
        title: 'Data Retention & Rights',
        color: '#7C3AED',
        content: 'We respect every individual\'s right to be forgotten (where legal obligations permit). Our retention policies ensure that data is only kept for as long as it adds operational value to the client campaign or platform.',
    }
]

const fadeUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-40px' },
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
}

export default function PrivacyPage() {
    return (
        <main className="bg-[#03142A] text-[#E6EDF7] min-h-screen overflow-x-hidden pt-0">

            {/* ── Hero Section ── */}
            <section className="relative min-h-[70vh] flex items-start pt-48 pb-20 overflow-hidden">
                {/* Background Parallax Layer */}
                <div className="absolute inset-0 z-0">
                    <div
                        className="absolute inset-0 bg-cover bg-center opacity-25 scale-110"
                        style={{ backgroundImage: 'url(/assets/bpo_hero.png)' }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#03142A]/90 via-[#03142A]/60 to-[#03142A]" />
                </div>

                {/* Animated Background Elements */}
                <motion.div
                    animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.2, 0.1] }}
                    transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full blur-[120px] pointer-events-none"
                    style={{ background: 'radial-gradient(circle, #2F80ED 0%, transparent 70%)' }}
                />

                <div className="container-opmw relative z-10 pt-32">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                        className="max-w-4xl"
                    >


                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#2F80ED]/30 bg-[#2F80ED]/5 mb-6">
                            <Lock size={12} className="text-[#2F80ED]" />
                            <span className="text-xs font-bold tracking-[0.3em] uppercase text-[#2F80ED]">Privacy Excellence</span>
                        </div>

                        <h1 className="text-5xl sm:text-6xl md:text-8xl font-display font-bold mb-6 leading-[0.9]">
                            Privacy <span className="text-gradient">Policy</span>
                        </h1>

                        <p className="text-xl text-[#9FB3D1] max-w-2xl leading-relaxed">
                            How we protect, process, and respect your operational data across our BPO, IT, and HRMS divisions.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* ── Metadata Summary Bar ── */}
            <section className="py-10 border-y border-white/5 bg-white/[0.01]">
                <div className="container-opmw">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { label: 'Security Version', val: 'V5.1.0' },
                            { label: 'Last Revision', val: 'March 02, 2026' },
                            { label: 'Compliance Scope', val: 'Global / DPDP / SOC2' },
                            { label: 'Operational Status', val: 'Fully Compliant', icon: CheckCircle2 }
                        ].map(item => (
                            <div key={item.label}>
                                <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#388BFD] mb-2">{item.label}</div>
                                <div className="flex items-center gap-2">
                                    {item.icon && <item.icon size={14} className="text-[#388BFD]" />}
                                    <div className="text-sm font-bold text-white">{item.val}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Core Policy Sections ── */}
            <section className="py-24 md:py-32">
                <div className="container-opmw max-w-5xl">
                    <div className="space-y-12">
                        {privacySections.map((sec, i) => (
                            <motion.div
                                key={sec.number}
                                {...fadeUp}
                                transition={{ ...fadeUp.transition, delay: i * 0.1 }}
                                className="group flex flex-col md:flex-row gap-8 p-10 rounded-[2.5rem] border border-white/5 hover:border-white/10 transition-all duration-500"
                                style={{ background: 'rgba(255,255,255,0.01)' }}
                            >
                                {/* Icon/Index Side */}
                                <div className="flex-shrink-0">
                                    <div
                                        className="w-16 h-16 rounded-2xl flex items-center justify-center relative transition-transform group-hover:scale-105"
                                        style={{ background: `${sec.color}10`, border: `1px solid ${sec.color}25` }}
                                    >
                                        <sec.icon size={28} style={{ color: sec.color }} />
                                        <span className="absolute -top-3 -right-3 text-[10px] font-bold px-2 py-1 rounded-lg bg-[#03142A] border border-white/10" style={{ color: sec.color }}>
                                            {sec.number}
                                        </span>
                                    </div>
                                </div>

                                {/* Content Side */}
                                <div className="flex-1">
                                    <h2 className="text-2xl font-display font-bold text-white mb-4 group-hover:translate-x-1 transition-transform">
                                        {sec.title}
                                    </h2>
                                    <p className="text-[#9FB3D1] leading-relaxed mb-6 text-base">
                                        {sec.content}
                                    </p>

                                    {sec.bullets && (
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/5">
                                            {sec.bullets.map(b => (
                                                <div key={b} className="flex items-center gap-3">
                                                    <div className="w-1.5 h-1.5 rounded-full" style={{ background: sec.color }} />
                                                    <span className="text-sm text-[#9FB3D1]/80">{b}</span>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Highlight Banner ── */}
            <section className="py-24 relative overflow-hidden text-center">
                <div className="absolute inset-0 opacity-10 blur-sm pointer-events-none">
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: 'url(/assets/it_hero.png)' }}
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#03142A] via-[#03142A]/80 to-[#03142A]" />

                <div className="container-opmw relative z-10">
                    <motion.div {...fadeUp} className="max-w-3xl mx-auto">
                        <div className="flex justify-center mb-8">
                            <div className="p-5 rounded-3xl bg-blue-500/5 border border-blue-500/20 shadow-[0_0_50px_rgba(56,139,253,0.1)]">
                                <Scale size={48} className="text-[#388BFD]" />
                            </div>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
                            Protecting Your Information is a <span className="text-gradient">Board-Level Commitment.</span>
                        </h2>
                        <p className="text-[#9FB3D1] text-lg max-w-2xl mx-auto">
                            We don't just follow laws; we build systems that prioritize privacy by design. Every line of code and every BPO ticket follows strict confidentiality protocols.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* ── Bottom CTA ── */}
            <section className="py-24 md:pb-40">
                <div className="container-opmw max-w-5xl">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative p-12 md:p-20 rounded-[3rem] overflow-hidden border border-blue-500/20"
                        style={{ background: 'linear-gradient(145deg, #071C36 0%, #0D0A1E 100%)' }}
                    >
                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(56,139,253,0.1)_0%,transparent_60%)]" />

                        <div className="relative z-10 text-center">
                            <div className="mb-8 flex justify-center">
                                <div className="w-12 h-12 bg-white/5 rounded-xl border border-white/10 flex items-center justify-center p-2">
                                    <img src="/logo.png" alt="" className="w-full h-full object-contain" />
                                </div>
                            </div>
                            <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
                                Privacy Inquiries?
                            </h3>
                            <p className="text-[#9FB3D1] text-lg max-w-lg mx-auto mb-10">
                                Contact our Data Protection Officer for any queries regarding your data rights or compliance checks.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-5 justify-center">
                                <Link
                                    to="/contact"
                                    className="inline-flex items-center justify-center gap-3 px-10 py-4 rounded-2xl font-bold bg-[#388BFD] text-white hover:bg-[#2F80ED] transition-all shadow-[0_10px_30px_rgba(56,139,253,0.3)]"
                                >
                                    Contact Support <ArrowRight size={18} />
                                </Link>
                                <Link
                                    to="/terms"
                                    className="inline-flex items-center justify-center gap-3 px-10 py-4 rounded-2xl font-bold border border-white/10 text-[#9FB3D1] hover:text-white hover:bg-white/5 transition-all"
                                >
                                    Review Terms
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

        </main>
    )
}
