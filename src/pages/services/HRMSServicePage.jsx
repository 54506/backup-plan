import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
    Users, DollarSign, Calendar, BarChart2, ArrowRight,
    CheckCircle2, Clock, ShieldCheck, Settings, FileText, TrendingUp
} from 'lucide-react'
import StarfieldBackground from '@/animations/StarfieldBackground'

const modules = [
    { icon: DollarSign, title: 'Payroll Automation', desc: 'Automated salary processing, statutory deductions (PF/ESI/TDS), and payslip generation with one click.', color: '#2F80ED' },
    { icon: Clock, title: 'Attendance & Shift Management', desc: 'Biometric integration, shift scheduling, real-time attendance tracking, and OT calculations.', color: '#9F6EFF' },
    { icon: Calendar, title: 'Leave Management', desc: 'Configurable leave policies, approval workflows, and leave balance visibility for managers and employees.', color: '#2F80ED' },
    { icon: BarChart2, title: 'Performance Tracking', desc: 'Goal setting, appraisal cycles, and individual KPI dashboards for data-driven performance reviews.', color: '#9F6EFF' },
    { icon: FileText, title: 'Compliance Reporting', desc: 'Automated reporting for labor law compliance, statutory filings, and audit-ready documentation.', color: '#2F80ED' },
    { icon: ShieldCheck, title: 'Multi-Branch Access Control', desc: 'Role-based access for HQ, branch managers, team leads, and employees — all from one platform.', color: '#9F6EFF' },
]

const reasons = [
    'Built for Indian SMBs and growing enterprises',
    'Configurable without a developer',
    'Cloud-based, works on any device',
    'Data export to Excel, PDF, and more',
    'Dedicated onboarding support',
    'Free trial available for new customers',
]

const pricing = [
    { plan: 'Starter', price: '₹299', desc: 'Up to 25 employees', features: ['Payroll', 'Attendance', 'Leave'] },
    { plan: 'Growth', price: '₹599', desc: 'Up to 100 employees', features: ['Everything in Starter', 'Performance', 'Compliance Reports', 'Multi-branch'], highlight: true },
    { plan: 'Enterprise', price: 'Custom', desc: 'Unlimited employees', features: ['Everything in Growth', 'Dedicated support', 'Custom integrations', 'On-premise option'] },
]

