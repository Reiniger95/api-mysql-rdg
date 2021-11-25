import { Connection } from 'typeorm';
import { Imoveis } from './entities/imoveis.entity';
export declare const imoveisProviders: {
    provide: string;
    useFactory: (connection: Connection) => import("typeorm").Repository<Imoveis>;
    inject: string[];
}[];
