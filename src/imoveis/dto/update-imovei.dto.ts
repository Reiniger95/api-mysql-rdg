import { PartialType } from '@nestjs/mapped-types';
import { CreateImoveiDto } from './create-imovei.dto';

export class UpdateImoveiDto extends PartialType(CreateImoveiDto) {}
