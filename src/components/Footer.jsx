import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Twitter, Linkedin, Github, ArrowRight, Mail, Phone, MapPin, Globe, Shield, Loader2, CheckCircle2 } from 'lucide-react'
import { motion } from 'framer-motion'
import api from '@/lib/api'

const footerLinks = {
    Company: [
        { label: 'About OPMW', href: '/about#about' },
        { label: 'Our Mission', href: '/about#mission' },
        { label: 'Leadership', href: '/about#leadership' },
        { label: 'Careers', href: '/careers' },
    ],
    Services: [
        { label: 'BPO Services', href: '/services' },
        { label: 'Voice Operations', href: '/services' },
        { label: 'Web Development', href: '/services' },
        { label: 'HRMS SaaS', href: '/hrms' },
        { label: 'Cloud Solutions', href: '/services' },
    ],
    Resources: [
        { label: 'Case Studies', href: '/projects' },
        { label: 'Privacy Policy', href: '/privacy' },
        { label: 'Terms of Service', href: '/terms' },
    ],
}

const socials = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'X / Twitter' },
    { icon: Github, href: '#', label: 'GitHub' },
]

const offices = [
    { city: 'Hyderabad', country: 'HQ', flag: '🇮🇳' },
    { city: 'Noida', country: 'North India', flag: '🇮🇳' },
    { city: 'Indore', country: 'Central India', flag: '🇮🇳' },
    { city: 'Bangalore', country: 'Innovation Center', flag: '🇮🇳' },
]

