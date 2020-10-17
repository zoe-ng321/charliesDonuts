const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/zoeng/git/charliesDonuts/.cache/dev-404-page.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/Users/zoeng/git/charliesDonuts/src/pages/about.js"))),
  "component---src-pages-contact-js": hot(preferDefault(require("/Users/zoeng/git/charliesDonuts/src/pages/contact.js"))),
  "component---src-pages-home-js": hot(preferDefault(require("/Users/zoeng/git/charliesDonuts/src/pages/home.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/zoeng/git/charliesDonuts/src/pages/index.js"))),
  "component---src-pages-menu-js": hot(preferDefault(require("/Users/zoeng/git/charliesDonuts/src/pages/menu.js")))
}

