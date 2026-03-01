import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Mail, Lock, ArrowRight, Github, Chrome, ShieldCheck, Globe, Zap } from 'lucide-react'
import StarfieldBackground from '@/animations/StarfieldBackground'

export default function LoginPage() {
    return (
        <main className="min-h-screen bg-[#03142A] flex flex-col lg:flex-row relative overflow-x-hidden">

            {/* ── Left Side: Cinematic Visual — hidden on mobile, visible on lg+ ── */}
            <section className="hidden lg:flex lg:flex-col lg:relative lg:w-1/2 overflow-hidden bg-[#050C1A]">
                <StarfieldBackground />
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200"
                        alt="Security Infrastructure"
                        className="w-full h-full object-cover opacity-60 mix-blend-luminosity scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#03142A]" />
                </div>

                <div className="relative z-10 w-full flex flex-col justify-center px-16 xl:px-24 py-16">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                    >
                        <figure className="mb-10 m-0">
                            <img src="/logo.png" alt="OPMW" className="h-12 w-auto brightness-125" />
                        </figure>
                        <h2 className="font-display font-bold text-5xl xl:text-6xl text-white mb-8 leading-[1.1]">
                            Manage your <br />
                            <span className="text-gradient">business easily.</span>
                        </h2>
                        <p className="text-xl text-[#9FB3D1] max-w-md leading-relaxed mb-12">
                            Login to your account to manage your teams, projects, and work all in one place.
                        </p>
                        <div className="space-y-6">
                            {[
                                { icon: ShieldCheck, text: 'Safe and Secure' },
                                { icon: Globe, text: 'Works Everywhere' },
                                { icon: Zap, text: 'Fast and Reliable' },
                            ].map((feat, i) => (
                                <motion.div
                                    key={feat.text}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                                    className="flex items-center gap-4 text-white/70 text-sm font-bold uppercase tracking-widest"
                                >
                                    <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                                        <feat.icon size={16} className="text-[#2F80ED]" />
                                    </div>
                                    {feat.text}
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
                <div className="absolute bottom-12 left-16 xl:left-24 text-[10px] uppercase tracking-[0.4em] text-[#3A3A4E] font-bold">
                    OPMW Platform v4.0
                </div>
            </section>

            {/* ── Right Side: Form ── */}
            <section className="w-full lg:w-1/2 flex items-center justify-center px-5 py-12 sm:px-10 lg:py-8 relative min-h-screen z-10">
                {/* Soft ambient glow — mobile only */}
                <div className="lg:hidden absolute inset-0 z-0 pointer-events-none">
                    <div className="absolute top-0 left-0 w-[60%] h-[40%] bg-[#2F80ED]/10 blur-[100px] rounded-full" />
                    <div className="absolute bottom-0 right-0 w-[60%] h-[40%] bg-[#7C3AED]/10 blur-[100px] rounded-full" />
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="w-full max-w-[420px] relative z-10"
                >
                    {/* 
                        Logo shown ONLY on mobile (< lg).
                        On desktop the left panel already shows the logo.
                    */}
                    <div className="flex justify-center mb-8 lg:hidden">
                        <img src="/logo.png" alt="OPMW" className="h-14 w-auto brightness-110" />
                    </div>

                    <header className="mb-10">
                        <h1 className="text-3xl font-display font-bold text-white mb-3 text-center lg:text-left">Login</h1>
                        <p className="text-[#9FB3D1] text-sm leading-relaxed text-center lg:text-left">
                            Please sign in to access your work.
                        </p>
                    </header>

                    <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                        <div className="space-y-2">
                            <label
                                className="text-[10px] font-bold uppercase tracking-widest text-[#5A5A6A] ml-1"
                                htmlFor="email"
                            >
                                Email Address
                            </label>
                            <div className="relative group/input">
                                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#5A5A6A] group-focus-within/input:text-[#2F80ED] transition-colors">
                                    <Mail size={18} />
                                </div>
                                <input
                                    id="email"
                                    type="email"
                                    placeholder="uid@enterprise.com"
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-[#3A3A4E] focus:outline-none focus:border-[#2F80ED]/50 transition-all focus:bg-white/10"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <div className="flex justify-between items-center ml-1">
                                <label
                                    className="text-[10px] font-bold uppercase tracking-widest text-[#5A5A6A]"
                                    htmlFor="password"
                                >
                                    Password
                                </label>
                                <Link
                                    to="/forgot-password"
                                    className="text-[10px] font-bold text-[#7C3AED] hover:text-[#2F80ED] transition-colors uppercase tracking-wider"
                                >
                                    Forgot Password?
                                </Link>
                            </div>
                            <div className="relative group/input">
                                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#5A5A6A] group-focus-within/input:text-[#2F80ED] transition-colors">
                                    <Lock size={18} />
                                </div>
                                <input
                                    id="password"
                                    type="password"
                                    placeholder="••••••••"
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-[#3A3A4E] focus:outline-none focus:border-[#2F80ED]/50 transition-all focus:bg-white/10"
                                />
                            </div>
                        </div>

                        <button className="w-full group/btn relative overflow-hidden bg-gradient-to-r from-[#2F80ED] to-[#7C3AED] p-[1px] rounded-2xl transition-all duration-300 hover:shadow-[0_0_40px_rgba(47,128,237,0.3)]">
                            <div className="bg-[#03142A]/90 flex items-center justify-center gap-3 py-4 rounded-2xl group-hover/btn:bg-transparent transition-all duration-300 min-h-[56px]">
                                <span className="font-bold text-white uppercase tracking-widest text-xs">Sign In</span>
                                <ArrowRight size={18} className="text-white group-hover/btn:translate-x-1 transition-transform" />
                            </div>
                        </button>
                    </form>

                    <div className="relative my-10" aria-hidden="true">
                        <div className="absolute inset-0 flex items-center">
                            <hr className="w-full border-t border-white/5 m-0" />
                        </div>
                        <div className="relative flex justify-center text-[10px] uppercase tracking-widest font-bold">
                            <span className="bg-[#03142A] px-6 text-[#3A3A4E]">External Providers</span>
                        </div>
                    </div>

                    <nav className="grid grid-cols-2 gap-4" aria-label="Social login options">
                        <button className="flex items-center justify-center gap-3 py-3.5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all">
                            <Chrome size={18} className="text-[#9FB3D1]" />
                            <span className="text-[10px] font-bold uppercase tracking-widest text-[#9FB3D1]">Google</span>
                        </button>
                        <button className="flex items-center justify-center gap-3 py-3.5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all">
                            <Github size={18} className="text-[#9FB3D1]" />
                            <span className="text-[10px] font-bold uppercase tracking-widest text-[#9FB3D1]">Github</span>
                        </button>
                    </nav>

                    <footer className="text-center mt-12 text-sm">
                        <p className="text-[#5A5A6A]">
                            New here?{' '}
                            <Link
                                to="/signup"
                                className="text-white font-bold hover:text-[#2F80ED] transition-colors underline decoration-[#2F80ED]/30 decoration-2 underline-offset-8"
                            >
                                Create Account
                            </Link>
                        </p>
                    </footer>
                </motion.div>
            </section>
        </main>
    )
}
