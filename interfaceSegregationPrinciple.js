class Programmer {
  constructor(name) {
    this.name = name
  }

  code() {
    console.log(`${this.name} is coding...`)
  }
}

class Frontend extends Programmer {}
class Backend extends Programmer {}
class Fullstack extends Programmer {}

const canReact = {
  react() {
    console.log(`${this.name} is creating React app...`)
  }
}

const canNode = {
  node() {
    console.log(`${this.name} is programming on Node JS...`)
  }
}

const canVue = {
  vue() {
    console.log(`${this.name} is creating Vue app...`)
  }
}

const canAngular = {
  angular() {
    console.log(`${this.name} is creating Angular App...`)
  }
}

Object.assign(Frontend.prototype, canReact)
Object.assign(Backend.prototype, canNode)
Object.assign(Fullstack.prototype, canReact, canNode, canVue, canAngular)

const programmer = new Programmer('Programmer')
programmer.code()

const frontend = new Frontend('Frontend')
frontend.code()
frontend.react()

const backend = new Backend('Backend')
backend.code()
backend.node()

const fullstack = new Fullstack('Fullstack')
fullstack.code()
fullstack.node()
fullstack.react()
fullstack.vue()
fullstack.angular()
