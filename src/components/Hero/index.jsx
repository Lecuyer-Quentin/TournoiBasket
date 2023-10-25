import heroImg from '../../assets/images/heroImg.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMusic } from '@fortawesome/free-solid-svg-icons'
import { faTrophy } from '@fortawesome/free-solid-svg-icons'
import { faBasketballBall } from '@fortawesome/free-solid-svg-icons'
import { faSquareInstagram } from '@fortawesome/free-brands-svg-icons'
import inscription from "../../assets/files/inscription.pdf"

// const inscrip = "https://www.canva.com/design/DAFyRk9b2GE/view"


const Hero = () => {
  const insta = "https://www.instagram.com/3x3luminychampionship/"
  return (
    <article>
      <div className='hero__social'>
        <FontAwesomeIcon icon={faSquareInstagram} />
        <a href={insta} target="_blank" rel="noreferrer" >@3x3luminychampionship</a>
      </div>
      <h1 id="hero">TOURNOI <br/> <span>3X3</span></h1>

      <div className="hero__background">
        <img src={heroImg} alt="" />
      </div>
      <div className="hero__overlay"></div>

      <div className="hero__content">
        <ul>
          <li>
            <FontAwesomeIcon icon={faMusic} />
            <a href="music">Musique Live</a>
          </li>
          <li>
            <FontAwesomeIcon icon={faBasketballBall} />
            <a href="concours">Concours de 3 points</a>
          </li>
          <li>
            <FontAwesomeIcon icon={faTrophy} />
            <a href="recompenses">Récompenses</a>
          </li>
        </ul>
      </div>

      <button>
        <a download={true} href={inscription}>
          Télécharger la fiche d&apos;inscription
        </a>
      </button>

      
      <div className="hero__footer">
          <h3>MARSEILLE</h3>
          <span>Technosport de Luminy</span>
          <p>Mardi 5 Décembre 2023</p>
      </div>
      
    </article>
  )
}

export default Hero