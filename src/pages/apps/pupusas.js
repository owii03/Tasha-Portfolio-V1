import React from 'react'
import { Link } from 'gatsby'
import LayoutProject from '../../components/layoutproject'
import { WaveLine, ArrowBack } from '../../components/icons'

import img from '../../images/pupusas-cover.png'
import img1 from '../../images/pupusas-content.png'
import img_f2 from '../../images/flowe-pupusas.png'
import img_back1 from '../../images/pupusas-back1.png'

import imgMarvel from '../../images/marvel.svg'
import imgAdobe from '../../images/adobexd.svg'
import pupusasWireframes1 from '../../images/pupusas/wireframes-1.png'
import pupusasWireframes2 from '../../images/pupusas/wireframes-2.png'
import pupusasMockups1 from '../../images/pupusas/mockups-1.png'
import pupusasMockups2 from '../../images/pupusas/wireframes-3.png'
import pupusasBack1 from '../../images/pupusas/back-pr-1.png'
const PagePupusas = () => (
  <LayoutProject title="GMF" link="/apps/gmf">
    <div className="project-page pupusas" style={{ position: 'relative' }}>
      <div className="sec-header">
        <div className="container content">
          <Link to="/apps">
            <div className="d-flex">
              <ArrowBack width="22px" height="22px" />
              <span className="action">BACK</span>
            </div>
          </Link>
        </div>
      </div>
      <section className="sec-hero">
        <div className="container content">
          <div className="row align-items-center">
            <div className="col-md-5 px-0">
              <div className="block-info">
                <h1 className="title">PUPUSAS</h1>
                <p className="sec-text">Aplicación de comida rápida</p>
                <WaveLine width="180px" />
                <img className="sec-cover img-res" src={img} alt="" />
                <div className="details">
                  <div className="title">¿Qué es Pupusas app?</div>
                  <p className="sec-text">Esta aplicación te ayuda a realizar tu pedido de forma sencilla, muestra muchas opciones para ordenar hamburguesas, personalizarlas con aderezos o cualquier condimento en especial,  asi como muestra su precio y descripción de productos.</p>
                </div>
              </div>
            </div>
            <div className="col-md-7 text-center">
              <img className="sec-cover hidden-sm" src={img} alt="" />
            </div>
          </div>

        </div>

      </section>
      <section className="sec-info hidden-sm">
        <img className="img-back1 hidden-md" src={img_back1} alt="" />
        <div className="content">
          <div className="container">
            <div className="row">
              <div className="col-lg-7 col-md-12 or-md-1">
                <img className="img-content" src={img1} alt="" />
              </div>
              <div className="col-lg-5 col-md-12">
                <div className="block-info">
                  <div className="sec-title">PANTALLAS PUPUSAS</div>
                  <div className="details">
                    <span>Titulo:</span>
                    <p>PUPUSAS APP.</p>
                    <span>Tipo:</span>
                    <p>APP iOS.</p>
                    <span>Programas utilizados:</span>
                    <div className="tools">
                      <img className="i-tool" src={imgMarvel} alt="" />
                      <img className="i-tool" src={imgAdobe} alt="" />
                    </div>
                  </div>
                </div>
                <img className="hidden-md" style={{ maxWidth: '80px' }} src={img_f2} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="sec-process">
        <div className="wireframes">
          <div className="content">
            <div className="container">
              <h5 className="title">WIREFRAMES</h5>
            </div>

            <img src={pupusasWireframes1} className="img-responsive" alt="" />


            <img src={pupusasWireframes2} className="img-responsive" alt="" />

          </div>
        </div>
        <svg className="section-waves" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1400 359" space="preserve">
          <path class="st0" fill="#FFFFFF" d="M465.1,317.8C716.4,281.5,1118.7,67.8,1400,46.5V0H0v196.8C70.6,258.6,222.2,352.8,465.1,317.8z" />
          <path class="st1" fill="#f9f9f9" d="M0,196.8V359h1400V46.5c-281.3,21.4-683.6,235-934.9,271.3C222.2,352.8,70.6,258.6,0,196.8z" />
        </svg>

        <div className="assets-1">
          <div className="content">
            <div className="container">
              <div className="col-md-12">
                <h5 className="title">ASSETS</h5>
                <div className="info">
                  <div className="r-info">
                    <p className="title">Tipo de Aplicación</p>
                    <p>App iOS</p>
                  </div>
                  <div className="r-info">
                    <p className="title">Assets Tipografía ROBOTO CONDENSED</p>
                    <div className="d-flex fonts">
                      <p>Roboto</p>
                      <p>Roboto</p>
                      <p>Roboto</p>
                    </div>
                  </div>
                  <div className="r-info">
                    <p className="title">Assets Colores Primarios</p>
                    <div className="d-flex colors">
                      <div className="r-color">
                        <span className="c-color c1"></span>
                        <p className="text">#FF658E</p>
                      </div>
                      <div className="r-color">
                        <span className="c-color c2"></span>
                        <p className="text">#FF658E</p>
                      </div>
                      <div className="r-color ">
                        <span className="c-color c3"></span>
                        <p className="text">#FF658E</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <svg version="1.1" className="section-waves" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1400.3 340.5" space="preserve">
          <g>
            <path className="st0" fill="#FF6590" d="M935,39.4C683.8,74.1,281.3,278.3,0,298.7v41.8h1400.3V155C1329.6,96,1178,5.9,935,39.4z" />
            <path className="st1" fill="#f9f9f9" d="M1400.3,155V0H0v298.7C281.3,278.3,683.8,74.1,935,39.4C1178,5.9,1329.6,96,1400.3,155z" />
          </g>
        </svg>
        <div className="assets-2" style={{ backgroundImage: `url(${pupusasBack1})` }}>
          <div className="content">
            <div className="container text-center">
              <h5 className="title">PANTALLAS PUPUSAS APP</h5>
              <img className="img-responsive" src={pupusasMockups1} alt="" />
            </div>
          </div>
        </div>
        <svg className="section-waves" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1400.3 340.5" space="preserve">
          <path class="st0" fill="#FF6590" d="M1400.3,155V0H0v298.7C281.3,278.3,683.8,74.1,935,39.4C1178,5.9,1329.6,96,1400.3,155z" />
        </svg>
        <div className="assets-3">
        <img src={pupusasMockups2} className="img-responsive " alt=""/>
        </div>
      </section>
    </div>
  </LayoutProject >
)

export default PagePupusas
