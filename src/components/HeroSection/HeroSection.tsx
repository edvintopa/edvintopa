const HeroSection: React.FC = () => {
  return (
    <section className="flex flex-col items-center justify-center py-16 px-4">
      <h1 className="text-5xl font-extrabold text-gray-900 dark:text-white mb-4 text-center">
        Let me introduce you to <span className="text-rose-600">quality</span>
      </h1>
      <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-2xl text-center">
        I’m Edvin, a full-stack developer who designs an experience, both in terms of visually pleasing interfaces, but also robust and scalable backend functionality.
      </p>
      <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded">
        Get Started
      </button>
    </section>
  )
}

export default HeroSection