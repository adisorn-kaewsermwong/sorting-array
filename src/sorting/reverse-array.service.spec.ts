// reverse-array.service.spec.ts
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

  it('reverse asc to desc', () => {
    expect(service.reverseArray([1, 2, 3])).toEqual([3, 2, 1]);
  });

  it('reverse single number in array', () => {
    expect(service.reverseArray([42])).toEqual([42]);
  });

  it('reverse empty array', () => {
    expect(service.reverseArray([])).toEqual([]);
  });

  it('reverse negative number in array', () => {
    expect(service.reverseArray([-1, -2, -3])).toEqual([-3, -2, -1]);
  });
});
