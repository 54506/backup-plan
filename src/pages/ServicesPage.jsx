import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
    ArrowRight, Building2, Phone, Code2, Users,
    CheckCircle2, TrendingUp, Clock, Globe, Shield, Zap
} from 'lucide-react'
import StarfieldBackground from '@/animations/StarfieldBackground'

const services = [
    {
        icon: Building2,
        category: 'BPO',
        title: 'Business Process Outsourcing',
        description:
            'End-to-end BPO services that integrate seamlessly with your core operations. From customer experience to back-office processing, we scale with your enterprise.',
        features: [
            'Customer Experience Management',
            'Back-Office Operations',
            'Data Entry & Verification',
            'Finance & Accounting BPO',
            'Quality Assurance Programs',
            'SLA-Driven Performance',
        ],
        gradient: 'linear-gradient(135deg, rgba(30,16,64,0.9) 0%, rgba(20,20,25,0.95) 100%)',
    },
    {
        icon: Phone,
        category: 'Voice Ops',
        title: 'International Voice Operations',
        description:
            'Premium multilingual voice operations powered by AI-enhanced agent support. Inbound, outbound, and blended campaigns for global enterprises.',
        features: [
            'Multilingual Agent Teams',
            'AI-Enhanced Call Assist',
            '24/7/365 Operations',
            'Real-Time Analytics Dashboard',
            'Omnichannel Support',
            'CSAT Optimization Programs',
        ],
        gradient: 'linear-gradient(135deg, rgba(22,14,52,0.9) 0%, rgba(20,20,25,0.95) 100%)',
    },
    {
        icon: Code2,
        category: 'Web Dev',
        title: 'Web Application Development',
        description:
            'Full-stack, cloud-native application development. React frontends, Node.js microservices, and AWS infrastructure — from MVP to enterprise scale.',
        features: [
            'React / Next.js / TypeScript',
            'Node.js / Python Backend',
            'AWS / GCP / Azure Cloud',
            'Microservices Architecture',
            'DevOps & CI/CD Pipelines',
            'UI/UX Design & Prototyping',
        ],
        gradient: 'linear-gradient(135deg, rgba(30,16,64,0.9) 0%, rgba(20,20,25,0.95) 100%)',
    },
    {
        icon: Users,
        category: 'HRMS SaaS',
        title: 'Human Resource Management System',
        description:
            'Enterprise-grade HRMS SaaS platform unifying workforce management — payroll, attendance, performance, and recruitment in one integrated solution.',
        features: [
            'Automated Payroll Engine',
            'Geo-Fenced Attendance',
            'Performance Management',
            'AI-Powered Recruitment',
            'Analytics & Reporting',
            'Multi-Tenant SaaS Architecture',
        ],
        gradient: 'linear-gradient(135deg, rgba(45,23,96,0.9) 0%, rgba(20,20,25,0.95) 100%)',
    },
]

const caseStudies = [
    {
        category: 'BPO',
        title: 'Telecom Giant Reduces CX Cost by 34%',
        result: '34% cost reduction with 98.5% CSAT maintained across 2,500 agents.',
        tags: ['BPO', 'CX', 'Cost Optimization'],
    },
    {
        category: 'Voice Ops',
        title: 'Healthcare Network — 500K Monthly Calls',
        result: '60% reduction in wait times with 12-language AI-enhanced agent network.',
        tags: ['Voice', 'Healthcare', 'AI'],
    },
    {
        category: 'Web Dev',
        title: '$50M GMV E-Commerce Platform',
        result: 'Full React rebuild delivering sub-1s load times and 22% conversion uplift.',
        tags: ['React', 'E-Commerce', 'Performance'],
    },
]

