import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, MapPin, Clock, ChevronDown, Briefcase, Search } from 'lucide-react'
import StarfieldBackground from '@/animations/StarfieldBackground'

const allRoles = [
    { id: 1, title: 'Senior React Engineer', dept: 'Engineering', city: 'Hyderabad', type: 'Full-time', remote: false },
    { id: 2, title: 'BPO Operations Manager', dept: 'Operations', city: 'Hyderabad', type: 'Full-time', remote: false },
    { id: 3, title: 'Voice Process Lead', dept: 'Voice Ops', city: 'Dubai', type: 'Full-time', remote: false },
    { id: 4, title: 'Node.js Backend Engineer', dept: 'Engineering', city: 'Hyderabad', type: 'Full-time', remote: true },
    { id: 5, title: 'HRMS Product Manager', dept: 'Product', city: 'Hyderabad', type: 'Full-time', remote: true },
    { id: 6, title: 'Enterprise Sales Executive', dept: 'Sales', city: 'London', type: 'Full-time', remote: false },
    { id: 7, title: 'UI/UX Designer', dept: 'Design', city: 'Hyderabad', type: 'Full-time', remote: true },
    { id: 8, title: 'DevOps / Cloud Engineer', dept: 'Engineering', city: 'Hyderabad', type: 'Full-time', remote: true },
    { id: 9, title: 'Quality Assurance Analyst', dept: 'Operations', city: 'Dubai', type: 'Full-time', remote: false },
    { id: 10, title: 'Customer Success Manager', dept: 'Success', city: 'Singapore', type: 'Full-time', remote: false },
    { id: 11, title: 'HR Business Partner', dept: 'HR', city: 'Hyderabad', type: 'Full-time', remote: false },
    { id: 12, title: 'Data Analyst — Workforce Intelligence', dept: 'Analytics', city: 'Hyderabad', type: 'Full-time', remote: true },
]

const cities = ['All Cities', 'Hyderabad', 'Dubai', 'London', 'Singapore']
const depts = ['All Departments', 'Engineering', 'Operations', 'Voice Ops', 'Product', 'Sales', 'Design', 'HR', 'Success', 'Analytics']

const perks = [
    { emoji: '🌍', title: 'Global Opportunities', desc: 'Work across 12 offices worldwide' },
    { emoji: '📈', title: 'Fast Growth', desc: 'Promote from within — always' },
    { emoji: '🎓', title: 'L&D Budget', desc: '₹50K/year for learning & certifications' },
    { emoji: '🏥', title: 'Health Benefits', desc: 'Complete health & mental wellness coverage' },
    { emoji: '🏠', title: 'Flexible Work', desc: 'Hybrid & remote options for eligible roles' },
    { emoji: '✈️', title: 'Travel Perks', desc: 'Team offsites and global meetups' },
]

