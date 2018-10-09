import React from 'react'
import { Link } from 'gatsby'
import LayoutProject from '../../components/layoutproject'
import { WaveLine, ArrowBack } from '../../components/icons'

import img1 from '../../images/gmf-anim.gif'
import img2 from '../../images/gmf-img2.png'
import img3 from '../../images/gmd-back3.png'
import img4 from '../../images/gmf-back4.png'

import imgMarvel from '../../images/marvel.svg'
import imgAdobe from '../../images/adobexd.svg'
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
      <section className="sec-hero" style={{ position: 'relative', overflow: 'hidden' }}>

        <div className="container content">
          <div className="row align-items-center">
            <div className="col-md-5">
              <div className="block-info">
                <h1 className="title">GMF</h1>
                <p className="sec-text">Aplicación de comida rápida</p>
                <div className="details">
                  <div className="title">¿Qué es Get My Food?</div>
                  <p className="sec-text">Es una empresa salvadoreña que se dedica a ofrecer servicio a domicilio de los mejores restaurantes del país. Puede ayudarte a encontrar y ordenar tu comida favorita desde cualquier lugar que te encuentres.</p>
                </div>
              </div>
            </div>
            <div className="col-md-7 text-center">
              <div className="image">
                <img src={img1} alt="" className="img-cover" />
              </div>
            </div>
          </div>

        </div>
        <img className="gmd-back1" src="/img/gmd-back1.svg" alt="" />
      </section>
      <section className="sec-info">
        <img className="img-back3" src={img3} alt="" />
        <img className="img-back4" src={img4} alt="" />
        <div className="content">
          <div className="container">
            <div className="row">
              <div className="col-md-5">
                <div className="block-info">
                  <h3 className="title">¿Cómo Funciona?</h3>
                  <p className="sec-text">Buscas tus restaurantes favoritos, ordenas tus platillos preferidos y la entrega llega a la puerta de la casa u oficina.</p>
                  <p className="sec-text">Puedes buscar por tipo de cocina, platos y restaurantes. Además cuenta con ofertas especiales, entregas gratuitas con el cual se puede rastrear cada una de las órdenes.</p>
                  <div className="details">
                    <span>Titulo:</span>
                    <p>GMF</p>
                    <span>Tipo:</span>
                    <p>App iOS, Android</p>
                    <span>Programas utilizados:</span>
                    <div className="tools">
                      <img className="i-tool" src={imgMarvel} alt="" />
                      <img className="i-tool" src={imgAdobe} alt="" />
                    </div>
                  </div>
                  {/* <a href="www.inxights.co" className="nav-link">www.inxights.co</a> */}
                </div>
              </div>
              <div className="col-md-7">
                <img className="img-detail" src={img2} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </LayoutProject>
)

export default PageGMF
