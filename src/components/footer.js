import React from 'react'
import { Link } from 'gatsby'
import { IconBehance, IconInstagram, IconDribbble, WaveLine } from './icons'
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
            <h1 className="sec-title">TAKE THE RISK OF DOING WHAT YOU LIKE</h1>
            <div className="actions">
              <div className="col-f h-md text-left">
                <p>HECHO POR GOVINDA</p>
              </div>
              <div className="col-f h-md">
                <img className="f-logo" src={img1} alt="" />
              </div>

              <div className="col-f text-right">
                <div className="social-links">
                  <IconDribbble width="22px" height="22px" />
                  <IconInstagram width="22px" height="22px" />
                  <IconBehance width="22px" height="22px" />
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
