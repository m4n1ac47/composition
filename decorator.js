class Programmer {
  constructor(name) {
    this.name = name
  }

  code() {
    console.log(`${this.name} is coding...`)
  }
}

const programmer = new Programmer('Programmer')

const canReact = (programmer) => {
  function react() {
    console.log(`${this.name} is creating React App...`)
  }

  programmer.react = react

  return programmer
}

const canVue = (programmer) => {
  function vue() {
    console.log(`${this.name} is creating Vue App...`)
  }

  programmer.vue = vue

  return programmer
}

const canAngular = (programmer) => {
  function angular() {
    console.log(`${this.name} is creating Angular App...`)
  }

  programmer.angular = angular

  return programmer
}

const canNode = (programmer) => {
  function node() {
    console.log(`${this.name} is programming on Node JS...`)
  }

  programmer.node = node

  return programmer
}

const frontend = new Programmer('Frontend')
canReact(frontend)
canVue(frontend)

const backend = new Programmer('Backend')
canNode(backend)

const fullstack = new Programmer('Fullstack')
canNode(fullstack)
canReact(fullstack)

console.log(programmer)
console.log(frontend)
console.log(backend)
console.log(fullstack)