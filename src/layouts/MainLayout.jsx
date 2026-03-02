import { Outlet } from 'react-router-dom'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function MainLayout() {
    return (
        <div style={{ background: '#03142A', display: 'flex', flexDirection: 'column', minHeight: '100vh', overflow: 'hidden' }}>
            <Navbar />
            <div style={{ flex: '1 0 auto' }}>
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}
