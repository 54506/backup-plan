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
        title: 'Business Support Services',
        image: '/amazon_ops.jpg',
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
        gradient: 'linear-gradient(135deg, #0B192E 0%, #030F1C 100%)',
    },
    {
        icon: Phone,
        category: 'Voice Ops',
        title: 'Customer Support & Calling',
        image: '/voice_ops.jpg',
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
        gradient: 'linear-gradient(135deg, #0D1B36 0%, #051226 100%)',
    },
    {
        icon: Code2,
        category: 'Web Dev',
        title: 'Website & App Building',
        image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1200',
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
        gradient: 'linear-gradient(135deg, #0B192E 0%, #030F1C 100%)',
    },
    {
        icon: Users,
        category: 'HRMS SaaS',
        title: 'HR Management Software',
        image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=1200',
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
        gradient: 'linear-gradient(135deg, #0D1B36 0%, #051226 100%)',
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
        <main className="pt-16">
            {/* Hero */}
            <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-[#03142A]">
                <StarfieldBackground />
                <div className="container-opmw relative z-10 py-20">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <header className="text-left">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                                className="section-label mb-6"
                            >
                                Our Services
                            </motion.div>
                            <motion.h1
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.1 }}
                                className="font-display font-bold mb-6 leading-[1.1]"
                                style={{ fontSize: 'clamp(2.25rem, 8vw, 4.5rem)', color: '#F0F0F5' }}
                            >
                                Global Work.
                                <br />
                                <span className="text-gradient">Simplified Results.</span>
                            </motion.h1>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="text-xl text-[#9FB3D1] max-w-xl leading-relaxed mb-10"
                            >
                                We provide great business support, customer care, and software development — all through one trusted partner.
                            </motion.p>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                                className="flex flex-wrap gap-4"
                            >
                                <Link to="/contact" className="btn-primary py-4 px-10">
                                    Start Today <ArrowRight size={18} />
                                </Link>
                                <a href="#divisions" className="btn-secondary py-4 px-10">
                                    See Our Services
                                </a>
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
                                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200"
                                    alt="Global Strategic Operations"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-tr from-[#03142A]/40 to-transparent" />
                            </figure>
                            {/* Decorative elements */}
                            <div className="absolute -top-10 -right-10 w-64 h-64 bg-[#7C3AED]/10 blur-[100px] rounded-full" />
                            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-[#2F80ED]/10 blur-[100px] rounded-full" />
                        </motion.div>
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-32" style={{ background: 'linear-gradient(to top, #03142A, transparent)' }} />
            </section>

            {/* Service Blocks */}
            <section id="divisions" className="section-pad relative overflow-hidden bg-[#03142A]">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#7C3AED]/30 to-transparent z-10" />

                <div className="container-opmw">
                    <div className="space-y-16">
                        {services.map((svc, i) => {
                            const Icon = svc.icon
                            const isEven = i % 2 === 0
                            return (
                                <motion.article
                                    key={svc.category}
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: '-100px' }}
                                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                    className="relative grid lg:grid-cols-12 gap-12 items-center"
                                >
                                    {/* Content Column */}
                                    <div className={`lg:col-span-12 xl:col-span-7 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                                        <div className="flex items-center gap-4 mb-6">
                                            <div
                                                className="w-14 h-14 rounded-2xl flex items-center justify-center"
                                                style={{ background: 'rgba(47,128,237,0.1)', border: '1px solid rgba(47,128,237,0.2)' }}
                                            >
                                                <Icon size={28} style={{ color: '#2F80ED' }} />
                                            </div>
                                            <div>
                                                <div className="section-label mb-1" style={{ fontSize: '10px' }}>{svc.category}</div>
                                                <h2 className="font-display font-bold text-2xl md:text-3xl text-white">
                                                    {svc.title}
                                                </h2>
                                            </div>
                                        </div>
                                        <p className="text-lg text-[#9FB3D1] leading-relaxed mb-8 max-w-2xl">
                                            {svc.description}
                                        </p>

                                        <div className="mb-10">
                                            <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#3A3A4E] mb-6">
                                                Core Capabilities
                                            </h3>
                                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                                                {svc.features.map(f => (
                                                    <li key={f} className="flex items-center gap-3 group/feat">
                                                        <div className="w-5 h-5 rounded-full bg-[#133B6A]/30 border border-[#133B6A]/50 flex items-center justify-center group-hover/feat:bg-[#2F80ED]/20 group-hover/feat:border-[#2F80ED]/40 transition-colors">
                                                            <CheckCircle2 size={10} className="text-[#2F80ED]" />
                                                        </div>
                                                        <span className="text-sm text-[#9FB3D1]/80 group-hover/feat:text-[#E6EDF7] transition-colors">{f}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <Link to="/contact" className="btn-primary">
                                            Inquire About {svc.category} <ArrowRight size={16} />
                                        </Link>
                                    </div>

                                    {/* Image Column */}
                                    <div className={`lg:col-span-12 xl:col-span-5 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                                        <motion.figure
                                            whileHover={{ scale: 1.02 }}
                                            transition={{ duration: 0.4 }}
                                            className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl aspect-[4/3] xl:aspect-square m-0"
                                        >
                                            <img
                                                src={svc.image}
                                                alt={svc.title}
                                                className="w-full h-full object-cover"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-[#03142A]/60 via-transparent to-transparent" />
                                        </motion.figure>
                                    </div>
                                </motion.article>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* Case Studies */}
            <section className="section-pad relative overflow-hidden bg-[#03142A]">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#7C3AED]/30 to-transparent z-10" />

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
                            <motion.article
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
                                            style={{ background: 'rgba(47,128,237,0.08)', border: '1px solid rgba(47,128,237,0.15)', color: '#2F80ED' }}
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    )
}
