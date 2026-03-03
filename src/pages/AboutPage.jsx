import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
    Target, Users, Zap, Globe, ArrowRight,
    CheckCircle2, Building2, HeartHandshake, Award, Rocket, Star
} from 'lucide-react'

/* ── Data ── */
const stats = [
    { val: '90+', label: 'Expert Agents', icon: Users, color: '#388BFD' },
    { val: '5', label: 'City Hubs', icon: Building2, color: '#8B5CF6' },
    { val: '99.2%', label: 'Quality Score', icon: Award, color: '#06B6D4' },
    { val: '3', label: 'Service Pillars', icon: Zap, color: '#F59E0B' },
]

const values = [
    {
        icon: Target,
        title: 'Mission-Driven Delivery',
        color: '#388BFD',
        desc: 'Every campaign, every ticket, every deployment — tied to a measurable outcome. We operate KPI-first, always.',
    },
    {
        icon: HeartHandshake,
        title: 'Client Partnership',
        color: '#8B5CF6',
        desc: 'We don\'t do vendor relationships. We embed ourselves in your operations and act as a true extension of your team.',
    },
    {
        icon: Rocket,
        title: 'Velocity with Quality',
        color: '#06B6D4',
        desc: 'Speed is nothing without accuracy. Our QA layers ensure every output meets the standard before it reaches your customer.',
    },
    {
        icon: Globe,
        title: 'Global Mindset',
        color: '#F59E0B',
        desc: 'Headquartered in Hyderabad, operating across 4 Indian cities and serving clients in US, UK, and Australia.',
    },
]

const timeline = [
    { year: '2018', title: 'Founded in Hyderabad', desc: 'Started with a 12-person BPO team and one enterprise client.' },
    { year: '2020', title: 'IT Division Launched', desc: 'Expanded into custom software development and managed IT services.' },
    { year: '2022', title: 'HRMS Platform Built', desc: 'Released OPMW HRMS — a proprietary SaaS for workforce management.' },
    { year: '2023', title: 'Multi-City Expansion', desc: 'Opened hubs in Noida, Indore, Bangalore, and Chennai.' },
    { year: '2025', title: '90+ Agent Milestone', desc: 'Hit 90 active BPO agents with a 99.2% quality score across all campaigns.' },
]

const leadership = [
    { name: 'Rajiv Menon', role: 'Chief Executive Officer', icon: '🎯' },
    { name: 'Priya Sharma', role: 'Head of BPO Operations', icon: '📞' },
    { name: 'Arjun Nair', role: 'Chief Technology Officer', icon: '💻' },
    { name: 'Neha Gupta', role: 'Head of HRMS Product', icon: '👥' },
]

