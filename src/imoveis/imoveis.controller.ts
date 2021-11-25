import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post
} from '@nestjs/common'
import { CreateImoveiDto } from './dto/create-imovei.dto'
import { UpdateImoveiDto } from './dto/update-imovei.dto'
import { ImoveisService } from './imoveis.service'

@Controller('imoveis')
export class ImoveisController {
  constructor(private readonly imoveisService: ImoveisService) {}

  @Get('importacao')
  importacao(): any {
return this.imoveisService.importacao()
  }
  @Get('buscaTipo/:tipo')
  async buscaTipo(@Param() params): Promise<any> {
    const response = await this.imoveisService.buscaTipo(
      params.tipo
    )
    
   return response
  }
  @Get('buscaTipo2/:tipo')
  async buscaTipo2(@Param() params): Promise<any> {
    const response = await this.imoveisService.buscaTipo2(
      params.tipo
    )
    
   return response
  }

}
