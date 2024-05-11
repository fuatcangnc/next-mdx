import React from 'react'
import Header from './Header'
import Footer from './Footer'

type ChildrenProps={
    children:React.ReactNode
}

const Layout = ({children}:ChildrenProps) => {
  return (
    <div className='flex w-full max-w-7xl mx-auto '>
        <div className="container">
        <Header></Header>
        {children}
        <Footer></Footer>
        </div>
    </div>
  )
}

export default Layout