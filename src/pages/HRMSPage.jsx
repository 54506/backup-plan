import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2, BarChart3, Users2, Clock, Lock, CreditCard, Briefcase, Star, Loader2 } from 'lucide-react'
import StarfieldBackground from '@/animations/StarfieldBackground'
import api from '@/lib/api'

const features = [
    {
        icon: Users2,
        title: 'Workforce Management',
        description: 'Complete employee lifecycle from onboarding to exit. Profiles, org charts, documents, and compliance in one place.',
        color: '#1E5FAF',
    },
    {
        icon: Clock,
        title: 'Attendance & Leave',
        description: 'Geo-fenced, biometric, and mobile attendance with intelligent leave management and policy automation.',
        color: '#2F80ED',
    },
    {
        icon: CreditCard,
        title: 'Payroll Engine',
        description: 'Multi-jurisdiction payroll with automatic tax calculations, compliance, and same-day disbursement capabilities.',
        color: '#1E5FAF',
    },
    {
        icon: Star,
        title: 'Performance Management',
        description: 'OKR tracking, 360° feedback, review cycles, and performance analytics to drive accountability.',
        color: '#2F80ED',
    },
    {
        icon: Briefcase,
        title: 'Recruitment Pipeline',
        description: 'AI-powered candidate sourcing, resume parsing, interview scheduling, and offer management — all integrated.',
        color: '#1E5FAF',
    },
    {
        icon: BarChart3,
        title: 'Advanced Analytics',
        description: 'Real-time workforce dashboards, predictive attrition, headcount planning, and custom report builder.',
        color: '#2F80ED',
    },
    {
        icon: Lock,
        title: 'Security & Compliance',
        description: 'SOC 2 Type II, GDPR, ISO 27001. Role-based access, SSO, MFA, and full audit trails.',
        color: '#1E5FAF',
    },
    {
        icon: ArrowRight,
        title: 'Integrations & API',
        description: '100+ pre-built integrations: Salesforce, SAP, Slack, Microsoft 365, Jira, and a full REST API.',
        color: '#2F80ED',
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
    const [submitting, setSubmitting] = useState(false)
    const [submitted, setSubmitted] = useState(false)
    const [error, setError] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        setSubmitting(true)
        setError('')
        try {
            await api.post('/hrms/demo', demoForm)
            setSubmitted(true)
        } catch (err) {
            setError(err.response?.data?.message || 'Failed to request demo.')
        } finally {
            setSubmitting(false)
        }
    }

    return (
        <main className="pt-16">
            {/* Hero */}
            <section className="relative min-h-[75vh] flex items-center overflow-hidden bg-[#03142A]">
                <StarfieldBackground />
                <div className="container-opmw relative z-10 py-20">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <header className="text-left">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="section-label mb-6"
                            >
                                HR Management Software
                            </motion.div>
                            <motion.h1
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="font-display font-bold mb-6 leading-[1.1]"
                                style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', color: '#F0F0F5' }}
                            >
                                Your Entire Team.
                                <br />
                                <span className="text-gradient">In One Place.</span>
                            </motion.h1>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="text-xl text-[#9FB3D1] max-w-xl leading-relaxed mb-10"
                            >
                                OPMW makes it easy to manage attendance, payroll, and hiring in one simple software. We help you run your office without the stress.
                            </motion.p>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="flex flex-wrap gap-4"
                            >
                                <a href="#demo" className="btn-primary py-4 px-10">
                                    Request Demo <ArrowRight size={18} />
                                </a>
                                <Link to="/contact" className="btn-secondary py-4 px-10">
                                    Talk to Sales
                                </Link>
                            </motion.div>
                        </header>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, x: 40 }}
                            animate={{ opacity: 1, scale: 1, x: 0 }}
                            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                            className="relative mt-12 lg:mt-0"
                        >
                            <figure className="relative z-10 rounded-[2.5rem] overflow-hidden border border-white/10 shadow-[0_0_100px_rgba(47,128,237,0.15)] m-0">
                                <img
                                    src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=1200"
                                    alt="Workforce Analytics"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-tr from-[#03142A]/40 to-transparent" />
                            </figure>
                            <div className="absolute -top-10 -right-10 w-64 h-64 bg-[#2F80ED]/10 blur-[100px] rounded-full" />
                        </motion.div>
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-32" style={{ background: 'linear-gradient(to top, #03142A, transparent)' }} />
            </section>

            {/* Feature Grid */}
            <section className="section-pad relative overflow-hidden bg-[#03142A]">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#7C3AED]/30 to-transparent z-10" />

                <div className="container-opmw">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-14"
                    >
                        <div className="section-label mx-auto mb-5">What It Can Do</div>
                        <h2
                            className="font-display font-bold"
                            style={{ fontSize: 'clamp(1.75rem, 3.5vw, 3rem)', color: '#F0F0F5' }}
                        >
                            Everything About Your Team. One Place.
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {features.map((feat, i) => {
                            const Icon = feat.icon
                            return (
                                <motion.article
                                    key={feat.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.06 }}
                                    className="glass-card p-6"
                                >
                                    <div
                                        className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                                        style={{ background: 'rgba(47,128,237,0.12)', border: '1px solid rgba(47,128,237,0.2)' }}
                                    >
                                        <Icon size={18} style={{ color: feat.color }} />
                                    </div>
                                    <h3 className="font-semibold text-sm mb-2" style={{ color: '#E0E0E8' }}>{feat.title}</h3>
                                    <p className="text-xs leading-relaxed" style={{ color: '#5A5A6A' }}>{feat.description}</p>
                                </motion.article>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* Dashboard Preview */}
            <section className="section-pad relative overflow-hidden bg-[#03142A]">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#7C3AED]/30 to-transparent z-10" />

                <div className="container-opmw">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <div className="section-label mx-auto mb-5">How It Looks</div>
                        <h2 className="font-display font-bold" style={{ fontSize: 'clamp(1.75rem, 3.5vw, 3rem)', color: '#F0F0F5' }}>
                            Easy to Use. Built to Grow.
                        </h2>
                    </motion.div>

                    {/* Full Dashboard Mock */}
                    <motion.figure
                        initial={{ opacity: 0, y: 32 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="rounded-2xl overflow-hidden max-w-5xl mx-auto"
                        style={{
                            background: '#0D2A4D',
                            border: '1px solid rgba(47,128,237,0.2)',
                            boxShadow: '0 0 80px rgba(47,128,237,0.12), 0 30px 80px rgba(0,0,0,0.6)',
                        }}
                    >
                        {/* Window chrome */}
                        <div className="flex items-center gap-2 px-5 py-3" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)', background: '#0D2A4D' }}>
                            <div className="flex gap-1.5">
                                <div className="w-3 h-3 rounded-full" style={{ background: '#EF4444', opacity: 0.7 }} />
                                <div className="w-3 h-3 rounded-full" style={{ background: '#F59E0B', opacity: 0.7 }} />
                                <div className="w-3 h-3 rounded-full" style={{ background: '#22C55E', opacity: 0.7 }} />
                            </div>
                            <div className="ml-4 text-xs px-4 py-1 rounded" style={{ background: 'rgba(47,128,237,0.10)', color: '#2F80ED', border: '1px solid rgba(47,128,237,0.15)' }}>
                                OPMW HRMS — Dashboard
                            </div>
                        </div>

                        <div className="flex flex-col lg:flex-row" style={{ minHeight: '420px' }}>
                            {/* Sidebar - Hidden on mobile and tablet */}
                            <nav
                                className="hrms-sidebar lg:block w-48 flex-shrink-0 p-4"
                                aria-label="Dashboard Mock Navigation"
                                style={{
                                    borderRight: '1px solid rgba(255,255,255,0.05)',
                                    background: '#0D2A4D'
                                }}
                            >
                                <div className="space-y-1">
                                    {['Dashboard', 'Employees', 'Attendance', 'Payroll', 'Performance', 'Recruitment', 'Analytics', 'Settings'].map((item, i) => (
                                        <div
                                            key={item}
                                            className="flex items-center gap-2 px-3 py-2 rounded-lg text-[10px] cursor-pointer transition-colors"
                                            style={{
                                                background: i === 0 ? 'rgba(47,128,237,0.15)' : 'transparent',
                                                color: i === 0 ? '#2F80ED' : '#5A5A6A',
                                                border: i === 0 ? '1px solid rgba(47,128,237,0.2)' : '1px solid transparent',
                                            }}
                                        >
                                            <div className="w-1.5 h-1.5 rounded-full" style={{ background: i === 0 ? '#1E5FAF' : '#3A3A4E' }} />
                                            {item}
                                        </div>
                                    ))}
                                </div>
                            </nav>

                            {/* Main panel */}
                            <div className="flex-1 p-4 md:p-6 min-w-0 overflow-hidden">
                                {/* Mobile Header Nav - Horizontal Scrollable */}
                                <div className="hrms-mobile-nav flex gap-3 pb-4 mb-4">
                                    {['Dashboard', 'Employees', 'Attendance', 'Payroll', 'Hiring', 'Apps'].map((item, i) => (
                                        <div key={item} className="flex-shrink-0 whitespace-nowrap px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-wider border border-white/5" style={{ background: i === 0 ? 'rgba(47,128,237,0.15)' : 'rgba(255,255,255,0.03)', color: i === 0 ? '#2F80ED' : '#5A5A6A' }}>
                                            {item}
                                        </div>
                                    ))}
                                </div>

                                {/* Metrics - Forced Mobile Stack or Tighter Grid */}
                                <div className="hrms-metrics-grid mb-6">
                                    {[
                                        { label: 'Total Employees', val: '1,247', icon: '👥' },
                                        { label: 'On Leave Today', val: '34', icon: '🌴' },
                                        { label: 'Pending Payroll', val: '₹2.4M', icon: '💳' },
                                        { label: 'Open Roles', val: '12', icon: '📋' },
                                    ].map(m => (
                                        <div key={m.label} className="p-3 rounded-xl flex flex-col justify-center" style={{ background: 'rgba(47,128,237,0.06)', border: '1px solid rgba(47,128,237,0.10)' }}>
                                            <div className="flex items-center justify-between mb-1">
                                                <span className="text-sm">{m.icon}</span>
                                                <span className="text-[8px] font-bold text-[#22C55E]">↑ 12%</span>
                                            </div>
                                            <div className="font-display font-bold text-base md:text-xl" style={{ color: '#F0F0F5' }}>{m.val}</div>
                                            <div className="text-[9px] uppercase tracking-tighter truncate" style={{ color: '#5A5A6A' }}>{m.label}</div>
                                        </div>
                                    ))}
                                </div>

                                {/* Chart area - Improved responsiveness */}
                                <div className="rounded-xl p-4 mb-4" style={{ background: 'rgba(47,128,237,0.03)', border: '1px solid rgba(255,255,255,0.05)' }}>
                                    <div className="text-[10px] font-semibold mb-4 flex items-center justify-between" style={{ color: '#5A5A6A' }}>
                                        <span className="uppercase tracking-widest">Headcount Trend</span>
                                        <span className="text-[#2F80ED]">Enterprise Tier</span>
                                    </div>
                                    <div className="flex items-end gap-1 h-20">
                                        {[40, 55, 45, 70, 65, 85, 75, 95, 80, 100, 90, 110].map((v, i) => (
                                            <motion.div
                                                key={i}
                                                initial={{ height: 0 }}
                                                whileInView={{ height: `${(v / 120) * 100}%` }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.8, delay: i * 0.05 }}
                                                className="flex-1 rounded-t-sm"
                                                style={{
                                                    background: i === 11
                                                        ? 'linear-gradient(to top, #1E5FAF, #2F80ED)'
                                                        : 'rgba(47,128,237,0.15)',
                                                    minWidth: '2px'
                                                }}
                                            />
                                        ))}
                                    </div>
                                </div>

                                {/* Recent activity - Compact for mobile */}
                                <div className="space-y-1.5">
                                    {[
                                        { action: 'Payroll processed', time: '2h ago', status: 'Success' },
                                        { action: 'New hire onboarded', time: '5h ago', status: 'In Review' },
                                    ].map(a => (
                                        <div key={a.action} className="flex items-center justify-between px-3 py-2 rounded-lg" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.04)' }}>
                                            <div className="flex items-center gap-2">
                                                <div className="w-1 h-1 rounded-full bg-[#2F80ED]" />
                                                <div className="text-[10px] font-medium" style={{ color: '#A0A0B0' }}>{a.action}</div>
                                            </div>
                                            <div className="text-[9px] text-[#5A5A6A]">{a.time}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.figure>
                </div>
            </section>

            {/* Pricing */}
            <section className="section-pad relative overflow-hidden bg-[#03142A]">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#7C3AED]/30 to-transparent z-10" />

                <div className="container-opmw">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-14"
                    >
                        <div className="section-label mx-auto mb-5">Pricing</div>
                        <h2 className="font-display font-bold" style={{ fontSize: 'clamp(1.75rem, 3.5vw, 3rem)', color: '#F0F0F5' }}>
                            Clear and Simple Pricing.
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
                        {plans.map((plan, i) => (
                            <motion.article
                                key={plan.name}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="relative rounded-2xl p-7"
                                style={{
                                    background: plan.featured
                                        ? 'linear-gradient(135deg, #0D2A4D 0%, #0D2A4D 100%)'
                                        : 'rgba(47,128,237,0.03)',
                                    border: plan.featured
                                        ? '1px solid rgba(77,163,255,0.25)'
                                        : '1px solid rgba(255,255,255,0.07)',
                                    boxShadow: plan.featured ? '0 0 40px rgba(47,128,237,0.15)' : 'none',
                                }}
                            >
                                {plan.featured && (
                                    <div
                                        className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest"
                                        style={{ background: 'linear-gradient(135deg, #133B6A, #1E5FAF)', color: '#fff', boxShadow: '0 0 20px rgba(47,128,237,0.4)' }}
                                    >
                                        Most Popular
                                    </div>
                                )}
                                <div className="mb-2 text-sm font-semibold" style={{ color: '#2F80ED' }}>{plan.name}</div>
                                <div className="font-display font-bold mb-1" style={{ fontSize: '2rem', color: '#F0F0F5' }}>{plan.price}</div>
                                <div className="text-xs mb-3" style={{ color: '#5A5A6A' }}>{plan.unit}</div>
                                <p className="text-sm mb-6" style={{ color: '#7A7A8A' }}>{plan.description}</p>
                                <ul className="space-y-2.5 mb-8">
                                    {plan.features.map(f => (
                                        <li key={f} className="flex items-center gap-2.5">
                                            <CheckCircle2 size={13} style={{ color: '#1E5FAF', flexShrink: 0 }} />
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
                            </motion.article>
                        ))}
                    </div>
                </div>
            </section>

            {/* Demo Form */}
            <section id="demo" className="section-pad relative overflow-hidden bg-[#03142A]">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#7C3AED]/30 to-transparent z-10" />

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
                                {error && (
                                    <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-semibold">
                                        {error}
                                    </div>
                                )}
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
                                                onFocus={e => e.target.style.borderColor = 'rgba(47,128,237,0.4)'}
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
                                            onFocus={e => e.target.style.borderColor = 'rgba(47,128,237,0.4)'}
                                            onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.08)'}
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-semibold mb-2" style={{ color: '#A0A0B0' }}>Team Size</label>
                                        <select
                                            value={demoForm.employees}
                                            onChange={e => setDemoForm({ ...demoForm, employees: e.target.value })}
                                            className="w-full px-4 py-3 rounded-xl text-sm outline-none"
                                            style={{ background: '#0D2A4D', border: '1px solid rgba(255,255,255,0.08)', color: '#F0F0F5' }}
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
                                        onFocus={e => e.target.style.borderColor = 'rgba(47,128,237,0.4)'}
                                        onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.08)'}
                                    />
                                </div>

                                <button type="submit" disabled={submitting} className="btn-primary w-full justify-center py-3.5 disabled:opacity-50">
                                    {submitting ? 'Requesting Demo...' : 'Request My Demo'} <ArrowRight size={15} />
                                </button>
                            </form>
                        )}
                    </motion.div>
                </div>
            </section>
        </main>
    )
}
