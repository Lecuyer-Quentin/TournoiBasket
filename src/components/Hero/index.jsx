import heroImg from '../../assets/images/hero1.jpg'
const Hero = () => {
  return (
          <article> 
            <h1 id="hero">TOURNOI Universitaire 2024</h1>

              <div className="hero__background">
                  <img src={heroImg} alt="" />
              </div>
              <div className="hero__overlay"></div>
                <div className="hero__content">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, voluptatum?</p>
                  <button>Inscription</button>
                </div>
            </article>
  )
}

export default Hero