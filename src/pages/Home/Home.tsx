import HeroSection from '../../components/HeroSection/HeroSection'
import TechStack from '../../components/Containers/TechStack/TechStack'

function Home() {
  return (
    <div className="container-4xl p-4">

      <div className="min-h-screen flex items-center justify-center -mt-15">
        <HeroSection />
      </div>
      

      <div id="tech-stack" className="mb-6">
        <h2 className="text-3xl font-bold mb-4 dark:text-white">Tech Stack</h2>
        <TechStack />
      </div>

    </div>
  )
}

export default Home