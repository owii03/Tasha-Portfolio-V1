import React from 'react'
import { Link } from 'gatsby'
import LayoutProject from '../../components/layoutproject'
import { WaveLine, ArrowBack } from '../../components/icons'
import { withPrefix } from 'gatsby'
import image from '../../images/gatsby-icon.png'
const PageIxights = () => (
  <LayoutProject title="JWH BURGERS" link="/websites/jwh">
    <div className="project-page inxights" style={{ position: 'relative' }}>
      <div className="sec-header">
        <div className="container">
          <div className="d-flex">
            <ArrowBack width="22px" height="22px" />
            <Link className="action" to="/apps">REGRESAR</Link>
          </div>
        </div>
      </div>
      <section className="sec-hero">
        <div className="container content">
          <h1 className="title">INXIGHTS</h1>
          <p className="sec-text">Plataforma para monitorear campañas</p>
        </div>
        <img className="sec-cover" src={image} alt="" />
      </section>
      <section className="sec-info">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-md-6 text-center">
              <img className="info-img" src="/img/inxights-info.png" alt="" />
            </div>
            <div className="col-md-6">
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
                    <img className="i-tool" src="/img/marvel.svg" alt="" />
                    <img className="i-tool" src="/img/adobexd.svg" alt="" />
                  </div>
                </div>

                <a href="www.inxights.co" className="nav-link">www.inxights.co</a>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  </LayoutProject>
)

export default PageIxights
