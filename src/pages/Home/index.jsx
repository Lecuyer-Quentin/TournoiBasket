import Footer from "../../components/Footer"
import Header from "../../components/Header"
import Hero from "../../components/Hero"
import Sponsor from "../../components/Sponsor"
import Info from "../../components/Info"
import Contact from "../../components/Contact"

const Home = () => {
  return (
      <div className="home">
          <Header />
          {/* <main> */}
                <section className="hero">
                    <Hero />
              </section>
              
                <section className="sponsor">
                    <Sponsor />
              </section>
              
                <section className="info">
                    <Info />
              </section>
              
                <section className="contact">
                    <Contact />
              </section>
              
          {/* </main> */}
          <Footer />

      </div>
  )
}

export default Home