import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Scale, Cpu, Globe, CheckCircle2, ArrowRight, Shield, FileText, Lock, Users } from 'lucide-react'

const sections = [
    {
        icon: Scale,
        number: '01',
        title: 'Agreement to Terms',
        color: '#2F80ED',
        content: 'By accessing or using OPMW (One Place Multi Work) services — including our BPO operations, IT applications, and HRMS platform — you agree to be bound by these terms. These rules ensure operational transparency and high-quality service delivery for all our global partners and clients.',
    },
    {
        icon: Cpu,
        number: '02',
        title: 'Service Provision',
        color: '#7C3AED',
        content: 'OPMW provides specialized business operations and technology solutions. We maintain high standards of operational accuracy and system availability (99.9% uptime for digital platforms). Our services include KPI-driven BPO delivery, secure HRMS environments, managed IT infrastructure, and 24/7 technical assistance.',
        bullets: ['KPI-driven BPO delivery', 'Secure HRMS environment', 'Managed IT infrastructure', '24/7 technical assistance'],
    },
    {
        icon: Shield,
        number: '03',
        title: 'Data & Intellectual Property',
        color: '#9F6EFF',
        content: 'All proprietary software, including OPMW HRMS, remains the intellectual property of OPMW. Client data processed through our systems is handled with strict confidentiality and is subject to our Privacy Policy and local jurisdictional regulations (including GDPR/DPDP where applicable).',
    },
    {
        icon: Globe,
        number: '04',
        title: 'Global Compliance',
        color: '#2F80ED',
        content: 'Our services operate across multiple jurisdictions including major Indian tech hubs (Hyderabad, Noida, Indore, Bangalore) and international markets (US, UK, AU). We adhere to international security standards and corporate governance protocols to ensure seamless multi-geography operational continuity.',
    },
    {
        icon: Users,
        number: '05',
        title: 'User Responsibilities',
        color: '#7C3AED',
        content: 'Users and client organizations accessing our platforms are responsible for maintaining the confidentiality of their credentials, ensuring authorized use within their organization, and promptly reporting any security concerns or service disruptions to our operations team.',
    },
    {
        icon: FileText,
        number: '06',
        title: 'Changes to Terms',
        color: '#9F6EFF',
        content: 'OPMW reserves the right to update these terms at any time. Material changes will be communicated directly to active clients. Continued use of our services following any changes constitutes acceptance of the updated terms. Last updated: March 2026.',
    },
]

