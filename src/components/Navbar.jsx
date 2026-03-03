import { useState, useEffect } from 'react'
import { NavLink, Link, useNavigate, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowRight, LogOut } from 'lucide-react'
import api from '@/lib/api'

const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'HRMS', href: '/hrms' },
    { label: 'Projects', href: '/projects' },
    { label: 'Careers', href: '/careers' },
    { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
    const navigate = useNavigate()
    const location = useLocation()
    const [scrolled, setScrolled] = useState(false)
    const [mobileOpen, setMobileOpen] = useState(false)
    const isLoggedIn = !!localStorage.getItem('opmw_token')

    const handleLogout = () => {
        // Immediate UI feedback
        localStorage.removeItem('opmw_token')
        localStorage.removeItem('opmw_user')
        setMobileOpen(false)
        navigate('/login')

        // Background API call - don't wait for it
        api.post('/auth/logout').catch(() => { })
    }

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 10)
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    useEffect(() => {
        document.body.style.overflow = mobileOpen ? 'hidden' : ''
        return () => { document.body.style.overflow = '' }
    }, [mobileOpen])

    return (
        <>
            <header
                role="banner"
                className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
                style={{
                    height: scrolled ? '72px' : '88px',
                    background: scrolled ? 'rgba(7, 12, 20, 0.98)' : 'rgba(7, 12, 20, 0.92)',
                    backdropFilter: 'blur(24px)',
                    boxShadow: scrolled ? '0 10px 40px rgba(0,0,0,0.4)' : 'none',
                    borderBottom: '1px solid rgba(255,255,255,0.06)',
                }}
            >
                <nav className="container-opmw flex items-center justify-between h-full">

                    {/* Logo Segment - enlarged logo, no text */}
                    <Link to="/" className="flex items-center group" aria-label="OPMW Home">
                        <div className="relative flex items-center justify-center w-28 h-28 md:w-40 md:h-40 overflow-hidden">
                            <img
                                src="/logo (2).png"
                                alt="OPMW Logo"
                                className="w-full h-full object-contain logo-cutout"
                            />
                        </div>
                    </Link>

                    {/* Desktop Navigation - Simple & Clean */}
                    <div className="hidden lg:flex items-center gap-2 h-full">
                        {navLinks.map((link) => (
                            <div key={link.href} className="relative group h-full flex items-center">
                                <NavLink
                                    to={link.href}
                                    className={({ isActive }) =>
                                        `relative px-5 py-2 text-base font-bold tracking-wide transition-all duration-300 rounded-full
                                        ${isActive
                                            ? 'text-[#2F80ED]'
                                            : 'text-[#9FB3D1] hover:text-white hover:bg-white/5'
                                        }`
                                    }
                                >
                                    {({ isActive }) => (
                                        <>
                                            {link.label}
                                            {isActive && (
                                                <motion.div
                                                    layoutId="nav-pill-simple"
                                                    className="absolute bottom-0 left-5 right-5 h-[2px] bg-[#2F80ED]"
                                                    transition={{ type: "spring", bounce: 0, duration: 0.4 }}
                                                />
                                            )}
                                        </>
                                    )}
                                </NavLink>

                                {/* Services Mega Dropdown */}
                                {link.label === 'Services' && (
                                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 opacity-0 translate-y-3 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 ease-out z-50">
                                        <div className="w-72 bg-[#071C36]/95 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.5)] overflow-hidden">
                                            <div className="px-3 pt-3 pb-1">
                                                <div className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#9FB3D1]/40 px-3 py-2">Our Divisions</div>
                                            </div>
                                            <div className="px-3 pb-3 space-y-1">
                                                {[
                                                    { name: 'BPO & International Voice', desc: 'Global campaign operations', href: '/services/bpo', color: '#2F80ED', emoji: '📞' },
                                                    { name: 'IT & Web Applications', desc: 'Custom software & ERP', href: '/services/it', color: '#7C3AED', emoji: '💻' },
                                                    { name: 'OPMW HRMS', desc: 'Proprietary SaaS product', href: '/services/hrms', color: '#9F6EFF', emoji: '👥' },
                                                ].map((sub) => (
                                                    <Link
                                                        key={sub.href}
                                                        to={sub.href}
                                                        className="flex items-center gap-4 p-3 rounded-xl hover:bg-white/5 transition-all group/sub"
                                                    >
                                                        <div className="w-10 h-10 rounded-xl flex items-center justify-center text-lg flex-shrink-0"
                                                            style={{ background: `${sub.color}15`, border: `1px solid ${sub.color}25` }}>
                                                            {sub.emoji}
                                                        </div>
                                                        <div>
                                                            <div className="text-sm font-bold text-[#E6EDF7] group-hover/sub:text-white transition-colors">{sub.name}</div>
                                                            <div className="text-[10px] text-[#9FB3D1]/50 mt-0.5">{sub.desc}</div>
                                                        </div>
                                                    </Link>
                                                ))}
                                            </div>
                                            <div className="border-t border-white/5 px-6 py-3">
                                                <Link to="/services" className="text-xs font-bold text-[#2F80ED] hover:text-white transition-colors flex items-center gap-1">
                                                    View all services →
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Desktop Actions - Hyper-Premium */}
                    <div className="hidden lg:flex items-center gap-4">
                        {isLoggedIn ? (
                            <div className="flex items-center gap-3">
                                <Link
                                    to="/hrms"
                                    className="px-6 py-2.5 rounded-xl bg-white/5 border border-white/10 text-xs font-bold text-white hover:bg-[#388BFD]/10 hover:border-[#388BFD]/30 transition-all duration-500 backdrop-blur-md shadow-lg group"
                                >
                                    Dashboard
                                </Link>
                                <button
                                    onClick={handleLogout}
                                    className="p-2.5 rounded-xl bg-red-500/5 border border-red-500/10 text-[#9FB3D1] hover:text-white hover:bg-red-500/20 hover:border-red-500/30 transition-all duration-300 group"
                                    title="Logout"
                                >
                                    <LogOut size={16} className="group-hover:scale-110 transition-transform" />
                                </button>
                            </div>
                        ) : (
                            <Link
                                to="/login"
                                className="relative group p-[1px] rounded-xl overflow-hidden transition-all duration-500 hover:scale-[1.02] active:scale-[0.98]"
                            >
                                {/* Hyper-Premium Rotating Gradient Border */}
                                <div className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#388BFD_0%,#8B5CF6_25%,#06B6D4_50%,#388BFD_75%,#8B5CF6_100%)] opacity-30 group-hover:opacity-100 transition-opacity duration-500" />

                                {/* Button Body */}
                                <div className="relative px-8 py-3 rounded-[11px] bg-[#070C14] flex items-center gap-3 transition-colors duration-500 group-hover:bg-[#070C14]/80 backdrop-blur-sm">
                                    <span className="text-[11px] font-bold text-white tracking-[0.2em] uppercase">Enter Hub</span>
                                    <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center text-white transition-all duration-500 group-hover:bg-[#388BFD] group-hover:shadow-[0_0_15px_#388BFD]">
                                        <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
                                    </div>
                                </div>

                                {/* Outer Glow Effect */}
                                <div className="absolute inset-0 rounded-xl blur-xl bg-gradient-to-r from-[#388BFD] to-[#8B5CF6] opacity-0 group-hover:opacity-40 transition-opacity duration-500 -z-10" />
                            </Link>
                        )}
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className="lg:hidden p-2 rounded text-[#9FB3D1] hover:text-[#E6EDF7] transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
                        onClick={() => setMobileOpen(!mobileOpen)}
                        aria-expanded={mobileOpen}
                        aria-label="Toggle navigation menu"
                    >
                        {mobileOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </nav>
            </header>

            {/* Mobile Navigation Drawer */}
            <AnimatePresence>
                {mobileOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="fixed inset-0 z-40 lg:hidden bg-[#03142A]/80 backdrop-blur-md"
                            onClick={() => setMobileOpen(false)}
                        />
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="fixed top-0 right-0 bottom-0 z-50 w-[280px] max-w-[80vw] lg:hidden flex flex-col pt-24 bg-[#081E3A] border-l border-white/5 shadow-2xl"
                        >
                            <nav className="flex flex-col p-6 gap-3 flex-1">
                                {navLinks.map((link, i) => (
                                    <motion.div
                                        key={link.href}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.05, duration: 0.3 }}
                                    >
                                        <NavLink
                                            to={link.href}
                                            onClick={() => setMobileOpen(false)}
                                            className={({ isActive }) =>
                                                `block px-6 py-4 rounded-xl text-lg font-medium transition-all min-h-[48px] flex items-center ${isActive
                                                    ? 'bg-[#2F80ED]/15 border border-[#2F80ED]/30 text-[#E6EDF7]'
                                                    : 'text-[#9FB3D1] border border-transparent active:bg-white/5'
                                                }`
                                            }
                                        >
                                            {link.label}
                                        </NavLink>
                                    </motion.div>
                                ))}
                            </nav>
                            <div className="p-6 border-t border-white/5 space-y-4">
                                {isLoggedIn ? (
                                    <div className="flex flex-col gap-3">
                                        <Link
                                            to="/hrms"
                                            className="w-full flex justify-center items-center py-4 rounded-xl font-bold bg-[#388BFD] text-white shadow-lg shadow-[#388BFD]/20"
                                            onClick={() => setMobileOpen(false)}
                                        >
                                            Explore Dashboard
                                        </Link>
                                        <button
                                            onClick={handleLogout}
                                            className="w-full flex justify-center items-center py-4 rounded-xl font-bold text-[#F87171] bg-red-900/10 border border-red-500/10 active:bg-red-500/20 transition-all"
                                        >
                                            <LogOut size={20} className="mr-2" /> Sign Out
                                        </button>
                                    </div>
                                ) : (
                                    <Link
                                        to="/login"
                                        className="relative group w-full flex justify-center items-center py-5 rounded-2xl overflow-hidden shadow-2xl"
                                        onClick={() => setMobileOpen(false)}
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-r from-[#388BFD] to-[#8B5CF6]" />
                                        <div className="absolute inset-0 bg-white/5 opacity-0 active:opacity-100 transition-opacity" />
                                        <span className="relative text-sm font-bold text-white uppercase tracking-[0.2em] flex items-center gap-3">
                                            Log In <ArrowRight size={18} />
                                        </span>
                                    </Link>
                                )}
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    )
}