/* ── Animations ── */
const fadeUp = {
    initial: { opacity: 0, y: 32 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-60px' },
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
}

function AnimatedCounter({ value }) {
    // Simple display — the animation is handled by the motion number approach
    return <span>{value}</span>
}

export default function AboutPage() {
    const heroRef = useRef(null)
    const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
    const heroImgY = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])

    return (
        <main className="min-h-screen overflow-x-hidden" style={{ background: '#070C14', color: '#E6EDF7' }}>

            {/* ══════════════════════════════════════════════
                HERO — parallax image + logo reveal
            ══════════════════════════════════════════════ */}
            <section ref={heroRef} className="relative min-h-[90vh] flex items-start pt-48 pb-20 overflow-hidden">
                {/* Parallax image */}
                <motion.div
                    style={{ y: heroImgY }}
                    className="absolute inset-0"
                >
                    <img
                        src="/assets/about_hero.png"
                        alt="OPMW team at work"
                        className="w-full h-full object-cover object-top"
                    />
                </motion.div>

                {/* Multi-layer gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#070C14] via-[#070C14]/50 to-[#070C14]/20" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#070C14]/60 via-transparent to-[#070C14]/30" />

                {/* Hero content */}
                <div className="container-opmw relative z-10 w-full">
                    <div className="max-w-4xl">


                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                            className="font-display font-bold leading-none mb-6"
                            style={{ fontSize: 'clamp(3rem, 8vw, 6rem)' }}
                        >
                            We Operate.<br />
                            <span style={{
                                background: 'linear-gradient(135deg, #388BFD, #8B5CF6)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                            }}>
                                We Build.
                            </span><br />
                            We Grow.
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.7 }}
                            className="text-lg max-w-xl"
                            style={{ color: '#8B9DC3' }}
                        >
                            OPMW is a multi-vertical operations company powering BPO delivery, custom IT, and HRMS for businesses across India, US, UK, and Australia.
                        </motion.p>
                    </div>
                </div>

                {/* Bottom edge fade */}
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#070C14] to-transparent" />
            </section>

            {/* ══════════════════════════════════════════════
                STATS BAR
            ══════════════════════════════════════════════ */}
            <section className="py-12 border-y" style={{ borderColor: 'rgba(255,255,255,0.05)', background: 'rgba(255,255,255,0.015)' }}>
                <div className="container-opmw">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((s, i) => (
                            <motion.div
                                key={s.label}
                                {...fadeUp}
                                transition={{ ...fadeUp.transition, delay: i * 0.08 }}
                                className="text-center"
                            >
                                <div
                                    className="w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-3"
                                    style={{ background: `${s.color}12`, border: `1px solid ${s.color}25` }}
                                >
                                    <s.icon size={18} style={{ color: s.color }} />
                                </div>
                                <div className="text-3xl md:text-4xl font-display font-bold" style={{ color: s.color }}>
                                    {s.val}
                                </div>
                                <div className="text-xs uppercase tracking-widest font-bold mt-1" style={{ color: '#3D4F6A' }}>
                                    {s.label}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════════════
                WHO WE ARE — two column with image
            ══════════════════════════════════════════════ */}
            <section className="py-24 md:py-32">
                <div className="container-opmw">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        {/* Text */}
                        <div>
                            <motion.p {...fadeUp} className="text-[10px] font-bold uppercase tracking-[0.4em] mb-4" style={{ color: '#388BFD' }}>
                                Who We Are
                            </motion.p>
                            <motion.h2 {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.1 }}
                                className="font-display font-bold mb-6" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
                                Three divisions.<br />One unified team.
                            </motion.h2>
                            <motion.p {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.2 }}
                                className="text-base leading-relaxed mb-4" style={{ color: '#8B9DC3' }}>
                                OPMW was built on a single insight: growing businesses need operational support, technology, and people management — and buying them separately creates chaos. We bundled all three into one accountable entity.
                            </motion.p>
                            <motion.p {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.25 }}
                                className="text-base leading-relaxed mb-8" style={{ color: '#8B9DC3' }}>
                                Our BPO division handles voice, non-voice, back-office, and customer experience. Our IT division delivers custom software, mobile apps, and managed cloud infrastructure. Our HRMS division provides a proprietary people management platform built for Indian and global operations teams.
                            </motion.p>
                            <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.3 }} className="space-y-3">
                                {['Dedicated team per client', 'Transparent KPI dashboards', 'ISO-aligned delivery processes', 'Multi-geography execution'].map(item => (
                                    <div key={item} className="flex items-center gap-3">
                                        <CheckCircle2 size={15} style={{ color: '#388BFD', flexShrink: 0 }} />
                                        <span className="text-sm" style={{ color: '#8B9DC3' }}>{item}</span>
                                    </div>
                                ))}
                            </motion.div>
                        </div>

                        {/* Logo mark feature — large animated */}
                        <motion.div
                            {...fadeUp}
                            transition={{ ...fadeUp.transition, delay: 0.2 }}
                            className="flex items-center justify-center"
                        >
                            <div className="relative">
                                {/* Background glow */}
                                <div className="absolute inset-0 rounded-full blur-[80px]"
                                    style={{ background: 'radial-gradient(circle, rgba(56,139,253,0.12) 0%, rgba(139,92,246,0.08) 50%, transparent 70%)' }} />

                                {/* Image Card */}
                                <div className="relative overflow-hidden rounded-[2rem] group"
                                    style={{
                                        background: 'rgba(255,255,255,0.02)',
                                        border: '1px solid rgba(255,255,255,0.06)',
                                        width: '100%',
                                        maxWidth: '500px'
                                    }}>

                                    {/* Image container */}
                                    <div className="aspect-[4/3] w-full overflow-hidden relative">
                                        <img
                                            src="/voice_ops.jpg"
                                            alt="OPMW Global Operations"
                                            className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[2s] ease-out"
                                        />

                                        {/* Premium Overlay Gradients */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#03142A] via-[#03142A]/20 to-transparent opacity-90" />

                                        {/* Floating Branding Mark */}
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            {/* <div className="w-24 h-24 rounded-3xl backdrop-blur-md bg-white/5 border border-white/10 flex items-center justify-center p-5 shadow-2xl transform group-hover:scale-110 transition-transform duration-700">
                                                <img src="/logo (2).png" alt="OPMW" className="w-full h-full object-contain" />
                                            </div> */}
                                        </div>
                                    </div>

                                    {/* Info Overlay */}
                                    <div className="absolute bottom-8 left-0 right-0 text-center px-4">
                                        <p className="text-[10px] uppercase tracking-[0.5em] font-bold text-white/40 mb-2">
                                            Unified Global Execution
                                        </p>
                                        <div className="h-px w-8 bg-[#2F80ED] mx-auto mb-3 opacity-30" />
                                        <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/60">
                                            OPMW · Est. 2018
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════════════
                VALUES
            ══════════════════════════════════════════════ */}
            <section className="py-20 md:py-28" style={{ background: 'rgba(255,255,255,0.015)', borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <div className="container-opmw">
                    <motion.div {...fadeUp} className="text-center mb-14">
                        <p className="text-[10px] font-bold uppercase tracking-[0.4em] mb-3" style={{ color: '#388BFD' }}>Our Principles</p>
                        <h2 className="font-display font-bold" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)' }}>
                            What drives OPMW
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        {values.map((v, i) => (
                            <motion.div
                                key={v.title}
                                {...fadeUp}
                                transition={{ ...fadeUp.transition, delay: i * 0.1 }}
                                whileHover={{ y: -4, borderColor: `${v.color}35` }}
                                className="p-6 rounded-2xl cursor-default transition-all"
                                style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}
                            >
                                <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                                    style={{ background: `${v.color}12`, border: `1px solid ${v.color}22` }}>
                                    <v.icon size={20} style={{ color: v.color }} />
                                </div>
                                <h3 className="font-display font-bold text-base text-white mb-3">{v.title}</h3>
                                <p className="text-sm leading-relaxed" style={{ color: '#6A7A8A' }}>{v.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════════════
                TIMELINE
            ══════════════════════════════════════════════ */}
            <section className="py-24 md:py-32">
                <div className="container-opmw max-w-4xl">
                    <motion.div {...fadeUp} className="text-center mb-16">
                        <p className="text-[10px] font-bold uppercase tracking-[0.4em] mb-3" style={{ color: '#388BFD' }}>Our Journey</p>
                        <h2 className="font-display font-bold" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)' }}>
                            From startup to scale
                        </h2>
                    </motion.div>

                    <div className="relative">
                        {/* Vertical line */}
                        <div className="absolute left-5 md:left-1/2 top-0 bottom-0 w-px"
                            style={{ background: 'linear-gradient(to bottom, transparent, rgba(56,139,253,0.3), rgba(139,92,246,0.3), transparent)', transform: 'translateX(-50%)' }} />

                        <div className="space-y-10">
                            {timeline.map((item, i) => (
                                <motion.div
                                    key={item.year}
                                    {...fadeUp}
                                    transition={{ ...fadeUp.transition, delay: i * 0.1 }}
                                    className={`flex gap-8 md:gap-0 relative ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                                >
                                    {/* Year — left or right side */}
                                    <div className={`hidden md:flex w-1/2 ${i % 2 === 0 ? 'justify-end pr-10' : 'justify-start pl-10'} items-center`}>
                                        <div className="text-right" style={i % 2 !== 0 ? { textAlign: 'left' } : {}}>
                                            <div className="text-2xl font-display font-bold" style={{ color: i % 2 === 0 ? '#388BFD' : '#8B5CF6' }}>
                                                {item.year}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Dot */}
                                    <div className="absolute left-5 md:left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                                        <div className="w-3 h-3 rounded-full"
                                            style={{ background: i % 2 === 0 ? '#388BFD' : '#8B5CF6', boxShadow: `0 0 12px ${i % 2 === 0 ? '#388BFD' : '#8B5CF6'}` }} />
                                    </div>

                                    {/* Content */}
                                    <div className={`pl-12 md:pl-0 w-full md:w-1/2 ${i % 2 === 0 ? 'md:pl-10' : 'md:pr-10'}`}>
                                        <div className="p-5 rounded-2xl" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
                                            <div className="text-xs font-bold mb-1 md:hidden" style={{ color: i % 2 === 0 ? '#388BFD' : '#8B5CF6' }}>{item.year}</div>
                                            <h3 className="font-display font-bold text-white text-base mb-1">{item.title}</h3>
                                            <p className="text-sm" style={{ color: '#6A7A8A' }}>{item.desc}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════════════
                LEADERSHIP
            ══════════════════════════════════════════════ */}
            <section className="py-20" style={{ background: 'rgba(255,255,255,0.015)', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                <div className="container-opmw">
                    <motion.div {...fadeUp} className="text-center mb-12">
                        <p className="text-[10px] font-bold uppercase tracking-[0.4em] mb-3" style={{ color: '#388BFD' }}>Leadership</p>
                        <h2 className="font-display font-bold" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)' }}>The people behind OPMW</h2>
                    </motion.div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
                        {leadership.map((person, i) => (
                            <motion.div
                                key={person.name}
                                {...fadeUp}
                                transition={{ ...fadeUp.transition, delay: i * 0.1 }}
                                whileHover={{ y: -4 }}
                                className="p-6 rounded-2xl text-center cursor-default"
                                style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}
                            >
                                <div className="text-4xl mb-4">{person.icon}</div>
                                <h3 className="font-display font-bold text-white text-sm mb-1">{person.name}</h3>
                                <p className="text-[11px] uppercase tracking-wider font-bold" style={{ color: '#388BFD' }}>{person.role}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════════════
                CTA
            ══════════════════════════════════════════════ */}
            <section className="py-24">
                <div className="container-opmw max-w-4xl">
                    <motion.div
                        {...fadeUp}
                        className="relative text-center p-12 md:p-20 rounded-[2.5rem] overflow-hidden"
                        style={{ background: 'linear-gradient(135deg, #0D1525, #0A0D18)', border: '1px solid rgba(56,139,253,0.12)' }}
                    >
                        {/* Background glow */}
                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(56,139,253,0.06)_0%,transparent_70%)]" />

                        {/* Logo in CTA */}
                        <div className="flex justify-center mb-8">
                            {/* <div className="w-16 h-16 bg-white/5 rounded-2xl border border-white/10 flex items-center justify-center p-3">
                                <img src="/logo (2).png" alt="" className="w-full h-full object-contain" />
                            </div> */}
                        </div>

                        <p className="text-[10px] font-bold uppercase tracking-[0.4em] mb-4 relative z-10" style={{ color: '#388BFD' }}>
                            Join the OPMW ecosystem
                        </p>
                        <h2 className="font-display font-bold mb-5 relative z-10" style={{ fontSize: 'clamp(1.6rem, 4vw, 2.5rem)' }}>
                            Ready to solve your operations challenge?
                        </h2>
                        <p className="text-base mb-10 max-w-md mx-auto relative z-10" style={{ color: '#8B9DC3' }}>
                            Whether you need a BPO team, a software product, or an HR platform — talk to us and we'll build the right solution.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
                            <Link
                                to="/contact"
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-sm text-white transition-all hover:shadow-lg"
                                style={{ background: 'linear-gradient(135deg, #388BFD, #8B5CF6)' }}
                            >
                                Start a Conversation <ArrowRight size={16} />
                            </Link>
                            <Link
                                to="/services"
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-sm transition-all"
                                style={{ border: '1px solid rgba(255,255,255,0.1)', color: '#8B9DC3' }}
                                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(56,139,253,0.4)'; e.currentTarget.style.color = '#fff' }}
                                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.color = '#8B9DC3' }}
                            >
                                View Our Services
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </main>
    )
}
