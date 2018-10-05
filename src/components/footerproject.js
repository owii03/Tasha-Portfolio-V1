import React from 'react'
import { Link } from 'gatsby'
import { IconBehance, IconInstagram, IconDribbble } from './icons'

const FooterProject = (props) => (
  <footer className="project-footer">    
    <div className="container text-center">
    <div className="action">SIGUIENTE</div>
      <a href={props.link} className="title">{props.title}</a>
    </div>
  </footer>
)

export default FooterProject
