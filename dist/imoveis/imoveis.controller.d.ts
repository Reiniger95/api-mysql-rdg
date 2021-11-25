import { ImoveisService } from './imoveis.service';
export declare class ImoveisController {
    private readonly imoveisService;
    constructor(imoveisService: ImoveisService);
    importacao(): any;
    buscaTipo(params: any): Promise<any>;
    buscaTipo2(params: any): Promise<any>;
}
