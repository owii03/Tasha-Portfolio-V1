import React from 'react'
import { Link } from 'gatsby'
import { easings} from 'react-animation'

import LayoutProject from '../../components/layoutproject'
import { ArrowBack } from '../../components/icons'

// import { withPrefix } from 'gatsby'
import hero1 from '../../images/inxight-hero.png'
import hero2 from '../../images/inxights-hero2.png'
import img2 from '../../images/inxights-anim.gif'

import imgMarvel from '../../images/marvel.svg'
import imgAdobe from '../../images/adobexd.svg'

const fadeInUp = {
  animation: `fade-in-up ${easings.easeInSine} 1000ms forwards`
}

const fadeOnly = {
  animation: `fade-in ${easings.easeInSine} 1500ms forwards`
}

const PageIxights = () => (
  <LayoutProject title="JWH BURGERS" link="/websites/jwh">
    <div className="project-page inxights" style={{ position: 'relative' }}>
      <div className="sec-header">
        <div className="container content">
          <Link to="/websites">
            <div className="d-flex">
              <ArrowBack width="22px" height="22px" />
              <span className="action">BACK</span>
            </div>
          </Link>
        </div>
      </div>
      <section className="sec-hero">
        <div className="container content" style={fadeInUp}>
          <h1 className="title" >INXIGHTS</h1>
          <p className="sec-text">Plataforma para monitorear campañas</p>
        </div>
        <img className="sec-cover hidden-sm" style={fadeOnly} src={hero1} alt="" />
        <img className="sec-cover hero2" src={hero2} alt="" />
      </section>
      <section className="sec-info">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12 text-center">
              <img className="info-img wow" src={img2} alt="" />
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="block-info">
                <h3 className="title">¿Qué es Inxights?</h3>
                <p className="sec-text">Plataforma para monitorear campañas creando informes de marketing, donde los datos se pueden consultar en una API para recopilar información, genera informes profesionales que permiten ver el rendimiento de todas las campañas y crea un propio informe de marketing e información útil para alcanzar su objetivo de marketing.</p>

                <div className="details">
                  <span>Titulo:</span>
                  <p>INXIGHTS</p>
                  <span>Tipo:</span>
                  <p>Web Responsive</p>
                  <span>Programas utilizados:</span>
                  <div className="tools">
                    <img className="i-tool" src={imgMarvel} alt="" />
                    <img className="i-tool" src={imgAdobe} alt="" />
                  </div>
                </div>

                <a href="https://www.inxights.co" target="_blank" rel="noreferrer" className="nav-link">www.inxights.co</a>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  </LayoutProject>
)

export default PageIxights
