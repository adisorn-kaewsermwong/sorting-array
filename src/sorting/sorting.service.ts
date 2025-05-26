import { Injectable } from '@nestjs/common';
import { MergeSortingDto } from './dto/merge-sorting.dto';

@Injectable()
export class SortingService {
  mergeAsc2Array(array_1: number[], array_2: number[]): number[] {
    const result: number[] = [];
    let i = 0;
    let j = 0;

    // compare push lower number in array
    while (i < array_1.length && j < array_2.length) {
      if (array_1[i] < array_2[j]) {
        result.push(array_1[i]);
        i++;
      } else {
        result.push(array_2[j]);
        j++;
      }
    }

    // push to result array when in array 1 left
    while (i < array_1.length) {
      result.push(array_1[i]);
      i++;
    }

    // push to result array when in array 2 left
    while (j < array_2.length) {
      result.push(array_2[j]);
      j++;
    }

    return result;
  }

  reverseArray(arr: number[]): number[] {
    const reversed_array: number[] = [];
    for (let i = arr.length - 1; i >= 0; i--) {
      reversed_array.push(arr[i]);
    }
    return reversed_array;
  }

  sortingNumberArray(mergeSortingDto: MergeSortingDto): number[] {
    const reversed = this.reverseArray(mergeSortingDto.collection_1);
    const sorting_asc_1 = this.mergeAsc2Array(reversed, mergeSortingDto.collection_2);
    const final_sorting_asc = this.mergeAsc2Array(sorting_asc_1, mergeSortingDto.collection_3);

    return final_sorting_asc;
  }
}