export default function TermsPage() {
    return (
        <main className="bg-[#03142A] text-[#E6EDF7] min-h-screen overflow-x-hidden">

            {/* ── Hero ── */}
            <section className="relative min-h-[55vh] flex items-end pb-16 overflow-hidden">
                {/* Background */}
                <div className="absolute inset-0 z-0">
                    <div
                        className="absolute inset-0 bg-cover bg-center opacity-20"
                        style={{ backgroundImage: 'url(/assets/it_hero.png)' }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#03142A]/80 via-[#03142A]/60 to-[#03142A]" />
                </div>

                {/* Animated orbs */}
                <motion.div
                    animate={{ scale: [1, 1.2, 1], opacity: [0.08, 0.15, 0.08] }}
                    transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute top-20 left-1/4 w-80 h-80 rounded-full pointer-events-none"
                    style={{ background: 'radial-gradient(circle, #2F80ED, transparent 70%)' }}
                />
                <motion.div
                    animate={{ scale: [1, 1.15, 1], opacity: [0.06, 0.12, 0.06] }}
                    transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
                    className="absolute top-10 right-1/4 w-96 h-96 rounded-full pointer-events-none"
                    style={{ background: 'radial-gradient(circle, #7C3AED, transparent 70%)' }}
                />

                <div className="container-opmw relative z-10 pt-32">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-3xl"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#2F80ED]/30 bg-[#2F80ED]/5 mb-6">
                            <Scale size={12} className="text-[#2F80ED]" />
                            <span className="text-xs font-bold tracking-[0.3em] uppercase text-[#2F80ED]">Legal Framework</span>
                        </div>
                        <h1 className="text-4xl sm:text-5xl md:text-7xl font-display font-bold mb-4 leading-tight">
                            Terms of <span className="text-gradient">Service</span>
                        </h1>
                        <p className="text-lg text-[#9FB3D1] max-w-xl">
                            These terms govern your use of all OPMW services — BPO, IT, and HRMS. Please read carefully.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* ── Quick Summary Stats ── */}
            <section className="py-8 border-y border-white/5">
                <div className="container-opmw">
                    <div className="flex flex-wrap gap-8 sm:gap-16">
                        {[
                            { label: 'Last Updated', val: 'March 2026' },
                            { label: 'Version', val: '4.2' },
                            { label: 'Jurisdictions Covered', val: 'IN / US / UK / AU' },
                            { label: 'Document Type', val: 'Binding Agreement' },
                        ].map(s => (
                            <div key={s.label}>
                                <div className="text-[10px] uppercase tracking-widest font-bold text-[#9FB3D1]/40 mb-1">{s.label}</div>
                                <div className="text-sm font-bold text-white">{s.val}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Content Sections ── */}
            <section className="py-20">
                <div className="container-opmw max-w-5xl">
                    <div className="space-y-8">
                        {sections.map((sec, i) => (
                            <motion.div
                                key={sec.number}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-40px' }}
                                transition={{ delay: i * 0.05, duration: 0.6 }}
                                className="group flex gap-6 sm:gap-10 p-6 sm:p-8 rounded-3xl border border-white/5 hover:border-white/10 transition-all"
                                style={{ background: 'rgba(255,255,255,0.015)' }}
                            >
                                {/* Number + Icon */}
                                <div className="flex-shrink-0">
                                    <div
                                        className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform"
                                        style={{ background: `${sec.color}12`, border: `1px solid ${sec.color}25` }}
                                    >
                                        <sec.icon size={24} style={{ color: sec.color }} />
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center gap-3 mb-3">
                                        <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: sec.color }}>{sec.number}</span>
                                        <h2 className="text-lg sm:text-xl font-display font-bold text-white">{sec.title}</h2>
                                    </div>
                                    <p className="text-sm text-[#9FB3D1] leading-relaxed mb-4">{sec.content}</p>
                                    {sec.bullets && (
                                        <div className="grid sm:grid-cols-2 gap-2">
                                            {sec.bullets.map(b => (
                                                <div key={b} className="flex items-center gap-2">
                                                    <CheckCircle2 size={14} style={{ color: sec.color }} className="flex-shrink-0" />
                                                    <span className="text-xs text-[#9FB3D1]">{b}</span>
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

            {/* ── Visual Banner ── */}
            <section className="py-16 relative overflow-hidden">
                <div className="absolute inset-0 opacity-15">
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: 'url(/assets/bpo_hero.png)' }}
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-[#03142A] via-[#03142A]/90 to-[#03142A]" />
                <div className="container-opmw relative z-10">
                    <div className="max-w-3xl">
                        <div className="flex items-center gap-3 mb-4">
                            <Lock size={18} className="text-[#2F80ED]" />
                            <span className="text-xs font-bold uppercase tracking-widest text-[#2F80ED]">Safe and Secure Systems</span>
                        </div>
                        <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-3">
                            Your data is protected under international standards.
                        </h3>
                        <p className="text-[#9FB3D1] text-sm max-w-xl">
                            OPMW follows GDPR, DPDP Act, and internal security protocols. All client data is encrypted at rest and in transit.
                        </p>
                    </div>
                </div>
            </section>

            {/* ── Footer CTA ── */}
            <section className="py-20">
                <div className="container-opmw max-w-5xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center p-10 md:p-16 rounded-[2rem] relative overflow-hidden"
                        style={{ background: 'linear-gradient(135deg, #071C36 0%, #0D0A1E 100%)', border: '1px solid rgba(47,128,237,0.15)' }}
                    >
                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(47,128,237,0.07)_0%,transparent_70%)]" />
                        <div className="relative z-10">
                            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#2F80ED] mb-4">Version 4.2 · March 2026</p>
                            <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">Have a Legal Question?</h3>
                            <p className="text-[#9FB3D1] text-sm max-w-md mx-auto mb-8">
                                Our team can walk you through the details. Reach out for compliance inquiries or contract reviews.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-bold text-sm text-white transition-all hover:shadow-lg"
                                    style={{ background: 'linear-gradient(135deg, #2F80ED, #7C3AED)' }}>
                                    Contact Legal Team <ArrowRight size={16} />
                                </Link>
                                <Link to="/privacy" className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-bold text-sm transition-all"
                                    style={{ border: '1px solid rgba(255,255,255,0.1)', color: '#9FB3D1' }}>
                                    Privacy Policy
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </main>
    )
}
