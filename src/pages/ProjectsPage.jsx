import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, ExternalLink, ChevronDown } from 'lucide-react'
import StarfieldBackground from '@/animations/StarfieldBackground'

const caseStudies = [
    {
        id: 'telecom-bpo',
        category: 'BPO',
        title: 'Global Telecom BPO Transformation',
        client: 'Fortune 500 Telecom',
        industry: 'Telecommunications',
        duration: '18 months',
        region: 'Asia Pacific, EMEA',
        challenge:
            'The client needed to scale customer support operations from 200 to 2,500 agents across three continents while maintaining CSAT above 97% — with a 30% cost reduction mandate.',
        solution:
            'OPMW designed a blended BPO model with dedicated quality assurance programs, AI-assisted agent workflows, and a unified reporting dashboard spanning all geographies.',
        results: [
            { label: 'Agents Deployed', val: '2,500+' },
            { label: 'CSAT Score', val: '98.5%' },
            { label: 'Cost Reduction', val: '34%' },
            { label: 'AHT Improvement', val: '-22%' },
        ],
        tags: ['BPO', 'CX', 'Global Operations', 'QA'],
    },
    {
        id: 'fintech-hrms',
        category: 'HRMS',
        title: 'FinTech Workforce Platform',
        client: 'Series D FinTech Unicorn',
        industry: 'Financial Technology',
        duration: '6 months',
        region: 'India, UAE',
        challenge:
            'Rapid headcount growth from 800 to 8,000+ employees created payroll chaos, compliance gaps, and HR data fragmentation across multiple disconnected tools.',
        solution:
            'OPMW deployed its HRMS SaaS with custom payroll engine configuration, integrated biometric attendance, automated compliance reporting, and a full data migration from legacy systems.',
        results: [
            { label: 'Employees Onboarded', val: '8,000+' },
            { label: 'Payroll Processing Time', val: '-70%' },
            { label: 'Compliance Issues', val: '0' },
            { label: 'HR Team Size', val: '-40%' },
        ],
        tags: ['HRMS', 'Payroll', 'Compliance', 'FinTech'],
    },
    {
        id: 'ecomm-webdev',
        category: 'Web Dev',
        title: 'E-Commerce Platform Rebuild',
        client: 'Leading Retail Enterprise',
        industry: 'E-Commerce / Retail',
        duration: '9 months',
        region: 'India, SEA',
        challenge:
            'A legacy PHP monolith handling $12M GMV needed to be rebuilt to support $50M+ GMV, with sub-second performance on mobile and a 99.99% uptime SLA.',
        solution:
            'OPMW engineered a React / Next.js frontend, Node.js microservices backend, and AWS infrastructure with CDN + edge caching — with zero-downtime migration.',
        results: [
            { label: 'GMV Supported', val: '$50M+' },
            { label: 'Page Load Speed', val: '<1s' },
            { label: 'Conversion Rate', val: '+22%' },
            { label: 'Uptime', val: '99.97%' },
        ],
        tags: ['React', 'Next.js', 'AWS', 'E-Commerce'],
    },
    {
        id: 'healthcare-voice',
        category: 'Voice Ops',
        title: 'Healthcare Patient Support Center',
        client: 'Pan-India Hospital Network',
        industry: 'Healthcare',
        duration: '12 months',
        region: 'India (pan-India)',
        challenge:
            'A hospital network with 50+ facilities needed a centralized, multilingual patient support center operating 24/7 — with AI routing and regulatory compliance.',
        solution:
            'OPMW launched a 350-seat voice operations center with 12-language support, AI-enhanced call routing, CRM integration, and real-time CSAT measurement.',
        results: [
            { label: 'Monthly Calls', val: '500K+' },
            { label: 'Languages Supported', val: '12' },
            { label: 'Wait Time Reduction', val: '60%' },
            { label: 'Patient CSAT', val: '97.3%' },
        ],
        tags: ['Voice Ops', 'Healthcare', 'AI', 'Multilingual'],
    },
]

