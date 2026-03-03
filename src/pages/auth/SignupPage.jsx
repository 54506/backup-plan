import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link, useNavigate } from 'react-router-dom'
import { Mail, Lock, User, ArrowRight, Loader2, Eye, EyeOff, CheckCircle2 } from 'lucide-react'
import api from '@/lib/api'

/* ─── Vercel-inspired dark grid + glow ─── */
function SceneLeft() {
    return (
        <div className="absolute inset-0 overflow-hidden">
            {/* Base */}
            <div className="absolute inset-0" style={{ background: '#050C1C' }} />
            {/* Perspective grid — fades to bottom */}
            <svg className="absolute inset-0 w-full h-full opacity-[0.07]" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                <defs>
                    <pattern id="pg" width="60" height="60" patternUnits="userSpaceOnUse">
                        <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgb(100,150,255)" strokeWidth="0.8" />
                    </pattern>
                    <linearGradient id="fade" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0" stopColor="white" stopOpacity="1" />
                        <stop offset="1" stopColor="white" stopOpacity="0" />
                    </linearGradient>
                    <mask id="m"><rect width="100%" height="100%" fill="url(#fade)" /></mask>
                </defs>
                <rect width="100%" height="100%" fill="url(#pg)" mask="url(#m)" />
            </svg>
            {/* Glows */}
            <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.25, 0.4, 0.25] }}
                transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute" style={{ width: 600, height: 600, top: '-15%', left: '-20%', borderRadius: '50%', background: 'radial-gradient(circle, rgba(47,128,237,0.3) 0%, transparent 65%)', filter: 'blur(60px)' }} />
            <motion.div animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.35, 0.2] }}
                transition={{ duration: 13, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
                className="absolute" style={{ width: 500, height: 500, bottom: '-10%', right: '-10%', borderRadius: '50%', background: 'radial-gradient(circle, rgba(124,58,237,0.28) 0%, transparent 65%)', filter: 'blur(60px)' }} />
        </div>
    )
}

const steps = [
    { id: 1, label: 'Your info', fields: ['name', 'email'] },
    { id: 2, label: 'Set password', fields: ['password'] },
]

const checks = [
    '90+ expert agents online',
    'Custom IT solutions delivered fast',
    'HRMS built for growing teams',
]

