'use client'
import React from 'react'
import DetailVehicle from './DetailVehicle/DetailVehicle'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'

function PageDetail() {
  return (
    <div>
      <Navbar />
      <DetailVehicle />
      <Footer />
    </div>
  )
}

export default PageDetail