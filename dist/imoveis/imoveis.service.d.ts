import { CreateImoveiDto } from './dto/create-imovei.dto';
import { UpdateImoveiDto } from './dto/update-imovei.dto';
export declare class ImoveisService {
    create(createImoveiDto: CreateImoveiDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateImoveiDto: UpdateImoveiDto): string;
    remove(id: number): string;
}
