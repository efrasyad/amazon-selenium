import winston from 'winston'
const { createLogger, format, transports } = winston
const { combine, timestamp, printf } = format

const logFormat = printf(({ level, message, timestamp }) => {
  return `${timestamp} [${level}]: ${message}`;
})

const logger = createLogger({
  level: 'debug',
  format: combine(
    timestamp(),
    format.splat(),
    format.colorize(),
    logFormat
  ),
  transports: [
    new transports.Console()
  ]
})

export default logger
