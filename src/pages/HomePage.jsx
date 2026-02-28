import HeroSection from '@/sections/HeroSection'
import MetricsSection from '@/sections/MetricsSection'
import CoreDivisionsSection from '@/sections/CoreDivisionsSection'
import HRMSShowcaseSection from '@/sections/HRMSShowcaseSection'
import ProjectsGridSection from '@/sections/ProjectsGridSection'
import LocationsSection from '@/sections/LocationsSection'

export default function HomePage() {
    return (
        <>
            <HeroSection />
            <MetricsSection />
            <CoreDivisionsSection />
            <HRMSShowcaseSection />
            <ProjectsGridSection />
            <LocationsSection />
        </>
    )
}
