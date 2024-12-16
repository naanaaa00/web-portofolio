import '../App.css'

import Navbar from '../components/Navbar'
import Header from '../components/Header'
import Portofolio from '../components/Portofolio'
import About from '../components/About'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Portofolio />
      <About />
      <Footer />
    </>
  )
}

export default Home
