import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, MapPin } from 'lucide-react'

const locations = [
    {
        city: 'Hyderabad',
        country: 'India',
        flag: '🇮🇳',
        role: 'Headquarters & Tech Hub',
        address: 'HITEC City, Hyderabad — 500081',
        timezone: 'IST UTC+5:30',
        highlight: true,
    },
    {
        city: 'Dubai',
        country: 'UAE',
        flag: '🇦🇪',
        role: 'Middle East Operations',
        address: 'Business Bay, Dubai',
        timezone: 'GST UTC+4',
    },
    {
        city: 'London',
        country: 'United Kingdom',
        flag: '🇬🇧',
        role: 'European Headquarters',
        address: 'Canary Wharf, London',
        timezone: 'GMT / BST',
    },
    {
        city: 'Singapore',
        country: 'Singapore',
        flag: '🇸🇬',
        role: 'Asia Pacific Hub',
        address: 'One Raffles Quay, Singapore',
        timezone: 'SGT UTC+8',
    },
    {
        city: 'New York',
        country: 'USA',
        flag: '🇺🇸',
        role: 'Americas Office',
        address: 'Midtown Manhattan, NY',
        timezone: 'EST UTC-5',
    },
    {
        city: 'Sydney',
        country: 'Australia',
        flag: '🇦🇺',
        role: 'APAC Delivery Center',
        address: 'Sydney CBD, NSW',
        timezone: 'AEST UTC+10',
    },
]

export default function LocationsSection() {
    return (
        <section
            className="section-pad relative overflow-hidden"
            style={{ background: '#0B0B0F' }}
            aria-label="Global office locations"
        >
            {/* Subtle gradient */}
            <div
                className="absolute top-0 left-0 right-0 h-px"
                style={{ background: 'linear-gradient(90deg, transparent, rgba(124,58,237,0.3), transparent)' }}
            />

            <div className="container-opmw">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-14"
                >
                    <div className="section-label mx-auto mb-5">Global Presence</div>
                    <h2
                        className="font-display font-bold mb-4"
                        style={{ fontSize: 'clamp(1.75rem, 3.5vw, 3rem)', color: '#F0F0F5' }}
                    >
                        Operating Worldwide
                    </h2>
                    <p className="max-w-xl mx-auto text-base" style={{ color: '#5A5A6A' }}>
                        12+ global offices — delivering enterprise operations, technology, and support across every major time zone.
                    </p>
                </motion.div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {locations.map((loc, i) => (
                        <motion.div
                            key={loc.city}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-60px' }}
                            transition={{ duration: 0.55, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                            className="relative p-6 rounded-2xl group transition-all duration-300"
                            style={{
                                background: loc.highlight
                                    ? 'linear-gradient(135deg, rgba(45,23,96,0.5) 0%, rgba(30,16,64,0.4) 100%)'
                                    : 'rgba(255,255,255,0.02)',
                                border: loc.highlight
                                    ? '1px solid rgba(124,58,237,0.25)'
                                    : '1px solid rgba(255,255,255,0.06)',
                            }}
                        >
                            {loc.highlight && (
                                <div
                                    className="absolute top-4 right-4 px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-widest"
                                    style={{
                                        background: 'rgba(124,58,237,0.2)',
                                        border: '1px solid rgba(124,58,237,0.3)',
                                        color: '#9F6EFF',
                                    }}
                                >
                                    HQ
                                </div>
                            )}

                            <div className="text-3xl mb-4">{loc.flag}</div>

                            <h3 className="font-display font-bold text-lg mb-0.5" style={{ color: '#F0F0F5' }}>
                                {loc.city}
                            </h3>
                            <div className="text-sm font-medium mb-3" style={{ color: loc.highlight ? '#9F6EFF' : '#5A5A6A' }}>
                                {loc.role}
                            </div>

                            <div className="flex items-start gap-2 mb-2">
                                <MapPin size={12} className="mt-0.5 flex-shrink-0" style={{ color: '#3A3A4E' }} />
                                <span className="text-xs" style={{ color: '#5A5A6A' }}>{loc.address}</span>
                            </div>

                            <div className="text-xs" style={{ color: '#3A3A4E' }}>
                                {loc.timezone}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* CTA at bottom */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="text-center mt-12"
                >
                    <Link to="/contact" className="btn-secondary inline-flex items-center gap-2">
                        Find Your Nearest Office <ArrowRight size={14} />
                    </Link>
                </motion.div>
            </div>
        </section>
    )
}
