import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2, BarChart3, Users2, Clock, Lock, CreditCard, Briefcase, Star } from 'lucide-react'
import StarfieldBackground from '@/animations/StarfieldBackground'

const features = [
    {
        icon: Users2,
        title: 'Workforce Management',
        description: 'Complete employee lifecycle from onboarding to exit. Profiles, org charts, documents, and compliance in one place.',
        color: '#7C3AED',
    },
    {
        icon: Clock,
        title: 'Attendance & Leave',
        description: 'Geo-fenced, biometric, and mobile attendance with intelligent leave management and policy automation.',
        color: '#9F6EFF',
    },
    {
        icon: CreditCard,
        title: 'Payroll Engine',
        description: 'Multi-jurisdiction payroll with automatic tax calculations, compliance, and same-day disbursement capabilities.',
        color: '#7C3AED',
    },
    {
        icon: Star,
        title: 'Performance Management',
        description: 'OKR tracking, 360° feedback, review cycles, and performance analytics to drive accountability.',
        color: '#9F6EFF',
    },
    {
        icon: Briefcase,
        title: 'Recruitment Pipeline',
        description: 'AI-powered candidate sourcing, resume parsing, interview scheduling, and offer management — all integrated.',
        color: '#7C3AED',
    },
    {
        icon: BarChart3,
        title: 'Advanced Analytics',
        description: 'Real-time workforce dashboards, predictive attrition, headcount planning, and custom report builder.',
        color: '#9F6EFF',
    },
    {
        icon: Lock,
        title: 'Security & Compliance',
        description: 'SOC 2 Type II, GDPR, ISO 27001. Role-based access, SSO, MFA, and full audit trails.',
        color: '#7C3AED',
    },
    {
        icon: ArrowRight,
        title: 'Integrations & API',
        description: '100+ pre-built integrations: Salesforce, SAP, Slack, Microsoft 365, Jira, and a full REST API.',
        color: '#9F6EFF',
    },
]

const plans = [
    {
        name: 'Growth',
        price: '₹149',
        unit: 'per employee/month',
        description: 'For growing companies scaling from 50 to 500 employees.',
        features: ['Attendance & Leave', 'Payroll Processing', 'Basic Reports', 'Employee Self-Service', 'Email Support'],
        cta: 'Get Started',
        featured: false,
    },
    {
        name: 'Enterprise',
        price: 'Custom',
        unit: 'tailored pricing',
        description: 'For large enterprises with complex multi-entity operations.',
        features: ['All Growth features', 'Advanced Analytics', 'Custom Workflows', 'AI Recruitment', 'Dedicated CSM', 'SLA Guarantee', 'On-Premise option'],
        cta: 'Request Demo',
        featured: true,
    },
    {
        name: 'Scale',
        price: '₹249',
        unit: 'per employee/month',
        description: 'For mid-market companies needing full workforce intelligence.',
        features: ['All Growth features', 'Performance Management', 'Recruitment Pipeline', 'API Access', 'Priority Support'],
        cta: 'Get Started',
        featured: false,
    },
]

