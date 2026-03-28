import Header from './components/Header'
import Hero from './components/Hero'
import Motos from './components/Motos'
import Services from './components/Services'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header />
      <Hero />
      <Motos />
      <Services />
      <Contact />
      <Footer />
    </div>
  )
}
