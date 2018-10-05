import React, { Component } from 'react'
import { IconBehance, IconInstagram, IconDribbble } from '../components/icons'
import { TimelineMax, Expo } from "gsap/TweenMax";
import Layout from '../components/layout'
import img1 from '../images/logo.svg'
import img2 from '../images/illustratio-hero.svg'
import img3 from '../images/flower.svg'
import img4 from '../images/block-apps.svg'
import img5 from '../images/block-websites.svg'
import img6 from '../images/areas.svg'
class IndexPage extends Component {

  state = {

  }

  showMenu = (event) => {
    if (event) {
      event.preventDefault();
    }

    var t1 = new TimelineMax({ paused: true })
      .to(".menu", 2, {
        top: "0%",
        ease: Expo.easeInOut,
        delay: -1
      })
      .reverse();

    document.getElementById("menu-link").addEventListener('click', (e) => {
      e.preventDefault();
      t1.reversed(!t1.reversed());
    });
    var list = document.getElementsByClassName("m-link")
    for (let i = 0; i < list.length; i++) {
      list[i].addEventListener("click", () => {
        t1.reversed(!t1.reversed());
      })
    }

  }

  componentDidMount() {
    this.showMenu()
  }
  render() {
    return (
      <Layout>
        <div className="menu">
          <div className="data">
            <ul>
              <li> <a className="m-link" href="#">Inicio</a></li>
              <li> <a className="m-link" href="#">Acerca de mí</a></li>
              <li> <a className="m-link" href="#">Proyectos</a></li>
              <li> <a className="m-link" href="#">Áreas de Diseño</a></li>
            </ul>
          </div>
        </div>
        <div className="home-page">
          <section className="sec-hero">
            <div className="section-content">
              <div className="navbar">
                <div className="menu-container">
                  <a id="menu-link" className="menu-link" href="/">Menu</a>
                </div>
                <div className="social-container">
                  <a href=""><IconDribbble width="22px" height="22px" /></a>
                  <a href=""><IconInstagram width="20px" height="20px" /></a>
                  <a href=""><IconBehance width="20px" height="20px" /></a>
                </div>
              </div>
              <div className="container-fluid">
                <div className="logo-container">
                  <img className="main-logo" src={img1} alt="" />
                </div>
                <div className="content">
                  <h1 className="sec-title">GITA</h1>
                  <h1 className="sec-title">GOVINDA</h1>
                  <span>GRAPHIC DESIGNER</span>
                </div>
                <img className="illustration-hero" src={img2} alt="img" />
              </div>
            </div>
          </section>
          <section className="sec-about">
            <div className="container">
              <div className="content">
                <h1 className="sec-title">ACERCA <br /> DE MI</h1>
                <div className="row">
                  <div className="col-md-3">
                    <img src={img3} alt=""/>
                  </div>
                  <div className="col-md-9">
                    <p className="sec-text">
                      Hola, <br />
                      Mi nombre es Gita Govinda, me especialicé en diseño UI / UX e ilustración, pero también me interesa el área de branding, comencé con sitios web básicos, diseños visualmente atractivos, detalles sutiles con interfaces innovadoras.
                  </p>
                    <p className="sec-text">
                      Me inspira la naturaleza, comida, las culturas, los humanos ¡todo vale! Me gusta experimentar estilos diferentes en donde encuentro el valor en las ideas. A cada proyecto siempre le pongo todo mi corazón, ajetreo, magia y paciencia, confío en el trabajo en equipo para crear soluciones interesantes y me gusta tomar riesgos para hacer lo que me gusta!
                  </p>
                    <p className="sec-text">
                      Si quieres contactarme  <br />
                      Puedes encontrarme en Behance, Instagram y Dribbble
                  </p>
                    <div className="social-links">
                      <div className="s-link"><a href="">Instagram</a></div>
                      <div className="s-link"><a href="">Behance</a></div>
                      <div className="s-link"><a href="">Dribbble</a></div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </section>
          <section className="sec-projects">
            <div className="content text-center">
              <h1 className="sec-title ">PROYECTOS</h1>
              <div className="container-fluid">
                <div className="row align-items-stretch">
                  <div className="col-md-6 px-0 text-center">
                    <div className="block-apps">
                      <div className="block-img ">
                        <img src={img4} alt="" />
                      </div>
                      <a href="/apps/" className="title">APLICACIONES</a>
                    </div>
                  </div>
                  <div className="col-md-6 px-0 text-center">
                    <div className="block-websites">
                      <div className="block-img">
                        <img src={img5} alt="" />
                      </div>
                      <a href="/websites/" className="title ">WEBSITES</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="sec-areas">
            <div className="container">
              <div className="content text-center">
              <h1 className="sec-title ">ÁREAS DE DISEÑO</h1>
              <p className="e-text"> <span>Diseño UX - UI:</span>  Me especialicé en diseño ux - ui para crear interacciones y generar experiencias en los usuarios. Actualmente llevo 2 años y medio en esta área del diseño.</p>
              <img className="cover-areas" src={img6} alt="" />
              </div>
            </div>
          </section>
        </div>
      </Layout>
    )
  }
}


export default IndexPage
