import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Phone, Code2, Users, Building2 } from 'lucide-react'

const divisions = [
    {
        id: 'bpo-voice',
        icon: Phone,
        label: 'Operations',
        title: 'BPO & International Voice',
        description:
            'Our voice and non-voice teams operate with defined KPIs and monitored quality standards across global campaigns.',
        tags: ['Inbound Support', 'Outbound Sales', 'Amazon Support', 'Non-Voice Processing'],
        href: '/services#bpo',
        gradient: 'linear-gradient(135deg, rgba(30,16,64,0.8) 0%, rgba(45,23,96,0.5) 100%)',
        accentColor: '#2F80ED',
        stats: '90-agent campaign',
    },
    {
        id: 'it-web',
        icon: Code2,
        label: 'Technology',
        title: 'IT & Web Applications',
        description:
            'We build functional, web-based systems including ERPs and monitoring dashboards that support real business workflows.',
        tags: ['Custom Web Apps', 'Workflow Platforms', 'ERP Systems', 'Process Automation'],
        href: '/services#it',
        gradient: 'linear-gradient(135deg, rgba(22,14,52,0.8) 0%, rgba(30,16,64,0.5) 100%)',
        accentColor: '#7C3AED',
        stats: '80+ products',
    },
    {
        id: 'hrms-prop',
        icon: Users,
        label: 'Proprietary Product',
        title: 'OPMW HRMS',
        description:
            'A cloud-based workforce platform designed to simplify payroll, attendance, and compliance across multi-branch organizations.',
        tags: ['Payroll Automation', 'Attendance Tracking', 'Leave Management', 'Compliance Reporting'],
        href: '/hrms',
        gradient: 'linear-gradient(135deg, rgba(45,23,96,0.8) 0%, rgba(63,31,130,0.4) 100%)',
        accentColor: '#C4A7FF',
        stats: 'Multi-branch control',
        featured: true,
    },
]

export default function CoreDivisionsSection() {
    const [isHovered, setIsHovered] = useState(false)

    return (
        <section
            className="section-pad relative overflow-hidden bg-[#03142A]"
            aria-label="Our Main Services"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Subtle top separator glow */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#7C3AED]/30 to-transparent z-10" />

            <div className="container-opmw relative z-20">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <div className="section-label mx-auto mb-5">Our Divisions</div>
                    <h2
                        className="font-display font-bold mb-4"
                        style={{ fontSize: 'clamp(1.75rem, 3.5vw, 3rem)', color: '#F0F0F5' }}
                    >
                        One Place. Three Core Divisions.
                    </h2>
                    <p className="max-w-2xl mx-auto text-base leading-relaxed" style={{ color: '#9FB3D1', opacity: 0.8 }}>
                        OPMW brings operations, technology, and workforce management together under one coordinated framework.
                    </p>
                </motion.div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {divisions.map((div, i) => {
                        const Icon = div.icon
                        return (
                            <Link key={div.id} to={div.href} className="block group">
                                <motion.div
                                    initial={{ opacity: 0, y: 32 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: '-80px' }}
                                    transition={{ duration: 0.65, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                                    className="relative h-full rounded-2xl overflow-hidden transition-all duration-500 hover:scale-[1.02]"
                                    style={{
                                        background: div.gradient,
                                        border: '1px solid rgba(255,255,255,0.07)',
                                        boxShadow: isHovered ? '0 10px 40px rgba(3,20,42,0.4)' : 'none',
                                    }}
                                >
                                    {/* Section-wide subtle glow when any card is hovered */}
                                    <div
                                        className={`absolute inset-0 opacity-0 transition-opacity duration-700 pointer-events-none bg-blue-500/[0.03] ${isHovered ? 'opacity-100' : ''}`}
                                    />

                                    {/* Featured ribbon */}
                                    {div.featured && (
                                        <div
                                            className="absolute top-5 right-5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest z-20"
                                            style={{
                                                background: 'rgba(124,58,237,0.25)',
                                                border: '1px solid rgba(196,167,255,0.3)',
                                                color: '#C4A7FF',
                                            }}
                                        >
                                            Flagship Product
                                        </div>
                                    )}

                                    {/* Hover glow for specific card */}
                                    <div
                                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                                        style={{
                                            background: `radial-gradient(ellipse 70% 60% at 50% 50%, ${div.accentColor}15 0%, transparent 80%)`,
                                        }}
                                    />

                                    {/* Top border glow on hover */}
                                    <div
                                        className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"
                                        style={{ background: `linear-gradient(90deg, transparent, ${div.accentColor}, transparent)` }}
                                    />

                                    <div className="p-8 relative z-10 flex flex-col h-full">
                                        {/* Icon + Label */}
                                        <div className="flex items-start justify-between mb-8">
                                            <div
                                                className="w-14 h-14 rounded-2xl flex items-center justify-center transition-transform duration-500 group-hover:scale-110"
                                                style={{
                                                    background: `${div.accentColor}10`,
                                                    border: `1px solid ${div.accentColor}25`,
                                                }}
                                            >
                                                <Icon size={24} style={{ color: div.accentColor }} />
                                            </div>
                                            <div
                                                className="text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-tighter"
                                                style={{
                                                    background: 'rgba(255,255,255,0.04)',
                                                    border: '1px solid rgba(255,255,255,0.08)',
                                                    color: '#9FB3D1',
                                                }}
                                            >
                                                {div.stats}
                                            </div>
                                        </div>

                                        <div className="section-label mb-3" style={{ fontSize: '9px', width: 'fit-content' }}>{div.label}</div>

                                        <h3
                                            className="font-display font-bold text-2xl mb-4 group-hover:text-white transition-colors"
                                            style={{ color: '#F0F0F5' }}
                                        >
                                            {div.title}
                                        </h3>

                                        <p className="text-sm leading-relaxed mb-8 flex-grow" style={{ color: '#9FB3D1', opacity: 0.7 }}>
                                            {div.description}
                                        </p>

                                        {/* Tags */}
                                        <div className="flex flex-wrap gap-2 mb-8">
                                            {div.tags.map(tag => (
                                                <span
                                                    key={tag}
                                                    className="text-[10px] font-medium px-2.5 py-1 rounded-full border border-white/5 bg-white/[0.02]"
                                                    style={{ color: '#9FB3D1' }}
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>

                                        {/* CTA Link Appearance */}
                                        <div
                                            className="flex items-center gap-2 text-sm font-bold transition-all duration-300"
                                            style={{ color: div.accentColor }}
                                        >
                                            Explore Platform
                                            <ArrowRight
                                                size={16}
                                                className="transition-transform duration-300 group-hover:translate-x-2"
                                            />
                                        </div>
                                    </div>
                                </motion.div>
                            </Link>
                        )
                    })}
                </div>
            </div>
        </section >
    )
}
