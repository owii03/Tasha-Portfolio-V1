import React from 'react'
import { Link } from 'gatsby'
import LayoutProject from '../../components/layoutproject'
import { WaveLine, ArrowBack } from '../../components/icons'

import img from '../../images/fido-cover.png'
import img1 from '../../images/fido-back1.png'
import img2 from '../../images/fido-content.png'
import imgMarvel from '../../images/marvel.svg'
import imgAdobe from '../../images/adobexd.svg'
const PageFido = () => (
  <LayoutProject title="SANTA ROSA" link="/apps/santarosa">
    <div className="project-page fido" style={{ position: 'relative' }}>
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
          <div className="row align-items-center">
            <div className="col-md-5">
              <div className="block-info">
                <h1 className="title">FIDO APP</h1>
                <p className="sec-text">Aplicación para mascotas</p>
                <WaveLine width="180px" />
                <div className="details">
                  <div className="title">¿Qué es Fido app?</div>
                  <p className="sec-text">Aplicación en pro ayuda a los animales, beneficiándolos para encontrar un buen hogar, así como denunciar los maltratos por sus dueños, entre otros servicio.</p>
                </div>
              </div>
            </div>
            <div className="col-md-7 text-center">
              <img className="sec-cover" src={img} alt="" />
            </div>
          </div>

        </div>
        <img className="sec-back1" src={img1} alt="" />
      </section>
      <section className="sec-info">

        <div className="content">
          <div className="container-fluid">
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

export default PageFido