export default function ProjectsPage() {
    const [expanded, setExpanded] = useState(null)

    return (
        <div className="pt-16">
            {/* Hero */}
            <section
                className="relative min-h-[50vh] flex items-center overflow-hidden"
                style={{ background: 'linear-gradient(160deg, #0B0B0F 0%, #0D0718 50%, #0B0B0F 100%)' }}
            >
                <StarfieldBackground />
                <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(92,47,191,0.15) 0%, transparent 80%)' }} />
                <div className="container-opmw relative z-10 py-24 text-center">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="section-label mx-auto mb-6">
                        Case Studies
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="font-display font-bold mb-5"
                        style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', color: '#F0F0F5' }}
                    >
                        Proven Outcomes.
                        <br /><span className="text-gradient">Real Enterprise Scale.</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="max-w-xl mx-auto text-base"
                        style={{ color: '#7A7A8A' }}
                    >
                        Detailed case studies from enterprise deployments across BPO, Voice Ops, Web Dev, and HRMS.
                    </motion.p>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-32" style={{ background: 'linear-gradient(to top, #0B0B0F, transparent)' }} />
            </section>

            {/* Case Study List */}
            <section className="section-pad" style={{ background: '#0B0B0F' }}>
                <div className="container-opmw max-w-4xl">
                    <div className="space-y-5">
                        {caseStudies.map((cs, i) => (
                            <motion.div
                                key={cs.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-60px' }}
                                transition={{ duration: 0.55, delay: i * 0.08 }}
                                className="rounded-2xl overflow-hidden cursor-pointer"
                                style={{
                                    background: 'rgba(255,255,255,0.02)',
                                    border: expanded === cs.id ? '1px solid rgba(124,58,237,0.3)' : '1px solid rgba(255,255,255,0.07)',
                                    boxShadow: expanded === cs.id ? '0 0 30px rgba(124,58,237,0.1)' : 'none',
                                    transition: 'all 0.3s ease',
                                }}
                                onClick={() => setExpanded(expanded === cs.id ? null : cs.id)}
                            >
                                {/* Header */}
                                <div className="flex items-start justify-between p-6 gap-4">
                                    <div className="flex-1">
                                        <div className="flex items-center gap-3 mb-3">
                                            <div className="section-label" style={{ fontSize: '10px' }}>{cs.category}</div>
                                            <span className="text-xs" style={{ color: '#3A3A4E' }}>{cs.industry}</span>
                                        </div>
                                        <h2 className="font-display font-bold text-xl mb-2" style={{ color: '#F0F0F5' }}>{cs.title}</h2>
                                        <div className="flex flex-wrap gap-2">
                                            {cs.tags.map(t => (
                                                <span key={t} className="text-[10px] px-2 py-0.5 rounded-full" style={{ background: 'rgba(124,58,237,0.08)', border: '1px solid rgba(124,58,237,0.15)', color: '#9F6EFF' }}>{t}</span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="flex-shrink-0 flex flex-col items-end gap-2">
                                        <div className="flex items-center gap-2 text-xs" style={{ color: '#5A5A6A' }}>
                                            <span>{cs.client}</span>
                                        </div>
                                        <motion.div
                                            animate={{ rotate: expanded === cs.id ? 180 : 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <ChevronDown size={18} style={{ color: '#5A5A6A' }} />
                                        </motion.div>
                                    </div>
                                </div>

                                {/* Expanded Detail */}
                                <AnimatePresence>
                                    {expanded === cs.id && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                                        >
                                            <div
                                                className="px-6 pb-6"
                                                style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}
                                            >
                                                <div className="pt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
                                                    <div className="space-y-5">
                                                        <div>
                                                            <h3 className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: '#3A3A4E' }}>Challenge</h3>
                                                            <p className="text-sm leading-relaxed" style={{ color: '#7A7A8A' }}>{cs.challenge}</p>
                                                        </div>
                                                        <div>
                                                            <h3 className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: '#3A3A4E' }}>Solution</h3>
                                                            <p className="text-sm leading-relaxed" style={{ color: '#7A7A8A' }}>{cs.solution}</p>
                                                        </div>
                                                        <div className="flex gap-4 text-xs" style={{ color: '#5A5A6A' }}>
                                                            <span>⏱ {cs.duration}</span>
                                                            <span>🌍 {cs.region}</span>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <h3 className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: '#3A3A4E' }}>Results</h3>
                                                        <div className="grid grid-cols-2 gap-3">
                                                            {cs.results.map(r => (
                                                                <div key={r.label} className="p-4 rounded-xl" style={{ background: 'rgba(124,58,237,0.06)', border: '1px solid rgba(124,58,237,0.12)' }}>
                                                                    <div className="font-display font-bold text-xl mb-0.5" style={{ color: '#C4A7FF' }}>{r.val}</div>
                                                                    <div className="text-[10px]" style={{ color: '#5A5A6A' }}>{r.label}</div>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-center mt-12"
                    >
                        <Link to="/contact" className="btn-primary inline-flex">
                            Discuss Your Project <ArrowRight size={15} />
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}
