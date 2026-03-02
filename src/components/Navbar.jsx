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
                    background: scrolled ? 'rgba(8, 30, 58, 0.98)' : 'rgba(8, 30, 58, 0.92)',
                    backdropFilter: 'blur(16px)',
                    boxShadow: scrolled ? '0 10px 30px rgba(3,20,42,0.8)' : 'none',
                    borderBottom: '1px solid rgba(255,255,255,0.05)',
                }}
            >
                <nav className="container-opmw flex items-center justify-between h-full">

                    {/* Logo Segment - enlarged logo, no text */}
                    <Link to="/" className="flex items-center group" aria-label="OPMW Home">
                        <div className="relative flex items-center justify-center w-20 h-20 md:w-28 md:h-28 overflow-hidden">
                            <img
                                src="/logo.png"
                                alt="OPMW Logo"
                                className="w-full h-full object-contain"
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

                    {/* Desktop Actions - Minimalist */}
                    <div className="hidden lg:flex items-center gap-6">
                        {isLoggedIn ? (
                            <button
                                onClick={handleLogout}
                                className="flex items-center gap-2 text-base font-bold text-[#9FB3D1] hover:text-white transition-colors duration-200"
                            >
                                <LogOut size={18} />
                                Logout
                            </button>
                        ) : (
                            <Link
                                to="/login"
                                className="text-base font-bold text-[#9FB3D1] hover:text-white transition-colors duration-200"
                            >
                                Log In
                            </Link>
                        )}

                        <Link
                            to={isLoggedIn ? "/hrms" : "/contact"}
                            className="px-7 py-3 rounded-lg bg-[#2F80ED] text-base font-bold text-white shadow-lg hover:bg-[#1E5FAF] hover:shadow-[#2F80ED]/20 transition-all duration-300"
                        >
                            {isLoggedIn ? "Dashboard" : "Start Today"}
                        </Link>
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
                                    <button
                                        onClick={handleLogout}
                                        className="w-full flex justify-center items-center py-4 rounded-xl font-bold text-[#FF4D4D] border border-red-500/10 hover:bg-red-500/5 transition-all"
                                    >
                                        <LogOut size={20} className="mr-2" /> Logout
                                    </button>
                                ) : (
                                    <Link
                                        to="/login"
                                        className="w-full flex justify-center items-center py-4 rounded-xl font-bold text-[#9FB3D1] border border-white/10 hover:bg-white/5"
                                        onClick={() => setMobileOpen(false)}
                                    >
                                        Log In
                                    </Link>
                                )}
                                <Link
                                    to={isLoggedIn ? "/hrms" : "/contact"}
                                    className="btn-soft-diffusion w-full flex justify-center items-center py-4 rounded-xl font-bold"
                                    onClick={() => setMobileOpen(false)}
                                >
                                    {isLoggedIn ? "Dashboard" : "Get Started"}
                                </Link>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    )
}
