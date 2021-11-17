import { ImoveisService } from './imoveis.service';
import { CreateImoveiDto } from './dto/create-imovei.dto';
import { UpdateImoveiDto } from './dto/update-imovei.dto';
export declare class ImoveisController {
    private readonly imoveisService;
    constructor(imoveisService: ImoveisService);
    create(createImoveiDto: CreateImoveiDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateImoveiDto: UpdateImoveiDto): string;
    remove(id: string): string;
}
