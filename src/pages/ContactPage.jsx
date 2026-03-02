import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Mail, Phone, Clock, MapPin, Building2, MessageSquare, Calendar } from 'lucide-react'
import StarfieldBackground from '@/animations/StarfieldBackground'

import api from '@/lib/api'

const offices = [
    {
        city: 'Hyderabad',
        flag: '🇮🇳',
        role: 'Global HQ',
        address: 'HITEC City, Madhapur, Hyderabad — 500081, India',
        phone: '+91 40 1234 5678',
        email: 'hyd@opmw.io',
        timezone: 'IST — UTC+5:30',
        hours: 'Mon–Fri: 9AM – 7PM IST',
    },
    {
        city: 'Dubai',
        flag: '🇦🇪',
        role: 'Middle East Ops',
        address: 'Business Bay Tower, Dubai, UAE',
        phone: '+971 4 XXX XXXX',
        email: 'dubai@opmw.io',
        timezone: 'GST — UTC+4',
        hours: 'Sun–Thu: 9AM – 6PM GST',
    },
    {
        city: 'London',
        flag: '🇬🇧',
        role: 'Europe HQ',
        address: 'Canary Wharf, London E14, UK',
        phone: '+44 20 XXXX XXXX',
        email: 'london@opmw.io',
        timezone: 'GMT/BST',
        hours: 'Mon–Fri: 9AM – 6PM GMT',
    },
]

const inquiryTypes = [
    'Growing Your Business',
    'Try Our HR Software',
    'Business Support',
    'Customer Support',
    'Website and App Help',
    'Join Our Team',
    'Press / Media',
    'Other',
]

