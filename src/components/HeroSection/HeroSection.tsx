import React from 'react'
import './HeroSection.css'

const HeroSection: React.FC = () => {
  const scrollToContent = () => {
    const element = document.getElementById('tech-stack')
    if (element) {
      const offset = -80
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + offset
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }

  return (
    <section className="flex flex-col items-center justify-center py-16 px-4">
      <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 dark:text-white mb-4 text-center">
        Let me introduce you to <span className="gradient-text">Quality</span>
      </h1>
      <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-3xl text-center">
        I’m Edvin, a full-stack developer who designs an experience, both in terms of visually pleasing interfaces, but also robust and scalable backend functionality.
      </p>
      <button
        onClick={scrollToContent}
        className="bg-blue-700/80 dark:bg-blue-600/80 hover:bg-blue-500/80 text-white font-bold py-3 px-6 rounded"
      >
        Explore
      </button>
    </section>
  )
}

export default HeroSection