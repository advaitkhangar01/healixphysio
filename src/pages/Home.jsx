import React from 'react'
import Hero from '../components/Hero'
import Services from '../components/Services'
import { TrustStats, WhyChoose } from '../components/WhyChoose'
import Doctors from '../components/Doctors'
import Conditions from '../components/Conditions'
import { Process, Testimonials } from '../components/Process'
import Blog from '../components/Blog'
import Contact from '../components/Contact'

const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <TrustStats />
      <WhyChoose />
      <Conditions />
      <Doctors />
      <Process />
      <Testimonials />
      <Blog />
      <Contact />
    </>
  )
}

export default Home
