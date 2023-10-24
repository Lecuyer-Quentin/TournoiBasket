
const Contact = () => {
  return (
    <article>
      <form>
        <div className="contact__content">
          <div className="contact__content__info">
            <h2 id="contact">CONTACT</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, voluptatum?</p>
          </div>
          <div className="contact__content__form">
            <input type="text" placeholder="Nom" />
            <input type="text" placeholder="Prenom" />
            <input type="text" placeholder="Email" />
            <textarea placeholder="Message"></textarea>
            <button>Envoyer</button>
          </div>
        </div>
      </form>
    </article>
  )
}

export default Contact