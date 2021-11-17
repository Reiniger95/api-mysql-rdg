import { Connection } from 'typeorm'
import { Imoveis } from './entities/imoveis.entity'

export const imoveisProviders = [
  {
    provide: 'IMOVEIS_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Imoveis),
    inject: ['DATABASE_CONNECTION']
  }
]
