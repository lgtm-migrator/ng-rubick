import path from 'path'

const DEV = 'development'
const PROD = 'production'

type NodeEnv = typeof DEV | typeof PROD

export const NODE_ENV = (process.env.NODE_ENV || DEV) as NodeEnv

export const __DEV__ = NODE_ENV === DEV

export const hashType = __DEV__ ? 'hash' : 'chunkhash'

export const serverHost = process.env.HOST || 'localhost'

export const serverPort = +process.env.PORT || 4000

export const resolve = (...args: string[]) =>
  path.resolve(process.cwd(), ...args)

export const HASH_MODE = process.env.HASH_MODE === 'true'
export const ROUTE_BASE = process.env.ROUTE_BASE || '/'
