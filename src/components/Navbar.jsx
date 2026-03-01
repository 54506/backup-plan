import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowRight } from 'lucide-react'

const navLinks = [
    { label: 'About Us', href: '/about' },
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

                    {/* Logo Segment - Iconic & Large */}
                    <Link to="/" className="flex items-center group overflow-hidden" aria-label="OPMW Home">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                            className="relative flex items-center justify-center w-24 h-24 md:w-32 md:h-32 -ml-4 overflow-hidden"
                        >
                            <img
                                src="/logo.png"
                                alt="OPMW Logo"
                                className="w-full h-full object-contain relative z-10 drop-shadow-[0_5px_15px_rgba(0,0,0,0.5)] transition-all duration-300"
                            />

                            {/* Logo Shimmer Sweep */}
                            <motion.div
                                className="absolute inset-x-0 h-full w-[100%] z-20 pointer-events-none"
                                style={{
                                    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.05) 45%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0.05) 55%, transparent)',
                                    transform: 'skewX(-20deg)'
                                }}
                                animate={{
                                    x: ['-200%', '200%']
                                }}
                                transition={{
                                    duration: 1.5,
                                    repeat: Infinity,
                                    repeatDelay: 5.5,
                                    ease: "easeInOut"
                                }}
                            />
                        </motion.div>
                    </Link>

                    {/* Desktop Navigation - Simple & Clean */}
                    <div className="hidden lg:flex items-center gap-2 h-full">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.href}
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
                        ))}
                    </div>

                    {/* Desktop Actions - Minimalist */}
                    <div className="hidden lg:flex items-center gap-6">
                        <Link
                            to="/login"
                            className="text-base font-bold text-[#9FB3D1] hover:text-white transition-colors duration-200"
                        >
                            Log In
                        </Link>

                        <Link
                            to="/contact"
                            className="px-7 py-3 rounded-lg bg-[#2F80ED] text-base font-bold text-white shadow-lg hover:bg-[#1E5FAF] hover:shadow-[#2F80ED]/20 transition-all duration-300"
                        >
                            Start Today
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
                                <Link
                                    to="/login"
                                    className="w-full flex justify-center items-center py-4 rounded-xl font-bold text-[#9FB3D1] border border-white/10 hover:bg-white/5"
                                    onClick={() => setMobileOpen(false)}
                                >
                                    Log In
                                </Link>
                                <Link
                                    to="/contact"
                                    className="btn-soft-diffusion w-full flex justify-center items-center py-4 rounded-xl font-bold"
                                    onClick={() => setMobileOpen(false)}
                                >
                                    Get Started
                                </Link>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    )
}
