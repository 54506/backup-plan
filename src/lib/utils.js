import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Merge Tailwind classes safely
 */
export function cn(...inputs) {
    return twMerge(clsx(inputs))
}

/**
 * Animate a number from 0 to target using requestAnimationFrame
 */
export function animateValue(start, end, duration, onUpdate) {
    const startTime = performance.now()
    const range = end - start

    function step(currentTime) {
        const elapsed = currentTime - startTime
        const progress = Math.min(elapsed / duration, 1)
        // Ease out cubic
        const eased = 1 - Math.pow(1 - progress, 3)
        onUpdate(Math.floor(start + range * eased))

        if (progress < 1) {
            requestAnimationFrame(step)
        }
    }

    requestAnimationFrame(step)
}

/**
 * Format large numbers with K/M suffix
 */
export function formatNumber(num) {
    if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`
    if (num >= 1000) return `${(num / 1000).toFixed(0)}K`
    return num.toString()
}

/**
 * Debounce a function
 */
export function debounce(fn, delay) {
    let timer
    return (...args) => {
        clearTimeout(timer)
        timer = setTimeout(() => fn(...args), delay)
    }
}

/**
 * Check if element is in viewport
 */
export function isInViewport(el, offset = 100) {
    const rect = el.getBoundingClientRect()
    return rect.top <= (window.innerHeight - offset) && rect.bottom >= 0
}
