import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, ExternalLink, ChevronDown, Loader2 } from 'lucide-react'
import StarfieldBackground from '@/animations/StarfieldBackground'
import api from '@/lib/api'

export default function ProjectsPage() {
    const [caseStudies, setCaseStudies] = useState([])
    const [loading, setLoading] = useState(true)
    const [expanded, setExpanded] = useState(null)

    useEffect(() => {
        const fetchCases = async () => {
            try {
                const res = await api.get('/case-studies')
                setCaseStudies(res.data)
            } catch (err) {
                console.error('Failed to fetch case studies', err)
            } finally {
                setLoading(false)
            }
        }
        fetchCases()
    }, [])

    if (loading) {
        return (
            <div className="min-h-screen bg-[#03142A] flex flex-col items-center justify-center gap-6">
                <Loader2 className="animate-spin text-[#2F80ED]" size={50} />
                <span className="text-sm font-bold uppercase tracking-[0.3em] text-[#5A5A6A]">Loading Case Studies...</span>
            </div>
        )
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
                                Success Stories
                            </motion.div>
                            <motion.h1
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="font-display font-bold mb-6 leading-[1.1]"
                                style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', color: '#F0F0F5' }}
                            >
                                Good Work.
                                <br />
                                <span className="text-gradient">Big Results.</span>
                            </motion.h1>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="text-xl text-[#9FB3D1] max-w-xl leading-relaxed mb-10"
                            >
                                See how we help businesses grow and work better across the world.
                            </motion.p>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="flex flex-wrap gap-4"
                            >
                                <a href="#case-studies" className="btn-primary py-4 px-10">
                                    See Our Work <ArrowRight size={18} />
                                </a>
                            </motion.div>
                        </header>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, x: 40 }}
                            animate={{ opacity: 1, scale: 1, x: 0 }}
                            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                            className="relative mt-12 lg:mt-0"
                        >
                            <figure className="relative z-10 rounded-[2.5rem] overflow-hidden border border-white/10 shadow-[0_0_100px_rgba(47,128,237,0.15)] m-0">
                                <img
                                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200"
                                    alt="Corporate Scale"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-tr from-[#03142A]/40 to-transparent" />
                            </figure>
                            <div className="absolute -top-10 -right-10 w-64 h-64 bg-[#7C3AED]/10 blur-[100px] rounded-full" />
                        </motion.div>
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-32" style={{ background: 'linear-gradient(to top, #03142A, transparent)' }} />
            </section>

            {/* Case Study List */}
            <section id="case-studies" className="section-pad" style={{ background: 'linear-gradient(135deg, #03142A 0%, #071C36 100%)' }}>
                <div className="container-opmw max-w-4xl">
                    <div className="space-y-5">
                        {caseStudies.map((cs, i) => (
                            <motion.article
                                key={cs.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-60px' }}
                                transition={{ duration: 0.55, delay: i * 0.08 }}
                                className="rounded-2xl overflow-hidden cursor-pointer"
                                style={{
                                    background: 'rgba(47,128,237,0.03)',
                                    border: expanded === cs.id ? '1px solid rgba(47,128,237,0.3)' : '1px solid rgba(255,255,255,0.07)',
                                    boxShadow: expanded === cs.id ? '0 0 30px rgba(47,128,237,0.1)' : 'none',
                                    transition: 'all 0.3s ease',
                                }}
                                onClick={() => setExpanded(expanded === cs.id ? null : cs.id)}
                            >
                                {/* Header */}
                                <header className="flex items-start justify-between p-6 gap-4">
                                    <div className="flex-1">
                                        <div className="flex items-center gap-3 mb-3">
                                            <div className="section-label" style={{ fontSize: '10px' }}>{cs.category}</div>
                                            <span className="text-xs" style={{ color: '#3A3A4E' }}>{cs.industry}</span>
                                        </div>
                                        <h2 className="font-display font-bold text-xl mb-2" style={{ color: '#F0F0F5' }}>{cs.title}</h2>
                                        <div className="flex flex-wrap gap-2">
                                            {cs.tags.map(t => (
                                                <span key={t} className="text-[10px] px-2 py-0.5 rounded-full" style={{ background: 'rgba(47,128,237,0.08)', border: '1px solid rgba(47,128,237,0.15)', color: '#2F80ED' }}>{t}</span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="flex-shrink-0 flex flex-col items-end gap-2">
                                        <div className="flex items-center gap-2 text-xs" style={{ color: '#5A5A6A' }}>
                                            <span>{cs.client}</span>
                                        </div>
                                        <motion.div
                                            animate={{ rotate: expanded === cs.id ? 180 : 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <ChevronDown size={18} style={{ color: '#5A5A6A' }} />
                                        </motion.div>
                                    </div>
                                </header>

                                {/* Expanded Detail */}
                                <AnimatePresence>
                                    {expanded === cs.id && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                                        >
                                            <div
                                                className="px-6 pb-6"
                                                style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}
                                            >
                                                <div className="pt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
                                                    <div className="space-y-5">
                                                        <div>
                                                            <h3 className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: '#3A3A4E' }}>Challenge</h3>
                                                            <p className="text-sm leading-relaxed" style={{ color: '#7A7A8A' }}>{cs.challenge}</p>
                                                        </div>
                                                        <div>
                                                            <h3 className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: '#3A3A4E' }}>Solution</h3>
                                                            <p className="text-sm leading-relaxed" style={{ color: '#7A7A8A' }}>{cs.solution}</p>
                                                        </div>
                                                        <div className="flex gap-4 text-xs" style={{ color: '#5A5A6A' }}>
                                                            <span>⏱ {cs.duration}</span>
                                                            <span>🌍 {cs.region}</span>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <h3 className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: '#3A3A4E' }}>Results</h3>
                                                        <div className="grid grid-cols-2 gap-3">
                                                            {cs.results.map(r => (
                                                                <div key={r.label} className="p-4 rounded-xl" style={{ background: 'rgba(47,128,237,0.06)', border: '1px solid rgba(47,128,237,0.12)' }}>
                                                                    <div className="font-display font-bold text-xl mb-0.5" style={{ color: '#4DA3FF' }}>{r.val}</div>
                                                                    <div className="text-[10px]" style={{ color: '#5A5A6A' }}>{r.label}</div>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.article>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-center mt-12"
                    >
                        <Link to="/contact" className="btn-primary inline-flex">
                            Discuss Your Project <ArrowRight size={15} />
                        </Link>
                    </motion.div>
                </div>
            </section>
        </main>
    )
}
