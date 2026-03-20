import Navbar from './components/Navbar'
import MagneticCursor from './components/MagneticCursor'
import Hero from './components/Hero'
import EyeSection from './components/EyeSection'
import Services from './components/Services'
import EagleDivider from './components/EagleDivider'
import AICoach from './components/AICoach'
import Portfolio from './components/Portfolio'
import About from './components/About'
import Wedding from './components/Wedding'
import Commercial from './components/Commercial'
import Tutorials from './components/Tutorials'
import Events from './components/Events'
import Contact from './components/Contact'
import Footer from './components/Footer'
import sebastianDrone from './assets/images/sebastian-drone.jpg'
import kornatiSunset from './assets/images/kornati-sunset.jpg'

export default function App() {
  return (
    <>
      <MagneticCursor />
      <Navbar />
      <main>
        <Hero />
        <EyeSection />
        <Services />
        <EagleDivider
          image={sebastianDrone}
          position="center"
          height="55vh"
          label="Cinematic Excellence"
          title={<>The Eagle <span style={{ background: 'linear-gradient(90deg, #FFB800 0%, #FF6600 50%, #CC2200 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Rises</span></>}
        />
        <AICoach />
        <EagleDivider
          image={kornatiSunset}
          position="center top"
          height="65vh"
        />
        <Portfolio />
        <Wedding />
        <Commercial />
        <Tutorials />
        <Events />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
