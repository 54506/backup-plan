import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { Mail, Lock, ArrowRight, Loader2, Eye, EyeOff } from 'lucide-react'
import api from '@/lib/api'

/* ─── Stripe-style animated gradient mesh ─── */
function GradientMesh() {
    return (
        <div className="absolute inset-0 overflow-hidden">
            {/* Base */}
            <div className="absolute inset-0" style={{ background: '#060B18' }} />
            {/* Orb 1 — top left, blue */}
            <motion.div
                animate={{ x: [0, 60, -30, 0], y: [0, -40, 20, 0], scale: [1, 1.15, 0.95, 1] }}
                transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute"
                style={{
                    width: 500, height: 500, borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(47,128,237,0.35) 0%, transparent 70%)',
                    top: '-10%', left: '-10%', filter: 'blur(60px)',
                }}
            />
            {/* Orb 2 — center-right, purple */}
            <motion.div
                animate={{ x: [0, -50, 30, 0], y: [0, 50, -30, 0], scale: [1, 1.2, 0.9, 1] }}
                transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
                className="absolute"
                style={{
                    width: 450, height: 450, borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(124,58,237,0.3) 0%, transparent 70%)',
                    top: '30%', right: '-5%', filter: 'blur(60px)',
                }}
            />
            {/* Orb 3 — bottom, cyan accent */}
            <motion.div
                animate={{ x: [0, 40, -20, 0], y: [0, -30, 15, 0], scale: [1, 1.1, 0.98, 1] }}
                transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 6 }}
                className="absolute"
                style={{
                    width: 350, height: 350, borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(6,182,212,0.2) 0%, transparent 70%)',
                    bottom: '-5%', left: '20%', filter: 'blur(50px)',
                }}
            />
            {/* Noise grain overlay for premium texture */}
            <div className="absolute inset-0 opacity-[0.03]"
                style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")' }}
            />
        </div>
    )
}

/* ─── Rotating orbit ring ─── */
function OrbitRing({ size, duration, delay, color, dashed }) {
    return (
        <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration, repeat: Infinity, ease: 'linear', delay }}
            className="absolute left-1/2 top-1/2"
            style={{ width: size, height: size, marginLeft: -size / 2, marginTop: -size / 2 }}
        >
            <div
                className="w-full h-full rounded-full"
                style={{
                    border: `1px ${dashed ? 'dashed' : 'solid'} ${color}`,
                    opacity: 0.25,
                }}
            />
            {/* Dot on the ring */}
            <motion.div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full"
                style={{ background: color, marginTop: -4, boxShadow: `0 0 8px ${color}` }}
            />
        </motion.div>
    )
}

