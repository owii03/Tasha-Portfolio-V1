import React, { Component } from 'react'
import { Link } from 'gatsby'
import {
  IconBehance,
  IconInstagram,
  IconDribbble,
  WaveLine,
  IconLinkedin,
  IconHome,
} from '../components/icons'
import { TimelineMax, Expo } from 'gsap/all'
import { AnchorLink } from 'gatsby-plugin-anchor-links'

import lottie from 'lottie-web'
import animationAbout from '../lottie/acerca-demi.json'
import animationHero from '../lottie/principal.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

import Layout from '../components/layout'
import img1 from '../images/logo2.svg'
// import img2 from '../images/illustratio-hero.svg'
// import img3 from '../images/flower-home.png'
import img4 from '../images/block-apps.png'
import img5 from '../images/block-websites.png'
import img6 from '../images/areas.svg'

import imgAback1 from '../images/about-back1.png'
import imgAback2 from '../images/about-back2.png'

class IndexPage extends Component {
  state = {
    isStopped: false,
    isPaused: false,
    openMenu: false,
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
  openMenu = e => {
    e.preventDefault()
    const { openMenu } = this.state
    this.setState({ openMenu: !openMenu })
    //this.t1.reversed(!this.t1.reversed());
    this.t1.reversed() ? this.t1.play() : this.t1.reverse()
    // for (let i = 0; i < list.length; i++) {
    //   list[i].addEventListener("click", (e) => {
    //     e.preventDefault()
    //     this.t1.reversed(!this.t1.reversed());
    //   })
    // }
  }
  componentWillMount() {}

  componentDidMount() {
    //this.showMenu()
    this.t1.to('.menu', 1, {
      top: '0%',
      ease: Expo.easeInOut,
    })
    this.t1.reverse()

    lottie.loadAnimation({
      container: document.getElementById('lottie'), // the dom element that will contain the animation
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: animationAbout,
    })
    lottie.loadAnimation({
      container: document.getElementById('lottie-hero'), // the dom element that will contain the animation
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: animationHero,
    })
  }
  render() {
    return (
      <Layout>
        <div className="menu">
          <div className="data">
            <div
              className="close-button"
              onClick={e => {
                this.openMenu(e)
              }}
              onKeyDown={e => {
                this.openMenu(e)
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 19.2 19.2"
                height="20"
              >
                <g
                  id="Group_2895"
                  data-name="Group 2895"
                  transform="translate(-54.772 -129.615)"
                >
                  <line
                    id="Line_11"
                    data-name="Line 11"
                    stroke="#fff"
                    strokeWidth="2px"
                    className="bc-l"
                    y2="23.154"
                    transform="translate(72.558 131.029) rotate(45)"
                  />
                  <line
                    id="Line_12"
                    data-name="Line 12"
                    stroke="#fff"
                    strokeWidth="2px"
                    className="bc-l"
                    y2="23.154"
                    transform="translate(56.186 131.029) rotate(-45)"
                  />
                </g>
              </svg>
            </div>
            <ul>
              <li>
                {' '}
                <Link className="m-link" to="/">
                  <IconHome width="32px" height="32px" />
                </Link>
              </li>
              <hr />
              <br />
              <li>
                <span>Web Projects</span>
              </li>
              <li>
                {' '}
                <Link className="m-link" to="/websites/inxights">
                  Inxights
                </Link>
              </li>
              <li>
                {' '}
                <Link className="m-link" to="/websites/jwh">
                  JWH
                </Link>
              </li>
              <li>
                {' '}
                <Link className="m-link" to="/websites/evet">
                  Evet
                </Link>
              </li>
              <hr />
              <br />
              <li>
                <span>Mobile Application Projects</span>
              </li>
              <li>
                {' '}
                <Link className="m-link" to="/apps/gmf">
                  GMF
                </Link>
              </li>
              <li>
                {' '}
                <Link className="m-link" to="/apps/volant">
                  Volant
                </Link>
              </li>
              <li>
                {' '}
                <Link className="m-link" to="/apps/fido">
                  Fido App
                </Link>
              </li>
              <li>
                {' '}
                <Link className="m-link" to="/apps/santarosa">
                  Santa Rosa
                </Link>
              </li>
              <li>
                {' '}
                <Link className="m-link" to="/apps/pupusas">
                  Pupusas App
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="home-page">
          <section className="sec-hero">
            <div className="section-content">
              <div className="navbar">
                <div
                  className={
                    this.state.openMenu
                      ? 'menu-container close'
                      : 'menu-container '
                  }
                >
                  <a
                    id="menu-link"
                    className="menu-link"
                    onClick={e => {
                      this.openMenu(e)
                    }}
                  >
                    Menu
                  </a>
                  <div
                    className="close-button"
                    onClick={e => {
                      this.openMenu(e)
                    }}
                  >
                    <svg
                      className="icon-svg"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 19.2 19.2"
                      height="20"
                    >
                      <g
                        id="Group_2895"
                        data-name="Group 2895"
                        transform="translate(-54.772 -129.615)"
                      >
                        <line
                          id="Line_11"
                          data-name="Line 11"
                          stroke="#fff"
                          strokeWidth="2px"
                          className="bc-l"
                          y2="23.154"
                          transform="translate(72.558 131.029) rotate(45)"
                        />
                        <line
                          id="Line_12"
                          data-name="Line 12"
                          stroke="#fff"
                          strokeWidth="2px"
                          className="bc-l"
                          y2="23.154"
                          transform="translate(56.186 131.029) rotate(-45)"
                        />
                      </g>
                    </svg>
                  </div>
                </div>
                <div className="social-container">
                  {/* <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://dribbble.com/Govinda_"
                  >
                    <IconDribbble width="22px" height="22px" />
                  </a> */}
                  {/* <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.instagram.com/gitagovinda_/"
                  >
                    <IconInstagram width="20px" height="20px" />
                  </a> */}
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.behance.net/tashacornelia"
                  >
                    <IconBehance width="20px" height="20px" />
                  </a>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.linkedin.com/in/tasha-cornelia-8b3295158/"
                  >
                    <IconLinkedin width="18px" height="18px" />
                  </a>
                </div>
              </div>
              <div className="container-fluid">
                <div className="logo-container">
                  <div
                    className="menu-xs"
                    onClick={e => {
                      this.openMenu(e)
                    }}
                  >
                    <svg
                      className="h-menu"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 19.236 17.872"
                      height="22"
                    >
                      <g
                        id="Group_2711"
                        data-name="Group 2711"
                        transform="translate(-101.75 -104.75)"
                      >
                        <line
                          id="Line_52"
                          data-name="Line 52"
                          strokeWidth="1.5px"
                          stroke="#fff"
                          className="h-line"
                          x2="17.736"
                          transform="translate(102.5 105.5)"
                        />
                        <line
                          id="Line_53"
                          data-name="Line 53"
                          strokeWidth="1.5px"
                          stroke="#fff"
                          className="h-line"
                          x2="17.736"
                          transform="translate(102.5 113.686)"
                        />
                        <line
                          id="Line_54"
                          data-name="Line 54"
                          strokeWidth="1.5px"
                          stroke="#fff"
                          className="h-line"
                          x2="17.736"
                          transform="translate(102.5 121.872)"
                        />
                      </g>
                    </svg>
                  </div>
                  <img className="main-logo" src={img1} alt="" />
                </div>
                <div className="content animated fadeInUp">
                  <h1 className="sec-title">TASHA</h1>
                  <h1 className="sec-title">CORNELIA</h1>
                  <span style={{ padding: 0 }}>DESIGNER & PROBLEM SOLVER </span>
                </div>
                <div
                  className="illustration-hero animated fadeIn"
                  id="lottie-hero"
                ></div>
                {/* <img className="illustration-hero animated fadeIn" src={img2} alt="img" /> */}
              </div>
            </div>
          </section>
          <section className="sec-about">
            <img className="a-back1" src={imgAback1} alt="" />
            <img className="a-back2" src={imgAback2} alt="" />
            <div className="container">
              <div className="content">
                <h1 className="sec-title">
                  ABOUT <br /> ME
                </h1>
                <WaveLine width="200px" height="10px" />
                <div className="row align-items-center">
                  <div className="col-md-3 hidden-sm">
                    <div className="img-responsive" id="lottie" />
                  </div>
                  <div className="col-md-9 col-sm-12">
                    <p className="sec-text">
                      Hi 👋, <br />
                      My name is Tasha Cornelia, I specialized in UI / UX design
                      and solving problems. I usually started my day with a
                      glass of milk, then sketch all my cool ideas with a help
                      of colorful moodboard. Visually attractive designs, subtle
                      details with innovative interfaces, easy UX flow are all
                      handled fine.
                    </p>
                    <p className="sec-text">
                      I am inspired by nature, food, cultures, humans, anything
                      goes! I like to experiment with different styles where I
                      find value in ideas. I trust teamwork to create
                      interesting solutions, and to each project I always put
                      all my heart, hustle, magic and patience! ❤️‍🔥
                    </p>
                    <p className="sec-text">
                      If you want to know more about me, checkout{' '}
                      <AnchorLink className="inlineLink" to="/#journey">
                        My Work Journey{' '}
                      </AnchorLink>
                      or{' '}
                      <Link className="inlineLink" to="/websites">
                        My Projects!
                      </Link>
                    </p>
                    {/* <div className="social-links">
                      <div className="s-link">
                        <a
                          target="_blank"
                          rel="noreferrer"
                          href="https://www.instagram.com/gitagovinda_/"
                        >
                          Instagram
                        </a>
                      </div>
                      <div className="s-link">
                        <a
                          target="_blank"
                          rel="noreferrer"
                          href="https://www.behance.net/Gita-Govinda"
                        >
                          Behance
                        </a>
                      </div>
                      <div className="s-link">
                        <a
                          target="_blank"
                          rel="noreferrer"
                          href="https://dribbble.com/Govinda_"
                        >
                          Dribbble
                        </a>
                      </div>
                      <div className="s-link">
                        <a
                          target="_blank"
                          rel="noreferrer"
                          href="https://www.linkedin.com/in/gita-maga%C3%B1a-a18b7b172/"
                        >
                          LinkedIn
                        </a>
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="sec-projects">
            <div className="content text-center">
              <h1 className="sec-title ">Projects</h1>
              <div className="container-fluid">
                <div className="row align-items-stretch">
                  <div className="col-md-6 px-0 text-center">
                    <div className="block-apps">
                      <div className="block-img ">
                        <img src={img4} alt="" />
                        <div className="overlay">
                          <Link to="/apps/" className="title">
                            {' '}
                            <span>MOBILE APPS</span>
                          </Link>
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
                          <Link to="/websites/" className="title ">
                            <span>WEBSITES</span>
                          </Link>
                        </div>
                      </div>
                      {/* <Link to="/websites/" className="title ">WEB DESIGN</Link> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="sec-areas" id="journey">
            <div className="container">
              <div className="content text-center">
                <h1 className="sec-title ">WORK JOURNEY</h1>

                <div className="containerTimeline">
                  <div className="timeline">
                    <div className="timeline-container primary">
                      <div className="timeline-icon">
                        <FontAwesomeIcon
                          className="ikon"
                          icon={faMapMarkerAlt}
                        />
                      </div>
                      <div className="timeline-body">
                        <h4 className="timeline-title">
                          <span className="badge">Primary</span>
                        </h4>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Aliquam necessitatibus numquam earum ipsa fugiat
                          veniam suscipit, officiis repudiandae, eum recusandae
                          neque dignissimos. Cum fugit laboriosam culpa,
                          repellendus esse commodi deserunt.
                        </p>
                        <p className="timeline-subtitle">1 Hours Ago</p>
                      </div>
                    </div>
                    <div className="timeline-container danger">
                      <div className="timeline-icon">
                        <FontAwesomeIcon className="ikon" icon={faStar} />
                      </div>
                      <div className="timeline-body">
                        <h4 className="timeline-title">
                          <span className="badge">Danger</span>
                        </h4>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Aliquam necessitatibus numquam earum ipsa fugiat
                          veniam suscipit, officiis repudiandae, eum recusandae
                          neque dignissimos. Cum fugit laboriosam culpa,
                          repellendus esse commodi deserunt.
                        </p>
                        <p className="timeline-subtitle">2 Hours Ago</p>
                      </div>
                    </div>
                    <div className="timeline-container success">
                      <div className="timeline-icon">
                        <FontAwesomeIcon className="ikon" icon={faStar} />
                      </div>
                      <div className="timeline-body">
                        <h4 className="timeline-title">
                          <span className="badge">Success</span>
                        </h4>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Aliquam necessitatibus numquam earum ipsa fugiat
                          veniam suscipit, officiis repudiandae, eum recusandae
                          neque dignissimos. Cum fugit laboriosam culpa,
                          repellendus esse commodi deserunt.
                        </p>
                        <p className="timeline-subtitle">6 Hours Ago</p>
                      </div>
                    </div>
                    <div className="timeline-container warning">
                      <div className="timeline-icon">
                        <FontAwesomeIcon className="ikon" icon={faStar} />
                      </div>
                      <div className="timeline-body">
                        <h4 className="timeline-title">
                          <span className="badge">Warning</span>
                        </h4>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Aliquam necessitatibus numquam earum ipsa fugiat
                          veniam suscipit, officiis repudiandae, eum recusandae
                          neque dignissimos. Cum fugit laboriosam culpa,
                          repellendus esse commodi deserunt.
                        </p>
                        <p className="timeline-subtitle">1 Day Ago</p>
                      </div>
                    </div>
                    {/* <div className="timeline-container">
                    <div className="timeline-icon">
                        <i className="far fa-grin-beam-sweat"></i>
                    </div>
                    <div className="timeline-body">
                        <h4 className="timeline-title"><span className="badge">Secondary</span></h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam necessitatibus numquam earum ipsa fugiat veniam suscipit, officiis repudiandae, eum recusandae neque dignissimos. Cum fugit laboriosam culpa, repellendus esse commodi deserunt.</p>
                        <p className="timeline-subtitle">3 Days Ago</p>
                    </div>
                </div> */}
                    <div className="timeline-container info">
                      <div className="timeline-icon">
                        <FontAwesomeIcon className="ikon" icon={faStar} />
                      </div>
                      <div className="timeline-body">
                        <h4 className="timeline-title">
                          <span className="badge">Info</span>
                        </h4>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Aliquam necessitatibus numquam earum ipsa fugiat
                          veniam suscipit, officiis repudiandae, eum recusandae
                          neque dignissimos. Cum fugit laboriosam culpa,
                          repellendus esse commodi deserunt.
                        </p>
                        <p className="timeline-subtitle">4 Days Ago</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <p className="e-text">
                  {' '}
                  <span>Diseño UX - UI:</span> Me especialicé en diseño ux - ui
                  para crear interacciones y generar experiencias en los
                  usuarios. Actualmente llevo 2 años y medio en esta área del
                  diseño.
                </p> */}
                <img
                  className="cover-areas animated fadeIn"
                  src={img6}
                  alt=""
                />
              </div>
            </div>
          </section>
        </div>
      </Layout>
    )
  }
}

export default IndexPage
