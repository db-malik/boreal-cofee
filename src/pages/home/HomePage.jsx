import React from 'react'
import { Link } from 'react-router-dom'
import TowColomns from '../../components/towColumns/TowColomns'

import { images } from '../../data/images/images'
import './homePage.scss'

const HomePage = () => {
  return (
    <div className="homeview">
      <header className="homeview-header">
        <div className="container">
          <div className="content">
            <div className="hero-content">
              <img
                src={images.homeViewImg}
                alt="hero"
                className="hero-design"
              />
            </div>
            <div className="header-nav-guide">
              <Link to="/mainlocation/1" className="nav-btn">
                <span className="text">DISCOVER BOREAL</span>
                <img
                  src={images.rightArrow}
                  alt="right-arrow"
                  className="rt-arrow"
                />
              </Link>
              <Link to="/shop/all" className="nav-btn">
                <span className="text">VISIT OUR WEBSHOP</span>
                <img
                  src={images.rightArrow}
                  alt="right-arrow"
                  className="rt-arrow"
                />
              </Link>
            </div>
          </div>
          <div className="scroll-container">
            <img src={images.scroll} alt="scroll" className="scroll" />
          </div>
        </div>
      </header>
      <section className="story">
        <div className="container">
          <TowColomns
            inverted={false}
            mainHead={'COFFEE SHOPS'}
            subHead={'THE STORY OF OUR'}
            detail={[
              `From an abandoned storage space to a convivial meeting place
          in the heart of Geneva, our first café opened in April 2009
          at Rue du Stand 60.`,

              `
          Now in 3 locations in Geneva and 2 locations in Zürich,
          customers can expect an amazing experience from bean to cup.
          Boreal Coffee is committed to sourcing the finest quality
          coffee beans from farmers around the world, directly traded,
          and roasted with love each week in our artisanal roastery in
          Carouge.`,

              `
          Boréal Coffee expose photos of Léonard Fisch.`,
            ]}
            img={'block-home-1-min.jpg'}
            hasBtn
            navlink={`/mainlocation/1`}
          />

          <TowColomns
            inverted={true}
            mainHead={"BOREAL'S ROASTERY"}
            subHead={'FROM BEAN TO CUP AT'}
            detail={[
              `
          We opened an artisanal roastery in Carouge where our small
          team of dedicated roasters works to match the profiles of
          the green coffee beans we import with a roast that brings
          out their best characteristics.`,
              `
          And, knowing that we work directly with the farmers
          themselves wherever possible to ensure better livelihoods
          while caring for the environment, your beverage is one to
          feel good about.
        `,
            ]}
            img={'block-home-2-min.jpg'}
            hasBtn
            navlink={`/mainlocation/1`}
          />
        </div>
      </section>
      <section className="brew">
        <div className="layer"></div>
        <div className="content">
          <h4 className="short-title">JEBREW</h4>
          <h2 className="title">CAN'T MAKE IT BOREAL?</h2>
          <hr className="org-line" />
          <div className="text">
            Can't make it to Boreal? Whether you are looking for a hearty mug of
            black coffee in the morning or an after-lunch espresso, learn how to
            brew a perfect cup of coffee for your needs and tastes
          </div>
          <div className="img-and-buy">
            <div className="img-cont">
              <img src={images.jebrewLink} alt="acc" className="img-acc" />
            </div>
            <button className="buy">
              <span className="txt">TEACH ME HOW TO BREW</span>
              <img
                src={images.rightArrow}
                alt="right-arrow"
                className="right"
              />
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage
