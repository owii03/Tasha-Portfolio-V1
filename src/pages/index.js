import React, { Component } from 'react'
import { Link } from "gatsby"
import { IconBehance, IconInstagram, IconDribbble, WaveLine, IconLinkedin } from '../components/icons'
import { TimelineMax, Expo } from "gsap/TweenMax";

import lottie from 'lottie-web'
import animationAbout from '../lottie/acerca-demi.json'
import animationHero from '../lottie/principal.json'

import Layout from '../components/layout'
import img1 from '../images/logo2.svg'
import img2 from '../images/illustratio-hero.svg'
import img3 from '../images/flower-home.png'
import img4 from '../images/block-apps.png'
import img5 from '../images/block-websites.png'
import img6 from '../images/areas.svg'

import imgAback1 from '../images/about-back1.png'
import imgAback2 from '../images/about-back2.png'

class IndexPage extends Component {

  state = {
    isStopped: false, isPaused: false, openMenu: false
  }
  // t1 = null;
  // showMenu = (event) => {
  //   if (event) {
  //     event.preventDefault();
  //   }
  //   this.t1 = new TimelineMax({ paused: true })
  //     .to(".menu", 1, {
  //       top: "0%",
  //       ease: Expo.easeInOut,
  //       delay: 0
  //     })
  //     .reverse();
  // }
  t1 = new TimelineMax({ paused: true })
  openMenu = (e) => {
    e.preventDefault();
    const {openMenu} = this.state
    this.setState({openMenu: !openMenu})
    //this.t1.reversed(!this.t1.reversed());
    this.t1.reversed() ? this.t1.play() : this.t1.reverse();
    // for (let i = 0; i < list.length; i++) {
    //   list[i].addEventListener("click", (e) => {
    //     e.preventDefault()
    //     this.t1.reversed(!this.t1.reversed());
    //   })
    // }
  }
  componentWillMount() {

  }

