import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Phone, Code2, Users, Building2 } from 'lucide-react'

const divisions = [
    {
        id: 'bpo',
        icon: Building2,
        label: 'Business Support',
        title: 'Business Support',
        description:
            'We handle your back-office work and customer support so you can focus on growing your business.',
        tags: ['Office Support', 'Customer Care', 'Better Process', 'Safe & Secure'],
        href: '/services',
        gradient: 'linear-gradient(135deg, rgba(30,16,64,0.8) 0%, rgba(45,23,96,0.5) 100%)',
        accentColor: '#7C3AED',
        stats: '250+ clients',
    },
    {
        id: 'voice',
        icon: Phone,
        label: 'Customer Support',
        title: 'Customer Support',
        description:
            'We provide great customer support in many languages, 24 hours a day, using smart tools to help our team.',
        tags: ['Many Languages', 'Smart Tools', 'Open 24/7', 'Live Updates'],
        href: '/services',
        gradient: 'linear-gradient(135deg, rgba(22,14,52,0.8) 0%, rgba(30,16,64,0.5) 100%)',
        accentColor: '#9F6EFF',
        stats: '15M+ calls/year',
    },
    {
        id: 'web',
        icon: Code2,
        label: 'Websites & Apps',
        title: 'Websites & Apps',
        description:
            'We build fast, modern websites and apps that are ready for millions of users, using the latest technology.',
        tags: ['Fast React Sites', 'Modern Tools', 'Cloud Ready', 'Built to Scale'],
        href: '/services',
        gradient: 'linear-gradient(135deg, rgba(30,16,64,0.8) 0%, rgba(22,14,52,0.5) 100%)',
        accentColor: '#7C3AED',
        stats: '80+ products launched',
    },
    {
        id: 'hrms',
        icon: Users,
        label: 'HR Software',
        title: 'HR Software',
        description:
            'A simple way to manage your team, payroll, and hiring all in one place. We make running your office easy.',
        tags: ['Team Data', 'Payroll Tool', 'Work Reviews', 'Easy to Connect'],
        href: '/hrms',
        gradient: 'linear-gradient(135deg, rgba(45,23,96,0.8) 0%, rgba(61,31,130,0.4) 100%)',
        accentColor: '#C4A7FF',
        stats: '100K+ employees managed',
        featured: true,
    },
]

export default function CoreDivisionsSection() {
    return (
        <section className="section-pad relative overflow-hidden bg-[#03142A]" aria-label="Our Main Services">
            {/* Subtle top separator glow as seen in footer screenshot */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#7C3AED]/30 to-transparent z-10" />

            <div className="container-opmw relative z-10">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <div className="section-label mx-auto mb-5">What We Do</div>
                    <h2
                        className="font-display font-bold mb-4"
                        style={{ fontSize: 'clamp(1.75rem, 3.5vw, 3rem)', color: '#F0F0F5' }}
                    >
                        One Place. Four Main Services.
                    </h2>
                    <p className="max-w-2xl mx-auto text-base leading-relaxed" style={{ color: '#5A5A6A' }}>
                        OPMW offers four main services to help your business work better and grow faster.
                    </p>
                </motion.div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
                    {divisions.map((div, i) => {
                        const Icon = div.icon
                        return (
                            <motion.div
                                key={div.id}
                                initial={{ opacity: 0, y: 32 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-80px' }}
                                transition={{ duration: 0.65, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                                className="relative group rounded-2xl overflow-hidden"
                                style={{
                                    background: div.gradient,
                                    border: div.featured
                                        ? `1px solid rgba(196,167,255,0.25)`
                                        : '1px solid rgba(255,255,255,0.07)',
                                    boxShadow: div.featured ? '0 0 40px rgba(124,58,237,0.15)' : 'none',
                                }}
                            >
                                {/* Featured ribbon */}
                                {div.featured && (
                                    <div
                                        className="absolute top-5 right-5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest"
                                        style={{
                                            background: 'rgba(124,58,237,0.25)',
                                            border: '1px solid rgba(196,167,255,0.3)',
                                            color: '#C4A7FF',
                                        }}
                                    >
                                        Flagship Product
                                    </div>
                                )}

                                {/* Hover glow */}
                                <div
                                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                                    style={{
                                        background: `radial-gradient(ellipse 60% 50% at 30% 40%, rgba(124,58,237,0.12) 0%, transparent 80%)`,
                                    }}
                                />

                                {/* Top border glow on hover */}
                                <div
                                    className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                    style={{ background: `linear-gradient(90deg, transparent, ${div.accentColor}, transparent)` }}
                                />

                                <div className="p-8">
                                    {/* Icon + Label */}
                                    <div className="flex items-start justify-between mb-6">
                                        <div>
                                            <div
                                                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                                                style={{
                                                    background: `rgba(124,58,237,0.15)`,
                                                    border: `1px solid rgba(124,58,237,0.25)`,
                                                }}
                                            >
                                                <Icon size={22} style={{ color: div.accentColor }} />
                                            </div>
                                            <div className="section-label mb-2" style={{ fontSize: '10px' }}>{div.label}</div>
                                        </div>
                                        <div
                                            className="text-xs font-semibold px-3 py-1 rounded-full"
                                            style={{
                                                background: 'rgba(255,255,255,0.04)',
                                                border: '1px solid rgba(255,255,255,0.08)',
                                                color: '#5A5A6A',
                                            }}
                                        >
                                            {div.stats}
                                        </div>
                                    </div>

                                    <h3
                                        className="font-display font-bold text-xl mb-3"
                                        style={{ color: '#F0F0F5' }}
                                    >
                                        {div.title}
                                    </h3>

                                    <p className="text-sm leading-relaxed mb-6" style={{ color: '#7A7A8A' }}>
                                        {div.description}
                                    </p>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {div.tags.map(tag => (
                                            <span
                                                key={tag}
                                                className="text-[11px] font-medium px-2.5 py-1 rounded-full"
                                                style={{
                                                    background: 'rgba(255,255,255,0.04)',
                                                    border: '1px solid rgba(255,255,255,0.08)',
                                                    color: '#7A7A8A',
                                                }}
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    {/* CTA */}
                                    <Link
                                        to={div.href}
                                        className="inline-flex items-center gap-2 text-sm font-semibold group/link transition-all duration-200"
                                        style={{ color: div.accentColor }}
                                    >
                                        Learn More
                                        <ArrowRight
                                            size={14}
                                            className="transition-transform duration-200 group-hover/link:translate-x-1"
                                        />
                                    </Link>
                                </div>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section >
    )
}