export default function HRMSServicePage() {
    return (
        <main className="bg-[#03142A] text-[#E6EDF7] min-h-screen overflow-x-hidden">
            <StarfieldBackground className="opacity-30" />

            {/* ── Hero ── */}
            <section className="relative min-h-[90vh] flex items-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/assets/hrms_hero.png"
                        alt="HRMS Dashboard"
                        className="w-full h-full object-cover opacity-25"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#03142A] via-[#03142A]/80 to-[#03142A]/40" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#03142A] via-transparent to-transparent" />
                </div>

                <motion.div
                    animate={{ x: [0, 20, 0], y: [0, -30, 0] }}
                    transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute top-32 right-[15%] w-80 h-80 bg-[#9F6EFF]/10 rounded-full blur-3xl pointer-events-none"
                />

                <div className="container-opmw relative z-10 pt-28 pb-20">
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-3xl"
                    >
                        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-[#9F6EFF]/30 bg-[#9F6EFF]/5 mb-6">
                            <Users size={14} className="text-[#9F6EFF]" />
                            <span className="text-xs font-bold tracking-[0.3em] uppercase text-[#9F6EFF]">OPMW HRMS — Proprietary Product</span>
                        </div>

                        <h1 className="text-4xl sm:text-5xl md:text-7xl font-display font-bold mb-6 leading-[1.05]">
                            HR Simplified.<br />
                            <span className="bg-gradient-to-r from-[#9F6EFF] via-[#7C3AED] to-[#2F80ED] bg-clip-text text-transparent">Built for Growth.</span>
                        </h1>

                        <p className="text-lg md:text-xl text-[#9FB3D1] max-w-2xl leading-relaxed mb-10">
                            OPMW HRMS was developed from real operational challenges. It's built for growing businesses that require visibility without expensive enterprise software.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <Link to="/contact" className="btn-primary px-8 py-4 text-base rounded-2xl">
                                Book a Demo <ArrowRight size={18} />
                            </Link>
                            <Link to="/hrms" className="btn-secondary px-8 py-4 text-base rounded-2xl">
                                Explore Features
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ── Key Modules ── */}
            <section className="section-pad">
                <div className="container-opmw">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <div className="section-label mx-auto mb-4">Core Modules</div>
                        <h2 className="text-3xl md:text-5xl font-display font-bold text-white">
                            Everything Your HR Team Needs
                        </h2>
                    </motion.div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {modules.map((mod, i) => (
                            <motion.div
                                key={mod.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.08 }}
                                whileHover={{ y: -6 }}
                                className="p-8 rounded-3xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all group"
                                style={{ '--hover-color': mod.color }}
                            >
                                <div
                                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"
                                    style={{ background: `${mod.color}15`, border: `1px solid ${mod.color}30` }}
                                >
                                    <mod.icon size={24} style={{ color: mod.color }} />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">{mod.title}</h3>
                                <p className="text-sm text-[#9FB3D1] leading-relaxed">{mod.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Visual + Reasons ── */}
            <section className="section-pad bg-white/[0.015] border-y border-white/5">
                <div className="container-opmw">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="section-label mb-6">Why Choose OPMW HRMS</div>
                            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
                                Built from Real Operations, Not Theory
                            </h2>
                            <p className="text-[#9FB3D1] text-lg leading-relaxed mb-8">
                                Most HRMS tools are overbuilt for complex enterprises or too basic for growing companies. We built OPMW HRMS for the gap in between.
                            </p>
                            <ul className="space-y-4">
                                {reasons.map(item => (
                                    <li key={item} className="flex items-center gap-3 text-[#9FB3D1]">
                                        <CheckCircle2 size={18} className="text-[#9F6EFF] shrink-0" />
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
                                <img src="/assets/hrms_hero.png" alt="HRMS Dashboard" className="w-full object-cover" />
                            </div>
                            <motion.div
                                animate={{ y: [0, -8, 0] }}
                                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
                                className="absolute -bottom-6 -right-6 p-5 bg-[#081E3A] border border-[#9F6EFF]/30 rounded-2xl shadow-xl"
                            >
                                <div className="flex items-center gap-3">
                                    <TrendingUp size={20} className="text-[#9F6EFF]" />
                                    <div>
                                        <div className="text-2xl font-bold text-white">40%</div>
                                        <div className="text-[10px] text-[#9F6EFF] uppercase tracking-widest font-bold">HR time saved</div>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ── Pricing ── */}
            <section className="section-pad">
                <div className="container-opmw">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <div className="section-label mx-auto mb-4">Pricing</div>
                        <h2 className="text-3xl md:text-5xl font-display font-bold text-white">
                            Simple, Transparent Pricing
                        </h2>
                        <p className="text-[#9FB3D1] mt-4 text-lg">Per employee / per month. No hidden fees.</p>
                    </motion.div>

                    <div className="grid sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        {pricing.map((plan, i) => (
                            <motion.div
                                key={plan.plan}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                whileHover={{ y: -8 }}
                                className="relative p-8 rounded-3xl transition-all"
                                style={plan.highlight
                                    ? { background: 'linear-gradient(135deg, rgba(159,110,255,0.15) 0%, rgba(47,128,237,0.1) 100%)', border: '1px solid rgba(159,110,255,0.4)' }
                                    : { background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.07)' }
                                }
                            >
                                {plan.highlight && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest text-white"
                                        style={{ background: 'linear-gradient(90deg, #7C3AED, #2F80ED)' }}>
                                        Most Popular
                                    </div>
                                )}
                                <div className="text-sm font-bold uppercase tracking-widest text-[#9FB3D1] mb-4">{plan.plan}</div>
                                <div className="text-4xl font-display font-bold text-white mb-1">{plan.price}</div>
                                <div className="text-xs text-[#9FB3D1]/60 mb-8">{plan.desc}</div>
                                <ul className="space-y-3 mb-8">
                                    {plan.features.map(f => (
                                        <li key={f} className="flex items-center gap-2.5 text-sm text-[#9FB3D1]">
                                            <CheckCircle2 size={15} className="text-[#9F6EFF] shrink-0" />
                                            {f}
                                        </li>
                                    ))}
                                </ul>
                                <Link to="/contact"
                                    className="block text-center py-3 rounded-xl font-bold text-sm transition-all"
                                    style={plan.highlight
                                        ? { background: 'linear-gradient(90deg, #7C3AED, #2F80ED)', color: 'white' }
                                        : { border: '1px solid rgba(255,255,255,0.15)', color: '#E6EDF7' }
                                    }
                                >
                                    {plan.price === 'Custom' ? 'Contact Us' : 'Get Started'}
                                </Link>
                            </motion.div>
                        ))}
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
                        style={{ background: 'linear-gradient(135deg, #0A0A1A 0%, #071C36 100%)', border: '1px solid rgba(159,110,255,0.2)' }}
                    >
                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(159,110,255,0.08)_0%,transparent_70%)]" />
                        <div className="relative z-10">
                            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
                                See OPMW HRMS in Action
                            </h2>
                            <p className="text-[#9FB3D1] text-lg max-w-xl mx-auto mb-8">
                                Book a free 30-minute live demo with our team and see how OPMW HRMS fits your business.
                            </p>
                            <Link to="/contact" className="btn-primary px-10 py-4 text-base rounded-2xl">
                                Book Free Demo <ArrowRight size={18} />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </main>
    )
}
