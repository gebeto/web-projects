import { bubbleSortArray } from './Bubble';

describe('bubbleSortArray', () => {
  it('should sort an array in ascending order', () => {
    const arr = [5, 3, 8, 1, 2];
    const generator = bubbleSortArray(arr);

    while (!generator.next().done) {}

    expect(arr).toEqual([1, 2, 3, 5, 8]);
  });

  it('should yield objects with i and j properties', () => {
    const arr = [3, 2];
    const steps = [];
    const generator = bubbleSortArray(arr);

    for (let step of generator) {
      steps.push(step);
    }

    expect(steps.length).toBeGreaterThan(0);
    expect(steps[0]).toHaveProperty('i');
    expect(steps[0]).toHaveProperty('j');
  });
});
