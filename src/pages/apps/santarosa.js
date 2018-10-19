import React from 'react'
import { Link } from 'gatsby'
import LayoutProject from '../../components/layoutproject'
import { WaveLine, ArrowBack } from '../../components/icons'

import img from '../../images/santorsa-cover.png'
import img2 from '../../images/santarosa-back1.svg'

import imgMarvel from '../../images/marvel.svg'
import imgAdobe from '../../images/adobexd.svg'

import imgBack1 from '../../images/santarosa-back1.svg'
import imgBack2 from '../../images/santarosa-back2.png'
import imgInfo1 from '../../images/santarsosa-info.png'

const PageSantarosa = () => (
  <LayoutProject title="PUPUSAS APP" link="/apps/pupusas">
    <div className="project-page santarosa" style={{ position: 'relative' }}>
      <div className="sec-header">
        <div className="container content">
          <Link to="/apps">
            <div className="d-flex">
              <ArrowBack width="22px" height="22px" />
              <span className="action">REGRESAR</span>
            </div>
          </Link>
        </div>
      </div>
      <section className="sec-hero" style={{ position: 'relative', overflow: 'hidden' }}>
        <div className="container content">
          <div className="row align-items-center">
            <div className="col-md-5">
              <div className="block-info">
                <h1 className="title">SANTA ROSA</h1>
                <p className="sec-text">Aplicación de complejo urbano </p>
                <img src={img} className="img-responsive img-res" alt="" />
                <div className="details">
                  <div className="title">¿Qué es Santa Rosa app?</div>
                  <p className="sec-text">Plataforma para personas que residen en Santa Rosa, tiene una diversidad de funciones  permitiéndole al usuario gestionar  denuncias.</p>
                </div>
              </div>
            </div>
            <div className="col-md-7 text-center">
              <img src={img} className="img-responsive hidden-sm" alt="" />
            </div>
          </div>

        </div>
      </section>
      <section className="sec-info">
        <img className="sr-back1" src={img2} alt="" />
        <div className="content container">
          <div className="row align-items-center">
            <div className="col-md-5">
              <div className="block-info">
                <h3 className="title">¿Cómo Funciona?</h3>
                <p className="sec-text">Aplicación únicamente para residencial Santa Rosa en colaboración a la seguridad y mantenimiento de la zona, la aplicación se complementa con diferentes secciones que se han sido incluidas de acuerdo a las necesidades de los residentes, como alertas, atención al usuario, reglas de convivencia, notificaciones, además cuenta con un dashboard interno para ver el listado de secciones generadas.</p>
                <img className="img-responsive img-res" src={imgInfo1} alt="" />
                <div className="details">
                  <span>Titulo:</span>
                  <p>SANTA ROSA</p>
                  <span>Tipo:</span>
                  <p>APP iOS</p>
                  <span>Programas utilizados:</span>
                  <div className="tools">
                    <img className="i-tool" src={imgMarvel} alt="" />
                    <img className="i-tool" src={imgAdobe} alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-7">
              <img className="img-responsive hidden-sm" src={imgInfo1} alt="" />
            </div>
          </div>
        </div>
        <img src={imgBack2} className="img-back2 hidden-sm" alt="" />
      </section>

    </div>
  </LayoutProject>
)

export default PageSantarosa
