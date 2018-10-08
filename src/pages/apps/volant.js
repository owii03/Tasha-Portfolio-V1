import React from 'react'
import { Link } from 'gatsby'
import LayoutProject from '../../components/layoutproject'
import { ArrowBack, WaveLine } from '../../components/icons'

import img1 from '../../images/volant-back1.png'
import img2 from '../../images/volant-back2.svg'
import img from '../../images/volant.png'
import volantContent from '../../images/volant-content.png'
import imgMarvel from '../../images/marvel.svg'
import imgAdobe from '../../images/adobexd.svg'

const PageVolant = () => (
  <LayoutProject title="FIDO APP" link="/apps/fido">
    <div className="project-page volant" style={{ position: 'relative' }}>
      <div className="sec-header">
        <div className="container">
          <div className="d-flex">
            <ArrowBack width="22px" height="22px" />
            <Link className="action" to="/apps">REGRESAR</Link>
          </div>
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
                <div className="details">
                  <div className="title">¿Qué es Volant?</div>
                  <p className="sec-text">Es una aplicación que permite a los usuarios descubrir, planificar y coordinar viajes. La herramienta integra información del lugar, asi como precios, boletos y un perfil donde puedo llevar un control de mis viajes realizados o posibles viajes a realizar.</p>
                </div>
              </div>
            </div>
            <div className="col-md-8 text-center">
              <img className="sec-cover" src={img} alt="" />
            </div>
          </div>
        </div>
        <img className="volant-back1" src="/img/volant-back1.svg" alt="" />
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
            <div className="col-md-7"></div>
          </div>
          <img className="img-responsive" src={volantContent} alt="" />
        </div>
        
      </section>

    </div>
  </LayoutProject>
)

export default PageVolant
