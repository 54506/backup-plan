import { motion } from 'framer-motion'
import { Shield, Lock, Eye, Database, FileCheck, Globe, ArrowRight, Zap } from 'lucide-react'

const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
}

const FloatingElement = ({ children, duration = 6, delay = 0 }) => (
    <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration, repeat: Infinity, ease: "easeInOut", delay }}
    >
        {children}
    </motion.div>
)

export default function PrivacyPage() {
    return (
        <main className="bg-[#030F1C] text-[#E6EDF7] overflow-hidden pt-24 font-sans min-h-screen">
            {/* ── Hero Section ── */}
            <section className="relative min-h-[50vh] flex items-center py-20 overflow-hidden border-b border-white/5">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 right-0 w-[50%] h-[70%] bg-[#2F80ED]/10 blur-[130px] rounded-full" />
                    <div className="absolute bottom-0 left-0 w-[50%] h-[70%] bg-[#7C3AED]/10 blur-[130px] rounded-full" />
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
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/20 bg-blue-500/5 backdrop-blur-md mb-8"
                            >
                                <Shield size={14} className="text-[#2F80ED]" />
                                <span className="text-xs font-bold tracking-widest uppercase text-[#2F80ED]">Safe and Secure</span>
                            </motion.div>
                            <h1 className="text-5xl md:text-7xl font-display font-bold mb-8 leading-tight">
                                Privacy <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2F80ED] to-[#7C3AED]">Rules</span>
                            </h1>
                            <p className="text-xl text-[#9FB3D1] max-w-xl leading-relaxed opacity-80">
                                We use the best security to keep your business data and team information safe and private.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1 }}
                            className="relative mt-12 lg:mt-0"
                        >
                            <FloatingElement>
                                <div className="relative z-10 rounded-3xl overflow-hidden border border-white/10 shadow-2xl skew-x-1 rotate-1 shadow-blue-500/10">
                                    <img
                                        src="/privacy_hero.png"
                                        alt="Privacy Framework"
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#030F1C] via-transparent to-transparent opacity-60" />
                                </div>
                            </FloatingElement>
                            {/* Decorative Elements */}
                            <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/20 blur-3xl rounded-full" />
                            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-500/20 blur-3xl rounded-full" />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ── Key Pillars ── */}
            <section className="section-pad relative">
                <div className="container-opmw">
                    <div className="grid md:grid-cols-3 gap-8 mb-24">
                        {[
                            {
                                icon: Lock,
                                title: "No Data Leaks",
                                text: "Every part of our system is locked tight to keep your data safe."
                            },
                            {
                                icon: Database,
                                title: "Your Own Space",
                                text: "Your data is kept in its own safe place, separate from everyone else."
                            },
                            {
                                icon: Eye,
                                title: "Full Transparency",
                                text: "Real-time audit logs for every data touchpoint within the OPMW ecosystem."
                            }
                        ].map((pillar, idx) => (
                            <motion.div
                                key={idx}
                                {...fadeInUp}
                                transition={{ delay: idx * 0.1 }}
                                className="p-8 rounded-3xl bg-white/[0.03] border border-white/5 hover:border-blue-500/30 transition-all group"
                            >
                                <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    <pillar.icon className="text-[#2F80ED]" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">{pillar.title}</h3>
                                <p className="text-sm text-[#9FB3D1] leading-relaxed opacity-70">{pillar.text}</p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Detailed Clauses */}
                    <div className="max-w-[850px] mx-auto">
                        <article className="space-y-20">
                            <motion.section {...fadeInUp}>
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="h-[2px] w-12 bg-[#2F80ED]" />
                                    <h2 className="text-3xl font-display font-bold text-white">How We Use Data</h2>
                                </div>
                                <div className="space-y-6 text-[#9FB3D1] text-lg leading-relaxed">
                                    <p>
                                        We only collect the data we need to help your team work, like for HR or customer support. We take your privacy very seriously.
                                    </p>
                                    <div className="grid sm:grid-cols-2 gap-4 pt-4">
                                        <div className="p-5 rounded-2xl bg-white/5 border border-white/5 flex items-start gap-3">
                                            <FileCheck className="text-green-400 shrink-0 mt-1" size={18} />
                                            <span className="text-sm">We follow all the latest data laws to keep you safe.</span>
                                        </div>
                                        <div className="p-5 rounded-2xl bg-white/5 border border-white/5 flex items-start gap-3">
                                            <Zap className="text-yellow-400 shrink-0 mt-1" size={18} />
                                            <span className="text-sm">We watch our systems 24/7 to stop any security problems.</span>
                                        </div>
                                    </div>
                                </div>
                            </motion.section>

                            <motion.section {...fadeInUp}>
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="h-[2px] w-12 bg-[#7C3AED]" />
                                    <h2 className="text-3xl font-display font-bold text-white">Locked and Safe</h2>
                                </div>
                                <p className="text-[#9FB3D1] text-lg leading-relaxed mb-8">
                                    All your information is locked with strong passwords while it's stored and while it's moving between computers. Only people you choice can see your data.
                                </p>
                                <figure className="m-0 rounded-3xl overflow-hidden border border-white/10 shadow-xl opacity-80 hover:opacity-100 transition-opacity">
                                    <img
                                        src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200"
                                        className="w-full grayscale hover:grayscale-0 transition-all duration-700"
                                        alt="Security Infrastructure"
                                    />
                                </figure>
                            </motion.section>

                            <motion.section {...fadeInUp} className="pb-24">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="h-[2px] w-12 bg-[#2F80ED]" />
                                    <h2 className="text-3xl font-display font-bold text-white">Deleting Your Data</h2>
                                </div>
                                <p className="text-[#9FB3D1] text-lg leading-relaxed mb-10">
                                    If you stop using OPMW, we will delete all your data and recordings within 30 days. We won't keep anything behind.
                                </p>
                                <div className="p-10 rounded-[2rem] bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-white/10 text-center">
                                    <p className="text-white font-medium mb-6 italic opacity-90">"Your data integrity is the foundation of our partnership."</p>
                                    <button className="inline-flex items-center gap-2 text-[#2F80ED] font-bold text-sm tracking-widest uppercase hover:gap-4 transition-all">
                                        Download Technical Whitepaper <ArrowRight size={16} />
                                    </button>
                                </div>
                            </motion.section>
                        </article>
                    </div>
                </div>
            </section>
        </main>
    )
}
