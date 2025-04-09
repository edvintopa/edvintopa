import { Link, useLocation } from 'react-router-dom'

const navItems = [
  { name: 'Home', to: '/' },
  { name: 'About', to: '/about' }
]

function NavMenu() {
  const location = useLocation()

  return (
    <div className="h-full w-64 bg-stone-100 dark:bg-stone-900 text-stone-900 dark:text-white flex flex-col p-4">
        
      <div className="p-4 text-2xl font-bold border-b border-stone-300 dark:border-stone-700">
        Edvin Topalovic
      </div>

      <nav className="flex-1 mt-4">
        <div className="space-y-2">
          {navItems.map((item) => (
            <div
              key={item.to}
              className={`rounded-md text-center py-2 cursor-pointer w-full 
              ${
                location.pathname === item.to
                  ? 'bg-stone-300 dark:bg-stone-700'
                  : 'bg-stone-200 dark:bg-stone-800'
              } 
              hover:bg-stone-400 dark:hover:bg-stone-500`}
            >
              <Link to={item.to} className="block">
                {item.name}
              </Link>
            </div>
          ))}
        </div>
      </nav>
    </div>
  )
}

export default NavMenu