export default function ServicesPage() {
    return (
        <div className="pt-16">
            {/* Hero */}
            <section
                className="relative min-h-[55vh] flex items-center overflow-hidden"
                style={{ background: 'linear-gradient(160deg, #0B0B0F 0%, #0D0718 50%, #0B0B0F 100%)' }}
            >
                <StarfieldBackground />
                <div
                    className="absolute inset-0 pointer-events-none"
                    style={{ background: 'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(92,47,191,0.15) 0%, transparent 80%)' }}
                />
                <div className="container-opmw relative z-10 py-24 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="section-label mx-auto mb-6"
                    >
                        Our Services
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        className="font-display font-bold mb-5"
                        style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', color: '#F0F0F5' }}
                    >
                        Four Divisions.
                        <br />
                        <span className="text-gradient">One Unified Platform.</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="max-w-2xl mx-auto text-lg"
                        style={{ color: '#7A7A8A' }}
                    >
                        Enterprise-grade services that integrate across BPO, Voice Operations, Web Development, and HRMS — powering your entire operational stack.
                    </motion.p>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-32" style={{ background: 'linear-gradient(to top, #0B0B0F, transparent)' }} />
            </section>

            {/* Service Blocks */}
            <section className="section-pad" style={{ background: '#0B0B0F' }}>
                <div className="container-opmw">
                    <div className="space-y-8">
                        {services.map((svc, i) => {
                            const Icon = svc.icon
                            return (
                                <motion.div
                                    key={svc.category}
                                    initial={{ opacity: 0, y: 28 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: '-60px' }}
                                    transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                                    className="rounded-2xl p-8 md:p-10 group relative overflow-hidden"
                                    style={{
                                        background: svc.gradient,
                                        border: '1px solid rgba(255,255,255,0.07)',
                                    }}
                                >
                                    <div
                                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                                        style={{ background: 'radial-gradient(ellipse 50% 60% at 80% 50%, rgba(124,58,237,0.08) 0%, transparent 80%)' }}
                                    />

                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                                        <div>
                                            <div className="flex items-center gap-4 mb-5">
                                                <div
                                                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                                                    style={{ background: 'rgba(124,58,237,0.15)', border: '1px solid rgba(124,58,237,0.25)' }}
                                                >
                                                    <Icon size={22} style={{ color: '#9F6EFF' }} />
                                                </div>
                                                <div className="section-label" style={{ fontSize: '10px' }}>{svc.category}</div>
                                            </div>
                                            <h2
                                                className="font-display font-bold text-2xl md:text-3xl mb-4"
                                                style={{ color: '#F0F0F5' }}
                                            >
                                                {svc.title}
                                            </h2>
                                            <p className="text-base leading-relaxed mb-6" style={{ color: '#7A7A8A' }}>
                                                {svc.description}
                                            </p>
                                            <Link to="/contact" className="btn-primary">
                                                Get Started <ArrowRight size={15} />
                                            </Link>
                                        </div>

                                        <div>
                                            <h3 className="text-xs font-semibold uppercase tracking-widest mb-5" style={{ color: '#3A3A4E' }}>
                                                Capabilities
                                            </h3>
                                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                                {svc.features.map(f => (
                                                    <li key={f} className="flex items-start gap-2.5">
                                                        <CheckCircle2 size={14} className="mt-0.5 flex-shrink-0" style={{ color: '#5B2FBF' }} />
                                                        <span className="text-sm" style={{ color: '#9A9AAA' }}>{f}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </motion.div>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* Case Studies */}
            <section className="section-pad" style={{ background: 'linear-gradient(180deg, #0B0B0F, #0D0718, #0B0B0F)' }}>
                <div className="container-opmw">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-14"
                    >
                        <div className="section-label mx-auto mb-5">Results That Speak</div>
                        <h2
                            className="font-display font-bold"
                            style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', color: '#F0F0F5' }}
                        >
                            Client Success Stories
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                        {caseStudies.map((cs, i) => (
                            <motion.div
                                key={cs.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="glass-card p-6"
                            >
                                <div className="section-label mb-4" style={{ fontSize: '10px' }}>{cs.category}</div>
                                <h3 className="font-display font-bold text-lg mb-3 leading-snug" style={{ color: '#F0F0F5' }}>
                                    {cs.title}
                                </h3>
                                <p className="text-sm leading-relaxed mb-4" style={{ color: '#7A7A8A' }}>{cs.result}</p>
                                <div className="flex flex-wrap gap-2">
                                    {cs.tags.map(t => (
                                        <span
                                            key={t}
                                            className="text-[10px] px-2 py-0.5 rounded-full"
                                            style={{ background: 'rgba(124,58,237,0.08)', border: '1px solid rgba(124,58,237,0.15)', color: '#9F6EFF' }}
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
