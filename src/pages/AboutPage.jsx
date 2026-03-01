import { motion } from 'framer-motion'
import { Award, Target, Users, Zap, Shield, Globe, ArrowRight, CheckCircle2, Building2, Rocket, HeartHandshake } from 'lucide-react'
import StarfieldBackground from '@/animations/StarfieldBackground'

const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
}

const FloatingElement = ({ children, duration = 4, delay = 0 }) => (
    <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ duration, repeat: Infinity, ease: "easeInOut", delay }}
    >
        {children}
    </motion.div>
)

const staggerContainer = {
    whileInView: {
        transition: {
            staggerChildren: 0.1
        }
    }
}

export default function AboutPage() {
    return (
        <main className="relative bg-[#03142A] text-[#E6EDF7] overflow-hidden pt-24 font-sans">
            <StarfieldBackground className="opacity-40" />
            {/* ── Hero Section ── */}
            <section className="relative min-h-[60vh] flex items-center justify-center py-20 overflow-hidden">
                {/* Abstract Background elements */}
                <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                    <FloatingElement duration={6}>
                        <div className="absolute -top-[10%] -left-[10%] w-[80%] md:w-[60%] h-[70%] bg-[#2F80ED]/10 blur-[80px] md:blur-[120px] rounded-full rotate-12" />
                    </FloatingElement>
                    <FloatingElement duration={8} delay={1}>
                        <div className="absolute top-[40%] -right-[10%] w-[70%] md:w-[50%] h-[60%] bg-[#7C3AED]/10 blur-[90px] md:blur-[130px] rounded-full -rotate-12" />
                    </FloatingElement>
                </div>

                <header className="container-opmw relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8"
                    >
                        <span className="text-xs font-bold tracking-[0.3em] uppercase text-[#7C3AED]">One Place Multi Work</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-3xl md:text-6xl lg:text-7xl font-display font-bold mb-8 leading-[1.2]"
                    >
                        One Place. <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2F80ED] to-[#7C3AED]">All Your Business Needs.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-lg md:text-xl text-[#9FB3D1] max-w-3xl mx-auto leading-relaxed opacity-90 mb-12"
                    >
                        OPMW was built with a simple thought: businesses should not struggle with managing different vendors for different needs.
                        Everything should work smoothly under one roof.
                    </motion.p>
                </header>
            </section>

            {/* ── About OPMW Section ── */}
            <section id="about" className="section-pad relative border-t border-white/5">
                <div className="container-opmw grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div {...fadeInUp} className="relative order-2 lg:order-1">
                        <figure className="relative z-10 rounded-3xl overflow-hidden aspect-[16/10] border border-white/10 shadow-2xl m-0">
                            <motion.img
                                src="/bpo_floor.jpg"
                                alt="OPMW BPO Operations Floor"
                                className="w-full h-full object-cover"
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.6 }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#03142A]/80 via-transparent to-transparent" />
                        </figure>
                        <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#2F80ED]/20 blur-3xl rounded-full" />
                    </motion.div>

                    <motion.article {...fadeInUp} className="space-y-6 order-1 lg:order-2">
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-white">About OPMW</h2>
                        <p className="text-[#9FB3D1] leading-relaxed text-lg">
                            We operate across <span className="text-white font-semibold">Chennai, Hyderabad, Bangalore, Noida, and Indore</span>, delivering structured BPO services, international voice operations, web-based technology solutions, and our own HRMS platform.
                        </p>
                        <p className="text-[#9FB3D1] leading-relaxed text-lg">
                            Our goal is not just to provide services, but to create systems that actually work for growing businesses. Whether it’s customer support, backend operations, web development, or HR management — we handle it all.
                        </p>
                    </motion.article>
                </div>
            </section>

            {/* ── How We Work (Leadership Philosophy) ── */}
            <section id="leadership" className="section-pad bg-white/[0.02]">
                <div className="container-opmw">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.article {...fadeInUp} className="space-y-6">
                            <h2 className="text-3xl md:text-4xl font-display font-bold text-white">How We Work</h2>
                            <p className="text-[#9FB3D1] leading-relaxed text-lg italic">
                                "We believe execution matters more than promises."
                            </p>
                            <p className="text-[#9FB3D1] leading-relaxed text-lg">
                                Every project we take up is handled by a dedicated team with clear responsibilities and defined performance goals.
                                Whether it’s managing an international voice campaign, handling Amazon backend operations, or developing a custom web application, our focus stays on quality, timelines, and measurable results.
                            </p>
                            <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#2F80ED]/5 border border-[#2F80ED]/10">
                                <Users size={24} className="text-[#2F80ED] shrink-0 mt-1" />
                                <p className="text-sm text-[#9FB3D1]">
                                    We maintain centralized coordination with multi-city operations so clients experience smooth communication and consistent service standards.
                                </p>
                            </div>
                        </motion.article>

                        <motion.figure {...fadeInUp} className="m-0">
                            <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl skew-y-1">
                                <img
                                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1200"
                                    className="w-full h-full object-cover"
                                    alt="Team Collaboration"
                                />
                            </div>
                        </motion.figure>
                    </div>
                </div>
            </section>

            {/* ── Core Strength ── */}
            <section className="section-pad">
                <div className="container-opmw grid lg:grid-cols-2 gap-16 items-center">
                    <motion.figure {...fadeInUp} className="relative m-0">
                        <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200"
                                className="w-full h-full object-cover"
                                alt="Workforce and Technology"
                            />
                        </div>
                    </motion.figure>

                    <motion.article {...fadeInUp} className="space-y-6">
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-white">What We Are Best At</h2>
                        <p className="text-[#9FB3D1] leading-relaxed text-lg font-medium text-white">
                            Using good people and smart technology.
                        </p>
                        <p className="text-[#9FB3D1] leading-relaxed text-lg">
                            We run structured voice and non-voice processes with trained teams and performance tracking. Our IT division builds practical web applications and enterprise systems that solve real business problems — efficient solutions, not overcomplicated ones.
                        </p>
                        <div className="p-6 rounded-2xl bg-[#7C3AED]/5 border border-[#7C3AED]/10 space-y-3">
                            <h4 className="text-white font-bold flex items-center gap-2">
                                <Zap size={18} className="text-[#7C3AED]" /> OPMW HRMS
                            </h4>
                            <p className="text-sm text-[#9FB3D1]">
                                We built this software after seeing how hard it is to manage payroll and attendance in many locations. It makes running your office much easier.
                            </p>
                        </div>
                    </motion.article>
                </div>
            </section>

            {/* ── Clients Appreciate ── */}
            <section className="section-pad bg-white/[0.02] border-y border-white/5">
                <div className="container-opmw">
                    <motion.div {...fadeInUp} className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-white uppercase tracking-tight">What Our Clients Like</h2>
                        <div className="h-1 w-20 bg-gradient-to-r from-[#2F80ED] to-[#7C3AED] mx-auto mt-4 rounded-full" />
                    </motion.div>

                    <motion.div
                        variants={staggerContainer}
                        initial="initial"
                        whileInView="whileInView"
                        viewport={{ once: true }}
                        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
                    >
                        {[
                            { title: "Reliable Work", icon: <CheckCircle2 className="text-[#2F80ED]" /> },
                            { title: "Easy to Talk To", icon: <Globe className="text-[#7C3AED]" /> },
                            { title: "Good Prices", icon: <Target className="text-[#2F80ED]" /> },
                            { title: "Offices in Many Cities", icon: <Building2 className="text-[#7C3AED]" /> },
                            { title: "We Take Responsibility", icon: <HeartHandshake className="text-[#2F80ED]" /> },
                            { title: "Work Done on Time", icon: <Rocket className="text-[#7C3AED]" /> }
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                variants={fadeInUp}
                                className="p-6 rounded-2xl bg-[#03142A] border border-white/5 hover:border-white/20 transition-all flex items-center gap-4 group"
                            >
                                <div className="p-3 rounded-xl bg-white/5 group-hover:bg-white/10 transition-colors">
                                    {item.icon}
                                </div>
                                <span className="font-semibold text-[#E6EDF7]">{item.title}</span>
                            </motion.div>
                        ))}
                    </motion.div>

                    <motion.p {...fadeInUp} className="text-center mt-12 text-[#9FB3D1] max-w-2xl mx-auto">
                        We don’t believe in over-commitment. We believe in steady execution and long-term partnerships.
                    </motion.p>
                </div>
            </section>

            {/* ── Our Vision & Outro ── */}
            <section id="mission" className="pt-section-pad pb-6">
                <div className="container-opmw text-center max-w-4xl mx-auto">
                    <motion.div {...fadeInUp} className="space-y-8">
                        <div className="inline-flex p-3 rounded-2xl bg-gradient-to-br from-[#2F80ED] to-[#7C3AED] text-white">
                            <Target size={32} />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-white">Our Vision</h2>
                        <p className="text-xl md:text-2xl text-[#9FB3D1] leading-relaxed">
                            To build a reliable, scalable service platform where businesses can confidently manage operations, technology, and workforce solutions through one trusted partner.
                        </p>
                        <div className="pt-12 border-t border-white/5">
                            <p className="text-lg text-[#9FB3D1] leading-relaxed italic">
                                At OPMW, growth is not just about expansion. It’s about building dependable systems, strong teams, and lasting client relationships.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ── CTA ── */}
            <section className="pb-section-pad pt-6 bg-gradient-to-b from-transparent to-[#081E3A]">
                <div className="container-opmw">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="p-12 md:p-16 rounded-[2.5rem] bg-gradient-to-br from-[#1E5FAF]/20 to-[#7C3AED]/20 border border-white/10 relative overflow-hidden text-center backdrop-blur-sm"
                    >
                        <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-8 relative z-10">
                            Ready to work with us?
                        </h2>
                        <div className="flex flex-wrap items-center justify-center gap-6 relative z-10">
                            <button className="bg-gradient-to-r from-[#2F80ED] to-[#7C3AED] text-white px-10 py-4 rounded-xl font-bold text-lg hover:shadow-[0_0_20px_rgba(47,128,237,0.4)] transition-all">
                                Connect with OPMW
                            </button>
                        </div>
                    </motion.div>
                </div>
            </section>
        </main>
    )
}
