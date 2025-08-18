export class ExpressionCalculator {
  /** Returns a calculation involving a, b, c, d, and e */
  calculate(a: number, b: number, c: number, d: number, e: number): number {
    const x = this.pow(a, b);
    const y = this.add(x, c);
    const z = this.multiply(y, d);
    const w = this.divide(z, e);

    return w;
  }
  // Implement your code here to return the correct value.
  add(a: number, b: number): number {
    return a + b;
  }
  multiply(a: number, b: number): number {
    return a * b;
  }
  divide(a: number, b: number): number {
    if (b === 0) {
      throw new Error("Cannot divide by zero");
    }
    return a / b;
  }
  pow(base: number, exponent: number): number {
    return Math.pow(base, exponent);
  }

  // (Math.pow(a, b) + c) * d / e
}
