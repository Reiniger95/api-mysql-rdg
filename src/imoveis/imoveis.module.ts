import { Module } from '@nestjs/common'
import { DatabaseModule } from '../database/database.module'
import { ImoveisController } from './imoveis.controller'
import { imoveisProviders } from './imoveis.providers'
import { ImoveisService } from './imoveis.service'

@Module({
  imports: [DatabaseModule],
  controllers: [ImoveisController],
  providers: [...imoveisProviders, ImoveisService]
})
export class ImoveisModule {}
