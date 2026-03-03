import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Mail, ArrowLeft, ArrowRight, ShieldCheck, Zap, Activity } from 'lucide-react'
import StarfieldBackground from '@/animations/StarfieldBackground'

export default function ForgotPasswordPage() {
    return (
        <main className="min-h-screen bg-[#03142A] flex items-center justify-center p-6 relative overflow-hidden">
            {/* ── Background Aesthetics ── */}
            <div className="absolute inset-0 z-0">
                <StarfieldBackground />
                <div className="absolute inset-0 bg-[#03142A]/60" />
                <img
                    src="https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80&w=1200"
                    className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-overlay"
                    alt="Infrastructure"
                />
            </div>

            <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="w-full max-w-md relative z-10"
            >
                <article className="bg-[#0D2A4D]/40 backdrop-blur-2xl border border-white/10 p-8 md:p-12 rounded-[2.5rem] shadow-[0_40px_100px_rgba(0,0,0,0.6)]">

                    {/* Header */}
                    <header className="text-center mb-10">
                        <figure className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-white/5 border border-white/10 mb-8 group hover:scale-110 transition-transform duration-500 overflow-hidden relative m-0">
                            <div className="absolute inset-0 bg-gradient-to-br from-[#7C3AED]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <img src="/logo (2).png" alt="OPMW Logo" className="w-12 h-12 object-contain relative z-10 brightness-110" />
                        </figure>
                        <h1 className="text-3xl font-display font-bold text-white mb-3">Reset Password</h1>
                        <p className="text-[#9FB3D1] text-sm leading-relaxed">Enter your email and we will send you a link to reset your password.</p>
                    </header>

                    {/* Form */}
                    <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                        <div className="space-y-2">
                            <label className="text-[10px] font-bold uppercase tracking-widest text-[#5A5A6A] ml-1">Email Address</label>
                            <div className="relative group/input">
                                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#5A5A6A] group-focus-within/input:text-[#7C3AED] transition-colors">
                                    <Mail size={18} />
                                </div>
                                <input
                                    type="email"
                                    placeholder="uid@enterprise.com"
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-[#3A3A4E] focus:outline-none focus:border-[#7C3AED]/50 transition-all focus:bg-white/10"
                                />
                            </div>
                        </div>

                        <button className="w-full group/btn relative overflow-hidden bg-white text-[#03142A] py-4 rounded-2xl font-bold uppercase tracking-widest text-xs hover:bg-[#E6EDF7] transition-all flex items-center justify-center gap-3">
                            <span>Send Reset Link</span>
                            <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                        </button>
                    </form>

                    {/* Footer */}
                    <footer className="text-center mt-12">
                        <Link to="/login" className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-[#5A5A6A] hover:text-[#2F80ED] transition-colors">
                            <ArrowLeft size={14} />
                            Back to Login
                        </Link>
                    </footer>
                </article>

                <div className="mt-10 flex items-center justify-center gap-6 opacity-30 grayscale hover:grayscale-0 hover:opacity-100 transition-all">
                    <Activity size={16} className="text-[#2F80ED]" />
                    <ShieldCheck size={16} className="text-[#7C3AED]" />
                    <Zap size={16} className="text-[#F2C94C]" />
                </div>
            </motion.section>
        </main>
    )
}