export default function CareersPage() {
    const [selectedCity, setSelectedCity] = useState('All Cities')
    const [selectedDept, setSelectedDept] = useState('All Departments')
    const [searchQuery, setSearchQuery] = useState('')
    const [selectedRole, setSelectedRole] = useState(null)
    const [appForm, setAppForm] = useState({ name: '', email: '', linkedin: '', resume: '', message: '' })
    const [appSubmitted, setAppSubmitted] = useState(false)

    const filtered = allRoles.filter(r => {
        const matchCity = selectedCity === 'All Cities' || r.city === selectedCity
        const matchDept = selectedDept === 'All Departments' || r.dept === selectedDept
        const matchSearch = r.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            r.dept.toLowerCase().includes(searchQuery.toLowerCase())
        return matchCity && matchDept && matchSearch
    })

    const handleApply = (e) => {
        e.preventDefault()
        setAppSubmitted(true)
    }

    return (
        <div className="pt-16">
            {/* Hero */}
            <section
                className="relative min-h-[50vh] flex items-center overflow-hidden"
                style={{ background: 'linear-gradient(160deg, #0B0B0F 0%, #0D0718 50%, #0B0B0F 100%)' }}
            >
                <StarfieldBackground />
                <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(92,47,191,0.15) 0%, transparent 80%)' }} />
                <div className="container-opmw relative z-10 py-24 text-center">
                    <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="section-label mx-auto mb-6">
                        Join OPMW
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="font-display font-bold mb-5"
                        style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', color: '#F0F0F5' }}
                    >
                        Build the Future of
                        <br /><span className="text-gradient">Enterprise Operations.</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="max-w-xl mx-auto text-base mb-8"
                        style={{ color: '#7A7A8A' }}
                    >
                        {filtered.length} open roles across Engineering, Operations, Sales, Product, and more — in 12 cities worldwide.
                    </motion.p>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-32" style={{ background: 'linear-gradient(to top, #0B0B0F, transparent)' }} />
            </section>

            {/* Perks */}
            <section className="section-pad" style={{ background: '#0B0B0F' }}>
                <div className="container-opmw">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <div className="section-label mx-auto mb-5">Why OPMW</div>
                        <h2 className="font-display font-bold" style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', color: '#F0F0F5' }}>
                            Life at OPMW
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-20">
                        {perks.map((p, i) => (
                            <motion.div
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
                            </motion.div>
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
                                onFocus={e => e.target.style.borderColor = 'rgba(124,58,237,0.35)'}
                                onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.08)'}
                            />
                        </div>

                        {/* City dropdown */}
                        <select
                            value={selectedCity}
                            onChange={e => setSelectedCity(e.target.value)}
                            className="px-4 py-3 rounded-xl text-sm outline-none"
                            style={{ background: 'rgba(11,11,15,0.9)', border: '1px solid rgba(255,255,255,0.08)', color: '#F0F0F5', minWidth: '160px' }}
                        >
                            {cities.map(c => <option key={c}>{c}</option>)}
                        </select>

                        {/* Dept dropdown */}
                        <select
                            value={selectedDept}
                            onChange={e => setSelectedDept(e.target.value)}
                            className="px-4 py-3 rounded-xl text-sm outline-none"
                            style={{ background: 'rgba(11,11,15,0.9)', border: '1px solid rgba(255,255,255,0.08)', color: '#F0F0F5', minWidth: '190px' }}
                        >
                            {depts.map(d => <option key={d}>{d}</option>)}
                        </select>
                    </div>

                    {/* Role List */}
                    <div className="space-y-3">
                        {filtered.length === 0 ? (
                            <div className="text-center py-16" style={{ color: '#5A5A6A' }}>
                                No roles match your filters. <button onClick={() => { setSelectedCity('All Cities'); setSelectedDept('All Departments'); setSearchQuery('') }} style={{ color: '#9F6EFF' }} className="underline ml-1">Clear filters</button>
                            </div>
                        ) : (
                            filtered.map((role, i) => (
                                <motion.div
                                    key={role.id}
                                    initial={{ opacity: 0, y: 12 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.04 }}
                                    className="flex items-center justify-between p-5 rounded-2xl group cursor-pointer transition-all duration-200"
                                    style={{
                                        background: 'rgba(255,255,255,0.02)',
                                        border: '1px solid rgba(255,255,255,0.07)',
                                    }}
                                    onMouseEnter={e => {
                                        e.currentTarget.style.background = 'rgba(124,58,237,0.06)'
                                        e.currentTarget.style.borderColor = 'rgba(124,58,237,0.2)'
                                    }}
                                    onMouseLeave={e => {
                                        e.currentTarget.style.background = 'rgba(255,255,255,0.02)'
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
                                        onClick={(e) => { e.stopPropagation(); setSelectedRole(role); setAppSubmitted(false) }}
                                    >
                                        Apply <ArrowRight size={12} />
                                    </button>
                                </motion.div>
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
                            border: '1px solid rgba(124,58,237,0.25)',
                            boxShadow: '0 0 60px rgba(124,58,237,0.15)',
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
                                                onFocus={e => e.target.style.borderColor = 'rgba(124,58,237,0.35)'}
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
                                            onFocus={e => e.target.style.borderColor = 'rgba(124,58,237,0.35)'}
                                            onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.08)'}
                                        />
                                    </div>
                                    <button type="submit" className="btn-primary w-full justify-center">
                                        Submit Application <ArrowRight size={14} />
                                    </button>
                                </form>
                            </>
                        )}
                    </motion.div>
                </div>
            )}
        </div>
    )
}
