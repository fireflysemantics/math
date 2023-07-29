/**
 * Calculates the normal PDF value
 * for a given value of x, the distribution mean,
 * and the distribution standard deviation.
 *
 * @param x The x value
 * @param std The standard deviation
 * @param mean The mean
 * @return the PDF value at X
  */
export function normalPDF(x: number, mean: number, std: number) {
  return (
    (1 / (std * Math.sqrt(2 * Math.PI))) *
    Math.exp(-Math.pow(x - mean, 2) / (2 * Math.pow(std, 2)))
  );
}
