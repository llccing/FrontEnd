const CONFIG_NAV = ['home', 'blog', 'css', 'js', 'lib', 'read', 'about']

function initNav() {
  const nav = []
  const sidebar = {}
  CONFIG_NAV.forEach(item => {
    const config = require(`./${item}`)
    nav.push(config.nav)
    config.sidebar && Object.assign(sidebar, config.sidebar)
  })

  return {
    nav,
    sidebar
  }
}

module.exports = initNav()