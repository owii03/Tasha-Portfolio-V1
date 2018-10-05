import React from 'react'
import { Link } from 'gatsby'
import LayoutProject from '../../components/layoutproject'
import { ArrowBack } from '../../components/icons'
const PageVolant = () => (
  <LayoutProject title="VOLANT APP" link="/apps/volant">
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
        <img className="volant-back1" src="/img/volant-back1.png" alt="" />
        <img className="volant-back2" src="/img/volant-back2.svg" alt="" />
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
              <img className="sec-cover" src="/img/volant.png" alt="" />
            </div>
          </div>
        </div>
        <img className="volant-back1" src="/img/volant-back1.svg" alt="" />
      </section>

    </div>
  </LayoutProject>
)

export default PageVolant
