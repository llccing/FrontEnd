const CONFIG_NAV = ['blog', 'css', 'js', 'lib', 'read']

function initNav() {
  const nav = [
    { text: 'Home', link: '/' }
  ]
  const sidebar = {}
  CONFIG_NAV.forEach(item => {
    const config = require(`./${item}`)
    nav.push(config.nav)
    Object.assign(sidebar, config.sidebar)
  })
  nav.push({ text: 'About', link: '/about/' })

  return {
    nav,
    sidebar
  }
}

module.exports = initNav()