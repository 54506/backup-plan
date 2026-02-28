import { Link } from 'react-router-dom'
import { Twitter, Linkedin, Github, ArrowRight, Mail, Phone, MapPin } from 'lucide-react'

const footerLinks = {
    Company: [
        { label: 'About OPMW', href: '/' },
        { label: 'Our Mission', href: '/' },
        { label: 'Leadership', href: '/' },
        { label: 'Press & Media', href: '/' },
        { label: 'Careers', href: '/careers' },
    ],
    Services: [
        { label: 'BPO Services', href: '/services' },
        { label: 'Voice Operations', href: '/services' },
        { label: 'Web Development', href: '/services' },
        { label: 'HRMS SaaS', href: '/hrms' },
        { label: 'Enterprise Solutions', href: '/services' },
    ],
    Platform: [
        { label: 'HRMS Dashboard', href: '/hrms' },
        { label: 'Workforce Analytics', href: '/hrms' },
        { label: 'Payroll Management', href: '/hrms' },
        { label: 'Integrations', href: '/hrms' },
        { label: 'API Access', href: '/hrms' },
    ],
    Resources: [
        { label: 'Case Studies', href: '/projects' },
        { label: 'Documentation', href: '/' },
        { label: 'Blog', href: '/' },
        { label: 'Privacy Policy', href: '/' },
        { label: 'Terms of Service', href: '/' },
    ],
}

const socials = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'X / Twitter' },
    { icon: Github, href: '#', label: 'GitHub' },
]

const offices = [
    { city: 'Hyderabad', country: 'India', flag: '🇮🇳' },
    { city: 'Dubai', country: 'UAE', flag: '🇦🇪' },
    { city: 'London', country: 'UK', flag: '🇬🇧' },
]

