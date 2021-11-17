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
    return this.ImoveisService.importacao()
  }
}
