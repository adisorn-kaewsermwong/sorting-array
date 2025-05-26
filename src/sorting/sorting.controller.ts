import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SortingService } from './sorting.service';
import { MergeSortingDto } from './dto/merge-sorting.dto';

@Controller('sorting')
export class SortingController {
  constructor(private readonly sortingService: SortingService) {}

  @Post()
  merge(@Body() mergeSortingDto: MergeSortingDto) {
    const sorted = this.sortingService.sortingNumberArray(mergeSortingDto);

    return sorted;
  }
}
