import React from 'react'
import { Link } from 'gatsby'
import { IconBehance, IconInstagram, IconDribbble, IconLinkedin, WaveLine } from './icons'
import img1 from '../images/f-logo.svg'
import img2 from '../images/f-left.svg'
import img3 from '../images/f-right.svg'
const Footer = ({ siteTitle }) => (
  <footer className="main-footer">
    <img className="f-back-left" src={img2} alt="" />
    <img className="f-back-right" src={img3} alt="" />
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <div className="content text-center">
            <h1 className="sec-title hidden-sm">TAKE THE RISK OF DOING WHAT YOU LIKE</h1>
            <div className="actions">
              <div className="col-f h-md text-left">
                <p>HECHO POR GOVINDA</p>
              </div>
              <div className="col-f h-md">
                <img className="f-logo" src={img1} alt="" />
              </div>

              <div className="col-f text-right">
                <div className="social-links">
                  <a target="_blank" href="https://dribbble.com/Govinda_"><IconDribbble width="22px" height="22px" /></a>
                  <a target="_blank" href="https://www.instagram.com/gitagovinda_/"><IconInstagram width="20px" height="20px" /></a>
                  <a target="_blank" href="https://www.behance.net/Gita-Govinda"><IconBehance width="22px" height="22px" /></a>
                  <a target="_blank" href="https://www.linkedin.com/in/gita-maga%C3%B1a-a18b7b172/"><IconLinkedin width="18px" height="18px" /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer >
)

export default Footer
