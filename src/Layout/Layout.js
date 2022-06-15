import React from 'react'
import Footer from './Footer'
import Header from './Header'
import Main from './Main'

const Layout = () => {
  return (
    <div className='layout-container'>
        <Header/>
        <Main/>
        <Footer/>
    </div>
  )
}

export default Layout