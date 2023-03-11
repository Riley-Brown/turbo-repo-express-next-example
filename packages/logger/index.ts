import pino, { type LoggerOptions } from 'pino'

const localDevConfig: LoggerOptions['transport'] = {
  target: 'pino-pretty',
  options: {
    colorize: true,
    translateTime: 'SYS:hh:MM:ss.l TT Z',
  },
}

// Prevent pretty pino in builds
const enablePrettyPino =
  process.env.NODE_ENV === 'development' &&
  process.env.IS_SERVER_BUILD !== 'true'

const logger = pino({
  transport: enablePrettyPino ? localDevConfig : undefined,
  browser: {
    asObject: true,
    serialize: true,
  },
})

export default logger
