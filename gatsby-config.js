module.exports = {
  siteMetadata: {
    title: 'Gita Govinda',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Gita Govinda Portfolio',
        short_name: 'Gita Govinda',
        start_url: '/',
        background_color: '#015151',
        theme_color: '#015151',
        display: 'standalone',
        icon: 'src/images/logo.svg',
        scope: '/apps/',
      },
    },
    'gatsby-plugin-offline',
  ],
}
