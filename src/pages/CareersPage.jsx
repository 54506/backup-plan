import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, MapPin, Clock, ChevronDown, Briefcase, Search, Loader2, Sparkles, Rocket, Heart, Shield, Globe, Zap, Lock } from 'lucide-react'
import StarfieldBackground from '@/animations/StarfieldBackground'
import api from '@/lib/api'

const perks = [
    { title: 'Global Exposure', desc: 'Work with international clients and teams across multiple time zones.', icon: Globe, color: '#2F80ED' },
    { title: 'Rapid Growth', desc: 'Fast-track your career with clear promotion paths and skill development.', icon: Rocket, color: '#7C3AED' },
    { title: 'Health & Wellness', desc: 'Comprehensive health coverage and wellness programs for you and your family.', icon: Heart, color: '#EF4444' },
    { title: 'Modern Workspace', desc: 'State-of-the-art offices in India\'s major tech hubs with flexible options.', icon: Sparkles, color: '#F59E0B' },
    { title: 'Job Security', desc: 'Stable environment with structured governance and long-term vision.', icon: Shield, color: '#22C55E' },
    { title: 'Latest Tech', desc: 'Access to the best tools and technologies to stay ahead of the curve.', icon: Zap, color: '#38BDF8' },
]

const fallbackRoles = [
    { id: 101, title: 'Senior BPO Operations Manager', dept: 'BPO & Operations', city: 'Hyderabad', type: 'Full-time', remote: false },
    { id: 102, title: 'Full Stack React Developer', dept: 'IT & Development', city: 'Chennai', type: 'Full-time', remote: true },
    { id: 103, title: 'Human Resources Specialist', dept: 'HR & Admin', city: 'Bangalore', type: 'Full-time', remote: false },
    { id: 104, title: 'Customer Engagement Lead', dept: 'BPO & Operations', city: 'Noida', type: 'Full-time', remote: false },
    { id: 105, title: 'Network Security Engineer', dept: 'IT & Development', city: 'Indore', type: 'Full-time', remote: true },
]

const cities = ['All Cities', 'Hyderabad', 'Chennai', 'Bangalore', 'Noida', 'Indore']
const depts = ['All Departments', 'BPO & Operations', 'IT & Development', 'HR & Admin', 'Sales & Marketing', 'Management']

const FloatingElement = ({ children, duration = 4, delay = 0 }) => (
    <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ duration, repeat: Infinity, ease: "easeInOut", delay }}
    >
        {children}
    </motion.div>
)