export default function LoginPage() {
    const navigate = useNavigate()
    const location = useLocation()
    const stateMessage = location.state?.message
    const [form, setForm] = useState({ email: '', password: '' })
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const [showPass, setShowPass] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        setError('')
        try {
            const res = await api.post('/auth/login', form)
            localStorage.setItem('opmw_token', res.data.token)
            localStorage.setItem('opmw_user', JSON.stringify(res.data.user))
            navigate('/')
        } catch (err) {
            setError(err.response?.data?.message || 'Login failed. Please check your credentials.')
        } finally {
            setLoading(false)
        }
    }

    const f = { transition: 'all 0.2s', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }

    return (
        <main className="min-h-screen flex flex-col lg:flex-row" style={{ background: '#060B18' }}>

            {/* ══════ LEFT — Animated Mesh Panel ══════ */}
            <aside className="hidden lg:flex lg:w-1/2 relative overflow-hidden items-center justify-center">
                <GradientMesh />

                {/* Concentric orbit rings */}
                <div className="absolute inset-0 flex items-center justify-center" style={{ zIndex: 2 }}>
                    <OrbitRing size={160} duration={8} delay={0} color="#2F80ED" />
                    <OrbitRing size={260} duration={14} delay={2} color="#7C3AED" dashed />
                    <OrbitRing size={360} duration={20} delay={0} color="#2F80ED" />
                    <OrbitRing size={460} duration={28} delay={4} color="#7C3AED" dashed />
                    <OrbitRing size={560} duration={36} delay={1} color="#06B6D4" />

                    {/* Center logo mark — small and tasteful */}
                    <motion.div
                        animate={{ boxShadow: ['0 0 20px rgba(47,128,237,0.3)', '0 0 50px rgba(47,128,237,0.6)', '0 0 20px rgba(47,128,237,0.3)'] }}
                        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                        className="absolute w-20 h-20 rounded-2xl flex items-center justify-center"
                        style={{ background: 'rgba(8,20,40,0.9)', border: '1px solid rgba(47,128,237,0.4)', zIndex: 3 }}
                    >
                        <img src="/logo (2).png" alt="OPMW" className="w-12 h-12 object-contain" />
                    </motion.div>
                </div>

                {/* Bottom text */}
                <div className="absolute bottom-10 left-12 right-12 z-10 flex items-end justify-between">
                    <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-[#2F80ED] mb-2">One Place Multi Work</p>
                        <h2 className="text-2xl font-display font-bold text-white">Sign in to your<br />workspace.</h2>
                    </div>
                    <div className="text-right">
                        <div className="text-2xl font-display font-bold text-white">99.2<span className="text-[#2F80ED]">%</span></div>
                        <div className="text-[9px] uppercase tracking-widest font-bold text-[#9FB3D1]/40">Uptime SLA</div>
                    </div>
                </div>

                {/* Top-right stat */}
                <motion.div
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute top-10 right-10 z-10 px-4 py-3 rounded-2xl"
                    style={{ background: 'rgba(8,20,40,0.8)', border: '1px solid rgba(47,128,237,0.2)', backdropFilter: 'blur(12px)' }}
                >
                    <div className="text-xs font-bold text-white">90+ Agents</div>
                    <div className="text-[10px] text-[#2F80ED]/70 uppercase tracking-widest">Online Now</div>
                </motion.div>
            </aside>

            {/* ══════ RIGHT — Login Form ══════ */}
            <section className="w-full lg:w-1/2 flex items-center justify-center px-6 sm:px-12 py-16 lg:py-0 relative"
                style={{ background: '#030B1A' }}>
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 left-0 w-full h-1/2" style={{ background: 'radial-gradient(ellipse 60% 40% at 50% 0%, rgba(47,128,237,0.04) 0%, transparent 100%)' }} />
                    <div className="absolute bottom-0 right-0 w-full h-1/2" style={{ background: 'radial-gradient(ellipse 60% 40% at 50% 100%, rgba(124,58,237,0.03) 0%, transparent 100%)' }} />
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="w-full max-w-[380px] relative z-10"
                >
                    {/* Mobile logo - Enlarged, no text */}
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-2 mb-10 lg:hidden">
                        <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: 'rgba(47,128,237,0.12)', border: '1px solid rgba(47,128,237,0.25)' }}>
                            <img src="/logo (2).png" alt="" className="w-8 h-8 object-contain" />
                        </div>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="mb-10">
                        <h1 className="text-2xl sm:text-3xl font-display font-bold text-white mb-2">Welcome back</h1>
                        <p className="text-sm" style={{ color: '#5A6A7A' }}>Enter your credentials to access your workspace.</p>
                    </motion.div>

                    {stateMessage && (
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-6 p-4 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold">
                            {stateMessage}
                        </motion.div>
                    )}

                    {error && (
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-semibold">
                            {error}
                        </motion.div>
                    )}

                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <motion.div initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
                            <label className="block text-[10px] font-bold uppercase tracking-[0.25em] mb-2" style={{ color: '#3A4A5A' }}>Email address</label>
                            <div className="relative">
                                <Mail size={14} className="absolute left-4 top-1/2 -translate-y-1/2" style={{ color: '#3A4A5A' }} />
                                <input
                                    type="email" required value={form.email}
                                    onChange={e => setForm({ ...form, email: e.target.value })}
                                    placeholder="you@company.com"
                                    className="w-full pl-10 pr-4 py-3.5 rounded-xl text-sm text-white placeholder:text-[#2A3A4A] outline-none"
                                    style={f}
                                    onFocus={e => { e.target.style.borderColor = 'rgba(47,128,237,0.5)'; e.target.style.background = 'rgba(47,128,237,0.05)' }}
                                    onBlur={e => { e.target.style.borderColor = 'rgba(255,255,255,0.07)'; e.target.style.background = 'rgba(255,255,255,0.04)' }}
                                />
                            </div>
                        </motion.div>

                        <motion.div initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.28 }}>
                            <div className="flex justify-between mb-2">
                                <label className="block text-[10px] font-bold uppercase tracking-[0.25em]" style={{ color: '#3A4A5A' }}>Password</label>
                                <Link to="/forgot-password" className="text-[10px] font-bold transition-colors" style={{ color: '#2F80ED' }}
                                    onMouseEnter={e => e.target.style.color = '#fff'} onMouseLeave={e => e.target.style.color = '#2F80ED'}>
                                    Forgot?
                                </Link>
                            </div>
                            <div className="relative">
                                <Lock size={14} className="absolute left-4 top-1/2 -translate-y-1/2" style={{ color: '#3A4A5A' }} />
                                <input
                                    type={showPass ? 'text' : 'password'} required value={form.password}
                                    onChange={e => setForm({ ...form, password: e.target.value })}
                                    placeholder="••••••••"
                                    className="w-full pl-10 pr-12 py-3.5 rounded-xl text-sm text-white placeholder:text-[#2A3A4A] outline-none"
                                    style={f}
                                    onFocus={e => { e.target.style.borderColor = 'rgba(47,128,237,0.5)'; e.target.style.background = 'rgba(47,128,237,0.05)' }}
                                    onBlur={e => { e.target.style.borderColor = 'rgba(255,255,255,0.07)'; e.target.style.background = 'rgba(255,255,255,0.04)' }}
                                />
                                <button type="button" onClick={() => setShowPass(!showPass)} className="absolute right-4 top-1/2 -translate-y-1/2 transition-colors" style={{ color: '#3A4A5A' }}
                                    onMouseEnter={e => e.currentTarget.style.color = '#9FB3D1'} onMouseLeave={e => e.currentTarget.style.color = '#3A4A5A'}>
                                    {showPass ? <EyeOff size={14} /> : <Eye size={14} />}
                                </button>
                            </div>
                        </motion.div>

                        <motion.button
                            initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.36 }}
                            whileHover={{ scale: 1.015, boxShadow: '0 8px 30px rgba(47,128,237,0.3)' }}
                            whileTap={{ scale: 0.98 }}
                            disabled={loading}
                            className="w-full py-3.5 rounded-xl font-bold text-sm text-white flex items-center justify-center gap-2 mt-2 disabled:opacity-50"
                            style={{ background: 'linear-gradient(135deg, #1A6ED8 0%, #2F80ED 50%, #7C3AED 100%)', backgroundSize: '200% 100%' }}
                        >
                            {loading ? <Loader2 size={17} className="animate-spin" /> : <><span>Sign In</span><ArrowRight size={15} /></>}
                        </motion.button>
                    </form>

                    {/* Divider */}
                    <div className="flex items-center gap-4 my-8">
                        <div className="flex-1 h-px" style={{ background: 'rgba(255,255,255,0.06)' }} />
                        <span className="text-[10px] uppercase tracking-widest font-bold" style={{ color: '#2A3A4A' }}>New here?</span>
                        <div className="flex-1 h-px" style={{ background: 'rgba(255,255,255,0.06)' }} />
                    </div>

                    <Link to="/signup"
                        className="w-full py-3 rounded-xl font-bold text-sm text-center block transition-all"
                        style={{ border: '1px solid rgba(255,255,255,0.08)', color: '#9FB3D1' }}
                        onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(47,128,237,0.4)'; e.currentTarget.style.color = '#fff' }}
                        onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.color = '#9FB3D1' }}
                    >
                        Create a free account →
                    </Link>
                </motion.div>
            </section>
        </main>
    )
}
