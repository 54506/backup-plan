import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Mail, Phone, Clock, MapPin, Building2, MessageSquare, Calendar, Lock } from 'lucide-react'
import StarfieldBackground from '@/animations/StarfieldBackground'

import api from '@/lib/api'

const offices = [
    {
        city: 'Hyderabad',
        flag: '🇮🇳',
        role: 'Global Headquarters',
        address: 'H.No 2-48/12, Plot No 12, P Gopi Building, Gachibowli, Serlingampally, Hyderabad, India',
        phone: '+91 40 1234 5678',
        email: 'hyd@opmw.io',
        timezone: 'IST — UTC+5:30',
        hours: 'Mon–Sat: 9AM – 8PM IST',
    },
    {
        city: 'Chennai',
        flag: '🇮🇳',
        role: 'Technology Hub',
        address: 'Tidel Park, Rajiv Gandhi Salai, Taramani, Chennai, India',
        phone: '+91 44 2234 5678',
        email: 'chennai@opmw.io',
        timezone: 'IST — UTC+5:30',
        hours: 'Mon–Sat: 9AM – 8PM IST',
    },
    {
        city: 'Bangalore',
        flag: '🇮🇳',
        role: 'Innovation Center',
        address: 'ITPL Main Rd, Whitefield, Bangalore, India',
        phone: '+91 80 3234 5678',
        email: 'blr@opmw.io',
        timezone: 'IST — UTC+5:30',
        hours: 'Mon–Sat: 9AM – 8PM IST',
    },
    {
        city: 'Noida',
        flag: '🇮🇳',
        role: 'North India Ops',
        address: 'Sector 62, Noida, Uttar Pradesh, India',
        phone: '+91 120 4234 5678',
        email: 'noida@opmw.io',
        timezone: 'IST — UTC+5:30',
        hours: 'Mon–Sat: 9AM – 8PM IST',
    },
    {
        city: 'Indore',
        flag: '🇮🇳',
        role: 'Central India Hub',
        address: 'Vijay Nagar, Indore, Madhya Pradesh, India',
        phone: '+91 731 5234 5678',
        email: 'indore@opmw.io',
        timezone: 'IST — UTC+5:30',
        hours: 'Mon–Sat: 9AM – 8PM IST',
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
    const isLoggedIn = !!localStorage.getItem('opmw_token')
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
        <main className="bg-[#03142A]">
            {/* Hero */}
            <section
                className="relative min-h-[38vh] flex items-center overflow-hidden"
                style={{ background: 'linear-gradient(135deg, #03142A 0%, #071C36 100%)' }}
            >
                <div className="absolute inset-0 z-0 opacity-40">
                    <StarfieldBackground />
                </div>

                <div className="container-opmw relative z-10 pt-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <p className="text-[#2F80ED] font-bold uppercase tracking-[0.4em] text-[10px] mb-4">Contact OPMW</p>
                        <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
                            Let's build your <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">operations layer.</span>
                        </h1>
                        <p className="max-w-xl text-[#8B9DC3] text-lg leading-relaxed">
                            Have a question about our services, software, or potential partnership?
                            Our dedicated team is ready to help you scale.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Quick Stats/Links Bar */}
            <div className="border-y border-white/5 bg-[#051428]/50 backdrop-blur-md py-6">
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

            {/* Contact Form + Image */}
            <section className="py-24" style={{ background: 'linear-gradient(135deg, #03142A 0%, #071C36 100%)' }}>
                <div className="container-opmw">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                        {/* Form Side */}
                        <motion.div
                            initial={{ opacity: 0, x: -25 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-white/5 border border-white/10 rounded-[2.5rem] p-8 md:p-12 backdrop-blur-xl relative overflow-hidden"
                        >
                            {!isLoggedIn ? (
                                <div className="text-center py-12 px-6">
                                    <div className="w-20 h-20 bg-blue-500/10 border border-blue-500/20 rounded-3xl flex items-center justify-center mx-auto mb-8">
                                        <Lock size={32} className="text-blue-400" />
                                    </div>
                                    <h2 className="text-2xl font-display font-bold text-white mb-4">Authentication Required</h2>
                                    <p className="text-[#8B9DC3] mb-8 max-w-sm mx-auto">
                                        To maintain the security of our communications and provide personalized support, please sign in to contact our team.
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
                            ) : submitted ? (
                                <div className="text-center py-10 px-6">
                                    <div className="w-20 h-20 bg-green-500/10 border border-green-500/20 rounded-3xl flex items-center justify-center mx-auto mb-8">
                                        <div className="text-4xl">✅</div>
                                    </div>
                                    <h3 className="font-display font-bold text-3xl mb-4 text-white">Message Sent</h3>
                                    <p className="text-[#8B9DC3] leading-relaxed mb-8">
                                        Thank you for reaching out. We've received your inquiry and a specialist will contact you within 2 hours.
                                    </p>
                                    <button onClick={() => setSubmitted(false)} className="text-[#2F80ED] font-bold text-sm hover:text-white transition-colors">
                                        Send another message
                                    </button>
                                </div>
                            ) : (
                                <>
                                    <h2 className="text-2xl font-display font-bold text-white mb-8">Send us a message</h2>
                                    {error && (
                                        <div className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
                                            {error}
                                        </div>
                                    )}
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                            <div>
                                                <label className="block text-xs font-bold text-[#475569] uppercase tracking-widest mb-2 ml-1">Name</label>
                                                <input required placeholder="Your name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
                                                    className="w-full px-6 py-4 rounded-2xl bg-[#03142A]/60 border border-white/5 text-white placeholder-[#334155] focus:border-blue-500/40 focus:outline-none transition-all" />
                                            </div>
                                            <div>
                                                <label className="block text-xs font-bold text-[#475569] uppercase tracking-widest mb-2 ml-1">Email</label>
                                                <input required type="email" placeholder="you@company.com" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })}
                                                    className="w-full px-6 py-4 rounded-2xl bg-[#03142A]/60 border border-white/5 text-white placeholder-[#334155] focus:border-blue-500/40 focus:outline-none transition-all" />
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-xs font-bold text-[#475569] uppercase tracking-widest mb-2 ml-1">Company</label>
                                            <input placeholder="Your organization" value={form.company} onChange={e => setForm({ ...form, company: e.target.value })}
                                                className="w-full px-6 py-4 rounded-2xl bg-[#03142A]/60 border border-white/5 text-white placeholder-[#334155] focus:border-blue-500/40 focus:outline-none transition-all" />
                                        </div>

                                        <div>
                                            <label className="block text-xs font-bold text-[#475569] uppercase tracking-widest mb-2 ml-1">Inquiry Type</label>
                                            <select required value={form.inquiry_type} onChange={e => setForm({ ...form, inquiry_type: e.target.value })}
                                                className="w-full px-6 py-4 rounded-2xl bg-[#03142A]/60 border border-white/5 text-white focus:border-blue-500/40 focus:outline-none transition-all">
                                                <option value="" className="bg-[#03142A]">Select inquiry type...</option>
                                                {inquiryTypes.map(t => <option key={t} value={t} className="bg-[#03142A]">{t}</option>)}
                                            </select>
                                        </div>

                                        <div>
                                            <label className="block text-xs font-bold text-[#475569] uppercase tracking-widest mb-2 ml-1">Message</label>
                                            <textarea required rows={5} placeholder="Tell us more about your requirements..."
                                                value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
                                                className="w-full px-6 py-4 rounded-2xl bg-[#03142A]/60 border border-white/5 text-white placeholder-[#334155] focus:border-blue-500/40 focus:outline-none transition-all resize-none" />
                                        </div>

                                        <button type="submit" disabled={isSubmitting} className="w-full py-5 rounded-2xl bg-blue-600 text-white font-bold flex items-center justify-center gap-2 hover:bg-blue-500 transition-all disabled:opacity-50">
                                            {isSubmitting ? 'Sending...' : 'Send Message'} <ArrowRight size={18} />
                                        </button>
                                    </form>
                                </>
                            )}
                        </motion.div>

                        {/* Image panel — right half */}
                        <motion.div
                            initial={{ opacity: 0, x: 25 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative h-full min-h-[500px] rounded-[2.5rem] overflow-hidden group"
                        >
                            <img
                                src="/assets/contact_side.png"
                                alt="OPMW workspace"
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#03142A] via-transparent to-transparent" />

                            {/* Floating info card */}
                            <div className="absolute bottom-8 left-8 right-8">
                                <div className="p-8 rounded-[2rem] bg-white/5 border border-white/10 backdrop-blur-xl">
                                    <div className="text-xs font-bold uppercase tracking-widest mb-3 text-blue-400">💬 Global Support</div>
                                    <div className="text-xl font-display font-bold text-white mb-2">Direct Channel</div>
                                    <p className="text-sm text-[#8B9DC3] mb-4">Enterprise clients receive a dedicated Slack channel and account lead.</p>
                                    <div className="flex items-center gap-4 text-xs font-bold text-white">
                                        <div className="flex items-center gap-1.5"><Mail size={14} className="text-blue-400" /> enterprise@opmw.io</div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Offices Section */}
            <section className="py-24 border-t border-white/5">
                <div className="container-opmw">
                    <div className="text-center mb-16">
                        <p className="text-[#2F80ED] font-bold uppercase tracking-[0.4em] text-[10px] mb-4">Global Presence</p>
                        <h2 className="text-3xl md:text-5xl font-display font-bold text-white">Our Offices</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {offices.map((office, idx) => (
                            <motion.div
                                key={office.city}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                viewport={{ once: true }}
                                className="p-8 rounded-[2rem] bg-white/5 border border-white/10 hover:border-blue-500/30 transition-all group"
                            >
                                <div className="text-3xl mb-6">{office.flag}</div>
                                <h3 className="text-xl font-display font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">{office.city}</h3>
                                <p className="text-xs font-bold text-blue-500 uppercase tracking-widest mb-6">{office.role}</p>

                                <div className="space-y-4">
                                    <div className="flex gap-3 text-sm text-[#8B9DC3]">
                                        <MapPin size={16} className="shrink-0 text-[#3A4A5A]" />
                                        <span>{office.address}</span>
                                    </div>
                                    <div className="flex gap-3 text-sm text-[#8B9DC3]">
                                        <Clock size={16} className="shrink-0 text-[#3A4A5A]" />
                                        <span>{office.hours}</span>
                                    </div>
                                    <div className="flex gap-3 text-sm text-[#8B9DC3]">
                                        <Mail size={16} className="shrink-0 text-[#3A4A5A]" />
                                        <span>{office.email}</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    )
}
