import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2, BarChart3, Users2, Clock, Lock } from 'lucide-react'

const features = [
    { icon: Users2, label: 'Workforce Management', desc: 'Full employee lifecycle from hire to retire' },
    { icon: BarChart3, label: 'Advanced Analytics', desc: 'Real-time dashboards and predictive insights' },
    { icon: Clock, label: 'Attendance & Leave', desc: 'Geo-fenced attendance with biometric support' },
    { icon: Lock, label: 'Role-Based Access', desc: 'Granular permissions with SSO & MFA' },
]

const benefits = [
    'Automated payroll with multi-jurisdiction tax compliance',
    'AI-powered recruitment pipeline and candidate scoring',
    'Performance review cycles with 360° feedback',
    'Native mobile apps for iOS and Android',
    'Open API with 100+ pre-built integrations',
]

export default function HRMSShowcaseSection() {
    return (
        <section
            className="section-pad relative overflow-hidden"
            aria-label="HRMS Platform showcase"
        >
            {/* Background */}
            <div
                className="absolute inset-0"
                style={{
                    background: 'linear-gradient(160deg, #0B0B0F 0%, #0D0718 50%, #0B0B0F 100%)',
                }}
            />
            {/* Glow */}
            <div
                className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
                style={{
                    background: 'radial-gradient(circle, rgba(124,58,237,0.12) 0%, transparent 70%)',
                }}
            />

            <div className="container-opmw relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left — Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -32 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-100px' }}
                        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <div className="section-label mb-6">Flagship SaaS Product</div>
                        <h2
                            className="font-display font-bold mb-5 leading-tight"
                            style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', color: '#F0F0F5' }}
                        >
                            HRMS Platform —
                            <br />
                            <span className="text-gradient">Workforce Unified.</span>
                        </h2>
                        <p className="text-base leading-relaxed mb-8" style={{ color: '#7A7A8A' }}>
                            One enterprise-grade platform to manage your entire workforce — attendance, payroll, performance, recruitment, and deep analytics — engineered for scale and compliance.
                        </p>

                        {/* Benefits list */}
                        <ul className="space-y-3 mb-10">
                            {benefits.map(b => (
                                <li key={b} className="flex items-start gap-3">
                                    <CheckCircle2 size={16} className="mt-0.5 flex-shrink-0" style={{ color: '#7C3AED' }} />
                                    <span className="text-sm" style={{ color: '#9A9AAA' }}>{b}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="flex gap-3">
                            <Link to="/hrms" className="btn-primary">
                                Explore HRMS <ArrowRight size={15} />
                            </Link>
                            <Link to="/contact" className="btn-secondary">
                                Request Demo
                            </Link>
                        </div>
                    </motion.div>

                    {/* Right — Dashboard Preview */}
                    <motion.div
                        initial={{ opacity: 0, x: 32 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-100px' }}
                        transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                        className="relative"
                    >
                        {/* Mock Dashboard */}
                        <div
                            className="rounded-2xl overflow-hidden relative"
                            style={{
                                background: 'rgba(14, 14, 20, 0.90)',
                                border: '1px solid rgba(124,58,237,0.2)',
                                boxShadow: '0 0 60px rgba(124,58,237,0.15), 0 20px 60px rgba(0,0,0,0.5)',
                            }}
                        >
                            {/* Window bar */}
                            <div
                                className="flex items-center gap-2 px-5 py-3.5"
                                style={{ borderBottom: '1px solid rgba(255,255,255,0.06)', background: 'rgba(20,20,30,0.8)' }}
                            >
                                <div className="w-3 h-3 rounded-full bg-red-500 opacity-70" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500 opacity-70" />
                                <div className="w-3 h-3 rounded-full bg-green-500 opacity-70" />
                                <div
                                    className="ml-4 text-xs px-4 py-1 rounded"
                                    style={{
                                        background: 'rgba(124,58,237,0.12)',
                                        color: '#9F6EFF',
                                        border: '1px solid rgba(124,58,237,0.2)',
                                    }}
                                >
                                    app.opmw.io/hrms/dashboard
                                </div>
                            </div>

                            <div className="p-6 space-y-4">
                                {/* Top metrics row */}
                                <div className="grid grid-cols-3 gap-3">
                                    {[
                                        { label: 'Active Employees', val: '1,247', change: '+3.2%' },
                                        { label: 'Attendance Today', val: '94.6%', change: '+1.1%' },
                                        { label: 'Open Positions', val: '32', change: '-5' },
                                    ].map(m => (
                                        <div
                                            key={m.label}
                                            className="px-4 py-3 rounded-xl"
                                            style={{
                                                background: 'rgba(124,58,237,0.06)',
                                                border: '1px solid rgba(124,58,237,0.12)',
                                            }}
                                        >
                                            <div className="text-xs mb-1" style={{ color: '#5A5A6A' }}>{m.label}</div>
                                            <div className="font-display font-bold text-lg" style={{ color: '#F0F0F5' }}>{m.val}</div>
                                            <div className="text-[11px] font-medium" style={{ color: '#22C55E' }}>{m.change}</div>
                                        </div>
                                    ))}
                                </div>

                                {/* Chart placeholder */}
                                <div
                                    className="rounded-xl p-4 h-28 flex items-end gap-1.5"
                                    style={{
                                        background: 'rgba(124,58,237,0.04)',
                                        border: '1px solid rgba(255,255,255,0.05)',
                                    }}
                                >
                                    {[40, 65, 50, 80, 70, 90, 75, 88, 95, 72, 85, 92].map((h, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ height: 0 }}
                                            whileInView={{ height: `${h}%` }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.8, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                                            className="flex-1 rounded-t-sm"
                                            style={{
                                                background: i === 11
                                                    ? 'linear-gradient(to top, #5B2FBF, #9F6EFF)'
                                                    : 'rgba(124,58,237,0.25)',
                                                minHeight: '4px',
                                            }}
                                        />
                                    ))}
                                </div>

                                {/* Features grid */}
                                <div className="grid grid-cols-2 gap-2">
                                    {features.map(({ icon: Icon, label, desc }) => (
                                        <div
                                            key={label}
                                            className="flex items-start gap-3 p-3 rounded-xl"
                                            style={{
                                                background: 'rgba(255,255,255,0.02)',
                                                border: '1px solid rgba(255,255,255,0.05)',
                                            }}
                                        >
                                            <div
                                                className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
                                                style={{ background: 'rgba(124,58,237,0.12)' }}
                                            >
                                                <Icon size={13} style={{ color: '#9F6EFF' }} />
                                            </div>
                                            <div>
                                                <div className="text-xs font-semibold leading-tight mb-0.5" style={{ color: '#C0C0CC' }}>{label}</div>
                                                <div className="text-[10px] leading-snug" style={{ color: '#3A3A4E' }}>{desc}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Floating glow badge */}
                        <motion.div
                            animate={{ y: [0, -8, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                            className="absolute -top-4 -right-4 px-4 py-2 rounded-full text-xs font-bold shadow-xl"
                            style={{
                                background: 'linear-gradient(135deg, #3D1F82, #7C3AED)',
                                border: '1px solid rgba(196,167,255,0.3)',
                                color: '#fff',
                                boxShadow: '0 0 24px rgba(124,58,237,0.4)',
                            }}
                        >
                            ✦ Live Dashboard
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
