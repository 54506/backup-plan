import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Phone, Code2, Users, ArrowRight, Sparkles } from 'lucide-react'
import StarfieldBackground from '@/animations/StarfieldBackground'

const services = [
    {
        id: 'bpo',
        href: '/services/bpo',
        icon: Phone,
        emoji: '📞',
        category: 'Operations',
        title: 'BPO & International Voice',
        subtitle: 'Global campaigns. Real results.',
        description:
            'Our voice and non-voice teams operate with defined KPIs and monitored quality standards. We handle large-scale international campaigns with operational accuracy.',
        tags: ['Inbound Support', 'Outbound Sales', 'Amazon Support', 'Non-Voice Processing'],
        image: '/assets/bpo_hero.png',
        accentColor: '#2F80ED',
        gradientFrom: 'rgba(47,128,237,0.12)',
        gradientTo: 'rgba(47,128,237,0.02)',
        stat: { value: '90+', label: 'Active Agents' },
    },
    {
        id: 'it',
        href: '/services/it',
        icon: Code2,
        emoji: '💻',
        category: 'Technology',
        title: 'IT & Web Applications',
        subtitle: 'Systems that actually scale.',
        description:
            'We build functional, web-based systems including ERPs and monitoring dashboards that support real business workflows — designed to last.',
        tags: ['Custom Web Apps', 'ERP Platforms', 'API Integration', 'DevOps'],
        image: '/assets/it_hero.png',
        accentColor: '#7C3AED',
        gradientFrom: 'rgba(124,58,237,0.12)',
        gradientTo: 'rgba(124,58,237,0.02)',
        stat: { value: '80+', label: 'Products Delivered' },
    },
    {
        id: 'hrms',
        href: '/services/hrms',
        icon: Users,
        emoji: '👥',
        category: 'Proprietary Product',
        title: 'OPMW HRMS',
        subtitle: 'HR simplified. Built for growth.',
        description:
            'OPMW HRMS was developed from real operational challenges. Built for growing businesses that require visibility without expensive enterprise software.',
        tags: ['Payroll Automation', 'Attendance', 'Performance', 'Compliance'],
        image: '/assets/hrms_hero.png',
        accentColor: '#9F6EFF',
        gradientFrom: 'rgba(159,110,255,0.12)',
        gradientTo: 'rgba(159,110,255,0.02)',
        stat: { value: '40%', label: 'HR Time Saved' },
    },
]

