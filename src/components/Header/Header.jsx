import React, { useState } from 'react'
import './Header.css'
import { BiMenuAltRight } from 'react-icons/bi';
import OutsideClickHandler from 'react-outside-click-handler';

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false)

  const getMenuStyles = (menuOpened) => {
    if (document.documentElement.clientWidth <= 800) {
      return{right: !menuOpened && "-100%"}
    }
  }

  return (
    <section className="h-wrapper">
        <div className="h-container innerWidth flexCenter paddings">

            {/* <img src="./oatLogo.png" width={100} alt="" /> */}
            <h1>oatHomes</h1>
            <OutsideClickHandler 
            onOutsideClick={() => {
              setMenuOpened(false)
            }
            }
            >
            <div className="flexCenter h-menu"
            style={getMenuStyles(menuOpened)}
            >
                <a href="">Properties</a>
                <a href="">About Us</a>
                <a href="">Contact</a>
                <a href="">Blog</a>
                <button className="button bn632-hover bn21">
                <a href="">Get Started</a>
                </button>
            </div>
            </OutsideClickHandler>
            <div className="menu-icon" onClick={() => setMenuOpened((prev) => !prev)}>
              <BiMenuAltRight size={30} />
            </div>
        </div>
   
    </section>
  )
}

export default Header