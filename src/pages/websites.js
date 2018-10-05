import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import { WaveLine } from '../components/icons'
import img1 from '../images/inxights.png'
import img2 from '../images/jwh.png'
import img3 from '../images/evet.png'
const Websites = () => (
  <Layout>
    <div className="apps-page websites">
      <section className="sec-header">
        <div className="content text-center">
          <h1 className="sec-title">APLICACIONES</h1>
          <WaveLine width="200px" />
        </div>
      </section>
      <div className="nav-tabs">
        <div className="tabs">
          <a href="/apps/" className="tab ">APLICACIONES</a>
          <a href="/websites/" className="tab active">WEBSITES</a>
        </div>
      </div>
      <section className="sec-projects">
        <div className="project">
          <div className="content">
            <div className="container-fluid">
              <div className="row align-items-center">
                <div className="col-md-7 text-center">
                    <img className="image" src={img1} alt=""/>
                </div>
                <div className="col-md-5">
                  <div className="block-info text-left">
                    <p className="title">INXIGHTS</p>
                    <p className="subtitle"><span>//</span>website</p>
                    <p className="sec-text">
                    Plataforma para monitorear campañas creando informes de marketing, generando informes profesionales que permiten ver el rendimiento de todas las campañas.
                    </p>
                    <a href="/websites/inxights" className="link">VER MÁS</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="project">
          <div className="content">
            <div className="container-fluid">
              <div className="row align-items-center">
                <div className="col-md-5 ">
                <div className="block-info text-right">
                    <p className="title">JWH</p>
                    <p className="subtitle">App Comida Rápida<span>//</span></p>
                    <p className="sec-text">
                    Esta aplicación te ayuda a realizar pedidos para ordenar hamburguesas y poderlas  personalizar, así como muestra su precio y descripción de productos.
                    </p>
                    <a href="/websites/jwh" className="link">VER MÁS</a>
                  </div>
                </div>
                <div className="col-md-7 text-center">
                  <img className="image" src={img2} alt=""/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="project">
          <div className="content">
            <div className="container-fluid">
              <div className="row align-items-center">
                <div className="col-md-7 text-center">
                <img className="image" src={img3} alt=""/>
                </div>
                <div className="col-md-5">
                <div className="block-info text-left">
                    <p className="title">EVET</p>
                    <p className="subtitle"><span>//</span>Plataforma para Eventos</p>
                    <p className="sec-text">
                    Plataforma que ayuda a crear, gestionar y hacer eventos, analizar eventos desde cualquier lugar, alcanzar nuevas audiencias y venta de entradas.</p>
                    <a href="#" className="link">VER MÁS</a>
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
