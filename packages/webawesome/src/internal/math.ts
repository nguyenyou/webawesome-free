import { nanoid } from 'nanoid';

/** Ensures a number stays within a minimum and maximum value */
export function clamp(value: number, min: number, max: number) {
  const noNegativeZero = (n: number) => (Object.is(n, -0) ? 0 : n);

  if (value < min) {
    return noNegativeZero(min);
  }

  if (value > max) {
    return noNegativeZero(max);
  }

  return noNegativeZero(value);
}

/* Generates a random, unique id with an optional prefix. */
export function uniqueId(prefix = '') {
  return `${prefix}${nanoid()}`;
}
