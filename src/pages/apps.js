import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import { WaveLine, ArrowBack } from '../components/icons'
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
        <div className="container">
          <div className="navigate d-flex">
            <ArrowBack width="22px" height="22px" />
            <Link className="action" to="/">REGRESAR</Link>
          </div>
        </div>     
        <div className="content text-center">
          <h1 className="sec-title ">APLICACIONES</h1>
          <WaveLine width="200px" />
        </div> 
      </section>
      <div className="nav-tabs">
        <div className="tabs">
          <Link to="/apps/" className="tab active ">APLICACIONES</Link>
          <Link to="/websites/" className="tab ">WEBSITES</Link>
        </div>
      </div>
      <section className="sec-projects">
        <div className="project wow animated fadeInUp">
          <div className="content">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-md-6 text-right">
                    <img className="image" src={img1} alt=""/>
                </div>
                <div className="col-md-6">
                  <div className="block-info text-left">
                    <p className="title">GMF</p>
                    <p className="subtitle"><span>//</span>App Servicio</p>
                    <p className="sec-text">
                    Aplicación de  una empresa salvadoreña que se dedica a ofrecer servicio a domicilio de los mejores restaurantes del país, creando tu propio menú o menú ya existente.</p>
                    <Link to="/apps/gmf" className="link">VER MÁS</Link>
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
                <div className="col-md-6 order-sm">
                <div className="block-info text-right">
                    <p className="title">VOLANT</p>
                    <p className="subtitle">App de viajes <span>//</span></p>
                    <p className="sec-text">
                    Es una aplicación que permite a los usuarios descubrir, planificar, coordinar y ver sus boletos para  sus viajes próximos, ver la descripción e imágenes del destino.</p>
                    <Link to="/apps/volant" className="link">VER MÁS</Link>
                  </div>
                </div>
                <div className="col-md-6 text-left ">
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
                <div className="col-md-6 text-right">
                <img className="image" src={img3} alt=""/>
                </div>
                <div className="col-md-6">
                <div className="block-info text-left">
                    <p className="title">FIDO</p>
                    <p className="subtitle"><span>//</span>App para mascotas</p>
                    <p className="sec-text">
                     Aplicación en pro ayuda a los animales, beneficiándolos para encontrar un buen hogar, así como denunciar los maltratos por sus dueños, entre otros servicio.</p>
                    <Link to="/apps/fido" className="link">VER MÁS</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="project">
          <div className="content">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-md-6 order-sm">
                <div className="block-info text-right">
                    <p className="title">SANTA ROSA</p>
                    <p className="subtitle">Plataforma Complejo Urbano<span>//</span></p>
                    <p className="sec-text">
                     Aplicación en pro ayuda a los animales, beneficiándolos para encontrar un buen hogar, así como denunciar los maltratos por sus dueños, entre otros servicio.</p>
                    <Link to="/apps/santarosa" className="link">VER MÁS</Link>
                  </div>
                </div>
                <div className="col-md-6 text-left ">
                <img className="image" src={img4} alt=""/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="project">
          <div className="content">
            <div className="container">
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
                    <Link to="/apps/pupusas" className="link">VER MÁS</Link>
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
