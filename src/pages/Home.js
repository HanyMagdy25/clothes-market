import React from 'react'
import About from '../components/About/About'
import Header from '../components/Header/Header'
import Offers from '../components/Offers/Offers'
import Services from '../components/Services/Services'

export default function Home() {
  return (
    <>
        <Header/>
        <About/>
        <Services/>
        <Offers/>
    </>
  )
}