export default function SignupPage() {
    const navigate = useNavigate()
    const [form, setForm] = useState({ name: '', email: '', password: '' })
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const [showPass, setShowPass] = useState(false)
    const [step, setStep] = useState(1)

    const handleSubmit = async (e) => {
        if (step === 1) {
            e.preventDefault()
            setStep(2)
            return
        }
        e.preventDefault()
        setLoading(true)
        setError('')
        try {
            await api.post('/auth/register', form)
            // Redirect to login after successful registration
            navigate('/login', { state: { message: 'Registration successful! Please sign in.' } })
        } catch (err) {
            setError(err.response?.data?.message || 'Registration failed. Please try again.')
        } finally {
            setLoading(false)
        }
    }
    const f = { background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)', transition: 'all 0.2s' }
    const onFocus = e => { e.target.style.borderColor = 'rgba(124,58,237,0.5)'; e.target.style.background = 'rgba(124,58,237,0.05)' }
    const onBlur = e => { e.target.style.borderColor = 'rgba(255,255,255,0.07)'; e.target.style.background = 'rgba(255,255,255,0.04)' }

    return (
        <main className="min-h-screen flex flex-col lg:flex-row" style={{ background: '#050C1C' }}>

            {/* ══════ LEFT — Scene ══════ */}
            <aside className="hidden lg:flex lg:w-1/2 relative overflow-hidden flex-col justify-between p-12 xl:p-16">
                <SceneLeft />

                {/* Animated particles */}
                {[...Array(6)].map((_, i) => (
                    <motion.div
                        key={i}
                        animate={{ y: [0, -120, 0], x: [0, (i % 2 === 0 ? 30 : -30), 0], opacity: [0, 0.6, 0] }}
                        transition={{ duration: 6 + i * 1.5, repeat: Infinity, ease: 'easeInOut', delay: i * 1.1 }}
                        className="absolute w-1 h-1 rounded-full"
                        style={{
                            left: `${15 + i * 12}%`, bottom: '15%',
                            background: i % 2 === 0 ? '#2F80ED' : '#7C3AED',
                            boxShadow: `0 0 6px ${i % 2 === 0 ? '#2F80ED' : '#7C3AED'}`,
                        }}
                    />
                ))}

                {/* Card mockup — premium UI preview */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="relative z-10 flex-1 flex items-center justify-center"
                >
                    <div className="w-full max-w-sm">
                        {/* Fake dashboard card */}
                        <motion.div
                            animate={{ y: [0, -8, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                            className="p-6 rounded-2xl mb-4"
                            style={{ background: 'rgba(15,30,60,0.9)', border: '1px solid rgba(47,128,237,0.18)', backdropFilter: 'blur(20px)' }}
                        >
                            <div className="flex items-center justify-between mb-5">
                                <div>
                                    <div className="text-[10px] uppercase tracking-widest font-bold mb-1" style={{ color: '#2F80ED' }}>Operations Dashboard</div>
                                    <div className="text-lg font-display font-bold text-white">This week</div>
                                </div>
                                <div className="w-8 h-8 rounded-xl flex items-center justify-center" style={{ background: 'rgba(47,128,237,0.15)', border: '1px solid rgba(47,128,237,0.25)' }}>
                                    <img src="/logo (2).png" alt="" className="w-5 h-5 object-contain" />
                                </div>
                            </div>
                            {/* Mini bar chart */}
                            <div className="flex items-end gap-1.5 mb-4" style={{ height: 50 }}>
                                {[0.4, 0.7, 0.5, 0.9, 0.6, 0.8, 1].map((h, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ scaleY: 0 }}
                                        animate={{ scaleY: 1 }}
                                        transition={{ delay: 0.6 + i * 0.08, duration: 0.5 }}
                                        className="flex-1 rounded-sm origin-bottom"
                                        style={{ height: `${h * 100}%`, background: i === 6 ? 'linear-gradient(to top, #2F80ED, #7C3AED)' : 'rgba(47,128,237,0.2)' }}
                                    />
                                ))}
                            </div>
                            <div className="flex justify-between">
                                <div>
                                    <div className="text-xl font-display font-bold text-white">1,240</div>
                                    <div className="text-[10px] uppercase tracking-widest" style={{ color: '#4A5A6A' }}>Interactions</div>
                                </div>
                                <div className="text-right">
                                    <div className="text-xl font-display font-bold" style={{ color: '#22C55E' }}>+12.4%</div>
                                    <div className="text-[10px] uppercase tracking-widest" style={{ color: '#4A5A6A' }}>vs last week</div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Secondary row */}
                        <div className="grid grid-cols-2 gap-3">
                            {[
                                { label: 'Agents Active', val: '87', color: '#2F80ED' },
                                { label: 'QA Score', val: '99.2%', color: '#7C3AED' },
                            ].map(s => (
                                <motion.div
                                    key={s.label}
                                    animate={{ y: [0, -5, 0] }}
                                    transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: Math.random() * 2 }}
                                    className="p-4 rounded-xl"
                                    style={{ background: 'rgba(15,30,60,0.85)', border: `1px solid ${s.color}20`, backdropFilter: 'blur(12px)' }}
                                >
                                    <div className="text-lg font-display font-bold" style={{ color: s.color }}>{s.val}</div>
                                    <div className="text-[10px] uppercase tracking-widest mt-1" style={{ color: '#4A5A6A' }}>{s.label}</div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Bottom */}
                <div className="relative z-10">
                    <h2 className="text-2xl font-display font-bold text-white mb-4">One account.<br />All of OPMW.</h2>
                    <div className="space-y-2">
                        {checks.map((c, i) => (
                            <motion.div
                                key={c}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.5 + i * 0.12 }}
                                className="flex items-center gap-2.5"
                            >
                                <CheckCircle2 size={13} style={{ color: '#2F80ED', flexShrink: 0 }} />
                                <span className="text-xs" style={{ color: '#7A8A9A' }}>{c}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </aside>

            {/* ══════ RIGHT — Form ══════ */}
            <section className="w-full lg:w-1/2 flex items-center justify-center px-6 sm:px-12 py-16 lg:py-0 relative" style={{ background: '#030A18' }}>
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 right-0 w-full h-1/2" style={{ background: 'radial-gradient(ellipse 60% 40% at 80% 0%, rgba(124,58,237,0.05) 0%, transparent 100%)' }} />
                </div>

                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
                    className="w-full max-w-[380px] relative z-10">

                    {/* Mobile logo - Enlarged, no text */}
                    <div className="flex items-center gap-2 mb-10 lg:hidden focus:outline-none">
                        <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: 'rgba(124,58,237,0.12)', border: '1px solid rgba(124,58,237,0.25)' }}>
                            <img src="/logo (2).png" alt="" className="w-8 h-8 object-contain" />
                        </div>
                    </div>

                    <div className="mb-8">
                        <h1 className="text-2xl sm:text-3xl font-display font-bold text-white mb-2">Create your account</h1>
                        <p className="text-sm" style={{ color: '#5A6A7A' }}>Get started with OPMW in under a minute.</p>
                    </div>

                    {/* Step indicator */}
                    <div className="flex items-center gap-2 mb-8">
                        {steps.map((s, i) => (
                            <div key={s.id} className="flex items-center gap-2">
                                <motion.div
                                    animate={{ scale: step === s.id ? 1.1 : 1 }}
                                    className="w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold"
                                    style={{
                                        background: step >= s.id ? 'linear-gradient(135deg,#7C3AED,#2F80ED)' : 'rgba(255,255,255,0.05)',
                                        color: step >= s.id ? 'white' : '#3A4A5A',
                                    }}
                                >{s.id}</motion.div>
                                {i < steps.length - 1 && <motion.div className="h-px w-10 rounded-full" style={{ background: step > 1 ? '#7C3AED' : 'rgba(255,255,255,0.07)' }} />}
                            </div>
                        ))}
                        <span className="ml-1 text-[10px] uppercase tracking-widest" style={{ color: '#3A4A5A' }}>
                            {steps[step - 1].label}
                        </span>
                    </div>

                    {error && (
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-semibold">
                            {error}
                        </motion.div>
                    )}

                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <AnimatePresence mode="wait">
                            {step === 1 ? (
                                <motion.div key="s1" initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -16 }} className="space-y-4">
                                    <div>
                                        <label className="block text-[10px] font-bold uppercase tracking-[0.25em] mb-2" style={{ color: '#3A4A5A' }}>Full Name</label>
                                        <div className="relative">
                                            <User size={14} className="absolute left-4 top-1/2 -translate-y-1/2" style={{ color: '#3A4A5A' }} />
                                            <input type="text" required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="John Smith"
                                                className="w-full pl-10 pr-4 py-3.5 rounded-xl text-sm text-white placeholder:text-[#2A3A4A] outline-none" style={f} onFocus={onFocus} onBlur={onBlur} />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-[10px] font-bold uppercase tracking-[0.25em] mb-2" style={{ color: '#3A4A5A' }}>Work Email</label>
                                        <div className="relative">
                                            <Mail size={14} className="absolute left-4 top-1/2 -translate-y-1/2" style={{ color: '#3A4A5A' }} />
                                            <input type="email" required value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} placeholder="you@company.com"
                                                className="w-full pl-10 pr-4 py-3.5 rounded-xl text-sm text-white placeholder:text-[#2A3A4A] outline-none" style={f} onFocus={onFocus} onBlur={onBlur} />
                                        </div>
                                    </div>
                                </motion.div>
                            ) : (
                                <motion.div key="s2" initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -16 }}>
                                    <div>
                                        <label className="block text-[10px] font-bold uppercase tracking-[0.25em] mb-2" style={{ color: '#3A4A5A' }}>Create Password</label>
                                        <div className="relative">
                                            <Lock size={14} className="absolute left-4 top-1/2 -translate-y-1/2" style={{ color: '#3A4A5A' }} />
                                            <input type={showPass ? 'text' : 'password'} required value={form.password} onChange={e => setForm({ ...form, password: e.target.value })} placeholder="Min. 8 characters"
                                                className="w-full pl-10 pr-12 py-3.5 rounded-xl text-sm text-white placeholder:text-[#2A3A4A] outline-none" style={f} onFocus={onFocus} onBlur={onBlur} />
                                            <button type="button" onClick={() => setShowPass(!showPass)} className="absolute right-4 top-1/2 -translate-y-1/2" style={{ color: '#3A4A5A' }}
                                                onMouseEnter={e => e.currentTarget.style.color = '#9FB3D1'} onMouseLeave={e => e.currentTarget.style.color = '#3A4A5A'}>
                                                {showPass ? <EyeOff size={14} /> : <Eye size={14} />}
                                            </button>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        <div className="flex gap-3 pt-1">
                            {step === 2 && (
                                <motion.button initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }}
                                    type="button" onClick={() => setStep(1)}
                                    className="px-5 py-3.5 rounded-xl font-bold text-sm"
                                    style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', color: '#7A8A9A' }}
                                    onMouseEnter={e => e.currentTarget.style.color = '#fff'} onMouseLeave={e => e.currentTarget.style.color = '#7A8A9A'}
                                >← Back</motion.button>
                            )}
                            <motion.button
                                whileHover={{ scale: 1.015, boxShadow: '0 8px 30px rgba(124,58,237,0.25)' }}
                                whileTap={{ scale: 0.98 }}
                                disabled={loading}
                                className="flex-1 py-3.5 rounded-xl font-bold text-sm text-white flex items-center justify-center gap-2 disabled:opacity-50"
                                style={{ background: 'linear-gradient(135deg, #7C3AED 0%, #2F80ED 100%)' }}
                            >
                                {loading ? <Loader2 size={17} className="animate-spin" /> : step === 1 ? <><span>Continue</span><ArrowRight size={15} /></> : <><span>Create Account</span><ArrowRight size={15} /></>}
                            </motion.button>
                        </div>
                    </form>

                    <div className="flex items-center gap-4 my-8">
                        <div className="flex-1 h-px" style={{ background: 'rgba(255,255,255,0.05)' }} />
                        <span className="text-[10px] uppercase tracking-widest font-bold" style={{ color: '#2A3A4A' }}>Have an account?</span>
                        <div className="flex-1 h-px" style={{ background: 'rgba(255,255,255,0.05)' }} />
                    </div>

                    <Link to="/login"
                        className="w-full py-3 rounded-xl font-bold text-sm text-center block transition-all"
                        style={{ border: '1px solid rgba(255,255,255,0.07)', color: '#9FB3D1' }}
                        onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(124,58,237,0.4)'; e.currentTarget.style.color = '#fff' }}
                        onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'; e.currentTarget.style.color = '#9FB3D1' }}
                    >Sign in to existing account →</Link>
                </motion.div>
            </section>
        </main>
    )
}