export default function Footer() {
    const [email, setEmail] = useState('')
    const [status, setStatus] = useState('idle') // idle, loading, success, error
    const [message, setMessage] = useState('')

    const handleSubscribe = async (e) => {
        e.preventDefault()
        setStatus('loading')
        try {
            await api.post('/newsletter/subscribe', { email })
            setStatus('success')
            setMessage('Thank you for subscribing!')
            setEmail('')
        } catch (err) {
            setStatus('error')
            setMessage(err.response?.data?.message || 'Something went wrong. Please try again.')
        }
    }

    return (
        <footer
            role="contentinfo"
            className="footer-root"
            style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
        >
            {/* ── Call to Action Band ── */}
            <div
                className="relative overflow-hidden"
                style={{
                    background: 'linear-gradient(135deg, #03142A 0%, #081D36 50%, #03142A 100%)',
                    borderBottom: '1px solid rgba(47,128,237,0.2)',
                }}
            >
                <div className="container-opmw py-8 flex flex-col lg:flex-row items-center justify-between gap-10">
                    <div className="text-center lg:text-left">
                        <motion.h2
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="font-display text-3xl md:text-4xl font-bold mb-3 tracking-tight"
                            style={{ color: '#E6EDF7' }}
                        >
                            Ready to Grow Your Business?
                        </motion.h2>
                        <p style={{ color: '#9FB3D1', opacity: 0.8 }} className="text-lg max-w-2xl">
                            Use OPMW to organize your work and help your business grow.
                        </p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
                        <Link to="/contact" className="btn-solid-premium px-8 py-3.5 rounded-md flex items-center justify-center gap-2">
                            Contact Us <ArrowRight size={18} />
                        </Link>
                        <Link to="/services" className="px-8 py-3.5 rounded-md border border-white/10 hover:bg-white/5 transition-colors text-white font-medium flex items-center justify-center">
                            Learn More
                        </Link>
                    </div>
                </div>
                {/* Visual Accent */}
                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#2F80ED]/40 to-transparent" />
            </div>

            {/* ── Main Footer Area ── */}
            <div
                className="relative"
                style={{ background: '#03142A' }}
            >
                <div className="container-opmw pt-8 pb-6">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-8">
                        {/* Brand Space */}
                        <div className="lg:col-span-4 space-y-4">
                            <div className="space-y-4">
                                <Link to="/" className="inline-flex items-center gap-3 mb-2 group">
                                    <div>
                                        <img src="/logo (2).png" alt="" className="w-30 h-30 object-contain logo-cutout" />
                                    </div>
                                    {/* <span className="font-display font-bold text-white tracking-widest text-xl">OPMW</span> */}
                                </Link>
                                <div className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#2F80ED] opacity-80">
                                    One Place. All Your Work.
                                </div>

                                <p className="text-sm leading-relaxed max-w-sm" style={{ color: '#9FB3D1', opacity: 0.6 }}>
                                    OPMW helps businesses with support services, HR software, and building great websites. We make work easier for teams everywhere.
                                </p>

                                <div className="flex items-center gap-4">
                                    {socials.map(({ icon: Icon, href, label }) => (
                                        <a
                                            key={label}
                                            href={href}
                                            aria-label={label}
                                            className="w-10 h-10 rounded-full flex items-center justify-center border border-white/10 text-[#9FB3D1] hover:text-white hover:border-[#2F80ED]/50 hover:bg-[#2F80ED]/5 transition-all"
                                        >
                                            <Icon size={16} />
                                        </a>
                                    ))}
                                </div>

                                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-lg bg-white/5 border border-white/10">
                                    <Shield size={14} className="text-[#2F80ED]" />
                                    <span className="text-[11px] font-bold uppercase tracking-widest text-[#E6EDF7]/60">Safe and Secure Systems</span>
                                </div>
                            </div>
                        </div>

                        {/* Navigation Grid */}
                        <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
                            {Object.entries(footerLinks).map(([group, links]) => (
                                <div key={group}>
                                    <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#2F80ED] mb-6 opacity-80">
                                        {group}
                                    </h3>
                                    <ul className="space-y-4">
                                        {links.map(link => (
                                            <li key={link.label}>
                                                <Link
                                                    to={link.href}
                                                    className="text-sm text-[#9FB3D1] hover:text-white transition-colors flex items-center gap-2 group/item"
                                                >
                                                    <span className="w-1 h-1 rounded-full bg-[#2F80ED] scale-0 group-hover/item:scale-100 transition-transform" />
                                                    {link.label}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}

                            {/* Newsletter Column */}
                            <div className="lg:col-span-1">
                                <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#2F80ED] mb-6 opacity-80">
                                    Stay Connected
                                </h3>
                                <p className="text-xs text-[#9FB3D1]/60 leading-relaxed mb-6">
                                    Get our monthly newsletter for business news and tips.
                                </p>
                                <form className="space-y-3" onSubmit={handleSubscribe}>
                                    <div className="relative group">
                                        <input
                                            type="email"
                                            required
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="your@email.com"
                                            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-xs text-[#E6EDF7] focus:outline-none focus:border-[#2F80ED]/50 transition-all placeholder:text-[#9FB3D1]/30"
                                        />
                                        <div className="absolute inset-0 rounded-lg bg-[#2F80ED]/5 blur-[2px] opacity-0 group-focus-within:opacity-100 transition-opacity pointer-events-none" />
                                    </div>
                                    <button
                                        type="submit"
                                        disabled={status === 'loading'}
                                        className="w-full bg-[#2F80ED] hover:bg-[#2F80ED]/90 text-white font-bold py-3 rounded-lg text-[10px] uppercase tracking-widest transition-all shadow-lg shadow-blue-500/10 disabled:opacity-50"
                                    >
                                        {status === 'loading' ? 'Signing Up...' : 'Sign Up'}
                                    </button>
                                    {status === 'success' && (
                                        <div className="flex items-center gap-2 text-[10px] text-green-400 font-bold uppercase tracking-wider mt-2">
                                            <CheckCircle2 size={12} /> {message}
                                        </div>
                                    )}
                                    {status === 'error' && (
                                        <div className="text-[10px] text-red-400 font-bold uppercase tracking-wider mt-2">
                                            {message}
                                        </div>
                                    )}
                                </form>
                            </div>
                        </div>
                    </div>

                    {/* ── Global Footprint ── */}
                    <div className="pt-6 pb-4 border-t border-white/5 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
                        <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
                            {offices.map(({ city, flag, country }) => (
                                <div key={city} className="flex items-center gap-2 text-xs font-medium text-[#9FB3D1]/70 group cursor-default">
                                    <span className="grayscale group-hover:grayscale-0 transition-all">{flag}</span>
                                    <span className="group-hover:text-white transition-colors">{city} <span className="text-[10px] opacity-40 ml-1">({country})</span></span>
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-wrap items-center gap-6">
                            <a href="mailto:enterprise@opmw.io" className="flex items-center gap-2 text-xs font-medium text-[#9FB3D1]/70 hover:text-white transition-colors">
                                <Mail size={14} className="text-[#2F80ED]" /> enterprise@opmw.io
                            </a>
                            <a href="tel:+911234567890" className="flex items-center gap-2 text-xs font-medium text-[#9FB3D1]/70 hover:text-white transition-colors">
                                <Globe size={14} className="text-[#2F80ED]" /> global.support
                            </a>
                        </div>
                    </div>

                    {/* ── Legal & Certification ── */}
                    <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
                        <div className="flex items-center gap-3">
                            <p className="text-[11px] font-medium text-[#9FB3D1]/40">
                                © {new Date().getFullYear()} OPMW Platform. All rights reserved. Registered Trademark.
                            </p>
                        </div>
                        <div className="flex items-center gap-6 text-[10px] font-bold uppercase tracking-widest text-[#9FB3D1]/30">
                            <span>Security Protocols v4.2</span>
                            <span className="hidden sm:block">Working Together. Growing Together.</span>
                        </div>
                    </div>
                </div>

                {/* Corner Shimmers */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 blur-[120px] pointer-events-none rounded-full translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/5 blur-[100px] pointer-events-none rounded-full -translate-x-1/2 translate-y-1/2" />
            </div>
        </footer>
    )
}
