function createProgrammer(name) {
  const programmer = { name }

  return {
    ...programmer,
    ...canCode(programmer)
  }
}

function canCode({name}) {
  return {
    code: () => console.log(`${name} is coding...`)
  }
}

function canVue({name}) {
  return {
    vue: () => console.log(`${name} is creating Vue app...`)
  }
}

function canReact({name}) {
  return {
    react: () => console.log(`${name} is creating React App...`)
  }
}

function canAngular({name}) {
  return {
    angular: () => console.log(`${name} is creating Angular App...`)
  }
}

function canNode({name}) {
  return {
    node: () => console.log(`${name} is programming on Node JS...`)
  }
}

function createFrontend(name) {
  const programmer = createProgrammer(name)

  return {
    ...programmer,
    ...canReact(programmer)
  }
}

function createBackend(name) {
  const programmer = createProgrammer(name)

  return {
    ...programmer,
    ...canNode(programmer)
  }
}

function createFullstack(name) {
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
