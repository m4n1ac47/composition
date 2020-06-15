class Programmer {
  constructor(name) {
    this.name = name
  }

  code() {
    console.log(`${this.name} is coding...`)
  }
}

class Frontend extends Programmer {
  react() {
    console.log(`${this.name} is creating React app...`)
  }
}

class Backend extends Programmer {
  node() {
    console.log(`${this.name} is programming on Node JS...`)
  }
}

class Fullstack extends Frontend {
  node() {
    console.log(`${this.name} is programming on Node JS...`)
  }
}

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
