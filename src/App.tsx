import Header from './components/Header'
import Achievements from './components/Achievements'
import Reviews from './components/Reviews'
import Certificates from './components/Certificates'
import SkillsTabs from './components/SkillsTabs'
import Cases from './components/Cases'
import LogoCarousel from './components/LogoCarousel'
import OpenSource from './components/OpenSource'
import ScientificResearch from './components/ScientificResearch'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[#f9f9f9] flex flex-col">
      <div className="flex-grow">
        <Header />
        <Achievements />
        <Reviews />
        <Certificates />
        <SkillsTabs />
        <Cases />
        <LogoCarousel />

        <div className="max-w-6xl mx-auto px-[30px]">
          <OpenSource />
          <ScientificResearch />
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default App
