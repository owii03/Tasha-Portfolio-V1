import React from 'react'
import { Link } from 'gatsby'
import { IconBehance, IconInstagram, IconDribbble } from './icons'

const FooterProject = (props) => (
  <footer className="project-footer">    
    <div className="container text-center">
    <div className="action">SIGUIENTE</div>
      <Link to={props.link} className="title">{props.title}</Link>
    </div>
  </footer>
)

export default FooterProject
