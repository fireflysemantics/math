import { normalPDF } from "./normal-pdf.function";

/**
 * @param x:number[] The x values
 * @param xMin The minimum x value
 * @param xMax The maximum x value
 * @param std The standard deviation
 * @param maxHeight The maximum height
 * @param stepSize The steps size, 1,2,3... defaults to 1
 */
export function normalCurveHeights(
  x: number[],
  std: number,
  maxHeight: number,
  stepSize: number = 1
):number[] {
  const xMin = Math.min(...x);
  const xMax = Math.max(...x);
  const pdfValues: number[] = [];
  const heights: number[] = [];

  const mean: number = (xMin + xMax) / 2;
  let maxY = -Infinity;
  for (let x = xMin; x <= xMax; x += stepSize) {
    const y = normalPDF(x, mean, std);
    pdfValues.push(y);
    if (maxY < y) {
      maxY = y;
    }
  }
  //==============================
  // Calculate Heights
  //==============================
  const factor = maxHeight / maxY;
  for (let i = 0; i < pdfValues.length; i++) {
    heights.push(pdfValues[i] * factor);
  }
  return heights;
}
