import { useState } from 'react'

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

const renderMenu = () => {
    const menuItem = []
    for (let i = 0; i < 4; i++) {
      menuItem.push(<div key={i} className={`menu__wrapper__item`}
        // ${!isMenuOpen ? 'menu__wrapper__color' : ''}`}
        ></div>)
    }
    return (
      <div
        className={`menu__wrapper `}
        // ${isMenuOpen ? 'menu__wrapper__color' : ''}`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {menuItem}        
      </div>
    )
  }

  const renderMenuBar = () => {
    if (isMenuOpen) {
      return (
          <ul>
            {renderNavLink()}
          </ul>
      )
    }
  }
  const renderNavLink = () => {
      return (
        <>
          <li>
            <a href="/">Home</a>
          </li>
            <li>
                <a href='/music'>Music</a>
          </li>
              <li>
                  <a href='/concours'>Concours</a>
          </li>
        </>
      )
  }

  return (
    <header className='header'
      // onMouseLeave={() => setIsMenuOpen(false)}
    >
        <nav className='header__nav'>
        {renderMenu()}
        {renderMenuBar()}
      </nav>
    </header>
  )

}

export default Header