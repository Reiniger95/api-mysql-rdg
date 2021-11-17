import * as dotenv from 'dotenv'
import { join } from 'path'
import { ConnectionOptions } from 'typeorm'

dotenv.config()

const connectionOptions: ConnectionOptions = {
  type: 'mysql',
  host: process.env.HOST_BD,
  port: parseInt(process.env.PORT_BD, 10),
  username: process.env.USERNAME_BD,
  password: process.env.SENHA_BD,
  database: process.env.DATABASE_NAME,
  entities: [join(__dirname, '/../**/*.entity{.ts,.js}')],
  // We are using migrations, synchronize should be set to false.
  synchronize: true,
  dropSchema: false,
  connectTimeout: 1000000000,
  acquireTimeout: 1000000000,
  // Run migrations automatically,
  // you can disable this if you prefer running migration manually.
  // migrationsRun: true,

  logging: true,

  migrations: [join(__dirname, 'migrations/*{.ts,.js}')],
  cli: {
    migrationsDir: 'src/database/migrations'
  }
}

export = connectionOptions
