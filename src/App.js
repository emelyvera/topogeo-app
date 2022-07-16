import React from 'react'
import { Body } from './components/body/Body'
import { Carrousel } from './components/body/Carrousel'
import { Contact } from './components/body/Contact'
import { CorporateCulture } from './components/body/CorporateCulture'
import { Footer } from './components/footer/Footer'
import { Header } from './components/header/Header'
import { Nav } from './components/header/Nav'

export const App = () => {
  return (
    <>

      <Header />
      <Nav />
      <Carrousel />
      <Body/>
      <CorporateCulture/>
      <Contact/>
      <Footer/>
      
    </>


  )
}
