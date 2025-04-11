import { Link, useLocation } from 'react-router-dom'

const navItems = [
  { name: 'Home', to: '/' },
  { name: 'About', to: '/about' },
  { name: 'Projects', to: '/projects' }
]

function NavMenu() {
  const location = useLocation()

  return (
    <nav className="fixed bottom-4 md:top-4 md:bottom-auto left-1/2 transform -translate-x-1/2 bg-white/50 dark:bg-neutral-800/60 backdrop-blur-md shadow-lg rounded-full px-6 py-2 flex space-x-4 z-50">
      {navItems.map((item) => (
        <Link
          key={item.to}
          to={item.to}
          className={`px-4 py-1 rounded-full font-semibold transition-all duration-300 ${
            location.pathname === item.to
              ? 'bg-neutral-800 dark:bg-neutral-600 text-white scale-105'
              : 'text-gray-800 dark:text-gray-200 hover:bg-neutral-200 dark:hover:bg-neutral-700'
          }`}
        >
          {item.name}
        </Link>
      ))}
    </nav>
  )
}

export default NavMenu