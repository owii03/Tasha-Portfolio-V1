import React from 'react'
import { Link } from 'gatsby'
import LayoutProject from '../../components/layoutproject'
import { WaveLine, ArrowBack } from '../../components/icons';
import imgHero from '../../images/evet-hero.png'
import imgInfo2 from '../../images/evet-info2.png'
import imgAnim from '../../images/evet-info1.png'
import imgMarvel from '../../images/marvel.svg'
import imgAdobe from '../../images/adobexd.svg'
import imgBack1 from '../../images/evet-back1.svg'
const PageEvet = () => (
  <LayoutProject title="INXIGHTS" link="/websites/inxights">
    <div className="project-page evet" style={{ position: 'relative' }}>
      <div className="sec-header">
        <div className="container content">
          <Link to="/websites">
            <div className="d-flex">
              <ArrowBack width="22px" height="22px" />
              <span className="action">REGRESAR</span>
            </div>
          </Link>
        </div>
      </div>
      <section className="sec-hero">
        <div className="container content">
          <div className="row align-items-center">
            <div className="col-lg-4 col-md-12">
              <div className="block-info">
                <h1 className="title">EVET</h1>
                <p className="sec-text">Plataforma para monitorear campañas</p>
                <WaveLine width="200px" />
                <img className="sec-cover img-res" src={imgHero} alt="" />
                <div className="details">
                  <div className="title">¿Qué es Evet?</div>
                  <p className="sec-text">Plataforma que ayuda a crear, gestionar y hacer eventos, analiza eventos desde cualquier lugar, alcanza nuevas audiencias y cuenta con venta de entradas, desde donde te encuentres.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-8 col-md-12">
              <img className="sec-cover hidden-md" src={imgHero} alt="" />
            </div>
          </div>
        </div>
      </section>
      <div className="sec-info-1">
        <img className="img-back1" src={imgBack1} alt="" />
        <div className="content container">
          <div className="row">
            <div className="col-md-6">
              <div className="block-info">
                <h3 className="title">¿Cómo Funciona?</h3>
                <p className="sec-text">Ofrece a los invitados una experiencia de acceso sin problemas, utilizando un sistema confiable para escanear entradas y acreditar invitados.
                Además encuentras conferencias, convenciones, seminarios, capacitaciones, etc,
                evitando colas a los asistentes del evento.</p>
                <img className="img-responsive img-res" src={imgAnim} alt="" />
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
            <div className="col-md-6 text-center">
              <img className="img-responsive hidden-sm" src={imgAnim} alt="" />
            </div>
          </div>
        </div>
      </div>
      <section className="sec-info-2">
        <div className="content container">
          <div className="row">
            <div className="col-md-7">
              <img className="img-responsive hidden-sm" src={imgInfo2} alt="" />
            </div>
            <div className="col-md-5">
              <div className="block-info">
                <h3 className="title">¿Cómo Funciona la plataforma?</h3>
                <p className="sec-text">Puedes acceder a datos de ventas y acreditaciones en tiempo real, así como gestionar y promocionar un evento, desde cualquier dispositivo.</p>
                <div className="details">
                  <span>Titulo:</span>
                  <p>EVET</p>
                  <span>Tipo:</span>
                  <p>Website, Dashboard </p>
                  <span>Programas utilizados:</span>
                  <div className="tools">
                    <img className="i-tool" src={imgMarvel} alt="" />
                    <img className="i-tool" src={imgAdobe} alt="" />
                  </div>
                </div>
                <a href="https://www.evet.io" target="_blank" className="nav-link">www.evet.io</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </LayoutProject>
)

export default PageEvet
