import { Connection, createConnection } from 'typeorm'
import * as config from './ormconfig'

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory(): Promise<Connection> {
      return createConnection(config)
    }
  }
]
