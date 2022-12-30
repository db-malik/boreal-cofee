import React, { useEffect, useState } from 'react'
import { Link, withRouter } from 'react-router-dom'

import './topbar.scss'

const Topbar = ({ topbarEffect }) => {
  const [showResMenu, setShowResMenu] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [showCart, setShowCart] = useState(false)
  const [noUse, setNoUse] = useState(null)
  const [showResCart, setShowResCart] = useState(false)

  useEffect(() => {
    const shouldTopbarChange = () => {
      document.addEventListener('scroll', (e) => {
        if (window.scrollY > 200) {
          setScrolled(true)
        } else setScrolled(false)
      })
    }
    shouldTopbarChange()
  }, [])

  const resMenuClick = () => {}

  const onNavDropdownClick = () => {}
  const onResCartToggle = () => {}
  const getCartItems = () => {}
  const getCartTotal = () => {}
  const removeCartItem = () => {}
  const onCartToggle = () => {}

  return (
    <nav
      className={`topbar ${
        topbarEffect ? (scrolled ? 'topbarInv' : '') : 'topbarInv'
      }`}
    >
      <div className="container">
        <Link to="/" className="logo-container">
          {topbarEffect ? (
            scrolled ? (
              <img
                src={require('../../assets/img/black-logo.png')}
                className="logo"
                alt="logo"
              />
            ) : (
              <img
                src={require('../../assets/img/logo.png')}
                className="logo"
                alt="logo"
              />
            )
          ) : (
            <img
              src={require('../../assets/img/black-logo.png')}
              className="logo"
              alt="logo"
            />
          )}
        </Link>
        <div className="nav-items large">
          <div
            onClick={() => this.onNavDropdownClick('/brandstory')}
            className="item-container item-lg"
          >
            <li className="item">WHO WE ARE?</li>
          </div>
          <div
            onClick={() => this.onNavDropdownClick('/mainlocation/1')}
            className="item-container"
          >
            <li className="item">
              <span className="txt">CAFES</span>
              <img
                src={require('../../assets/icons/down.png')}
                alt="down"
                className="down"
              />
            </li>
            <ul className="item-dropdown">
              <li className="item-drop-ele">GENEVA</li>
              <li className="item-drop-ele">ZURICH</li>
            </ul>
          </div>

          <div
            onClick={() => this.onNavDropdownClick('/shop/all')}
            className="item-container"
          >
            <li className="item">
              <span className="txt">SHOP</span>
              <img
                src={require('../../assets/icons/down.png')}
                alt="down"
                className="down"
              />
            </li>
            <ul className="item-dropdown">
              <Link to="/shop/filter" className="item-drop-ele">
                FILTER
              </Link>
              <Link to="/shop/espresso" className="item-drop-ele">
                ESPRESSO
              </Link>
              <Link to="/shop/merchandise" className="item-drop-ele">
                MERCHANDISE
              </Link>
            </ul>
          </div>
          <div
            onClick={() => this.onNavDropdownClick('/cc')}
            className="item-container item-lg"
          >
            <li className="item">COFFEE CATERING</li>
          </div>
          <div
            onClick={() => this.onNavDropdownClick('/contact')}
            className="item-container"
          >
            <li className="item">CONTACT</li>
          </div>
          <div
            onMouseOver={() => onCartToggle(true)}
            onMouseLeave={() => onCartToggle(false)}
            className="item-container"
          >
            <li className="item">
              {topbarEffect ? (
                scrolled ? (
                  <img
                    src="https://img.icons8.com/ios-filled/48/000000/shopping-bag.png"
                    alt="shop-bag"
                    className="cart"
                  />
                ) : (
                  <img
                    src={require('../../assets/icons/bag.png')}
                    alt="cart"
                    className="cart"
                  />
                )
              ) : (
                <img
                  src="https://img.icons8.com/ios-filled/48/000000/shopping-bag.png"
                  alt="shop-bag"
                  className="cart"
                />
              )}

              <span className="txt">CART</span>
            </li>
            {showCart ? (
              <div className="dropdown">
                {Object.keys(JSON.parse(localStorage.cartItems)).length ? (
                  <div className="cont">
                    {getCartItems().map((item, idx) => (
                      <div key={idx} className="item">
                        <div className="item-img-cont">
                          <img
                            src={require(`../../assets/img/ProductImages/${item.img}`)}
                            alt="item"
                            className="img"
                          />
                        </div>
                        <div className="details">
                          <h4 className="upper">{item.name}</h4>
                          <span className="lower">
                            {JSON.parse(window.localStorage.cartItems)[item.id]}{' '}
                            x {item.rate}{' '}
                          </span>
                        </div>
                        <div
                          onClick={() => removeCartItem(item.id)}
                          className="close-cont"
                        >
                          <img
                            src={require('../../assets/icons/close.png')}
                            alt="close"
                            className="icon"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="msg-cont">Your Cart is Empty</div>
                )}
                {localStorage.length ? (
                  <>
                    <div className="total">Total: {getCartTotal()} CHF</div>
                    <div className="checkout-cont">
                      <button className="checkout">CHECKOUT</button>
                    </div>
                  </>
                ) : null}
              </div>
            ) : null}
          </div>
          <div className="item-container item-md">
            <li className="item">
              {topbarEffect ? (
                scrolled ? (
                  <img
                    src="https://img.icons8.com/material/48/000000/user.png"
                    alt="user"
                    className="user"
                  />
                ) : (
                  <img
                    src={require('../../assets/icons/user.png')}
                    alt="user"
                    className="user"
                  />
                )
              ) : (
                <img
                  src="https://img.icons8.com/material/48/000000/user.png"
                  alt="user"
                  className="user"
                />
              )}

              <span className="txt">ACCOUNT</span>
              {/* <img
            src={require('../../assets/icons/down.png')}
            alt="down"
            className="down"
          /> */}
            </li>
          </div>
        </div>
        <div className="nav-items small">
          <div className="item-container">
            <li onClick={() => this.onResCartToggle(true)} className="item">
              {topbarEffect ? (
                scrolled ? (
                  <img
                    src="https://img.icons8.com/ios-filled/48/000000/shopping-bag.png"
                    alt="shop-bag"
                    className="icon"
                  />
                ) : (
                  <img
                    src={require('../../assets/icons/bag.png')}
                    alt="shop-bag"
                    className="icon"
                  />
                )
              ) : (
                <img
                  src="https://img.icons8.com/ios-filled/48/000000/shopping-bag.png"
                  alt="shop-bag"
                  className="icon"
                />
              )}
            </li>

            {showResCart ? (
              <div className="cart">
                {Object.keys(localStorage.cartItems).length ? (
                  <div className="cont">
                    {getCartItems().map((item, idx) => (
                      <div key={idx} className="item">
                        <div className="item-img-cont">
                          <img
                            src={require(`../../assets/img/ProductImages/${item.img}`)}
                            alt="item"
                            className="img"
                          />
                        </div>
                        <div className="details">
                          <h4 className="name">{item.name}</h4>
                          <h4 className="calc">
                            {JSON.parse(window.localStorage.cartItems)[item.id]}{' '}
                            x {item.rate}{' '}
                          </h4>
                        </div>
                        <div
                          onClick={() => removeCartItem(item.id)}
                          className="close-cont"
                        >
                          <img
                            src={require('../../assets/icons/close.png')}
                            alt="close"
                            className="icon"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="msg-cont">Your Cart is Empty</div>
                )}
                {localStorage.length ? (
                  <>
                    <div className="total">Total: {getCartTotal()} CHF</div>
                    <div className="checkout-cont">
                      <button className="checkout">CHECKOUT</button>
                    </div>
                  </>
                ) : null}
                <div
                  onClick={() => this.onResCartToggle(false)}
                  className="close"
                >
                  <img
                    src={require('../../assets/icons/close.png')}
                    alt="close"
                    className="icon"
                  />
                </div>
              </div>
            ) : null}
          </div>
          <div className="item-container">
            <li className="item">
              {topbarEffect ? (
                scrolled ? (
                  <img
                    src="https://img.icons8.com/material/48/000000/user.png"
                    alt="user"
                    className="icon"
                  />
                ) : (
                  <img
                    src={require('../../assets/icons/user.png')}
                    alt="cart"
                    className="icon"
                  />
                )
              ) : (
                <img
                  src="https://img.icons8.com/material/48/000000/user.png"
                  alt="user"
                  className="icon"
                />
              )}
            </li>
          </div>
          <div onClick={resMenuClick} className="item-container">
            <li className="item">
              {topbarEffect ? (
                scrolled ? (
                  <img
                    src="https://img.icons8.com/ios-filled/48/000000/menu.png"
                    alt="menu"
                    className="icon"
                  />
                ) : (
                  <img
                    src={require('../../assets/icons/menu.png')}
                    alt="menu"
                    className="icon"
                  />
                )
              ) : (
                <img
                  src="https://img.icons8.com/ios-filled/48/000000/menu.png"
                  alt="menu"
                  className="icon"
                />
              )}
            </li>
          </div>
        </div>
      </div>
      {showResMenu ? (
        <div className="res-menu">
          <div className="res-menu-container">
            <div
              onClick={() => this.onNavDropdownClick('/brandstory')}
              className="ele"
            >
              <Link to="#" className="main-link">
                WHO WE ARE?
              </Link>
            </div>
            <div
              onClick={() => this.onNavDropdownClick('/mainlocation/1')}
              className="ele"
            >
              <Link to="#" className="main-link sub-main-link">
                CAFES
              </Link>
            </div>
            <div
              onClick={() => this.onNavDropdownClick('/shop/all')}
              className="ele"
            >
              <Link to="#" className="main-link sub-main-link">
                SHOP
              </Link>
            </div>
            <div onClick={() => this.onNavDropdownClick('/cc')} className="ele">
              <Link to="#" className="main-link">
                COFFEE CATERING
              </Link>
            </div>
            <div
              onClick={() => this.onNavDropdownClick('/contact')}
              className="ele"
            >
              <Link to="#" className="main-link">
                CONTACT
              </Link>
            </div>

            <div onClick={this.resMenuClick} className="close">
              <img
                src={require('../../assets/icons/close.png')}
                alt="close"
                className="icon"
              />
            </div>
          </div>
        </div>
      ) : null}
    </nav>
  )
}
export default Topbar
