export class Router {

  routes = {}

  add(routName, page) {
    this.routes[routName] = page
  }

  route(event) {
    event = event || window.event
    event.preventDefault()

    window.history.pushState({}, "", event.target.href)
  }
  
  handle() {
    const { pathname } = window.location
    const route = this.routes[pathname] || this.routes[404]

    console.log(route)

    fetch(route)
    .then(data => data.text())
    .then(html => document.querySelector('#main').innerHTML = html)
  }
}

