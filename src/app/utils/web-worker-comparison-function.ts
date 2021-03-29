export function webWorkerComparisonFunction(iterations: number): void {
  let value = 'a';
  for (let k = 0; k <= 10; k++) {
    value = 'a';

    for (let i = 0; i <= iterations; i++) {
      value += 'a';
    }
  }
}
