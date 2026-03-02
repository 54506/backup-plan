import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, MapPin, Clock, ChevronDown, Briefcase, Search, Loader2 } from 'lucide-react'
import StarfieldBackground from '@/animations/StarfieldBackground'
import api from '@/lib/api'

export default function CareersPage() {
    const [allRoles, setAllRoles] = useState([])
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
                setAllRoles(res.data)
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
        <main className="pt-16">
            {/* Hero */}
            <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-[#03142A]">
                <StarfieldBackground />
                <div className="container-opmw relative z-10 py-20">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <header className="text-left">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="section-label mb-6"
                            >
                                Join Our Team
                            </motion.div>
                            <motion.h1
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="font-display font-bold mb-6 leading-[1.1]"
                                style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', color: '#F0F0F5' }}
                            >
                                Help Us
                                <br />
                                <span className="text-gradient">Grow.</span>
                            </motion.h1>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="text-xl text-[#9FB3D1] max-w-xl leading-relaxed mb-10"
                            >
                                Join our team of experts and engineers working around the world to build great things.
                            </motion.p>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="flex flex-wrap gap-4"
                            >
                                <a href="#roles" className="btn-primary py-4 px-10">
                                    View Open Roles <ArrowRight size={18} />
                                </a>
                                <Link to="/about" className="btn-secondary py-4 px-10">
                                    Our Culture
                                </Link>
                            </motion.div>
                        </header>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 40 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                            className="relative w-full max-w-lg mx-auto lg:max-w-none"
                        >
                            <figure className="relative z-10 rounded-[2.5rem] overflow-hidden border border-white/10 shadow-[0_0_100px_rgba(47,128,237,0.15)] m-0">
                                <img
                                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200"
                                    alt="OPMW Team"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-tr from-[#03142A]/40 to-transparent" />
                            </figure>
                            <div className="absolute -top-10 -right-10 w-64 h-64 bg-[#2F80ED]/10 blur-[100px] rounded-full" />
                        </motion.div>
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-32" style={{ background: 'linear-gradient(to top, #03142A, transparent)' }} />
            </section>

            {/* Perks */}
            <section className="section-pad" style={{ background: 'linear-gradient(135deg, #03142A 0%, #071C36 100%)' }}>
                <div className="container-opmw">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <div className="section-label mx-auto mb-5">Why Join Us</div>
                        <h2 className="font-display font-bold" style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', color: '#F0F0F5' }}>
                            Working with Us
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-20">
                        {perks.map((p, i) => (
                            <motion.article
                                key={p.title}
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.07 }}
                                className="glass-card p-5"
                            >
                                <div className="text-2xl mb-3">{p.emoji}</div>
                                <div className="font-semibold text-sm mb-1" style={{ color: '#E0E0E8' }}>{p.title}</div>
                                <div className="text-xs" style={{ color: '#5A5A6A' }}>{p.desc}</div>
                            </motion.article>
                        ))}
                    </div>

                    {/* Filters */}
                    <div className="mb-8 flex flex-col sm:flex-row gap-3">
                        {/* Search */}
                        <div className="relative flex-1">
                            <Search size={14} className="absolute left-4 top-1/2 -translate-y-1/2" style={{ color: '#5A5A6A' }} />
                            <input
                                type="text"
                                placeholder="Search roles..."
                                value={searchQuery}
                                onChange={e => setSearchQuery(e.target.value)}
                                className="w-full pl-10 pr-4 py-3 rounded-xl text-sm outline-none"
                                style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', color: '#F0F0F5' }}
                                onFocus={e => e.target.style.borderColor = 'rgba(47,128,237,0.35)'}
                                onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.08)'}
                            />
                        </div>

                        {/* City dropdown */}
                        <select
                            value={selectedCity}
                            onChange={e => setSelectedCity(e.target.value)}
                            className="px-4 py-3 rounded-xl text-sm outline-none"
                            style={{ background: '#0D2A4D', border: '1px solid rgba(255,255,255,0.08)', color: '#F0F0F5', minWidth: '160px' }}
                        >
                            {cities.map(c => <option key={c}>{c}</option>)}
                        </select>

                        {/* Dept dropdown */}
                        <select
                            value={selectedDept}
                            onChange={e => setSelectedDept(e.target.value)}
                            className="px-4 py-3 rounded-xl text-sm outline-none"
                            style={{ background: '#0D2A4D', border: '1px solid rgba(255,255,255,0.08)', color: '#F0F0F5', minWidth: '190px' }}
                        >
                            {depts.map(d => <option key={d}>{d}</option>)}
                        </select>
                    </div>

                    {/* Role List */}
                    <div id="roles" className="space-y-3">
                        {loading ? (
                            <div className="flex flex-col items-center justify-center py-20 gap-4">
                                <Loader2 className="animate-spin text-[#2F80ED]" size={40} />
                                <span className="text-xs uppercase tracking-widest text-[#5A5A6A] font-bold">Fetching latest roles...</span>
                            </div>
                        ) : filtered.length === 0 ? (
                            <div className="text-center py-16" style={{ color: '#5A5A6A' }}>
                                No roles match your filters. <button onClick={() => { setSelectedCity('All Cities'); setSelectedDept('All Departments'); setSearchQuery('') }} style={{ color: '#2F80ED' }} className="underline ml-1">Clear filters</button>
                            </div>
                        ) : (
                            filtered.map((role, i) => (
                                <motion.article
                                    key={role.id}
                                    initial={{ opacity: 0, y: 12 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.04 }}
                                    className="flex items-center justify-between p-5 rounded-2xl group cursor-pointer transition-all duration-200"
                                    style={{
                                        background: 'rgba(47,128,237,0.03)',
                                        border: '1px solid rgba(255,255,255,0.07)',
                                    }}
                                    onMouseEnter={e => {
                                        e.currentTarget.style.background = 'rgba(47,128,237,0.06)'
                                        e.currentTarget.style.borderColor = 'rgba(47,128,237,0.2)'
                                    }}
                                    onMouseLeave={e => {
                                        e.currentTarget.style.background = 'rgba(47,128,237,0.03)'
                                        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'
                                    }}
                                    onClick={() => setSelectedRole(role)}
                                >
                                    <div>
                                        <h3 className="font-semibold text-base mb-1.5" style={{ color: '#F0F0F5' }}>{role.title}</h3>
                                        <div className="flex items-center gap-3 text-xs" style={{ color: '#5A5A6A' }}>
                                            <span className="flex items-center gap-1"><Briefcase size={11} /> {role.dept}</span>
                                            <span className="flex items-center gap-1"><MapPin size={11} /> {role.city}</span>
                                            <span className="flex items-center gap-1"><Clock size={11} /> {role.type}</span>
                                            {role.remote && (
                                                <span className="px-2 py-0.5 rounded-full text-[10px]" style={{ background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.2)', color: '#22C55E' }}>
                                                    Remote eligible
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                    <button
                                        className="btn-primary text-xs py-2 px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex-shrink-0"
                                        onClick={(e) => { e.stopPropagation(); setSelectedRole(role); setAppSubmitted(false); setError(''); }}
                                    >
                                        Apply <ArrowRight size={12} />
                                    </button>
                                </motion.article>
                            ))
                        )}
                    </div>
                </div>
            </section>

            {/* Application Form Modal-like */}
            {selectedRole && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center p-4"
                    style={{ background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(8px)' }}
                    onClick={() => { setSelectedRole(null); setAppSubmitted(false) }}
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 16 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        className="w-full max-w-lg rounded-2xl p-8 relative"
                        style={{
                            background: '#0F0F14',
                            border: '1px solid rgba(47,128,237,0.25)',
                            boxShadow: '0 0 60px rgba(47,128,237,0.15)',
                            maxHeight: '90vh',
                            overflowY: 'auto',
                        }}
                        onClick={e => e.stopPropagation()}
                    >
                        <button
                            className="absolute top-4 right-4 text-xs"
                            style={{ color: '#5A5A6A' }}
                            onClick={() => { setSelectedRole(null); setAppSubmitted(false) }}
                        >
                            ✕ Close
                        </button>

                        {appSubmitted ? (
                            <div className="text-center py-8">
                                <div className="text-4xl mb-4">🎉</div>
                                <h3 className="font-display font-bold text-xl mb-2" style={{ color: '#F0F0F5' }}>Application Submitted!</h3>
                                <p style={{ color: '#7A7A8A' }}>Our HR team will review your application and reach out within 5 business days.</p>
                            </div>
                        ) : (
                            <>
                                <div className="section-label mb-3" style={{ fontSize: '10px' }}>{selectedRole.dept}</div>
                                <h2 className="font-display font-bold text-xl mb-1" style={{ color: '#F0F0F5' }}>{selectedRole.title}</h2>
                                <p className="text-sm mb-6" style={{ color: '#5A5A6A' }}>{selectedRole.city} · {selectedRole.type}</p>

                                <form onSubmit={handleApply} className="space-y-4">
                                    {error && (
                                        <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-semibold">
                                            {error}
                                        </div>
                                    )}
                                    {[
                                        { label: 'Full Name', key: 'name', type: 'text', ph: 'Your full name' },
                                        { label: 'Email Address', key: 'email', type: 'email', ph: 'you@email.com' },
                                        { label: 'LinkedIn Profile', key: 'linkedin', type: 'url', ph: 'https://linkedin.com/in/...' },
                                        { label: 'Resume Link / Portfolio', key: 'resume', type: 'url', ph: 'Google Drive or portfolio URL' },
                                    ].map(f => (
                                        <div key={f.key}>
                                            <label className="block text-xs font-semibold mb-1.5" style={{ color: '#A0A0B0' }}>{f.label}</label>
                                            <input
                                                type={f.type}
                                                required
                                                placeholder={f.ph}
                                                value={appForm[f.key]}
                                                onChange={e => setAppForm({ ...appForm, [f.key]: e.target.value })}
                                                className="w-full px-4 py-3 rounded-xl text-sm outline-none"
                                                style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', color: '#F0F0F5' }}
                                                onFocus={e => e.target.style.borderColor = 'rgba(47,128,237,0.35)'}
                                                onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.08)'}
                                            />
                                        </div>
                                    ))}
                                    <div>
                                        <label className="block text-xs font-semibold mb-1.5" style={{ color: '#A0A0B0' }}>Cover Note</label>
                                        <textarea
                                            rows={3}
                                            placeholder="Why are you excited about this role?"
                                            value={appForm.message}
                                            onChange={e => setAppForm({ ...appForm, message: e.target.value })}
                                            className="w-full px-4 py-3 rounded-xl text-sm outline-none resize-none"
                                            style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', color: '#F0F0F5' }}
                                            onFocus={e => e.target.style.borderColor = 'rgba(47,128,237,0.35)'}
                                            onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.08)'}
                                        />
                                    </div>
                                    <button type="submit" disabled={submitting} className="btn-primary w-full justify-center disabled:opacity-50">
                                        {submitting ? 'Submitting...' : 'Submit Application'} <ArrowRight size={14} />
                                    </button>
                                </form>
                            </>
                        )}
                    </motion.div>
                </div>
            )}
        </main>
    )
}
