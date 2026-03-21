import { lazy, Suspense } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import sebastianDrone from './assets/images/sebastian-drone.jpg'
import kornatiSunset from './assets/images/kornati-sunset.jpg'

// Lazy load everything below the fold
const MagneticCursor = lazy(() => import('./components/MagneticCursor'))
const EyeSection = lazy(() => import('./components/EyeSection'))
const Services = lazy(() => import('./components/Services'))
const EagleDivider = lazy(() => import('./components/EagleDivider'))
const AICoach = lazy(() => import('./components/AICoach'))
const Portfolio = lazy(() => import('./components/Portfolio'))
const HopRegion = lazy(() => import('./components/HopRegion'))
const Awards = lazy(() => import('./components/Awards'))
const About = lazy(() => import('./components/About'))
const Wedding = lazy(() => import('./components/Wedding'))
const Commercial = lazy(() => import('./components/Commercial'))
const Tutorials = lazy(() => import('./components/Tutorials'))
const Events = lazy(() => import('./components/Events'))
const Contact = lazy(() => import('./components/Contact'))
const Footer = lazy(() => import('./components/Footer'))

const riseStyle = {
  background: 'linear-gradient(90deg, #FFB800 0%, #FF6600 50%, #CC2200 100%)',
  WebkitBackgroundClip: 'text' as const,
  WebkitTextFillColor: 'transparent' as const,
}

export default function App() {
  return (
    <>
      <Suspense fallback={null}>
        <MagneticCursor />
      </Suspense>
      <Navbar />
      <main>
        <Hero />
        <Suspense fallback={<div style={{ height: '100vh', background: '#000' }} />}>
          <EyeSection />
          <Services />
          <EagleDivider
            image={sebastianDrone}
            position="center"
            height="55vh"
            label="Cinematic Excellence"
            title={<>The Eagle <span style={riseStyle}>Rises</span></>}
          />
          <AICoach />
          <EagleDivider
            image={kornatiSunset}
            position="center top"
            height="65vh"
          />
          <Portfolio />
          <HopRegion />
          <Wedding />
          <Commercial />
          <Tutorials />
          <Events />
          <Awards />
          <About />
          <Contact />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </>
  )
}
