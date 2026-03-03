import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'

const features = [
    'Structured BPO and non-voice processes',
    'Dedicated international voice campaigns',
    'Amazon seller and backend operations',
    'Enterprise web-based applications',
    'A proprietary cloud-based HRMS platform',
]

export default function AboutSummarySection() {
    return (
        <section className="pb-24 pt-12 md:pb-32 md:pt-16 relative overflow-hidden bg-[#03142A]" id="about-summary">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#2F80ED]/5 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2" />

            <div className="container-opmw relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left: Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <div className="section-label mb-6">About OPMW</div>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-[#E6EDF7] mb-6 leading-tight">
                            One Place <br /> <span className="text-[#2F80ED]">Multi Work</span>
                        </h2>
                        <p className="text-[#9FB3D1] text-lg leading-relaxed mb-8 opacity-90">
                            OPMW was established with a clear purpose — to simplify business operations by bringing multiple services under one accountable structure.
                        </p>
                        <p className="text-[#9FB3D1] text-lg leading-relaxed mb-8 opacity-85">
                            Instead of managing separate agencies for different needs, our clients work with one coordinated team that understands performance, reporting, and scalability.
                        </p>
                    </motion.div>

                    {/* Right: Key Offerings List */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 backdrop-blur-sm"
                    >
                        <h3 className="text-xl font-bold text-[#E6EDF7] mb-6">Delivering Unified Excellence across:</h3>
                        <ul className="space-y-4">
                            {features.map((feature, idx) => (
                                <motion.li
                                    key={idx}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 + idx * 0.1 }}
                                    className="flex items-center gap-4 text-[#9FB3D1]"
                                >
                                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#2F80ED]/10 flex items-center justify-center border border-[#2F80ED]/20">
                                        <CheckCircle2 size={14} className="text-[#2F80ED]" />
                                    </div>
                                    <span className="text-sm md:text-base font-medium">{feature}</span>
                                </motion.li>
                            ))}
                        </ul>

                        <div className="mt-10 pt-8 border-t border-white/5 flex flex-wrap gap-8">
                            <div className="flex flex-col">
                                <span className="text-2xl font-bold text-[#E6EDF7]">5+</span>
                                <span className="text-[10px] uppercase tracking-widest text-[#2F80ED] font-bold">Operational Cities</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-2xl font-bold text-[#E6EDF7]">300+</span>
                                <span className="text-[10px] uppercase tracking-widest text-[#2F80ED] font-bold">Workforce Capacity</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-2xl font-bold text-[#E6EDF7]">90+</span>
                                <span className="text-[10px] uppercase tracking-widest text-[#2F80ED] font-bold">Agent Campaigns</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Bottom Glow */}
            <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-[#7C3AED]/5 blur-[100px] rounded-full -translate-x-1/2 translate-y-1/2" />
        </section>
    )
}
