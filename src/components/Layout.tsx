import React from 'react'
import { useLocation } from 'react-router-dom'
import NavMenu from './NavMenu/NavMenu'
import '../App.css'

interface LayoutProps {
  children: React.ReactNode
}

function Layout({ children }: LayoutProps) {
  const location = useLocation()
  
  return (
    <>
      <NavMenu />
      <div key={location.pathname} className="w-full max-w-4xl p-4 animate-fadeIn">
        {children}
      </div>
    </>
  )
}

export default Layout