import React from 'react'
import { Link } from 'gatsby'
import LayoutProject from '../../components/layoutproject'

const PageJWH = () => (
  <LayoutProject title="EVET" link="/websites/evet">
    <div className="project-page jwh" style={{ position: 'relative' }}>
      <div className="sec-header">
        <div className="container">
          <Link className="action" to="/apps">REGRESAR</Link>
        </div>
      </div>
      <section className="sec-hero">
        <div className="container content">
          <div className="row">
            <div className="col-md-4">
              <div className="block-info">
                <h1 className="title">JWH</h1>
                <p className="sec-text">Plataforma para monitorear campañas</p>

                <div className="details">
                  <div className="title">¿Qué es JWH Burgers?</div>
                  <p className="sec-text">Esta aplicación te ayuda a realizar tu pedido de forma sencilla, muestra muchas opciones para ordenar hamburguesas, personalizarlas con aderezos o cualquier condimento en especial,  asi como muestra su precio y descripción de productos.</p>
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <img className="sec-cover" src="/img/jwh.png" alt="" />
            </div>
          </div>

        </div>

      </section>

    </div>
  </LayoutProject>
)

export default PageJWH
