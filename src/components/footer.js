import React from 'react'
import { Link } from 'gatsby'
import { IconBehance, IconInstagram, IconDribbble } from './icons'
import img1 from '../images/f-logo.svg'
import img2 from '../images/f-left.svg'
import img3 from '../images/f-right.svg'
const Footer = ({ siteTitle }) => (
  <footer className="main-footer">
    <img className="f-back-left" src={img2} alt=""/>
    <img className="f-back-right" src={img3} alt=""/>
    <div className="container">
      <div className="content text-center">
        <h1 className="sec-title">TAKE THE RISK OF DOING WHAT YOU LIKE</h1>
        <div className="actions">
          <p>HECHO POR GOVINDA</p>
          <img className="f-logo" src={img1} alt=""/>
          <div className="social-links">
            <IconDribbble  width="22px" height="22px" />
            <IconInstagram width="22px" height="22px" />
            <IconBehance width="22px" height="22px" />
          </div>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
