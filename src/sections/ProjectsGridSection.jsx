import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, ExternalLink } from 'lucide-react'

const projects = [
    {
        id: 'telecom-bpo',
        category: 'BPO',
        title: 'Global Telecom BPO Transformation',
        client: 'Fortune 500 Telecom',
        description: 'Scaled customer support operations from 200 to 2,500 agents across 3 continents in 18 months with 98.5% CSAT.',
        metrics: [{ label: 'Agents Deployed', val: '2,500+' }, { label: 'CSAT Score', val: '98.5%' }, { label: 'Cost Reduction', val: '34%' }],
        tags: ['BPO', 'CX', 'Global Operations'],
        gradient: 'linear-gradient(135deg, rgba(30,16,64,0.9) 0%, rgba(11,11,15,0.95) 100%)',
    },
    {
        id: 'fintech-hrms',
        category: 'HRMS',
        title: 'FinTech Workforce Platform Rollout',
        client: 'Series D FinTech',
        description: 'Implemented end-to-end HRMS for 8,000+ employees with payroll automation reducing processing time by 70%.',
        metrics: [{ label: 'Employees Onboarded', val: '8,000+' }, { label: 'Payroll Time', val: '-70%' }, { label: 'Compliance Issues', val: '0' }],
        tags: ['HRMS', 'Payroll', 'FinTech'],
        gradient: 'linear-gradient(135deg, rgba(22,14,52,0.9) 0%, rgba(11,11,15,0.95) 100%)',
    },
    {
        id: 'ecomm-webdev',
        category: 'Web Dev',
        title: 'E-Commerce Platform Rebuild',
        client: 'Retail Enterprise',
        description: 'Architected and launched a React-based e-commerce platform handling $50M+ GMV with sub-second page loads.',
        metrics: [{ label: 'GMV Supported', val: '$50M+' }, { label: 'Page Speed', val: '<1s' }, { label: 'Conversion Rate', val: '+22%' }],
        tags: ['React', 'Node.js', 'AWS', 'E-Commerce'],
        gradient: 'linear-gradient(135deg, rgba(30,16,64,0.9) 0%, rgba(11,11,15,0.95) 100%)',
    },
    {
        id: 'healthcare-voice',
        category: 'Voice Ops',
        title: 'Healthcare Voice Operations',
        client: 'Hospital Network',
        description: 'Launched a 24/7 multilingual patient support center processing 500,000+ calls/month with AI-enhanced routing.',
        metrics: [{ label: 'Calls/Month', val: '500K+' }, { label: 'Languages', val: '12' }, { label: 'Wait Time Reduction', val: '60%' }],
        tags: ['Voice Ops', 'Healthcare', 'AI Assist'],
        gradient: 'linear-gradient(135deg, rgba(22,14,52,0.9) 0%, rgba(11,11,15,0.95) 100%)',
    },
]

export default function ProjectsGridSection() {
    return (
        <section className="section-pad" aria-label="Client projects">
            <div className="container-opmw">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14"
                >
                    <div>
                        <div className="section-label mb-5">Case Studies</div>
                        <h2
                            className="font-display font-bold leading-tight"
                            style={{ fontSize: 'clamp(1.75rem, 3.5vw, 3rem)', color: '#F0F0F5' }}
                        >
                            Proven Enterprise Outcomes
                        </h2>
                    </div>
                    <Link
                        to="/projects"
                        className="inline-flex items-center gap-2 text-sm font-semibold flex-shrink-0 transition-colors duration-200"
                        style={{ color: '#9F6EFF' }}
                    >
                        All Case Studies <ArrowRight size={14} />
                    </Link>
                </motion.div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {projects.map((proj, i) => (
                        <motion.div
                            key={proj.id}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-60px' }}
                            transition={{ duration: 0.65, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                            className="glass-card p-7 group relative overflow-hidden cursor-pointer"
                            style={{
                                background: proj.gradient,
                            }}
                        >
                            {/* Category + client */}
                            <div className="flex items-center justify-between mb-4">
                                <div className="section-label" style={{ fontSize: '10px' }}>{proj.category}</div>
                                <span className="text-[11px]" style={{ color: '#5A5A6A' }}>{proj.client}</span>
                            </div>

                            <h3 className="font-display font-bold text-lg mb-3 leading-snug" style={{ color: '#F0F0F5' }}>
                                {proj.title}
                            </h3>

                            <p className="text-sm leading-relaxed mb-6" style={{ color: '#7A7A8A' }}>
                                {proj.description}
                            </p>

                            {/* Metrics */}
                            <div className="grid grid-cols-3 gap-3 mb-6">
                                {proj.metrics.map(m => (
                                    <div key={m.label}>
                                        <div className="font-display font-bold text-base mb-0.5" style={{ color: '#C4A7FF' }}>{m.val}</div>
                                        <div className="text-[10px] leading-tight" style={{ color: '#5A5A6A' }}>{m.label}</div>
                                    </div>
                                ))}
                            </div>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2">
                                {proj.tags.map(tag => (
                                    <span
                                        key={tag}
                                        className="text-[10px] px-2 py-0.5 rounded-full"
                                        style={{
                                            background: 'rgba(255,255,255,0.04)',
                                            border: '1px solid rgba(255,255,255,0.07)',
                                            color: '#5A5A6A',
                                        }}
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            {/* Hover arrow */}
                            <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
                                <ExternalLink size={16} style={{ color: '#9F6EFF' }} />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