  componentDidMount() {
    //this.showMenu()
    this.t1.to(".menu", 2, {
      top: "0%",
      ease: Expo.easeInOut,      
    })
    this.t1.reverse();

    lottie.loadAnimation({
      container: document.getElementById('lottie'), // the dom element that will contain the animation
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: animationAbout
    })
    lottie.loadAnimation({
      container: document.getElementById('lottie-hero'), // the dom element that will contain the animation
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: animationHero
    })
  }
  render() {
    return (
      <Layout>
        <div className="menu">
          <div className="data">
            <div className="close-button" onClick={e => { this.openMenu(e) }}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.2 19.2" height="20">
                <g id="Group_2895" data-name="Group 2895" transform="translate(-54.772 -129.615)">
                  <line id="Line_11" data-name="Line 11" stroke="#fff" strokeWidth="2px" className="bc-l" y2="23.154" transform="translate(72.558 131.029) rotate(45)" />
                  <line id="Line_12" data-name="Line 12" stroke="#fff" strokeWidth="2px" className="bc-l" y2="23.154" transform="translate(56.186 131.029) rotate(-45)" />
                </g>
              </svg>
            </div>
            <ul>
              <li> <Link className="m-link" to="#">Home</Link></li>
              <li><span>Web</span></li>
              <li> <Link className="m-link" to="/websites/inxights">Inxights</Link></li>
              <li> <Link className="m-link" to="/websites/jwh">JWH</Link></li>
              <li> <Link className="m-link" to="/websites/evet">Evet</Link></li>
              <li><span>Mobile & Apps</span></li>
              <li> <Link className="m-link" to="/apps/gmf">GMF</Link></li>
              <li> <Link className="m-link" to="/apps/volant">Volant</Link></li>
              <li> <Link className="m-link" to="/apps/fido">Fido App</Link></li>
              <li> <Link className="m-link" to="/apps/santarosa">Santa Rosa</Link></li>
              <li> <Link className="m-link" to="/apps/pupusas">Pupusas App</Link></li>
            </ul>
          </div>
        </div>
        <div className="home-page">
          <section className="sec-hero">
            <div className="section-content">
              <div className="navbar">
                <div className={this.state.openMenu ? "menu-container close" : "menu-container " }>
                  <a id="menu-link" className="menu-link" onClick={e => { this.openMenu(e) }} >Menu</a>
                  <div className="close-button" onClick={e => { this.openMenu(e) }}>
                    <svg className="icon-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.2 19.2" height="20">
                      <g id="Group_2895" data-name="Group 2895" transform="translate(-54.772 -129.615)">
                        <line id="Line_11" data-name="Line 11" stroke="#fff" strokeWidth="2px" className="bc-l" y2="23.154" transform="translate(72.558 131.029) rotate(45)" />
                        <line id="Line_12" data-name="Line 12" stroke="#fff" strokeWidth="2px" className="bc-l" y2="23.154" transform="translate(56.186 131.029) rotate(-45)" />
                      </g>
                    </svg>
                  </div>
                </div>
                <div className="social-container">
                  <a target="_blank" href="https://dribbble.com/Govinda_"><IconDribbble width="22px" height="22px" /></a>
                  <a target="_blank" href="https://www.instagram.com/gitagovinda_/"><IconInstagram width="20px" height="20px" /></a>
                  <a target="_blank" href="https://www.behance.net/Gita-Govinda"><IconBehance width="20px" height="20px" /></a>
                  <a target="_blank" href="https://www.linkedin.com/in/gita-maga%C3%B1a-a18b7b172/"><IconLinkedin width="18px" height="18px" /></a>
                </div>
              </div>
              <div className="container-fluid">
                <div className="logo-container">
                  <div className="menu-xs" onClick={e => { this.openMenu(e) }}>
                    <svg className="h-menu" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.236 17.872" height="22">
                      <g id="Group_2711" data-name="Group 2711" transform="translate(-101.75 -104.75)">
                        <line id="Line_52" data-name="Line 52" strokeWidth="1.5px" stroke="#fff" className="h-line" x2="17.736" transform="translate(102.5 105.5)" />
                        <line id="Line_53" data-name="Line 53" strokeWidth="1.5px" stroke="#fff" className="h-line" x2="17.736" transform="translate(102.5 113.686)" />
                        <line id="Line_54" data-name="Line 54" strokeWidth="1.5px" stroke="#fff" className="h-line" x2="17.736" transform="translate(102.5 121.872)" />
                      </g>
                    </svg>
                  </div>
                  <img className="main-logo" src={img1} alt="" />
                </div>
                <div className="content animated fadeInUp">
                  <h1 className="sec-title">TASHA</h1>
                  <h1 className="sec-title">CORNELIA</h1>
                  <span style={{ padding: 0 }}>UI UX DESIGNER</span>
                </div>
                <div className="illustration-hero animated fadeIn" id="lottie-hero"></div>
                {/* <img className="illustration-hero animated fadeIn" src={img2} alt="img" /> */}
              </div>
            </div>
          </section>
          <section className="sec-about">
            <img className="a-back1" src={imgAback1} alt="" />
            <img className="a-back2" src={imgAback2} alt="" />
            <div className="container">
              <div className="content">
                <h1 className="sec-title">ACERCA <br /> DE MI</h1>
                <WaveLine width="200px" height="10px" />
                <div className="row align-items-center">
                  <div className="col-md-3 hidden-sm">
                    <div className="img-responsive" id="lottie" />
                  </div>
                  <div className="col-md-9 col-sm-12" >
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
                      <div className="s-link"><a target="_blank" href="https://www.instagram.com/gitagovinda_/">Instagram</a></div>
                      <div className="s-link"><a target="_blank" href="https://www.behance.net/Gita-Govinda">Behance</a></div>
                      <div className="s-link"><a target="_blank" href="https://dribbble.com/Govinda_">Dribbble</a></div>
                      <div className="s-link"><a target="_blank" href="https://www.linkedin.com/in/gita-maga%C3%B1a-a18b7b172/">LinkedIn</a></div>
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
                        <div className="overlay">
                          <Link to="/apps/" className="title"> <span>MOBILE & APPS</span></Link>
                        </div>
                      </div>
                      {/* <Link to="/apps/" className="title">MOBILE & APPS</Link> */}
                    </div>
                  </div>
                  <div className="col-md-6 px-0 text-center">
                    <div className="block-websites">
                      <div className="block-img">
                        <img src={img5} alt="" />
                        <div className="overlay">
                          <Link to="/websites/" className="title "><span>WEB DESIGN</span></Link>
                        </div>
                      </div>
                      {/* <Link to="/websites/" className="title ">WEB DESIGN</Link> */}
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
                <img className="cover-areas animated fadeIn" src={img6} alt="" />
              </div>
            </div>
          </section>
        </div>
      </Layout>
    )
  }
}


export default IndexPage
