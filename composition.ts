interface Programmer {
  name?: string
  code?: Function
}

interface Frontend {
  react?: Function
  angular?: Function
  vue?: Function
}

interface Backend {
  node: Function
}

function createProgrammer(name: string): Programmer {
  const programmer = { name }

  return {
    ...programmer,
    ...canCode(programmer)
  }
}

function canCode({name}: Programmer): Programmer {
  return {
    code: () => console.log(`${name} is coding...`)
  }
}

function canVue({name}: Programmer): Frontend {
  return {
    vue: () => console.log(`${name} is creating Vue app...`)
  }
}

function canReact({name}: Programmer): Frontend {
  return {
    react: () => console.log(`${name} is creating React App...`)
  }
}

function canAngular({name}: Programmer): Frontend {
  return {
    angular: () => console.log(`${name} is creating Angular App...`)
  }
}

function canNode({name}: Programmer): Backend {
  return {
    node: () => console.log(`${name} is programming on Node JS...`)
  }
}

function createFrontend(name: string): Programmer & Frontend {
  const programmer = createProgrammer(name)

  return {
    ...programmer,
    ...canReact(programmer)
  }
}

function createBackend(name: string): Programmer & Backend {
  const programmer = createProgrammer(name)

  return {
    ...programmer,
    ...canNode(programmer)
  }
}

function createFullstack(name: string): Programmer & Frontend & Backend {
  const programmer = createProgrammer(name)

  return {
    ...programmer,
    ...canVue(programmer),
    ...canReact(programmer),
    ...canAngular(programmer),
    ...canNode(programmer)
  }
}

const programmer = createProgrammer('Programmer')
programmer.code()

const frontend = createFrontend('Frontend')
frontend.code()
frontend.react()

const backend = createBackend('Backend')
backend.code()
backend.node()

const fullstack = createFullstack('Fullstack')
fullstack.code()
fullstack.node()
fullstack.react()
fullstack.vue()
fullstack.angular()
