import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, ExternalLink, Globe, Shield, Zap, Target, Activity, Users } from 'lucide-react'
import StarfieldBackground from '@/animations/StarfieldBackground'

const projects = [
    {
        title: 'International Voice Campaign',
        category: 'BPO & Voice',
        description: 'High-volume international voice operations with integrated performance monitoring.',
        result: 'Achieved 95% SLA consistency across global markets.',
        image: '/assets/project_voice.png',
        tags: ['Voice Operations', 'KPI Tracking', 'Global Reach'],
        color: '#2F80ED'
    },
    {
        title: 'Amazon Seller Support & Backend',
        category: 'Operations',
        description: 'Comprehensive backend support and performance tracking for large-scale e-commerce operations.',
        result: 'Managed 50k+ monthly tickets with 98% accuracy.',
        image: '/assets/project_amazon.png',
        tags: ['E-commerce', 'Backend Support', 'Scale'],
        color: '#FF9900'
    },
    {
        title: 'Multi-City Operational Setup',
        category: 'Infrastructure',
        description: 'Unified operational network across 5 major Indian tech hubs ensuring business continuity.',
        result: 'Synchronized workforce of 2000+ across 5 cities.',
        image: '/assets/project_multicity.png',
        tags: ['Multi-City', 'Network', 'Reliability'],
        color: '#7C3AED'
    },
    {
        title: 'OPMW HRMS Implementation',
        category: 'Technology',
        description: 'Custom implementation of our HRMS platform for enterprise-level workforce management.',
        result: 'Automated payroll and attendance for 1000+ employees.',
        image: '/assets/project_hrms.png',
        tags: ['HRMS', 'Automation', 'Payroll'],
        color: '#10B981'
    },
    {
        title: 'Digital Infrastructure Monitoring',
        category: 'Technology',
        description: 'Real-time field data visualization and infrastructure status monitoring for specialized projects.',
        result: 'Provided 100% visibility into field operations.',
        image: '/assets/project_monitoring.png',
        tags: ['Real-time Data', 'Monitoring', 'Clarity'],
        color: '#F59E0B'
    }
]

