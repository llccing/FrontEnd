const CONFIG_NAV = ['home', 'blog', 'css', 'js', 'lib', 'read']

async function initNav() {
  const nav = []
  const sidebar = {}
  
  for (const item of CONFIG_NAV) {
    const config = await import(`./${item}.js`)
    nav.push(config.default.nav)
    if (config.default.sidebar) {
      Object.assign(sidebar, config.default.sidebar)
    }
  }

  nav.push(
    { text: 'About', link: 'https://rowanliu.com/about' }
  )

  return {
    nav,
    sidebar
  }
}

export default await initNav()