export default function ContactPage() {
    const [form, setForm] = useState({
        name: '', email: '', company: '', inquiry_type: '', message: '',
    })
    const [submitted, setSubmitted] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [error, setError] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsSubmitting(true)
        setError('')

        try {
            await api.post('/contact', form)
            setSubmitted(true)
        } catch (err) {
            setError(err.response?.data?.message || 'Something went wrong. Please try again later.')
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <main className="pt-16">
            {/* Hero */}
            <section
                className="relative min-h-[45vh] flex items-center overflow-hidden"
                style={{ background: 'linear-gradient(135deg, #03142A 0%, #071C36 100%)' }}
            >
                <StarfieldBackground />
                <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(30,95,175,0.14) 0%, transparent 80%)' }} />
                <header className="container-opmw relative z-10 py-24 text-center">
                    <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="section-label mx-auto mb-6">
                        Contact Us
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="font-display font-bold mb-4"
                        style={{ fontSize: 'clamp(2rem, 5vw, 3.75rem)', color: '#F0F0F5' }}
                    >
                        Let's Build Something
                        <br /><span className="text-gradient">Great Together.</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="max-w-xl mx-auto text-base"
                        style={{ color: '#7A7A8A' }}
                    >
                        Whether you want to work with us, see our software, or just have a question — our team will get back to you within 2 hours.
                    </motion.p>
                </header>
                <div className="absolute bottom-0 left-0 right-0 h-32" style={{ background: 'linear-gradient(to top, #03142A, transparent)' }} />
            </section>

            {/* Trust Strip */}
            <div
                className="py-5"
                style={{
                    background: 'rgba(47,128,237,0.05)',
                    borderTop: '1px solid rgba(47,128,237,0.12)',
                    borderBottom: '1px solid rgba(47,128,237,0.12)',
                }}
            >
                <div className="container-opmw flex flex-wrap items-center justify-center gap-8 text-xs" style={{ color: '#5A5A6A' }}>
                    {[
                        { icon: MessageSquare, label: 'Fast help: Usually within 2 hours' },
                        { icon: Calendar, label: 'See our software in action within 2 days' },
                        { icon: Building2, label: 'A team just for your business' },
                        { icon: Clock, label: 'Support available 24/7' },
                    ].map(({ icon: Icon, label }) => (
                        <div key={label} className="flex items-center gap-2">
                            <Icon size={13} style={{ color: '#133B6A' }} />
                            {label}
                        </div>
                    ))}
                </div>
            </div>

            {/* Contact Form + Info */}
            <section className="section-pad" style={{ background: 'linear-gradient(135deg, #03142A 0%, #071C36 100%)' }}>
                <div className="container-opmw">
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
                        {/* Form — 3/5 */}
                        <motion.div
                            initial={{ opacity: 0, x: -24 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="lg:col-span-3"
                        >
                            <h2 className="font-display font-bold text-2xl mb-8" style={{ color: '#F0F0F5' }}>
                                Send Us a Message
                            </h2>

                            <div className="glass-card p-8">
                                {submitted ? (
                                    <div className="text-center py-10">
                                        <div className="text-5xl mb-5">✅</div>
                                        <h3 className="font-display font-bold text-2xl mb-3" style={{ color: '#F0F0F5' }}>Thank you!</h3>
                                        <p className="text-base leading-relaxed" style={{ color: '#7A7A8A' }}>
                                            We got your message. Our team will get back to you in about 2 hours. Please check your email soon.
                                        </p>
                                    </div>
                                ) : (
                                    <>
                                        {error && (
                                            <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-semibold mb-6">
                                                {error}
                                            </div>
                                        )}
                                        <form onSubmit={handleSubmit} className="space-y-6">
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                                {[
                                                    { label: 'Full Name *', key: 'name', type: 'text', ph: 'Emma Johnson' },
                                                    { label: 'Work Email *', key: 'email', type: 'email', ph: 'emma@company.com' },
                                                ].map(f => (
                                                    <div key={f.key}>
                                                        <label className="block text-xs font-semibold mb-2" style={{ color: '#A0A0B0' }}>{f.label}</label>
                                                        <input
                                                            type={f.type}
                                                            required
                                                            placeholder={f.ph}
                                                            value={form[f.key]}
                                                            onChange={e => setForm({ ...form, [f.key]: e.target.value })}
                                                            className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200"
                                                            style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', color: '#F0F0F5' }}
                                                            onFocus={e => e.target.style.borderColor = 'rgba(47,128,237,0.4)'}
                                                            onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.08)'}
                                                        />
                                                    </div>
                                                ))}
                                            </div>

                                            <div>
                                                <label className="block text-xs font-semibold mb-2" style={{ color: '#A0A0B0' }}>Company</label>
                                                <input
                                                    type="text"
                                                    placeholder="Acme Corp"
                                                    value={form.company}
                                                    onChange={e => setForm({ ...form, company: e.target.value })}
                                                    className="w-full px-4 py-3 rounded-xl text-sm outline-none"
                                                    style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', color: '#F0F0F5' }}
                                                    onFocus={e => e.target.style.borderColor = 'rgba(47,128,237,0.4)'}
                                                    onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.08)'}
                                                />
                                            </div>

                                            <div>
                                                <label className="block text-xs font-semibold mb-2" style={{ color: '#A0A0B0' }}>Type of Inquiry *</label>
                                                <select
                                                    required
                                                    value={form.inquiry_type}
                                                    onChange={e => setForm({ ...form, inquiry_type: e.target.value })}
                                                    className="w-full px-4 py-3 rounded-xl text-sm outline-none"
                                                    style={{ background: '#0D2A4D', border: '1px solid rgba(255,255,255,0.08)', color: form.inquiry_type ? '#F0F0F5' : '#5A5A6A' }}
                                                >
                                                    <option value="">Select inquiry type...</option>
                                                    {inquiryTypes.map(t => <option key={t}>{t}</option>)}
                                                </select>
                                            </div>

                                            <div>
                                                <label className="block text-xs font-semibold mb-2" style={{ color: '#A0A0B0' }}>Message *</label>
                                                <textarea
                                                    required
                                                    rows={5}
                                                    placeholder="Tell us about your needs, project scope, or questions..."
                                                    value={form.message}
                                                    onChange={e => setForm({ ...form, message: e.target.value })}
                                                    className="w-full px-4 py-3 rounded-xl text-sm outline-none resize-none"
                                                    style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', color: '#F0F0F5' }}
                                                    onFocus={e => e.target.style.borderColor = 'rgba(47,128,237,0.4)'}
                                                    onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.08)'}
                                                />
                                            </div>

                                            <button type="submit" disabled={isSubmitting} className="btn-primary w-full justify-center py-4 disabled:opacity-50">
                                                {isSubmitting ? 'Sending...' : 'Send Message'} <ArrowRight size={15} />
                                            </button>

                                            <p className="text-center text-xs" style={{ color: '#3A3A4E' }}>
                                                We respect your privacy. No spam — ever.
                                            </p>
                                        </form>
                                    </>
                                )}
                            </div>
                        </motion.div>

                        {/* Right info — 2/5 */}
                        <motion.div
                            initial={{ opacity: 0, x: 24 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="lg:col-span-2 space-y-5"
                        >
                            <h2 className="font-display font-bold text-2xl" style={{ color: '#F0F0F5' }}>Our Offices</h2>

                            {offices.map((office) => (
                                <article
                                    key={office.city}
                                    className="rounded-2xl p-6"
                                    style={{
                                        background: 'rgba(47,128,237,0.03)',
                                        border: '1px solid rgba(255,255,255,0.07)',
                                    }}
                                >
                                    <div className="flex items-center gap-3 mb-3">
                                        <span className="text-2xl">{office.flag}</span>
                                        <div>
                                            <div className="font-display font-bold text-base" style={{ color: '#F0F0F5' }}>{office.city}</div>
                                            <div className="text-xs" style={{ color: '#2F80ED' }}>{office.role}</div>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <div className="flex items-start gap-2.5">
                                            <MapPin size={12} style={{ color: '#3A3A4E', marginTop: 2, flexShrink: 0 }} />
                                            <span className="text-xs leading-snug" style={{ color: '#5A5A6A' }}>{office.address}</span>
                                        </div>
                                        <div className="flex items-center gap-2.5">
                                            <Phone size={12} style={{ color: '#3A3A4E', flexShrink: 0 }} />
                                            <a href={`tel:${office.phone}`} className="text-xs transition-colors" style={{ color: '#5A5A6A' }}
                                                onMouseEnter={e => e.target.style.color = '#2F80ED'}
                                                onMouseLeave={e => e.target.style.color = '#5A5A6A'}
                                            >{office.phone}</a>
                                        </div>
                                        <div className="flex items-center gap-2.5">
                                            <Mail size={12} style={{ color: '#3A3A4E', flexShrink: 0 }} />
                                            <a href={`mailto:${office.email}`} className="text-xs transition-colors" style={{ color: '#5A5A6A' }}
                                                onMouseEnter={e => e.target.style.color = '#2F80ED'}
                                                onMouseLeave={e => e.target.style.color = '#5A5A6A'}
                                            >{office.email}</a>
                                        </div>
                                        <div className="flex items-center gap-2.5">
                                            <Clock size={12} style={{ color: '#3A3A4E', flexShrink: 0 }} />
                                            <span className="text-xs" style={{ color: '#3A3A4E' }}>{office.hours}</span>
                                        </div>
                                    </div>
                                </article>
                            ))}

                            {/* Enterprise email box */}
                            <div
                                className="rounded-2xl p-6"
                                style={{
                                    background: 'linear-gradient(135deg, rgba(45,23,96,0.4) 0%, rgba(30,16,64,0.3) 100%)',
                                    border: '1px solid rgba(47,128,237,0.2)',
                                }}
                            >
                                <div className="text-lg mb-2">✦</div>
                                <div className="font-semibold text-sm mb-1.5" style={{ color: '#F0F0F5' }}>Enterprise Partnerships</div>
                                <p className="text-xs mb-3" style={{ color: '#5A5A6A' }}>
                                    For strategic partnerships and enterprise contracts, contact our dedicated partnership team directly.
                                </p>
                                <a
                                    href="mailto:enterprise@opmw.io"
                                    className="text-xs font-semibold transition-colors"
                                    style={{ color: '#2F80ED' }}
                                >
                                    enterprise@opmw.io →
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </main>
    )
}
