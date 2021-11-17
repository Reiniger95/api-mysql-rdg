7 lines (15 sloc)  496 Bytes
   
import { NestFactory } from '@nestjs/core'
import { readFileSync } from 'fs'
import * as helmet from 'helmet'
import { AppModule } from './app.module'

// const httpsOptions = {
//   cert: readFileSync('/home/sicredi/certificados_novos/certnew_new.cer'),
//   key: readFileSync('/home/sicredi/certificados_novos/chave_semsenha.key')
// }

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.enableCors()
  app.use(helmet())
  await app.listen(3333)
}
bootstrap()