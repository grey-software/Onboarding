import theme from '@nuxt/content-theme-docs'

export default theme({
  docs: {
    primaryColor: '#64748b'
  }
})

{
  buildModules: [
    '@nuxtjs/pwa',
  ]
}
pwa: {
  icon: {
    gitlab: 'icon.png'
  }
}