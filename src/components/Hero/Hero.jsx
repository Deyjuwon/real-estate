import React from 'react'
import './Hero.css'
import {HiLocationMarker} from 'react-icons/hi'
import CountUp from 'react-countup'
import {motion} from 'framer-motion'

const Hero = () => {
  return (
    <section className="hero-wrapper">
        <div className="paddings innerWidth hero-container flexCenter">
            {/* left */}
            <div className="flexColStart hero-left">
                <div className="hero-title">
                    <img className='home-img' src="./home.png" alt="" />
                    <motion.h1
                    initial={{ y: "5rem", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      duration: 2,
                      type: "ease-in",
                    }}
                    >Discover  <br /> Your Perfect <br /> Home
                    </motion.h1>
                </div>
                
                <div className="flexColStart hero-des">
                    <span className='secondaryText hero-sec'>Locate a range of homes that are ideal for you with ease.</span>
                    <span className='secondaryText hero-sec'>Forget about the challenges of locating a place to call home.</span>
                </div>

                <div className="flexCenter search-bar">
                    <HiLocationMarker color="var(--blue)" size={25} />
                    <input type="text" />
                    <button className='button bn632-hover bn21'>Search</button>
                </div>
                
                <div className="flexCenter stats">
                    <div className="flexColCenter stat">
                        <span>
                            <CountUp start={300} end={380} duration={4} />
                            <span>+</span>
                        </span>
                        <span className='secondaryText hero-sec'>Premium Products</span>
                    </div>

                    <div className="flexColCenter stat">
                        <span>
                            <CountUp start={100} end={150} duration={4} />
                            <span>+</span>
                        </span>
                        <span className='secondaryText hero-sec'>Happy Customers</span>
                    </div>

                    <div className="flexColCenter stat">
                        <span>
                            <CountUp end={8} />
                            <span>+</span>
                        </span>
                        <span className='secondaryText hero-sec'>Award Winning</span>
                    </div>
                </div>
            </div>
            {/* right side */}
            <div className="hero-right flexCenter">
                <div className="image-container">
                    <img src="./hero-apartment.jpg" alt="" />
                </div>

            </div>
        </div>
    </section>
  )
}

export default Hero