export default function Footer() {
    return (
        <footer
            role="contentinfo"
            style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
        >
            {/* CTA Band above footer */}
            <div
                className="relative overflow-hidden"
                style={{
                    background: 'linear-gradient(135deg, #0D0718 0%, #1E1040 50%, #0D0718 100%)',
                    borderBottom: '1px solid rgba(124,58,237,0.2)',
                }}
            >
                <div className="container-opmw py-16 flex flex-col md:flex-row items-center justify-between gap-8">
                    <div>
                        <h2 className="font-display text-3xl md:text-4xl font-bold mb-2" style={{ color: '#F0F0F5' }}>
                            Ready to Unify Your Operations?
                        </h2>
                        <p style={{ color: '#A0A0B0' }} className="text-lg max-w-xl">
                            Join enterprises worldwide who trust OPMW to power their integrated execution.
                        </p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
                        <Link to="/contact" className="btn-primary">
                            Request a Demo <ArrowRight size={16} />
                        </Link>
                        <Link to="/hrms" className="btn-secondary">
                            Explore HRMS
                        </Link>
                    </div>
                </div>
                {/* Decorative glow */}
                <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full pointer-events-none"
                    style={{
                        background: 'radial-gradient(circle, rgba(124,58,237,0.12) 0%, transparent 70%)',
                    }}
                />
            </div>

            {/* Main Footer */}
            <div
                className="relative"
                style={{ background: 'rgba(9, 9, 13, 0.98)' }}
            >
                <div className="container-opmw pt-16 pb-8">
                    {/* Top Row */}
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-10 pb-12" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                        {/* Brand Column */}
                        <div className="col-span-2">
                            {/* Logo */}
                            <Link to="/" className="flex items-center gap-2.5 mb-5 group w-fit">
                                <div
                                    className="w-9 h-9 rounded-xl flex items-center justify-center text-white font-bold"
                                    style={{
                                        background: 'linear-gradient(135deg, #5B2FBF 0%, #7C3AED 100%)',
                                        boxShadow: '0 0 20px rgba(124,58,237,0.35)',
                                    }}
                                >
                                    <span className="font-display font-bold text-sm">OP</span>
                                </div>
                                <div>
                                    <div className="font-display font-bold text-lg" style={{ color: '#F0F0F5' }}>OPMW</div>
                                    <div className="text-[10px] font-medium tracking-widest uppercase" style={{ color: 'rgba(159,110,255,0.6)' }}>
                                        One Place Multi Work
                                    </div>
                                </div>
                            </Link>

                            <p className="text-sm leading-relaxed mb-6 max-w-xs" style={{ color: '#606070' }}>
                                Enterprise-grade integrated platform for BPO, Voice Operations, Web Development & HRMS — powering growth from one unified ecosystem.
                            </p>

                            {/* Tagline */}
                            <div
                                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium mb-6"
                                style={{
                                    background: 'rgba(124,58,237,0.10)',
                                    border: '1px solid rgba(124,58,237,0.20)',
                                    color: '#9F6EFF',
                                }}
                            >
                                ✦ Integrated Execution. Unified Growth.
                            </div>

                            {/* Social Links */}
                            <div className="flex items-center gap-3">
                                {socials.map(({ icon: Icon, href, label }) => (
                                    <a
                                        key={label}
                                        href={href}
                                        aria-label={label}
                                        className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200 group"
                                        style={{
                                            background: 'rgba(255,255,255,0.04)',
                                            border: '1px solid rgba(255,255,255,0.08)',
                                        }}
                                        onMouseEnter={e => {
                                            e.currentTarget.style.background = 'rgba(124,58,237,0.15)'
                                            e.currentTarget.style.borderColor = 'rgba(124,58,237,0.35)'
                                            e.currentTarget.style.boxShadow = '0 0 12px rgba(124,58,237,0.2)'
                                        }}
                                        onMouseLeave={e => {
                                            e.currentTarget.style.background = 'rgba(255,255,255,0.04)'
                                            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'
                                            e.currentTarget.style.boxShadow = 'none'
                                        }}
                                    >
                                        <Icon size={15} style={{ color: '#606070' }} className="group-hover:text-violet-400 transition-colors" />
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Link Columns */}
                        {Object.entries(footerLinks).map(([group, links]) => (
                            <div key={group}>
                                <h3
                                    className="text-xs font-semibold uppercase tracking-widest mb-5"
                                    style={{ color: '#3A3A4E' }}
                                >
                                    {group}
                                </h3>
                                <ul className="space-y-3">
                                    {links.map(link => (
                                        <li key={link.label}>
                                            <Link
                                                to={link.href}
                                                className="text-sm transition-colors duration-200"
                                                style={{ color: '#606070' }}
                                                onMouseEnter={e => e.target.style.color = '#9F6EFF'}
                                                onMouseLeave={e => e.target.style.color = '#606070'}
                                            >
                                                {link.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    {/* Bottom Row */}
                    <div className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                        {/* Offices */}
                        <div className="flex flex-wrap gap-4">
                            {offices.map(({ city, country, flag }) => (
                                <div
                                    key={city}
                                    className="flex items-center gap-2 text-xs"
                                    style={{ color: '#606070' }}
                                >
                                    <span>{flag}</span>
                                    <span>{city}, {country}</span>
                                </div>
                            ))}
                        </div>

                        {/* Contact Info */}
                        <div className="flex flex-wrap items-center gap-6">
                            <a
                                href="mailto:enterprise@opmw.io"
                                className="flex items-center gap-2 text-xs transition-colors duration-200"
                                style={{ color: '#606070' }}
                                onMouseEnter={e => e.currentTarget.style.color = '#9F6EFF'}
                                onMouseLeave={e => e.currentTarget.style.color = '#606070'}
                            >
                                <Mail size={12} /> enterprise@opmw.io
                            </a>
                            <a
                                href="tel:+911234567890"
                                className="flex items-center gap-2 text-xs transition-colors duration-200"
                                style={{ color: '#606070' }}
                                onMouseEnter={e => e.currentTarget.style.color = '#9F6EFF'}
                                onMouseLeave={e => e.currentTarget.style.color = '#606070'}
                            >
                                <Phone size={12} /> +91 12345 67890
                            </a>
                        </div>
                    </div>

                    {/* Copyright */}
                    <div className="mt-6 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3" style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}>
                        <p className="text-xs" style={{ color: '#3A3A4E' }}>
                            © {new Date().getFullYear()} OPMW – One Place Multi Work. All rights reserved.
                        </p>
                        <p className="text-xs" style={{ color: '#3A3A4E' }}>
                            Integrated Execution. Unified Growth.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
