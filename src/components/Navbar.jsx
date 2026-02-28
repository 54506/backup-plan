import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react'

const navLinks = [
    { label: 'Services', href: '/services' },
    { label: 'HRMS', href: '/hrms' },
    { label: 'Projects', href: '/projects' },
    { label: 'Careers', href: '/careers' },
    { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [mobileOpen, setMobileOpen] = useState(false)

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 32)
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    // Lock body when mobile menu open
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
                    background: scrolled
                        ? 'rgba(11, 11, 15, 0.90)'
                        : 'rgba(11, 11, 15, 0.20)',
                    backdropFilter: scrolled ? 'blur(24px)' : 'blur(8px)',
                    WebkitBackdropFilter: scrolled ? 'blur(24px)' : 'blur(8px)',
                    borderBottom: scrolled
                        ? '1px solid rgba(255,255,255,0.07)'
                        : '1px solid transparent',
                    boxShadow: scrolled ? '0 4px 30px rgba(0,0,0,0.4)' : 'none',
                }}
            >
                <nav className="container-opmw flex items-center justify-between h-16 md:h-18">
                    {/* Logo */}
                    <Link
                        to="/"
                        className="flex items-center gap-2.5 group"
                        aria-label="OPMW Home"
                    >
                        {/* Logo mark */}
                        <div
                            className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-sm relative overflow-hidden"
                            style={{
                                background: 'linear-gradient(135deg, #5B2FBF 0%, #7C3AED 100%)',
                                boxShadow: '0 0 16px rgba(124,58,237,0.4)',
                            }}
                        >
                            <span className="font-display font-bold text-xs tracking-tight">OP</span>
                            {/* Inner glow */}
                            <div
                                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                style={{ background: 'rgba(159,110,255,0.3)' }}
                            />
                        </div>
                        <div className="flex flex-col leading-none">
                            <span
                                className="font-display font-bold text-base tracking-tight"
                                style={{ color: '#F0F0F5' }}
                            >
                                OPMW
                            </span>
                            <span
                                className="text-[10px] font-medium tracking-widest uppercase hidden sm:block"
                                style={{ color: 'rgba(159,110,255,0.7)' }}
                            >
                                One Place Multi Work
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.href}
                                to={link.href}
                                className={({ isActive }) =>
                                    `px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${isActive
                                        ? 'text-violet-300 bg-violet-950/50'
                                        : 'text-neutral-300 hover:text-white hover:bg-white/5'
                                    }`
                                }
                                style={({ isActive }) => ({
                                    color: isActive ? '#9F6EFF' : undefined,
                                })}
                            >
                                {link.label}
                            </NavLink>
                        ))}
                    </div>

                    {/* Desktop CTA */}
                    <div className="hidden md:flex items-center gap-3">
                        <Link
                            to="/hrms"
                            className="text-sm font-medium transition-colors duration-200"
                            style={{ color: '#A0A0B0' }}
                            onMouseEnter={e => e.target.style.color = '#F0F0F5'}
                            onMouseLeave={e => e.target.style.color = '#A0A0B0'}
                        >
                            Sign In
                        </Link>
                        <Link to="/contact" className="btn-primary text-sm py-2 px-5">
                            Get Started
                            <ArrowRight size={14} />
                        </Link>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden p-2 rounded-lg transition-colors duration-200"
                        style={{ color: '#A0A0B0' }}
                        onClick={() => setMobileOpen(!mobileOpen)}
                        aria-expanded={mobileOpen}
                        aria-label="Toggle navigation menu"
                    >
                        {mobileOpen ? <X size={22} /> : <Menu size={22} />}
                    </button>
                </nav>
            </header>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="fixed inset-0 z-40 md:hidden"
                            style={{ background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(4px)' }}
                            onClick={() => setMobileOpen(false)}
                        />
                        {/* Drawer */}
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
                            className="fixed top-0 right-0 bottom-0 z-50 w-72 md:hidden flex flex-col"
                            style={{
                                background: 'rgba(11, 11, 15, 0.97)',
                                backdropFilter: 'blur(24px)',
                                borderLeft: '1px solid rgba(255,255,255,0.07)',
                            }}
                        >
                            <div className="flex items-center justify-between px-6 h-16">
                                <span className="font-display font-bold" style={{ color: '#9F6EFF' }}>Menu</span>
                                <button
                                    onClick={() => setMobileOpen(false)}
                                    className="p-1 rounded-lg"
                                    style={{ color: '#A0A0B0' }}
                                    aria-label="Close menu"
                                >
                                    <X size={20} />
                                </button>
                            </div>
                            <div className="gradient-divider" />
                            <nav className="flex flex-col p-6 gap-1 flex-1">
                                {navLinks.map((link, i) => (
                                    <motion.div
                                        key={link.href}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.06, duration: 0.3 }}
                                    >
                                        <NavLink
                                            to={link.href}
                                            onClick={() => setMobileOpen(false)}
                                            className={({ isActive }) =>
                                                `block px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 ${isActive ? 'bg-violet-950/60' : 'hover:bg-white/5'
                                                }`
                                            }
                                            style={({ isActive }) => ({
                                                color: isActive ? '#9F6EFF' : '#C0C0CC',
                                            })}
                                        >
                                            {link.label}
                                        </NavLink>
                                    </motion.div>
                                ))}
                            </nav>
                            <div className="p-6 space-y-3 border-t" style={{ borderColor: 'rgba(255,255,255,0.07)' }}>
                                <Link
                                    to="/contact"
                                    className="btn-primary w-full justify-center"
                                    onClick={() => setMobileOpen(false)}
                                >
                                    Get Started <ArrowRight size={14} />
                                </Link>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    )
}
