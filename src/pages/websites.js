import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import { WaveLine, ArrowBack } from '../components/icons'
import img1 from '../images/inxights.png'
import img2 from '../images/jwh.png'
import img3 from '../images/evet.png'
const Websites = () => (
  <Layout>
    <div className="apps-page websites">
      <section className="sec-header">
        <div className="container">
          <div className="navigate">
            <Link className="action" to="/">
            <ArrowBack width="22px" height="22px" />
            <span className="hidden-sm">BACK</span>
            </Link>
          </div>      
        </div>

        <div className="content text-center">
          <h1 className="sec-title">WEB DESIGN</h1>
          <WaveLine width="200px" />
        </div>
      </section>
      <div className="nav-tabs">
        <div className="tabs">
          <Link to="/apps/" className="tab ">MOBILE & APPS</Link>
          <Link to="/websites/" className="tab active">WEB DESIGN</Link>
        </div>
      </div>
      <section className="sec-projects">
        <div className="project wow animated fadeInUp">
          <div className="content">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-md-7 text-center">
                    <img className="image" src={img1} alt=""/>
                </div>
                <div className="col-md-5">
                  <div className="block-info text-left">
                    <p className="title">INXIGHTS</p>
                    <p className="subtitle"><span>{'//'}</span>website</p>
                    <p className="sec-text">
                    Plataforma para monitorear campañas creando informes de marketing, generando informes profesionales que permiten ver el rendimiento de todas las campañas.
                    </p>
                    <Link to="/websites/inxights" className="link">VER MÁS</Link>
                  </div>
                </div>
              </div> 
            </div>
          </div>
        </div>
        <div className="project wow animated fadeInUp">
          <div className="content">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-md-5  order-sm">
                <div className="block-info text-right">
                    <p className="title">JWH</p>
                    <p className="subtitle">App Comida Rápida<span>{'//'}</span></p>
                    <p className="sec-text">
                    Esta aplicación te ayuda a realizar pedidos para ordenar hamburguesas y poderlas  personalizar, así como muestra su precio y descripción de productos.
                    </p>
                    <Link to="/websites/jwh" className="link">VER MÁS</Link>
                  </div>
                </div>
                <div className="col-md-7 text-center">
                  <img className="image" src={img2} alt=""/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="project wow animated fadeInUp">
          <div className="content">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-md-7 text-center">
                <img className="image" src={img3} alt=""/>
                </div>
                <div className="col-md-5">
                <div className="block-info text-left">
                    <p className="title">EVET</p>
                    <p className="subtitle"><span>{'//'}</span>Plataforma para Eventos</p>
                    <p className="sec-text hidden-sm">
                    Plataforma que ayuda a crear, gestionar y hacer eventos, analizar eventos desde cualquier lugar, alcanzar nuevas audiencias y venta de entradas.</p>
                    <Link to="/websites/evet" className="link">VER MÁS</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      
      </section>
    </div>    
  </Layout>
)

export default Websites
