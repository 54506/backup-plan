import { motion } from 'framer-motion'
import { FileText, Cpu, Scale, Globe, Building, CheckCircle, ArrowRight, Zap } from 'lucide-react'

const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
}

const FloatingElement = ({ children, duration = 8, delay = 0 }) => (
    <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ duration, repeat: Infinity, ease: "easeInOut", delay }}
    >
        {children}
    </motion.div>
)

export default function TermsPage() {
    return (
        <main className="bg-[#030F1C] text-[#E6EDF7] overflow-hidden pt-24 font-sans min-h-screen">
            {/* ── Hero Section ── */}
            <section className="relative min-h-[50vh] flex items-center py-20 overflow-hidden border-b border-white/5">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute -top-20 -left-20 w-[60%] h-[80%] bg-[#2F80ED]/10 blur-[140px] rounded-full" />
                    <div className="absolute top-[20%] -right-20 w-[50%] h-[70%] bg-[#7C3AED]/10 blur-[130px] rounded-full rotate-12" />
                </div>

                <div className="container-opmw relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#7C3AED]/20 bg-[#7C3AED]/5 backdrop-blur-md mb-8"
                            >
                                <Scale size={14} className="text-[#7C3AED]" />
                                <span className="text-xs font-bold tracking-widest uppercase text-[#7C3AED]">Service Rules</span>
                            </motion.div>
                            <h1 className="text-5xl md:text-7xl font-display font-bold mb-8 leading-tight">
                                Terms of <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2F80ED] to-[#7C3AED]">Service</span>
                            </h1>
                            <p className="text-xl text-[#9FB3D1] max-w-xl leading-relaxed opacity-80">
                                These are the rules for using OPMW software and services around the world.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1 }}
                            className="relative mt-12 lg:mt-0"
                        >
                            <FloatingElement duration={10}>
                                <div className="relative z-10 rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl skew-y-1 -rotate-1 shadow-purple-500/10">
                                    <img
                                        src="/terms_hero.png"
                                        alt="Institutional Governance"
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-tr from-[#030F1C]/70 via-transparent to-transparent opacity-80" />
                                </div>
                            </FloatingElement>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ── Terms Grid ── */}
            <section className="section-pad relative">
                <div className="container-opmw">
                    <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                        <motion.div {...fadeInUp} className="group">
                            <article className="p-10 rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:border-blue-500/20 transition-all h-full">
                                <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-8 group-hover:rotate-6 transition-transform">
                                    <Building className="text-[#2F80ED]" size={28} />
                                </div>
                                <h2 className="text-3xl font-display font-bold text-white mb-6">Our Agreement</h2>
                                <p className="text-[#9FB3D1] leading-relaxed text-lg opacity-80">
                                    These rules apply when you use OPMW software, HR tools, or business support. By using our services, you agree to these rules.
                                </p>
                            </article>
                        </motion.div>

                        <motion.div {...fadeInUp} transition={{ delay: 0.1 }} className="group">
                            <article className="p-10 rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:border-purple-500/20 transition-all h-full">
                                <div className="w-14 h-14 rounded-2xl bg-purple-500/10 flex items-center justify-center mb-8 group-hover:-rotate-6 transition-transform">
                                    <Cpu className="text-[#7C3AED]" size={28} />
                                </div>
                                <h2 className="text-3xl font-display font-bold text-white mb-6">System Reliability</h2>
                                <p className="text-[#9FB3D1] leading-relaxed text-lg opacity-80">
                                    We guarantee our systems will be online 99.99% of the time. If there is a problem, we will make it right as promised in our contract.
                                </p>
                            </article>
                        </motion.div>

                        <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="md:col-span-2 group">
                            <article className="p-12 rounded-[3rem] bg-gradient-to-br from-white/[0.03] to-transparent border border-white/5 hover:border-blue-500/30 transition-all">
                                <div className="flex flex-col lg:flex-row gap-12 items-center">
                                    <div className="lg:w-2/3">
                                        <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                                            <Globe className="text-[#2F80ED]" size={28} />
                                        </div>
                                        <h2 className="text-3xl font-display font-bold text-white mb-6">Your Data Rights</h2>
                                        <p className="text-[#9FB3D1] leading-relaxed text-lg opacity-80">
                                            We follow the data laws of your country, like GDPR and DPDP. We make sure your information is handled safely and legally according to global standards.
                                        </p>
                                    </div>
                                    <div className="lg:w-1/3 flex flex-col gap-4">
                                        {[
                                            "Strong Security",
                                            "Data Kept Locally",
                                            "Ready for Audits",
                                            "High Quality Service"
                                        ].map((item, idx) => (
                                            <div key={idx} className="flex items-center gap-3 py-3 px-4 rounded-xl bg-white/5 border border-white/5">
                                                <CheckCircle size={16} className="text-[#2F80ED]" />
                                                <span className="text-xs font-bold tracking-tight text-white/70">{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </article>
                        </motion.div>
                    </div>

                    {/* Final Declaration */}
                    <motion.div
                        {...fadeInUp}
                        className="mt-12 text-center py-10 border-t border-white/5"
                    >
                        <p className="text-[#9FB3D1] text-lg italic max-w-2xl mx-auto opacity-60">
                            "Transparency and operational clarity define our legal foundations, just as they define our enterprise solutions."
                        </p>
                        <div className="mt-12 flex flex-wrap justify-center gap-8">
                            <div className="flex items-center gap-2">
                                <Zap size={14} className="text-[#7C3AED]" />
                                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#9FB3D1]">v4.2 Governance Core</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <FileText size={14} className="text-[#2F80ED]" />
                                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#9FB3D1]">Revised October 2026</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </main>
    )
}
