import React from 'react'
import { Link } from 'gatsby'
import LayoutProject from '../../components/layoutproject'
import { ArrowBack, WaveLine } from '../../components/icons'

import img1 from '../../images/volant-back1.png'
import img2 from '../../images/volant-back2.svg'
import img from '../../images/volant.png'
import imgRes from '../../images/volant-hero-2.png'
import volantContent from '../../images/volant-content.png'
import imgMarvel from '../../images/marvel.svg'
import imgAdobe from '../../images/adobexd.svg'

import Slider from "react-slick";

import slide1 from '../../images/volant-slider/1.png'
import slide2 from '../../images/volant-slider/2.png'
import slide3 from '../../images/volant-slider/3.png'
import slide4 from '../../images/volant-slider/4.png'
import slide5 from '../../images/volant-slider/5.png'
import slideback from '../../images/volant-slider/back-slider.png'

var settings = {
  dots: true,
  arrows: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};

const PageVolant = () => (
  <LayoutProject title="FIDO APP" link="/apps/fido">
    <div className="project-page volant" style={{ position: 'relative' }}>
      <div className="sec-header">
        <div className="container content">
          <Link to="/apps">
            <div className="d-flex">
              <ArrowBack width="22px" height="22px" />
              <span className="action">BACK</span>
            </div>
          </Link>
        </div>
      </div>
      <section className="sec-hero" >
        <img className="volant-back1" src={img1} alt="" />
        <img className="volant-back2" src={img2} alt="" />
        <div className="container content">
          <div className="row align-items-center" >
            <div className="col-md-4">
              <div className="block-info">
                <h1 className="title">VOLANT</h1>
                <p className="sec-text">Aplicación para viajes</p>
                <div className="block-img-res">
                  <img className="sec-cover img-res" src={imgRes} alt="" />
                  <img className="volant-back1 back-res" src={img1} alt="" />
                </div>
                <div className="details">
                  <div className="title">¿Qué es Volant?</div>
                  <p className="sec-text">Es una aplicación que permite a los usuarios descubrir, planificar y coordinar viajes. La herramienta integra información del lugar, asi como precios, boletos y un perfil donde puedo llevar un control de mis viajes realizados o posibles viajes a realizar.</p>
                </div>
              </div>
            </div>
            <div className="col-md-8 text-center">
              <img className="sec-cover hidden-sm" src={img} alt="" />
            </div>
          </div>
        </div>

      </section>
      <section className="sec-info">
        <div className="content container">
          <div className="row">
            <div className="col-md-5">
              <h1 className="sec-title">PANTALLAS VOLANT</h1>
              <WaveLine width="150px" />
              <div className="block-info">
                <div className="details">
                  <span>Titulo:</span>
                  <p>VOLANT</p>
                  <span>Tipo:</span>
                  <p>APP iOS.</p>
                  <span>Programas utilizados:</span>
                  <div className="tools">
                    <img className="i-tool" src={imgMarvel} alt="" />
                    <img className="i-tool" src={imgAdobe} alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-7">
              {/* <img className=" img-res" src={volantContent} alt="" /> */}
            </div>
          </div>
          <img className="img-responsive hidden-sm" src={volantContent} alt="" />
        </div>
        <div className="slider-section" style={{ backgroundImage: `url('${slideback}')` }}>
          <Slider {...settings}>
            <div>
              <img style={{ width: '100%' }} src={slide1} alt="" />
            </div>
            <div>
              <img style={{ width: '100%' }} src={slide2} alt="" />
            </div>
            <div>
              <img style={{ width: '100%' }} src={slide3} alt="" />
            </div>
            <div>
              <img style={{ width: '100%' }} src={slide4} alt="" />
            </div>
            <div>
              <img style={{ width: '100%' }} src={slide5} alt="" />
            </div>
          </Slider>
        </div>
      </section>

    </div>
  </LayoutProject>
)

export default PageVolant