export default function CareersPage() {
    const isLoggedIn = !!localStorage.getItem('opmw_token')
    const [allRoles, setAllRoles] = useState(fallbackRoles)
    const [loading, setLoading] = useState(true)
    const [selectedCity, setSelectedCity] = useState('All Cities')
    const [selectedDept, setSelectedDept] = useState('All Departments')
    const [searchQuery, setSearchQuery] = useState('')
    const [selectedRole, setSelectedRole] = useState(null)
    const [appForm, setAppForm] = useState({ name: '', email: '', linkedin: '', resume: '', message: '' })
    const [appSubmitted, setAppSubmitted] = useState(false)
    const [submitting, setSubmitting] = useState(false)
    const [error, setError] = useState('')

    useEffect(() => {
        const fetchRoles = async () => {
            try {
                const res = await api.get('/job-roles')
                if (res.data && res.data.length > 0) {
                    setAllRoles(res.data)
                }
            } catch (err) {
                console.error('Failed to fetch roles', err)
            } finally {
                setLoading(false)
            }
        }
        fetchRoles()
    }, [])

    const filtered = allRoles.filter(r => {
        const matchCity = selectedCity === 'All Cities' || r.city === selectedCity
        const matchDept = selectedDept === 'All Departments' || r.dept === selectedDept
        const matchSearch = r.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            r.dept.toLowerCase().includes(searchQuery.toLowerCase())
        return matchCity && matchDept && matchSearch
    })

    const handleApply = async (e) => {
        e.preventDefault()
        setSubmitting(true)
        setError('')
        try {
            await api.post('/careers/apply', {
                ...appForm,
                job_role_id: selectedRole.id
            })
            setAppSubmitted(true)
        } catch (err) {
            setError(err.response?.data?.message || 'Failed to submit application.')
        } finally {
            setSubmitting(false)
        }
    }

    return (
        <main className="relative bg-[#03142A] text-[#E6EDF7] min-h-screen">
            <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
                <StarfieldBackground />
            </div>

            {/* Hero */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="container-opmw relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <header className="text-left">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="inline-block px-4 py-1.5 rounded-full border border-[#2F80ED]/30 bg-[#2F80ED]/5 mb-6"
                            >
                                <span className="text-xs font-bold tracking-[0.3em] uppercase text-[#2F80ED]">Future of Work</span>
                            </motion.div>
                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-8 leading-[1.1]">
                                Build Your <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Legacy.</span>
                            </h1>
                            <p className="text-lg md:text-xl text-[#94A3B8] max-w-xl leading-relaxed mb-12">
                                Join a high-performance team building the next generation of business operations and technology solutions.
                            </p>
                            <div className="flex flex-wrap gap-6">
                                <a href="#roles" className="px-10 py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-500 transition-all flex items-center gap-2">
                                    Browse Roles <ArrowRight size={18} />
                                </a>
                                <Link to="/about" className="px-10 py-4 border border-white/10 text-white font-bold rounded-xl hover:bg-white/5 transition-all">
                                    Our Story
                                </Link>
                            </div>
                        </header>

                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="relative hidden lg:block"
                        >
                            <div className="relative z-10 rounded-[3rem] overflow-hidden border border-white/5 shadow-2xl">
                                <img
                                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200"
                                    alt="OPMW Team Collaboration"
                                    className="w-full aspect-[4/5] object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#03142A] via-transparent to-transparent opacity-60" />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Perks */}
            <section id="roles" className="py-24 relative z-10">
                <div className="container-opmw">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">Environment for Growth</h2>
                        <p className="text-[#94A3B8] max-w-2xl mx-auto">We provide the resources and flexibility you need to deliver your best work while maintaining a healthy balance.</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {perks.map((perk, idx) => (
                            <div key={idx} className="p-8 rounded-[2rem] bg-white/5 border border-white/10 hover:border-blue-500/30 transition-all transition-all duration-500">
                                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6" style={{ background: `${perk.color}15`, border: `1px solid ${perk.color}30` }}>
                                    <perk.icon size={28} style={{ color: perk.color }} />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">{perk.title}</h3>
                                <p className="text-sm text-[#94A3B8] leading-relaxed">{perk.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Job Roles */}
            <section className="py-24 relative z-10 border-t border-white/5">
                <div className="container-opmw">
                    <div className="flex flex-col md:flex-row gap-4 mb-12">
                        <div className="relative flex-1 group">
                            <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#475569]" />
                            <input
                                type="text"
                                placeholder="Search roles..."
                                value={searchQuery}
                                onChange={e => setSearchQuery(e.target.value)}
                                className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white/5 border border-white/5 text-white placeholder-[#475569] focus:outline-none focus:border-blue-500/40"
                            />
                        </div>
                        <div className="flex gap-4">
                            <select value={selectedCity} onChange={e => setSelectedCity(e.target.value)} className="px-6 py-4 rounded-2xl bg-[#03142A] border border-white/5 text-white focus:outline-none">
                                {cities.map(c => <option key={c} value={c}>{c}</option>)}
                            </select>
                            <select value={selectedDept} onChange={e => setSelectedDept(e.target.value)} className="px-6 py-4 rounded-2xl bg-[#03142A] border border-white/5 text-white focus:outline-none">
                                {depts.map(d => <option key={d} value={d}>{d}</option>)}
                            </select>
                        </div>
                    </div>

                    <div className="grid gap-4">
                        {loading ? (
                            <div className="flex flex-col items-center justify-center py-20 gap-4">
                                <Loader2 className="animate-spin text-blue-500" size={48} />
                                <span className="text-sm font-bold tracking-[0.2em] uppercase text-[#475569]">Syncing opportunities...</span>
                            </div>
                        ) : filtered.length === 0 ? (
                            <div className="text-center py-24 rounded-[3rem] bg-white/5 border border-dashed border-white/10">
                                <p className="text-[#94A3B8]">No positions found matching your criteria.</p>
                            </div>
                        ) : (
                            filtered.map((role) => (
                                <div key={role.id}
                                    className="group flex flex-col md:flex-row items-start md:items-center justify-between p-8 rounded-[3rem] bg-white/5 border border-white/5 hover:border-blue-500/40 transition-all cursor-pointer"
                                    onClick={() => setSelectedRole(role)}>
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">{role.title}</h3>
                                        <div className="flex flex-wrap items-center gap-6 text-xs text-[#64748B]">
                                            <span className="flex items-center gap-2 font-bold"><Briefcase size={14} className="text-blue-500" /> {role.dept}</span>
                                            <span className="flex items-center gap-2 font-bold"><MapPin size={14} className="text-blue-500" /> {role.city}</span>
                                            <span className="flex items-center gap-2 font-bold"><Clock size={14} className="text-blue-500" /> {role.type}</span>
                                        </div>
                                    </div>
                                    <button className="px-8 py-3 bg-blue-600 text-white text-sm font-bold rounded-xl md:opacity-0 group-hover:opacity-100 transition-all">
                                        Apply Now
                                    </button>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </section>

            {/* Application Modal */}
            <AnimatePresence>
                {selectedRole && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 overflow-y-auto" onClick={() => { setSelectedRole(null); setAppSubmitted(false); }}>
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-[#03142A]/80 backdrop-blur-xl" />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="relative w-full max-w-2xl bg-[#051933] border border-white/10 rounded-[3rem] p-8 md:p-12 shadow-2xl"
                            onClick={e => e.stopPropagation()}
                        >
                            <button className="absolute top-8 right-8 text-[#64748B] hover:text-white" onClick={() => { setSelectedRole(null); setAppSubmitted(false); }}>
                                <ChevronDown size={24} className="rotate-90 md:rotate-0" />
                            </button>

                            <div className="p-2">
                                {!isLoggedIn ? (
                                    <div className="text-center py-12">
                                        <div className="w-20 h-20 bg-blue-500/10 border border-blue-500/20 rounded-3xl flex items-center justify-center mx-auto mb-8">
                                            <Lock size={32} className="text-blue-400" />
                                        </div>
                                        <h2 className="text-2xl font-display font-bold text-white mb-4">Authentication Required</h2>
                                        <p className="text-[#8B9DC3] mb-8 max-w-sm mx-auto">
                                            To apply for this position and track your application status, please sign in to your OPMW account.
                                        </p>
                                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                            <Link to="/login" className="px-8 py-3.5 rounded-xl bg-blue-600 text-white font-bold hover:bg-blue-500 transition-all">
                                                Sign In
                                            </Link>
                                            <Link to="/signup" className="px-8 py-3.5 rounded-xl border border-white/10 text-white font-bold hover:bg-white/5 transition-all">
                                                Create Account
                                            </Link>
                                        </div>
                                    </div>
                                ) : appSubmitted ? (
                                    <div className="text-center py-12">
                                        <div className="w-20 h-20 rounded-3xl bg-[#22C55E]/10 border border-[#22C55E]/20 flex items-center justify-center mx-auto mb-8">
                                            <Sparkles className="text-[#22C55E]" size={40} />
                                        </div>
                                        <h3 className="text-3xl font-display font-bold text-white mb-4">Application Received!</h3>
                                        <p className="text-[#94A3B8] leading-relaxed">Our acquisition team will review your profile and get back to you within 48 hours.</p>
                                    </div>
                                ) : (
                                    <>
                                        <div className="mb-10">
                                            <span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] uppercase font-bold tracking-widest mb-4 inline-block">
                                                {selectedRole.dept}
                                            </span>
                                            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-2">{selectedRole.title}</h2>
                                            <p className="text-[#64748B] font-medium">{selectedRole.city} · {selectedRole.type}</p>
                                        </div>

                                        <form onSubmit={handleApply} className="space-y-6">
                                            {error && (
                                                <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
                                                    {error}
                                                </div>
                                            )}
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                <input required placeholder="Name" value={appForm.name} onChange={e => setAppForm({ ...appForm, name: e.target.value })} className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/5 text-white focus:outline-none focus:border-blue-500/40" />
                                                <input required type="email" placeholder="Email" value={appForm.email} onChange={e => setAppForm({ ...appForm, email: e.target.value })} className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/5 text-white focus:outline-none focus:border-blue-500/40" />
                                                <input type="url" placeholder="LinkedIn URL" value={appForm.linkedin} onChange={e => setAppForm({ ...appForm, linkedin: e.target.value })} className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/5 text-white focus:outline-none focus:border-blue-500/40" />
                                                <input type="url" placeholder="Resume URL" value={appForm.resume} onChange={e => setAppForm({ ...appForm, resume: e.target.value })} className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/5 text-white focus:outline-none focus:border-blue-500/40" />
                                            </div>
                                            <textarea rows={4} placeholder="Why OPMW?" value={appForm.message} onChange={e => setAppForm({ ...appForm, message: e.target.value })} className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/5 text-white focus:outline-none focus:border-blue-500/40 resize-none" />
                                            <button type="submit" disabled={submitting} className="w-full py-5 bg-blue-600 text-white font-bold rounded-2xl flex items-center justify-center gap-2 hover:bg-blue-500 disabled:opacity-50">
                                                {submitting ? 'Applying...' : 'Confirm Application'} <ArrowRight size={20} />
                                            </button>
                                        </form>
                                    </>
                                )}
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </main>
    )
}
