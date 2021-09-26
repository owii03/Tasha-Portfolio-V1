module.exports = {
  siteMetadata: {
    title: 'Tasha Cornelia',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Tasha Cornelia Portfolio',
        short_name: 'Tasha Cornelia',
        start_url: '/',
        background_color: '#015151',
        theme_color: '#015151',
        display: 'standalone',
        icon: 'src/images/logo-pwa.png',
        scope: '/apps/',
        target: 'serverless'
      },
    },
    'gatsby-plugin-offline',
  ],
}
