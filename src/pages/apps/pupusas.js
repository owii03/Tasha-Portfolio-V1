import React from 'react'
import { Link } from 'gatsby'
import LayoutProject from '../../components/layoutproject'
import { WaveLine, ArrowBack } from '../../components/icons'

import img from '../../images/pupusas-cover.png'

const PagePupusas = () => (
  <LayoutProject title="GMF" link="/apps/gmf">
    <div className="project-page pupusas" style={{ position: 'relative' }}>
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
          <div className="row">
            <div className="col-md-4">
              <div className="block-info">
                <h1 className="title">PUPUSAS</h1>
                <p className="sec-text">Aplicación de comida rápida</p>
                <WaveLine width="180px" />
                <div className="details">
                  <div className="title">¿Qué es Pupusas app?</div>
                  <p className="sec-text">Esta aplicación te ayuda a realizar tu pedido de forma sencilla, muestra muchas opciones para ordenar hamburguesas, personalizarlas con aderezos o cualquier condimento en especial,  asi como muestra su precio y descripción de productos.</p>
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <img className="sec-cover" src={img} alt="" />
            </div>
          </div>

        </div>

      </section>

    </div>
  </LayoutProject>
)

export default PagePupusas
