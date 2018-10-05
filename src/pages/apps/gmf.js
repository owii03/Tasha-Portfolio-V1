import React from 'react'
import { Link } from 'gatsby'
import LayoutProject from '../../components/layoutproject'
import { WaveLine, ArrowBack } from '../../components/icons'
const PageGMF = () => (
  <LayoutProject title="VOLANT APP" link="/apps/volant">
    <div className="project-page gmf" style={{ position: 'relative' }}>
      <div className="sec-header">
        <div className="container">
          <div className="d-flex">
            <ArrowBack width="22px" height="22px" />
            <Link className="action" to="/apps">REGRESAR</Link>
          </div>
        </div>
      </div>
      <section className="sec-hero" style={{ backgroundImage: 'url(/img/gmf-cover.png)' }}>
        <div className="container content">
          <div className="row">
            <div className="col-md-4">
              <div className="block-info">
                <h1 className="title">GMF</h1>
                <p className="sec-text">Aplicación de comida rápida</p>
                <div className="details">
                  <div className="title">¿Qué es Get My Food?</div>
                  <p className="sec-text">Es una empresa salvadoreña que se dedica a ofrecer servicio a domicilio de los mejores restaurantes del país. Puede ayudarte a encontrar y ordenar tu comida favorita desde cualquier lugar que te encuentres.</p>
                </div>
              </div>
            </div>
            <div className="col-md-8">
            </div>
          </div>

        </div>
        <img className="gmd-back1" src="/img/gmd-back1.svg" alt="" />
      </section>

    </div>
  </LayoutProject>
)

export default PageGMF
