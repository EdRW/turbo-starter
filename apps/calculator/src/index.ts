import { ops } from '@edrw/math';
import { add } from '@edrw/math/add';
import { subtract } from '@edrw/math/subtract';

export function funcA() {
  const sum = ops.add(7, 3);
  const difference = ops.subtract(sum, 5);
  return difference;
}

export function funcB() {
  const sum = add(7, 3);
  const difference = subtract(sum, 5);
  return difference;
}
