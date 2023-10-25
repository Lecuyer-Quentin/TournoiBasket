import amuLogo from '../../assets/images/amu-logo.jpg'
import ffbbLogo from '../../assets/images/ffbb-logo.jpg'
import interSportLogo from '../../assets/images/interSport-logo.jpg'
const Sponsor = () => {
  return (
    <article>
      <div className="sponsor__content">
        <div>
          <img src={amuLogo} alt="" />
        </div>
        <div>
          <img src={ffbbLogo} alt="" />
        </div>
        <div>
          <img src={interSportLogo} alt="" />
        </div>
      </div>
    </article>
  )
}

export default Sponsor