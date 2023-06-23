import React from 'react'
import { Navbar,ServicesSection,Portfolio,ReviewSection,Footer,WelcomeSection } from '../utils'
const Home = () => {
  return (
    <main className='max-w-screen-xl '>
     <Navbar />
      <WelcomeSection />
      <ServicesSection />
      <Portfolio />
      <ReviewSection />
      <Footer />
    </main>
  )
}

export default Home