export default function ProjectsPage() {
    return (
        <main className="bg-[#03142A] text-[#E6EDF7] min-h-screen">
            <StarfieldBackground className="opacity-30" />

            {/* Hero */}
            <section className="relative pt-32 pb-20">
                <div className="container-opmw relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-block px-4 py-1.5 rounded-full border border-[#2F80ED]/30 bg-[#2F80ED]/5 mb-6"
                    >
                        <span className="text-xs font-bold tracking-[0.3em] uppercase text-[#2F80ED]">Global Impact</span>
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6"
                    >
                        Good Work. <br /> <span className="text-gradient">Big Results.</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg md:text-xl text-[#9FB3D1] max-w-2xl mx-auto leading-relaxed"
                    >
                        We measure our success by the operational accuracy and growth we deliver to our clients through specialized expertise.
                    </motion.p>
                </div>
            </section>

            {/* Projects Grid */}
            <section className="pb-32">
                <div className="container-opmw">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {projects.map((project, idx) => (
                            <motion.article
                                key={idx}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                                className="group relative flex flex-col h-full bg-[#051933]/40 backdrop-blur-sm border border-white/5 rounded-[2.5rem] overflow-hidden hover:border-[#2F80ED]/40 transition-all duration-700 shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:shadow-[#2F80ED]/10"
                            >
                                {/* Floating Image Container */}
                                <div className="p-4">
                                    <div className="aspect-[16/10] relative rounded-[1.8rem] overflow-hidden">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#051933] via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity" />

                                        <div className="absolute top-4 left-4">
                                            <span className="px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-[9px] uppercase font-bold tracking-[0.2em] text-[#E6EDF7]">
                                                {project.category}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div className="px-8 pb-8 pt-2 flex flex-col flex-1">
                                    <h3 className="text-2xl font-display font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-[#2F80ED] transition-all duration-500">
                                        {project.title}
                                    </h3>
                                    <p className="text-[#94A3B8] text-sm leading-relaxed mb-8 opacity-80 group-hover:opacity-100 transition-opacity">
                                        {project.description}
                                    </p>

                                    <div className="mt-auto space-y-6">
                                        {/* Result Box */}
                                        <div className="relative p-5 rounded-2xl bg-[#03142A]/60 border border-white/5 overflow-hidden group/result">
                                            <div className="absolute top-0 left-0 w-1 h-full bg-[#2F80ED] opacity-40 group-hover/result:h-full transition-all" />
                                            <div className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#2F80ED] mb-2 opacity-70">Impact Achievement</div>
                                            <div className="text-sm font-medium text-[#E6EDF7] leading-snug">{project.result}</div>
                                        </div>

                                        {/* Tags */}
                                        <div className="flex flex-wrap gap-2">
                                            {project.tags.map((tag, tIdx) => (
                                                <span key={tIdx} className="text-[9px] px-2.5 py-1 rounded-lg bg-white/5 border border-white/5 text-[#64748B] group-hover:text-[#94A3B8] group-hover:border-[#2F80ED]/20 transition-all">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </section>

            {/* Strategic Reach */}
            <section className="section-pad border-t border-white/5 bg-gradient-to-b from-transparent to-[#020C1A]">
                <div className="container-opmw">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <div className="section-label mb-6">Operational Continuity</div>
                            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-8">
                                Scalable Networks That Work 24/7.
                            </h2>
                            <p className="text-[#9FB3D1] text-lg leading-relaxed mb-10">
                                OPMW builds systems designed to handle the pressure of real-world business demands. From high-volume voice operations to complex HR logistics, we bring order to the scale.
                            </p>
                            <div className="grid grid-cols-2 gap-6">
                                <div className="p-6 rounded-3xl bg-[#03142A] border border-white/5">
                                    <div className="text-3xl font-bold text-white mb-1">98%</div>
                                    <div className="text-xs text-[#2F80ED] uppercase font-bold tracking-tighter">Operational Accuracy</div>
                                </div>
                                <div className="p-6 rounded-3xl bg-[#03142A] border border-white/5">
                                    <div className="text-3xl font-bold text-white mb-1">24/7</div>
                                    <div className="text-xs text-[#2F80ED] uppercase font-bold tracking-tighter">Support Coverage</div>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="aspect-square rounded-[3rem] bg-gradient-to-br from-[#2F80ED]/20 to-[#7C3AED]/20 border border-white/10 flex items-center justify-center relative overflow-hidden">
                                <Activity size={200} className="text-white/5 animate-pulse" />
                                <div className="absolute inset-0 flex items-center justify-center p-12 text-center">
                                    <div>
                                        <Globe size={64} className="text-[#2F80ED] mx-auto mb-6" />
                                        <h3 className="text-2xl font-display font-bold text-white mb-4">India-Wide Delivery</h3>
                                        <p className="text-sm text-[#9FB3D1]">Synchronized hub network in Chennai, Hyderabad, Bangalore, Noida, and Indore.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section-pad text-center">
                <div className="container-opmw">
                    <motion.div
                        whileInView={{ scale: [0.95, 1], opacity: [0, 1] }}
                        viewport={{ once: true }}
                        className="max-w-4xl mx-auto p-12 md:p-20 rounded-[3rem] bg-[#051933] border border-white/10 shadow-2xl relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-64 h-64 bg-[#2F80ED]/10 blur-[100px] rounded-full -mr-32 -mt-32" />
                        <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-8 relative z-10">
                            Have a project in mind?
                        </h2>
                        <Link to="/contact" className="btn-primary px-10 py-4 rounded-xl font-bold text-lg">
                            Collaborate on a Project
                        </Link>
                    </motion.div>
                </div>
            </section>
        </main>
    )
}
