import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Services from '../components/Services'
import SubBanner from '../components/SubBanner'

function services() {
  return (
    <div>
        <Header />
      <SubBanner page="Services" />
      <Services />

      <Footer />
    </div>
  )
}

export default services