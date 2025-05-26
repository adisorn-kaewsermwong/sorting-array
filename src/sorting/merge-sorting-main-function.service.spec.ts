import { Test, TestingModule } from '@nestjs/testing';
import { MergeSortingDto } from './dto/merge-sorting.dto';
import { SortingService } from './sorting.service';

describe('SortingService - sortingNumberArray', () => {
  let service: SortingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SortingService],
    }).compile();

    service = module.get<SortingService>(SortingService);
  });

  it('Check service', () => {
    expect(service).toBeDefined();
  });

  it('Normal case', () => {
    const dto: MergeSortingDto = {
      collection_1: [5, 3, 1],
      collection_2: [2, 4, 6],
      collection_3: [0, 7, 8],
    };

    const result = service.sortingNumberArray(dto);

    expect(result).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8]);
  });

  it('Some null array case', () => {
    const dto: MergeSortingDto = {
      collection_1: [],
      collection_2: [2],
      collection_3: [],
    };

    const result = service.sortingNumberArray(dto);
    expect(result).toEqual([2]);
  });

  it('Normal Case has same number', () => {
    const dto: MergeSortingDto = {
      collection_1: [3, 2],
      collection_2: [2, 3],
      collection_3: [3, 4],
    };

    const result = service.sortingNumberArray(dto);
    expect(result).toEqual([2, 2, 3, 3, 3, 4]);
  });

  it('Null array case', () => {
    const dto: MergeSortingDto = {
      collection_1: [],
      collection_2: [],
      collection_3: [],
    };

    const result = service.sortingNumberArray(dto);
    expect(result).toEqual([]);
  });
});
