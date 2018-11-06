import React from 'react'
import { Link } from 'gatsby'
import LayoutProject from '../../components/layoutproject'
import { WaveLine, ArrowBack } from '../../components/icons'

import img from '../../images/fido-cover.png'
import img1 from '../../images/fido-back1.png'
import img2 from '../../images/fido-content.png'
import img2_res from '../../images/fido-content-res.png'
import imgMarvel from '../../images/marvel.svg'
import imgAdobe from '../../images/adobexd.svg'
import processCover from '../../images/fido/main-cover.png'
import processDog from '../../images/fido/dog.png'
import processWireframes1 from '../../images/fido/wirframes-1.png'

import processApp1 from '../../images/fido/app-1.png'
import processApp2 from '../../images/fido/app-2.png'
import processApp3 from '../../images/fido/app-3.png'
import processApp4 from '../../images/fido/app-4.png'

const PageFido = () => (
  <LayoutProject title="SANTA ROSA" link="/apps/santarosa">
    <div className="project-page fido" style={{ position: 'relative' }}>
      <div className="sec-header">
        <div className="container content">
          <Link to="/apps">
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
            <div className="col-md-5">
              <div className="block-info">
                <h1 className="title">FIDO APP</h1>
                <p className="sec-text">Aplicación para mascotas</p>
                <WaveLine width="180px" />

                <img className="sec-cover img-res" src={img} alt="" />

                <div className="details">
                  <div className="title">¿Qué es Fido app?</div>
                  <p className="sec-text">Aplicación en pro ayuda a los animales, beneficiándolos para encontrar un buen hogar, así como denunciar los maltratos por sus dueños, entre otros servicio.</p>
                </div>
              </div>
            </div>
            <div className="col-md-7 text-center">
              <img className="sec-cover hidden-sm" src={img} alt="" />
            </div>
          </div>

        </div>
        <img className="sec-back1" src={img1} alt="" />
      </section>
      <section className="sec-info">

        <div className="content">
          <img className="img-detail hidden-sm" src={img2} alt="" />
          <div className="container">
            <div className="row">
              <div className="col-md-5">
                <div className="block-info">
                  <h3 className="title">¿Cómo Funciona?</h3>
                  <p className="sec-text">Buscas tus restaurantes favoritos, ordenas tus platillos preferidos y la entrega llega a la puerta de la casa u oficina.</p>
                  <p className="sec-text">Puedes buscar por tipo de cocina, platos y restaurantes. Además cuenta con ofertas especiales, entregas gratuitas con el cual se puede rastrear cada una de las órdenes.</p>
                  <div className="img-container">
                    <img className="img-detail img-res" src={img2} alt="" />
                  </div>
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
              </div>

            </div>
          </div>
        </div>

      </section>
      <section className="sec-process">
        <img src={processCover} className="img-responsive" alt="" />
        <div className="info-1">
          <div className="content">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-md-6">
                  <div className="block">
                    <h5 className="title">¿Qué es Fido app?</h5>
                    <p className="text">Aplicación en pro ayuda a los animales, beneficiándolos para encontrar un buen hogar, así como denunciar los maltratos por sus dueños, entre otros servicio.</p>
                  </div>
                  <div className="block">
                    <h5 className="title">¿Cómo Funciona?</h5>
                    <p className="text">Fido app busca el bienestar para los animales,  los perros que sufren maltrato o se encuentran abandonados pueden tener una segunda oportunidad y conseguir una adopción, pueden ser seleccionados por su perfil, donde están los datos básicos de el perrito, también la app cuenta con un sistema de alertas para poder denunciar cualquier maltrato o descuido de la mascota.</p>
                  </div>
                </div>
                <div className="col-md-6 text-center">
                  <img src={processDog} style={{ maxWidth: '70%' }} className="img-responsive" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="wireframes" style={{ backgroundColor: '#F6F1FF' }}>
          <div className="content">
            <div className="container">
              <h5 className="title">WIREFRAMES</h5>
              <div className="text-right">
                <img src={processWireframes1} className="img-responsive" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="wireframes-2">
          <div className="content">
            <div className="container">
              <h5 className="title">PANTALLAS FIDO APP</h5>
              <div className="row align-items-center">
                <div className="col-md-6 text-right">
                  <img className="img-responsive" src={processApp1} alt="" />
                </div>
                <div className="col-md-6">
                  <div className="block right">
                    <div className="text">En busca el bienestar para los animales, en poder brindarles una segunda oportunidad y conseguir una adopción, Fido App cuenta con un fácil acceso a través de redes sociales o correo electrónico.</div>
                  </div>
                </div>
              </div>
              <div className="row align-items-center">
                <div className="col-md-6">
                  <div className="block left">
                    <p className="text text-right">Con esta aplicación  pretende sensibilizar a la sociedad sobre el maltrato animal y facilitar que estas situaciones no queden impunes, así como generar adopciones para darles una mejor vida a nuestros amigos caninos, cuenta también con una lista de refugios para poder generar una ayuda  y donaciones.</p>
                  </div>
                </div>
                <div className="col-md-6 text-left">
                  <img className="img-responsive" src={processApp2} alt="" />
                </div>
              </div>
              <div className="row align-items-center">
                <div className="col-md-6 text-right">
                  <img className="img-responsive" src={processApp3} alt="" />
                </div>
                <div className="col-md-6">
                  <div className="block right">
                    <div className="text">En busca el bienestar para los animales, en poder brindarles una segunda oportunidad y conseguir una adopción, Fido App cuenta con un fácil acceso a través de redes sociales o correo electrónico.</div>
                  </div>
                </div>
              </div>
              <div className="row align-items-center">
                <div className="col-md-6">
                  <div className="block left">
                    <p className="text text-right">Con esta aplicación  pretende sensibilizar a la sociedad sobre el maltrato animal y facilitar que estas situaciones no queden impunes, así como generar adopciones para darles una mejor vida a nuestros amigos caninos, cuenta también con una lista de refugios para poder generar una ayuda  y donaciones.</p>
                  </div>
                </div>
                <div className="col-md-6 text-left">
                  <img className="img-responsive" src={processApp4} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center align-items-center" style={{backgroundColor:'#915AE9', padding:'40px 0'}}>
          <p style={{color:'white', fontWeight:'600', fontSize:'24px'}}>Gracias</p>
        </div>
      </section>
    </div>
  </LayoutProject>
)

export default PageFido
