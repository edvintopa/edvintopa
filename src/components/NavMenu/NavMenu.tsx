import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const navItems = [
    { name: 'Home', to: '/' },
    { name: 'About', to: '/about' }
]

function NavMenu() {
    const location = useLocation()
    const [isOpen, setIsOpen] = React.useState(false)

    return (
        <>
            {/* Desktop Sidebar: visible on md and up */}
            <div className="hidden md:flex fixed left-0 top-0 h-full w-64 bg-stone-100 dark:bg-stone-900 text-stone-900 dark:text-white flex-col p-4">
                <div className="p-4 text-2xl font-bold border-b border-stone-300 dark:border-stone-700">
                    Edvin Topalovic
                </div>
                <nav className="flex-1 mt-4">
                    <div className="space-y-2">
                        {navItems.map((item) => (
                            <div
                                key={item.to}
                                className={`rounded-md text-center py-2 cursor-pointer w-full 
                ${location.pathname === item.to
                                        ? 'bg-stone-300 dark:bg-stone-700'
                                        : 'bg-stone-200 dark:bg-stone-800'
                                    } 
                hover:bg-stone-400 dark:hover:bg-stone-500`}
                            >
                                <Link to={item.to} className="block text-left pl-4">
                                    {item.name}
                                </Link>
                            </div>
                        ))}
                    </div>
                </nav>
            </div>

            {/* Mobile Navbar: visible on smaller screens */}
            <div className="md:hidden fixed top-0 left-0 right-0 z-10">
                <div className="flex justify-between items-center p-4 bg-stone-100 dark:bg-stone-900 text-stone-900 dark:text-white">
                    <div className="text-2xl font-bold">Edvin Topalovic</div>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="p-2 rounded-md border border-stone-300 dark:border-stone-700"
                    >
                        Menu
                    </button>
                </div>
                {isOpen && (
                    <nav className="bg-stone-100 dark:bg-stone-900 p-4 space-y-2">
                        {navItems.map((item) => (
                            <div
                                key={item.to}
                                className={`rounded-md text-center py-2 cursor-pointer w-full 
          ${location.pathname === item.to
                                        ? 'bg-stone-300 dark:bg-stone-700'
                                        : 'bg-stone-200 dark:bg-stone-800'
                                    } 
          hover:bg-stone-400 dark:hover:bg-stone-500`}
                            >
                                <Link
                                    to={item.to}
                                    className="block text-left pl-4"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            </div>
                        ))}
                    </nav>
                )}
            </div>
        </>
    )
}

export default NavMenu