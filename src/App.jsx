import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Motos from './components/Motos'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const [isContactOpen, setIsContactOpen] = useState(false)

  return (
<div className="min-h-screen bg-white overflow-x-hidden">
      <Header onContactClick={() => setIsContactOpen(true)} />
      <Hero />
  <Motos />
      <Contact isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
      <Footer />
    </div>
  )
}
