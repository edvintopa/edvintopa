import React from 'react'
import NavMenu from './NavMenu/NavMenu'

interface LayoutProps {
  children: React.ReactNode
}

function Layout({ children }: LayoutProps) {
  return (
    <>
      <NavMenu />
      <main className="p-4 mt-16 md:ml-64 md:mt-0">
        {children}
      </main>
    </>
  )
}

export default Layout