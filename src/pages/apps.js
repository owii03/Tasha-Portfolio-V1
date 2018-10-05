import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import { WaveLine } from '../components/icons'
import img1 from '../images/gmf.png'
import img2 from '../images/volant.png'
import img3 from '../images/fido.png'
import img4 from '../images/santarosa.png'
import img5 from '../images/pupusas.png'
import img6 from '../images/gmf.png'
const Apps = () => (
  <Layout>
    <div className="apps-page apps">
      <section className="sec-header">
        <div className="content text-center">
          <h1 className="sec-title ">APLICACIONES</h1>
          <WaveLine width="200px" />
        </div> 
      </section>
      <div className="nav-tabs">
        <div className="tabs">
          <a href="/apps/" className="tab active ">APLICACIONES</a>
          <a href="/websites/" className="tab ">WEBSITES</a>
        </div>
      </div>
      <section className="sec-projects">
        <div className="project">
          <div className="content">
            <div className="container-fluid">
              <div className="row align-items-center">
                <div className="col-md-7 text-right">
                    <img className="image" src={img1} alt=""/>
                </div>
                <div className="col-md-5">
                  <div className="block-info text-left">
                    <p className="title">GMF</p>
                    <p className="subtitle"><span>//</span>App Servicio</p>
                    <p className="sec-text">
                    Aplicación de  una empresa salvadoreña que se dedica a ofrecer servicio a domicilio de los mejores restaurantes del país, creando tu propio menú o menú ya existente.</p>
                    <a href="/apps/gmf" className="link">VER MÁS</a>
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
                    <p className="title">VOLANT</p>
                    <p className="subtitle">App de viajes <span>//</span></p>
                    <p className="sec-text">
                    Es una aplicación que permite a los usuarios descubrir, planificar, coordinar y ver sus boletos para  sus viajes próximos, ver la descripción e imágenes del destino.</p>
                    <a href="/apps/volant" className="link">VER MÁS</a>
                  </div>
                </div>
                <div className="col-md-7 text-left">
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
                <div className="col-md-7 text-right">
                <img className="image" src={img3} alt=""/>
                </div>
                <div className="col-md-5">
                <div className="block-info text-left">
                    <p className="title">FIDO</p>
                    <p className="subtitle"><span>//</span>App para mascotas</p>
                    <p className="sec-text">
                     Aplicación en pro ayuda a los animales, beneficiándolos para encontrar un buen hogar, así como denunciar los maltratos por sus dueños, entre otros servicio.</p>
                    <a href="/apps/fido" className="link">VER MÁS</a>
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
                <div className="col-md-6">
                <div className="block-info text-right">
                    <p className="title">SANTA ROSA</p>
                    <p className="subtitle">Plataforma Complejo Urbano<span>//</span></p>
                    <p className="sec-text">
                     Aplicación en pro ayuda a los animales, beneficiándolos para encontrar un buen hogar, así como denunciar los maltratos por sus dueños, entre otros servicio.</p>
                    <a href="/apps/santarosa" className="link">VER MÁS</a>
                  </div>
                </div>
                <div className="col-md-6 text-left">
                <img className="image" src={img4} alt=""/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="project">
          <div className="content">
            <div className="container-fluid">
              <div className="row align-items-center">
                <div className="col-md-6 text-right">    
                <img className="image" src={img5} alt=""/>         
                </div>
                <div className="col-md-6">
                <div className="block-info text-left">
                    <p className="title">PUPUSAS</p>
                    <p className="subtitle"><span>//</span>App Servicios</p>
                    <p className="sec-text">
                    Esta aplicación permite acceder a la ubicación de las pupuserias mas cercanas a tu ubicación, así como realizar tus pedidos para evitar filas .</p>
                    <a href="/apps/pupusas" className="link">VER MÁS</a>
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

export default Apps
