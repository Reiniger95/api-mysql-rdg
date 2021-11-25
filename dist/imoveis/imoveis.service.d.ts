import { Repository } from 'typeorm';
import { Imoveis } from './entities/imoveis.entity';
export declare class ImoveisService {
    private imoveisRepository;
    constructor(imoveisRepository: Repository<Imoveis>);
    importacao(): Promise<string>;
    buscaTipo(tipo: any): Promise<Imoveis[]>;
    buscaTipo2(tipo: any): Promise<Imoveis[]>;
}
