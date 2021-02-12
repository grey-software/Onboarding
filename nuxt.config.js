import theme from '@nuxt/content-theme-docs'

export default theme({
  docs: {
    primaryColor: '#64748b'
  },
  font:
  {
      family: 'Roboto',


  }
})
{
  buildModules: [
    // Simple usage
    '@nuxtjs/vuetify',

    // With options
    ['@nuxtjs/vuetify', { /* module options */ }]
  ]
}