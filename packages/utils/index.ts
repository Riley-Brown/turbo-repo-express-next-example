import logger from '@example/logger'

export function test(location: string) {
  logger.info(`I have been properly bundled in ${location}`)
}

export function anotherOne() {
  logger.info('another util function')
}
