import { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { animateValue } from '@/lib/utils'

const metrics = [
    {
        value: 500,
        suffix: '+',
        label: 'Enterprise Clients',
        description: 'Across 20+ industries globally',
        color: '#7C3AED',
    },
    {
        value: 98,
        suffix: '%',
        label: 'Retention Rate',
        description: '3-year rolling average',
        color: '#9F6EFF',
    },
    {
        value: 12,
        suffix: '+',
        label: 'Global Offices',
        description: 'On 4 continents',
        color: '#7C3AED',
    },
    {
        value: 2,
        suffix: 'B+',
        prefix: '$',
        label: 'Revenue Managed',
        description: 'Total client revenue impacted',
        color: '#9F6EFF',
    },
    {
        value: 10000,
        suffix: '+',
        label: 'Professionals',
        description: 'Deployed across client accounts',
        color: '#7C3AED',
    },
    {
        value: 99.9,
        suffix: '%',
        label: 'Platform Uptime',
        description: 'SLA guaranteed',
        color: '#9F6EFF',
    },
]

function MetricCard({ metric, index }) {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: '-80px' })
    const [count, setCount] = useState(0)

    useEffect(() => {
        if (inView) {
            animateValue(0, metric.value, 1800, setCount)
        }
    }, [inView, metric.value])

    const displayValue = metric.value < 100 && String(metric.value).includes('.')
        ? (inView ? metric.value.toFixed(1) : '0.0')
        : Math.floor(count).toLocaleString()

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="glass-card p-6 flex flex-col gap-2 relative overflow-hidden group"
        >
            {/* Accent glow */}
            <div
                className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `linear-gradient(90deg, transparent, ${metric.color}, transparent)` }}
            />

            <div
                className="font-display font-bold leading-none"
                style={{
                    fontSize: 'clamp(2rem, 4vw, 3rem)',
                    background: `linear-gradient(135deg, #F0F0F5 0%, ${metric.color} 100%)`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                }}
            >
                {metric.prefix}{displayValue}{metric.suffix}
            </div>

            <div className="font-semibold text-sm" style={{ color: '#E0E0E8' }}>
                {metric.label}
            </div>
            <div className="text-xs leading-relaxed" style={{ color: '#5A5A6A' }}>
                {metric.description}
            </div>
        </motion.div>
    )
}

export default function MetricsSection() {
    return (
        <section className="section-pad relative" aria-label="Company metrics">
            <div className="container-opmw">
                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-14"
                >
                    <div className="section-label mx-auto mb-5">By the Numbers</div>
                    <h2
                        className="font-display font-bold mb-4"
                        style={{ fontSize: 'clamp(1.75rem, 3.5vw, 3rem)', color: '#F0F0F5' }}
                    >
                        The Scale of Our Impact
                    </h2>
                    <p className="max-w-xl mx-auto text-base" style={{ color: '#5A5A6A' }}>
                        Trusted by enterprises across BPO, Tech, Finance, and Healthcare for mission-critical operations.
                    </p>
                </motion.div>

                {/* Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
                    {metrics.map((metric, i) => (
                        <MetricCard key={metric.label} metric={metric} index={i} />
                    ))}
                </div>
            </div>
        </section>
    )
}
