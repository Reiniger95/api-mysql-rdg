import { Inject, Injectable } from '@nestjs/common'
import { excelToJson } from 'convert-excel-to-json'
import { Repository } from 'typeorm'
import { CreateImoveiDto } from './dto/create-imovei.dto'
import { UpdateImoveiDto } from './dto/update-imovei.dto'
import { Imoveis } from './entities/imoveis.entity'
@Injectable()
export class ImoveisService {
  constructor(
    @Inject('IMOVEIS_REPOSITORY')
    private imoveisRepository: Repository<Imoveis>
    ) {}
  async importacao() {
    const excelToJson = require('convert-excel-to-json')
  
    const result = excelToJson({
      sourceFile: 'aluguel.xlsx',
      header: {
        // Is the number of rows that will be skipped and will not be present at our result object. Counting from top to bottom
        rows: 1 // 2, 3, 4, etc.
      },
      columnToKey: 
        {
          A:'tipo',
          B:"bairro",
          C:'quartos',
          D:'vagas',
          E:'suites',
          F:'area',
          G:'valor',
          H:'condominio',
          I:'iptu'
        }
      
      })

      result['aluguel'].forEach((element) =>{
        this.imoveisRepository
        .createQueryBuilder()
        .insert()
        .into(Imoveis)
        .values(element)
        .execute()
      })

      return 'Finish'
  }


  async buscaTipo(tipo){
   const result =  await this.imoveisRepository.createQueryBuilder('imoveis')
   .where('imoveis.tipo = :tipo', {tipo: tipo}).getMany()

  return result
  }
  async buscaTipo2(tipo){
    const result =  await this.imoveisRepository.createQueryBuilder('imoveis')
    .where('imoveis.quartos > :tipo', {tipo: tipo}).getMany()
 
   return result
   }
}
