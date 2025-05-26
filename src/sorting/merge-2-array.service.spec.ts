import { Test, TestingModule } from '@nestjs/testing';
import { SortingService } from './sorting.service';

describe('SortingService', () => {
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

  it('merge two sorted ascending arrays into one sorted array', () => {
    const result = service.mergeAsc2Array([1, 3, 5], [2, 4, 6]);
    expect(result).toEqual([1, 2, 3, 4, 5, 6]);
  });


  it('merge one empty array, one ascending array into one sorted array', () => {
    const result = service.mergeAsc2Array([], [1, 2, 3]);
    expect(result).toEqual([1, 2, 3]);
  });

  it('merge one empty array, one ascending array into one sorted array', () => {
    const result = service.mergeAsc2Array([4, 5, 6], []);
    expect(result).toEqual([4, 5, 6]);
  });

  it('merge two empty array', () => {
    const result = service.mergeAsc2Array([], []);
    expect(result).toEqual([]);
  });

  it('merge 2 array ascending with a same number in two array', () => {
    const result = service.mergeAsc2Array([1, 2, 5], [2, 3, 5]);
    expect(result).toEqual([1, 2, 2, 3, 5, 5]);
  });
});
