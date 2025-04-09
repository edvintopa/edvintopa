import React from 'react'
import NavMenu from './NavMenu/NavMenu'

interface LayoutProps {
  children: React.ReactNode
}

function Layout({ children }: LayoutProps) {
  return (
    <div className="flex h-screen">
      <aside className="fixed left-0 top-0 h-full w-64 bg-gray-100">
        <NavMenu />
      </aside>
      <main className="flex-1 ml-64 p-4">
        {children}
      </main>
    </div>
  )
}

export default Layout