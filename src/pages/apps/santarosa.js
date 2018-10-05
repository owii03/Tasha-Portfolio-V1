import React from 'react'
import { Link } from 'gatsby'
import LayoutProject from '../../components/layoutproject'
import { WaveLine, ArrowBack } from '../../components/icons'

import img from '../../images/santorsa-cover.png'
import img2 from '../../images/santarosa-back1.svg'
const PageSantarosa = () => (
  <LayoutProject title="PUPUSAS APP" link="/apps/pupusas">
    <div className="project-page santarosa" style={{ position: 'relative' }}>
      <div className="sec-header">
        <div className="container">
          <div className="d-flex">
            <ArrowBack width="22px" height="22px" />
            <Link className="action" to="/apps">REGRESAR</Link>
          </div>
        </div>
      </div>
      <section className="sec-hero" style={{ position: 'relative',overflow:'hidden' }}>
      <img src={img} alt="" style={{position:'absolute', top:'0',width:'100%' }}/>
        <div className="container content">
          <div className="row">
            <div className="col-md-4">
              <div className="block-info">
                <h1 className="title">SANTA ROSA</h1>
                <p className="sec-text">Aplicación de complejo urbano </p>
                <div className="details">
                  <div className="title">¿Qué es Santa Rosa app?</div>
                  <p className="sec-text">Plataforma para personas que residen en Santa Rosa, tiene una diversidad de funciones  permitiéndole al usuario gestionar  denuncias.</p>
                </div>
              </div>
            </div>
            <div className="col-md-8">            
            </div>
          </div>

        </div>
        <img className="sr-back1" src={img2} alt="" />
      </section>

    </div>
  </LayoutProject>
)

export default PageSantarosa
