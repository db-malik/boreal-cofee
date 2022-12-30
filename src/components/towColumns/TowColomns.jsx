import React from 'react'
import { Link } from 'react-router-dom'

import { images } from '../../data/images/images'

import './towColomns.scss'

const TowColomns = ({
  img,
  subHead,
  mainHead,
  detail,
  hasBtn,
  inverted,
  noExtra,
  navlink,
  address,
}) => {
  return (
    <div className="two-cols">
      {inverted ? null : (
        <div
          style={{
            backgroundImage: `url(${require(`../../assets/img/${img}`)})`,
          }}
          className="img-cont"
        ></div>
      )}

      <div className="details">
        <div className="cont">
          <h4 className="txt-sm">{subHead}</h4>
          <h2 className="txt-bg">{mainHead}</h2>
          <hr className="org-line" />
          <p className="para">
            {detail.map((ele, id) => (
              <React.Fragment key={id}>
                <span>{ele}</span>
                {id < detail.length - 1 ? (
                  <>
                    <br />
                    <br />
                  </>
                ) : null}
              </React.Fragment>
            ))}
          </p>
          {noExtra === true ? null : hasBtn ? (
            <Link to={navlink} className="nav">
              <span className="txt">DISCOVER {mainHead}</span>
              <img src={images.rightArrow} alt="arrow" className="icon" />
            </Link>
          ) : (
            <div className="down">
              <div className="upper">
                <h4 className="title">ADDRESS</h4>
              </div>
              <p className="plane">{address}</p>
            </div>
          )}
        </div>
      </div>

      {inverted ? (
        <div
          style={{
            backgroundImage: `url(${require(`../../assets/img/${img}`)})`,
          }}
          className="img-cont"
        ></div>
      ) : null}
    </div>
  )
}

export default TowColomns