export default function HRMSPage() {
    const [demoForm, setDemoForm] = useState({ name: '', email: '', company: '', employees: '', message: '' })
    const [submitted, setSubmitted] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        setSubmitted(true)
    }

    return (
        <div className="pt-16">
            {/* Hero */}
            <section
                className="relative min-h-[65vh] flex items-center overflow-hidden"
                style={{ background: 'linear-gradient(160deg, #0B0B0F 0%, #0D0718 40%, #150D2E 70%, #0B0B0F 100%)' }}
            >
                <StarfieldBackground />
                <div
                    className="absolute inset-0 pointer-events-none"
                    style={{ background: 'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(92,47,191,0.18) 0%, transparent 80%)' }}
                />
                <div className="container-opmw relative z-10 py-28 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="section-label mx-auto mb-6"
                    >
                        HRMS SaaS Platform
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="font-display font-bold mb-5"
                        style={{ fontSize: 'clamp(2.2rem, 5vw, 4.5rem)', color: '#F0F0F5' }}
                    >
                        Your Entire Workforce.
                        <br />
                        <span className="text-gradient">One Platform.</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="max-w-2xl mx-auto text-lg mb-10"
                        style={{ color: '#7A7A8A' }}
                    >
                        OPMW HRMS brings together attendance, payroll, performance, and recruitment in a single enterprise-grade SaaS platform — built to eliminate HR complexity at scale.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="flex gap-4 justify-center"
                    >
                        <a href="#demo" className="btn-primary">
                            Request Demo <ArrowRight size={15} />
                        </a>
                        <Link to="/contact" className="btn-secondary">
                            Talk to Sales
                        </Link>
                    </motion.div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-32" style={{ background: 'linear-gradient(to top, #0B0B0F, transparent)' }} />
            </section>

            {/* Feature Grid */}
            <section className="section-pad" style={{ background: '#0B0B0F' }}>
                <div className="container-opmw">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-14"
                    >
                        <div className="section-label mx-auto mb-5">Platform Capabilities</div>
                        <h2
                            className="font-display font-bold"
                            style={{ fontSize: 'clamp(1.75rem, 3.5vw, 3rem)', color: '#F0F0F5' }}
                        >
                            Everything HR. One Platform.
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {features.map((feat, i) => {
                            const Icon = feat.icon
                            return (
                                <motion.div
                                    key={feat.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.06 }}
                                    className="glass-card p-6"
                                >
                                    <div
                                        className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                                        style={{ background: 'rgba(124,58,237,0.12)', border: '1px solid rgba(124,58,237,0.2)' }}
                                    >
                                        <Icon size={18} style={{ color: feat.color }} />
                                    </div>
                                    <h3 className="font-semibold text-sm mb-2" style={{ color: '#E0E0E8' }}>{feat.title}</h3>
                                    <p className="text-xs leading-relaxed" style={{ color: '#5A5A6A' }}>{feat.description}</p>
                                </motion.div>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* Dashboard Preview */}
            <section
                className="section-pad relative overflow-hidden"
                style={{ background: 'linear-gradient(180deg, #0B0B0F, #0D0718, #0B0B0F)' }}
            >
                <div className="container-opmw">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <div className="section-label mx-auto mb-5">Product Preview</div>
                        <h2 className="font-display font-bold" style={{ fontSize: 'clamp(1.75rem, 3.5vw, 3rem)', color: '#F0F0F5' }}>
                            Designed for Clarity. Built for Scale.
                        </h2>
                    </motion.div>

                    {/* Full Dashboard Mock */}
                    <motion.div
                        initial={{ opacity: 0, y: 32 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="rounded-2xl overflow-hidden max-w-5xl mx-auto"
                        style={{
                            background: 'rgba(14,14,20,0.95)',
                            border: '1px solid rgba(124,58,237,0.2)',
                            boxShadow: '0 0 80px rgba(124,58,237,0.12), 0 30px 80px rgba(0,0,0,0.6)',
                        }}
                    >
                        {/* Window chrome */}
                        <div className="flex items-center gap-2 px-5 py-3" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)', background: 'rgba(20,20,30,0.9)' }}>
                            <div className="flex gap-1.5">
                                <div className="w-3 h-3 rounded-full" style={{ background: '#EF4444', opacity: 0.7 }} />
                                <div className="w-3 h-3 rounded-full" style={{ background: '#F59E0B', opacity: 0.7 }} />
                                <div className="w-3 h-3 rounded-full" style={{ background: '#22C55E', opacity: 0.7 }} />
                            </div>
                            <div className="ml-4 text-xs px-4 py-1 rounded" style={{ background: 'rgba(124,58,237,0.10)', color: '#9F6EFF', border: '1px solid rgba(124,58,237,0.15)' }}>
                                OPMW HRMS — Dashboard
                            </div>
                        </div>

                        <div className="flex" style={{ minHeight: '420px' }}>
                            {/* Sidebar */}
                            <div className="w-48 flex-shrink-0 p-4" style={{ borderRight: '1px solid rgba(255,255,255,0.05)', background: 'rgba(11,11,15,0.8)' }}>
                                <div className="space-y-1">
                                    {['Dashboard', 'Employees', 'Attendance', 'Payroll', 'Performance', 'Recruitment', 'Analytics', 'Settings'].map((item, i) => (
                                        <div
                                            key={item}
                                            className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs cursor-pointer transition-colors"
                                            style={{
                                                background: i === 0 ? 'rgba(124,58,237,0.15)' : 'transparent',
                                                color: i === 0 ? '#9F6EFF' : '#5A5A6A',
                                                border: i === 0 ? '1px solid rgba(124,58,237,0.2)' : '1px solid transparent',
                                            }}
                                        >
                                            <div className="w-1.5 h-1.5 rounded-full" style={{ background: i === 0 ? '#7C3AED' : '#3A3A4E' }} />
                                            {item}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Main panel */}
                            <div className="flex-1 p-6">
                                <div className="grid grid-cols-4 gap-3 mb-6">
                                    {[
                                        { label: 'Total Employees', val: '1,247', icon: '👥' },
                                        { label: 'On Leave Today', val: '34', icon: '🌴' },
                                        { label: 'Pending Payroll', val: '₹2.4M', icon: '💳' },
                                        { label: 'Open Roles', val: '12', icon: '📋' },
                                    ].map(m => (
                                        <div key={m.label} className="p-4 rounded-xl" style={{ background: 'rgba(124,58,237,0.06)', border: '1px solid rgba(124,58,237,0.10)' }}>
                                            <div className="text-base mb-1">{m.icon}</div>
                                            <div className="font-display font-bold text-xl" style={{ color: '#F0F0F5' }}>{m.val}</div>
                                            <div className="text-[10px]" style={{ color: '#5A5A6A' }}>{m.label}</div>
                                        </div>
                                    ))}
                                </div>

                                {/* Chart area */}
                                <div className="rounded-xl p-4 mb-4" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
                                    <div className="text-xs font-semibold mb-3" style={{ color: '#5A5A6A' }}>Headcount Trend (12mo)</div>
                                    <div className="flex items-end gap-1.5 h-20">
                                        {[820, 860, 890, 920, 950, 980, 1010, 1060, 1100, 1150, 1200, 1247].map((v, i) => (
                                            <motion.div
                                                key={i}
                                                initial={{ height: 0 }}
                                                whileInView={{ height: `${((v - 800) / 500) * 100}%` }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.6, delay: i * 0.04 }}
                                                className="flex-1 rounded-t-sm"
                                                style={{ background: i === 11 ? 'linear-gradient(to top, #5B2FBF, #9F6EFF)' : 'rgba(124,58,237,0.2)' }}
                                            />
                                        ))}
                                    </div>
                                </div>

                                {/* Recent activity */}
                                <div className="space-y-2">
                                    {[
                                        { action: 'Payroll processed', detail: 'March 2025 — 1,247 employees', time: '2h ago', dot: '#22C55E' },
                                        { action: 'New hire onboarded', detail: 'Priya Sharma — Engineering', time: '5h ago', dot: '#9F6EFF' },
                                        { action: 'Leave approved', detail: 'Raj Kumar — 3 days', time: '1d ago', dot: '#F59E0B' },
                                    ].map(a => (
                                        <div key={a.action} className="flex items-center justify-between px-4 py-3 rounded-xl" style={{ background: 'rgba(255,255,255,0.02)' }}>
                                            <div className="flex items-center gap-3">
                                                <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: a.dot }} />
                                                <div>
                                                    <div className="text-xs font-medium" style={{ color: '#C0C0CC' }}>{a.action}</div>
                                                    <div className="text-[10px]" style={{ color: '#5A5A6A' }}>{a.detail}</div>
                                                </div>
                                            </div>
                                            <div className="text-[10px]" style={{ color: '#3A3A4E' }}>{a.time}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Pricing */}
            <section className="section-pad" style={{ background: '#0B0B0F' }}>
                <div className="container-opmw">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-14"
                    >
                        <div className="section-label mx-auto mb-5">Pricing</div>
                        <h2 className="font-display font-bold" style={{ fontSize: 'clamp(1.75rem, 3.5vw, 3rem)', color: '#F0F0F5' }}>
                            Transparent. Scalable. Fair.
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
                        {plans.map((plan, i) => (
                            <motion.div
                                key={plan.name}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="relative rounded-2xl p-7"
                                style={{
                                    background: plan.featured
                                        ? 'linear-gradient(135deg, rgba(45,23,96,0.7) 0%, rgba(30,16,64,0.8) 100%)'
                                        : 'rgba(255,255,255,0.02)',
                                    border: plan.featured
                                        ? '1px solid rgba(196,167,255,0.25)'
                                        : '1px solid rgba(255,255,255,0.07)',
                                    boxShadow: plan.featured ? '0 0 40px rgba(124,58,237,0.15)' : 'none',
                                }}
                            >
                                {plan.featured && (
                                    <div
                                        className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest"
                                        style={{ background: 'linear-gradient(135deg, #5B2FBF, #7C3AED)', color: '#fff', boxShadow: '0 0 20px rgba(124,58,237,0.4)' }}
                                    >
                                        Most Popular
                                    </div>
                                )}
                                <div className="mb-2 text-sm font-semibold" style={{ color: '#9F6EFF' }}>{plan.name}</div>
                                <div className="font-display font-bold mb-1" style={{ fontSize: '2rem', color: '#F0F0F5' }}>{plan.price}</div>
                                <div className="text-xs mb-3" style={{ color: '#5A5A6A' }}>{plan.unit}</div>
                                <p className="text-sm mb-6" style={{ color: '#7A7A8A' }}>{plan.description}</p>
                                <ul className="space-y-2.5 mb-8">
                                    {plan.features.map(f => (
                                        <li key={f} className="flex items-center gap-2.5">
                                            <CheckCircle2 size={13} style={{ color: '#7C3AED', flexShrink: 0 }} />
                                            <span className="text-sm" style={{ color: '#9A9AAA' }}>{f}</span>
                                        </li>
                                    ))}
                                </ul>
                                <a
                                    href="#demo"
                                    className={plan.featured ? 'btn-primary w-full justify-center' : 'btn-secondary w-full justify-center'}
                                >
                                    {plan.cta} <ArrowRight size={14} />
                                </a>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Demo Form */}
            <section id="demo" className="section-pad" style={{ background: 'linear-gradient(180deg, #0B0B0F, #0D0718)' }}>
                <div className="container-opmw max-w-2xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-10"
                    >
                        <div className="section-label mx-auto mb-5">Request a Demo</div>
                        <h2 className="font-display font-bold" style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', color: '#F0F0F5' }}>
                            See HRMS in Action
                        </h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="glass-card p-8"
                    >
                        {submitted ? (
                            <div className="text-center py-8">
                                <div className="text-4xl mb-4">✅</div>
                                <h3 className="font-display font-bold text-xl mb-2" style={{ color: '#F0F0F5' }}>Demo Requested!</h3>
                                <p style={{ color: '#7A7A8A' }}>Our team will reach out within 24 hours to schedule your personalized demo.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                    {[
                                        { label: 'Full Name', key: 'name', type: 'text', placeholder: 'Emma Johnson' },
                                        { label: 'Work Email', key: 'email', type: 'email', placeholder: 'emma@company.com' },
                                    ].map(f => (
                                        <div key={f.key}>
                                            <label className="block text-xs font-semibold mb-2" style={{ color: '#A0A0B0' }}>{f.label}</label>
                                            <input
                                                type={f.type}
                                                required
                                                placeholder={f.placeholder}
                                                value={demoForm[f.key]}
                                                onChange={e => setDemoForm({ ...demoForm, [f.key]: e.target.value })}
                                                className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200"
                                                style={{
                                                    background: 'rgba(255,255,255,0.04)',
                                                    border: '1px solid rgba(255,255,255,0.08)',
                                                    color: '#F0F0F5',
                                                }}
                                                onFocus={e => e.target.style.borderColor = 'rgba(124,58,237,0.4)'}
                                                onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.08)'}
                                            />
                                        </div>
                                    ))}
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                    <div>
                                        <label className="block text-xs font-semibold mb-2" style={{ color: '#A0A0B0' }}>Company</label>
                                        <input
                                            type="text"
                                            required
                                            placeholder="Acme Corp"
                                            value={demoForm.company}
                                            onChange={e => setDemoForm({ ...demoForm, company: e.target.value })}
                                            className="w-full px-4 py-3 rounded-xl text-sm outline-none"
                                            style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', color: '#F0F0F5' }}
                                            onFocus={e => e.target.style.borderColor = 'rgba(124,58,237,0.4)'}
                                            onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.08)'}
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-semibold mb-2" style={{ color: '#A0A0B0' }}>Team Size</label>
                                        <select
                                            value={demoForm.employees}
                                            onChange={e => setDemoForm({ ...demoForm, employees: e.target.value })}
                                            className="w-full px-4 py-3 rounded-xl text-sm outline-none"
                                            style={{ background: 'rgba(11,11,15,0.9)', border: '1px solid rgba(255,255,255,0.08)', color: '#F0F0F5' }}
                                        >
                                            <option value="">Select range</option>
                                            <option>50–200</option>
                                            <option>200–1,000</option>
                                            <option>1,000–5,000</option>
                                            <option>5,000+</option>
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-xs font-semibold mb-2" style={{ color: '#A0A0B0' }}>Message (Optional)</label>
                                    <textarea
                                        rows={3}
                                        placeholder="Tell us about your HR challenges..."
                                        value={demoForm.message}
                                        onChange={e => setDemoForm({ ...demoForm, message: e.target.value })}
                                        className="w-full px-4 py-3 rounded-xl text-sm outline-none resize-none"
                                        style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', color: '#F0F0F5' }}
                                        onFocus={e => e.target.style.borderColor = 'rgba(124,58,237,0.4)'}
                                        onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.08)'}
                                    />
                                </div>

                                <button type="submit" className="btn-primary w-full justify-center py-3.5">
                                    Request My Demo <ArrowRight size={15} />
                                </button>
                            </form>
                        )}
                    </motion.div>
                </div>
            </section>
        </div>
    )
}
