import { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { animateValue } from '@/lib/utils'

const metrics = [
    { value: 500, suffix: '+', label: 'Business Clients', description: 'Working with companies everywhere.' },
    { value: 98, suffix: '%', label: 'Client Happiness', description: 'Most of our clients stay with us for years.' },
    { value: 12, suffix: '+', label: 'Offices Worldwide', description: 'Ready to support you anywhere.' },
    { value: 2, suffix: 'B+', prefix: '$', label: 'Total Value Managed', description: 'The total value we help our clients manage.' },
    { value: 10000, suffix: '+', label: 'Daily Users', description: 'People who use our software every day.' },
    { value: 99.9, suffix: '%', label: 'Always Online', description: 'Our systems are always ready when you need them.' },
]

function MetricCard({ metric, index }) {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: '-80px' })
    const [count, setCount] = useState(0)

    useEffect(() => {
        if (inView) {
            animateValue(0, metric.value, 1500, setCount)
        }
    }, [inView, metric.value])

    const displayValue = metric.value < 100 && String(metric.value).includes('.')
        ? (inView ? metric.value.toFixed(1) : '0.0')
        : Math.floor(count).toLocaleString()

    return (
        <motion.article
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: index * 0.05, ease: "easeOut" }}
            className="sky-light-card p-6 flex flex-col gap-2 rounded-lg border group relative h-full"
            style={{
                backgroundColor: '#0D2A4D',
                borderColor: 'rgba(255,255,255,0.08)',
            }}
            onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                e.currentTarget.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
                e.currentTarget.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
            }}
        >
            {/* Subtle radial glow instead of grid */}
            <div
                className="absolute inset-0 opacity-[0.05] pointer-events-none"
                style={{
                    background: 'radial-gradient(circle at 50% 0%, #2F80ED, transparent 70%)',
                }}
            />


            <div
                className="font-display font-bold leading-none tracking-tight relative z-10"
                style={{
                    fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                    color: '#E6EDF7',
                }}
            >
                {metric.prefix}{displayValue}{metric.suffix}
            </div>

            <div className="font-semibold text-sm tracking-wide relative z-10" style={{ color: '#E6EDF7' }}>
                {metric.label}
            </div>
            <div className="text-xs leading-relaxed relative z-10" style={{ color: '#9FB3D1' }}>
                {metric.description}
            </div>

            <style jsx="true">{`
                @keyframes panDown { from { background-position: 0 0; } to { background-position: 0 100px; } }
            `}</style>
        </motion.article>
    )
}

export default function MetricsSection() {
    return (
        <section className="section-pad relative bg-[#03142A]" aria-label="Our Growth in Numbers">
            <div className="container-opmw">
                {/* Section header */}
                <motion.header
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6 }}
                    className="mb-14 border-b border-white/10 pb-6"
                >
                    <div className="uppercase tracking-widest text-[#2F80ED] text-xs font-bold mb-3">Real Data</div>
                    <h2
                        className="font-display font-bold"
                        style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', color: '#E6EDF7', lineHeight: '1.2' }}
                    >
                        Our Reach Around the World
                    </h2>
                </motion.header>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {metrics.map((metric, i) => (
                        <MetricCard key={metric.label} metric={metric} index={i} />
                    ))}
                </div>
            </div>
        </section>
    )
}
