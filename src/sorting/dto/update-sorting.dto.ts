import { PartialType } from '@nestjs/mapped-types';
import { CreateSortingDto } from './create-sorting.dto';

export class UpdateSortingDto extends PartialType(CreateSortingDto) {}
