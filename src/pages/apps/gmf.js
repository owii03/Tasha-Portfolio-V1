import React from 'react'
import { Link } from 'gatsby'
import LayoutProject from '../../components/layoutproject'
import { WaveLine, ArrowBack } from '../../components/icons'

import img1 from '../../images/gmf-anim.gif'
import img2 from '../../images/gmf-img2.png'
import img2res from '../../images/gmf-img2-res.png'
import img3 from '../../images/gmd-back3.png'
import img4 from '../../images/gmf-back4.png'

import imgMarvel from '../../images/marvel.svg'
import imgAdobe from '../../images/adobexd.svg'
import imgApp1 from '../../images/gmf/app-1.png'
import imgApp2 from '../../images/gmf/app-2.png'
import imgApp3 from '../../images/gmf/app-3.png'

const PageGMF = () => (
  <LayoutProject title="VOLANT APP" link="/apps/volant">
    <div className="project-page gmf" style={{ position: 'relative' }}>
      <div className="sec-header">
        <div className="content">
          <div className="container ">
            <Link to="/apps">
              <div className="d-flex">
                <ArrowBack width="22px" height="22px" />
                <span className="action">BACK</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <section className="sec-hero" style={{ position: 'relative', overflow: 'hidden' }}>
        <div className="content">
          <div className="container ">
            <div className="row align-items-center">
              <div className=" col-md-5 col-sm-12">
                <div className="block-info">
                  <h1 className="title">GMF</h1>
                  <p className="sec-text">Aplicación de comida rápida</p>
                  <div className="image text-center">
                    <img src={img1} alt="" className="img-cover img-res" />
                  </div>
                  <div className="details">
                    <div className="title">¿Qué es Get My Food?</div>
                    <p className="sec-text">Es una empresa salvadoreña que se dedica a ofrecer servicio a domicilio de los mejores restaurantes del país. Puede ayudarte a encontrar y ordenar tu comida favorita desde cualquier lugar que te encuentres.</p>
                  </div>
                </div>
              </div>
              <div className=" col-md-7 col-sm-12 text-center hidden-sm">
                <div className="image ">
                  <img src={img1} alt="" className="img-cover " />
                </div>
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
            <div className="row align-items-center">
              <div className="col-md-5">
                <div className="block-info">
                  <h3 className="title">¿Cómo Funciona?</h3>
                  <p className="sec-text">Buscas tus restaurantes favoritos, ordenas tus platillos preferidos y la entrega llega a la puerta de la casa u oficina.</p>
                  <p className="sec-text">Puedes buscar por tipo de cocina, platos y restaurantes. Además cuenta con ofertas especiales, entregas gratuitas con el cual se puede rastrear cada una de las órdenes.</p>
                  <img className="img-detail img-res" src={img2res} alt="" />
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
                <img className="img-detail hidden-sm" src={img2} alt="" />

              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="sec-process">
        <div className="assets-1">
          <div className="content">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <h5 className="title">CONTENIDO</h5>
                  <div className="info">
                    <div className="r-info">
                      <p className="title">Assets Tipografía: ROBOTO</p>
                      <div className="d-flex fonts">
                        <p style={{ fontWeight: 'lighter' }}>Roboto</p>
                        <p style={{ fontWeight: 'normal' }}>Roboto</p>
                        <p style={{ fontWeight: 'bold' }}>Roboto</p>
                      </div>
                    </div>
                    <div className="r-info">
                      <p className="title">Assets Colores Primarios</p>
                      <div className="d-flex colors">
                        <div className="r-color">
                          <span className="c-color c1"></span>
                          <p className="text">#F04032</p>
                        </div>
                        <div className="r-color">
                          <span className="c-color c2"></span>
                          <p className="text">#D22E2E</p>
                        </div>
                        <div className="r-color ">
                          <span className="c-color c3"></span>
                          <p className="text">#B3B3B8</p>
                        </div>
                      </div>
                    </div>
                    <div className="r-info">
                      <p className="title">Assets Colores Secundarios</p>
                      <div className="d-flex colors">
                        <div className="r-color">
                          <span className="c-color c4"></span>
                          <p className="text">#FF9400</p>
                        </div>
                        <div className="r-color">
                          <span className="c-color c5"></span>
                          <p className="text">#000000</p>
                        </div>

                      </div>
                    </div>
                    <div className="r-info">
                      <p className="title">Tipo de Aplicación</p>
                      <p>App iOS, Android</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="assets-2">
          <div className="content">
            <div className="container">
              <h5 className="title">Pantallas Get My Food </h5>
              <div className="row align-items-center">
                <div className="col-md-6 text-right">
                  <div className="img">
                    <img className="img-responsive" src={imgApp1} alt="" />
                  </div>
                </div>
                <div className="col-md-6 ">
                  <div className="block right ">
                    <div className="text">Permite a los clientes hacer pedidos desde cualquier smartphone, elegir entre muchas opciones de restaurantes.</div>
                  </div>
                </div>
              </div>
              <div className="row align-items-center">
                <div className="col-md-6 or-sm-1">
                  <div className="block left ">
                    <p className="text text-right">Selecciona tu restaurante favorito o filtra por la comida que deseas comer, y revisa los menús y cartas disponibles para ti.</p>
                  </div>
                </div>
                <div className="col-md-6 text-left ">
                  <div className="img">
                    <img className="img-responsive" src={imgApp2} alt="" />
                  </div>
                </div>
              </div>
              <div className="row align-items-center">
                <div className="col-md-6 text-right">
                  <div className="img">
                    <img className="img-responsive" src={imgApp3} alt="" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="block right">
                    <div className="text">Personaliza todos los aspectos del pedido, tu pedido se confirma al instante y tu comida será preparada y enviada a tu dirección.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </LayoutProject>
)

export default PageGMF
