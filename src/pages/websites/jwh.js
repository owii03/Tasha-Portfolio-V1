import React from 'react'
import { Link } from 'gatsby'
import LayoutProject from '../../components/layoutproject'
import { ArrowBack, WaveLine } from '../../components/icons'
import img from '../../images/jwh.png'
import img2 from '../../images/jwh-content1.png'
import img3 from '../../images/jwh-info.png'

import imgback1 from '../../images/jwh-infoback1.png'
import imgback2 from '../../images/jwh-infoback2.png'
import imgback3 from '../../images/jwh-infoback3.png'
import imgLetters1 from '../../images/jwh-letters1.png'
import imgLetters2 from '../../images/jwh-letters2.png'

import imgMarvel from '../../images/marvel.svg'
import imgAdobe from '../../images/adobexd.svg'
const PageJWH = () => (
  <LayoutProject title="EVET" link="/websites/evet">
    <div className="project-page jwh" style={{ position: 'relative' }}>
      <div className="sec-header">
        <div className="container">
          <div className="d-flex">
            <ArrowBack width="22px" height="22px" />
            <Link className="action" to="/websites">REGRESAR</Link>
          </div>
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
              <img className="sec-cover" src={img} alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className="sec-progress">
        <div className="container text-center">
          <div className="content text-center">
            <h1 className="sec-title">PROCESOS <br />
              JWH Burgers.</h1>
            <WaveLine width="200px" />
            <img className="img-responsive" src={img2} alt="" />
          </div>

        </div>
      </section>
      <div className="sec-info">
        <img className="img-back1" src={imgback1} alt="" />
        <img className="img-back2" src={imgback2} alt="" />
        <img className="img-back3" src={imgback3} alt="" />
        <div className="content">
          <div className="info">
            <div className="info-col">
              <div className="block-info">
                <div className="details">
                  <div className="title">¿Qué es JWH Burgers?</div>
                  <p className="sec-text">Esta aplicación te ayuda a realizar tu pedido de forma sencilla, muestra muchas opciones para ordenar hamburguesas, personalizarlas con aderezos o cualquier condimento en especial,  asi como muestra su precio y descripción de productos.</p>
                </div>
              </div>
            </div>
            <div className="info-col text-center">
              <img src={img3} className="img-responsive" alt="" />
            </div>
            <div className="info-col">
              <div className="block-info">
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
            </div>
          </div>
          <div className="cols-back">
            <div className="col">
              <img className="img-responsive" src={imgLetters1} alt="" />
            </div>
            <div className="col right">
              <img className="img-responsive" src={imgLetters2} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </LayoutProject>
)

export default PageJWH