export default function ServicesPage() {
    return (
        <main className="bg-[#03142A] text-[#E6EDF7] min-h-screen overflow-x-hidden">
            <StarfieldBackground className="opacity-40" />

            {/* ── Hero ── */}
            <section className="relative pt-32 pb-16 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_40%,rgba(47,128,237,0.08)_0%,transparent_70%)] pointer-events-none" />
                <div className="container-opmw relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#2F80ED]/30 bg-[#2F80ED]/5 mb-6"
                    >
                        <Sparkles size={12} className="text-[#2F80ED]" />
                        <span className="text-xs font-bold tracking-[0.3em] uppercase text-[#2F80ED]">Specialized Divisions</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6"
                    >
                        Global Work.<br />
                        <span className="text-gradient">Simplified Results.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg md:text-xl text-[#9FB3D1] max-w-2xl mx-auto leading-relaxed"
                    >
                        We operate through three specialized divisions that support end-to-end business operations. Choose a division to explore what we can do for you.
                    </motion.p>
                </div>
            </section>

            {/* ── Service Cards ── */}
            <section className="pb-20">
                <div className="container-opmw">
                    <div className="space-y-8">
                        {services.map((svc, i) => (
                            <motion.div
                                key={svc.id}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-60px' }}
                                transition={{ delay: i * 0.1, duration: 0.7 }}
                            >
                                <Link
                                    to={svc.href}
                                    className="group block relative overflow-hidden rounded-3xl border border-white/8 transition-all duration-500 hover:border-white/15 hover:shadow-2xl"
                                    style={{
                                        background: `linear-gradient(135deg, ${svc.gradientFrom} 0%, rgba(3,20,42,0.8) 100%)`,
                                    }}
                                >
                                    {/* Hover glow */}
                                    <div
                                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                                        style={{ boxShadow: `inset 0 0 80px ${svc.accentColor}10` }}
                                    />

                                    <div className="grid lg:grid-cols-2 gap-0 min-h-[420px]">
                                        {/* Content side */}
                                        <div className={`flex flex-col justify-between p-8 md:p-10 ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                                            <div>
                                                {/* Header */}
                                                <div className="flex items-center gap-4 mb-6">
                                                    <div
                                                        className="w-14 h-14 rounded-2xl text-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                                                        style={{ background: `${svc.accentColor}15`, border: `1px solid ${svc.accentColor}30` }}
                                                    >
                                                        {svc.emoji}
                                                    </div>
                                                    <div>
                                                        <div
                                                            className="text-[10px] font-bold uppercase tracking-[0.3em] mb-1"
                                                            style={{ color: svc.accentColor }}
                                                        >
                                                            {svc.category}
                                                        </div>
                                                    </div>
                                                </div>

                                                <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-white mb-2">
                                                    {svc.title}
                                                </h2>
                                                <p className="text-base font-medium mb-4" style={{ color: svc.accentColor }}>
                                                    {svc.subtitle}
                                                </p>
                                                <p className="text-[#9FB3D1] leading-relaxed text-sm md:text-base mb-6">
                                                    {svc.description}
                                                </p>

                                                {/* Tags */}
                                                <div className="flex flex-wrap gap-2 mb-8">
                                                    {svc.tags.map(tag => (
                                                        <span
                                                            key={tag}
                                                            className="text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full"
                                                            style={{ background: `${svc.accentColor}12`, color: svc.accentColor }}
                                                        >
                                                            {tag}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* CTA Row */}
                                            <div className="flex items-center justify-between">
                                                <div
                                                    className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl font-bold text-sm text-white transition-all duration-300 group-hover:gap-4"
                                                    style={{ background: svc.accentColor }}
                                                >
                                                    Explore Division
                                                    <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                                                </div>
                                                <div className="text-right hidden sm:block">
                                                    <div className="text-2xl font-display font-bold text-white">{svc.stat.value}</div>
                                                    <div className="text-[10px] uppercase tracking-widest font-bold" style={{ color: svc.accentColor }}>{svc.stat.label}</div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Image side */}
                                        <div className={`relative overflow-hidden ${i % 2 === 1 ? 'lg:order-1' : ''} hidden lg:block`}>
                                            <img
                                                src={svc.image}
                                                alt={svc.title}
                                                className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700"
                                            />
                                            <div
                                                className={`absolute inset-0 ${i % 2 === 1
                                                    ? 'bg-gradient-to-l from-transparent to-[#03142A]'
                                                    : 'bg-gradient-to-r from-transparent to-[#03142A]'
                                                    }`}
                                            />
                                            {/* Floating stat on mobile / overlay */}
                                            <motion.div
                                                animate={{ y: [0, -10, 0] }}
                                                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: i * 0.5 }}
                                                className="absolute bottom-8 left-8 p-5 rounded-2xl border shadow-xl"
                                                style={{
                                                    background: 'rgba(8,30,58,0.9)',
                                                    backdropFilter: 'blur(12px)',
                                                    borderColor: `${svc.accentColor}30`,
                                                }}
                                            >
                                                <div className="text-3xl font-display font-bold text-white">{svc.stat.value}</div>
                                                <div className="text-[10px] uppercase tracking-widest font-bold mt-1" style={{ color: svc.accentColor }}>{svc.stat.label}</div>
                                            </motion.div>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CTA ── */}
            <section className="section-pad">
                <div className="container-opmw text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
                            Not Sure Where to Start?
                        </h2>
                        <p className="text-[#9FB3D1] text-lg max-w-xl mx-auto mb-8">
                            Talk to our team. We'll help you identify the right service for your needs.
                        </p>
                        <Link to="/contact" className="btn-primary px-10 py-4 rounded-2xl text-base">
                            Talk to OPMW <ArrowRight size={18} />
                        </Link>
                    </motion.div>
                </div>
            </section>
        </main>
    )
}
