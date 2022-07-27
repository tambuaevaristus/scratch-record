import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Services from '../components/Services'

function services() {
  return (
    <div>
        <Header />
      <div className="container-fluid text-center bg-primary  py-5">

          <h1 className="mt-5">Services</h1>
      </div>
      <Services />

      <Footer />
    </div>
  )
}

export default services