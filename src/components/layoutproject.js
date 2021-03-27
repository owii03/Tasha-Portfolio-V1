import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import FooterProject from './footerproject'

import './../scss/main.scss'

const LayoutProject = ({children, title, link}) => (
  <StaticQuery
    query={graphql`
      query SiteTitlePage {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <div className="main-container">
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="en" />
          <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />          
        </Helmet>        
        <div className="static-sidebar">
          <div className="content">
            <p className="sidebar-title">CREATIVITY IS NOTHING, BUT A MIND SET FREE</p>
          </div>
        </div>
        <div>{children}</div>
        <FooterProject title={title} link={link}  />
      </div>
    )}
  />
)

LayoutProject.propTypes = {
  children: PropTypes.node.isRequired,
}

export default LayoutProject
