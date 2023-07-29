/**
 * Creates an array of points on a sine curve
 *  
 * @param baseHeight The base height added opnto Math.sing(angle)
 * @param multiplier The multiplier that scales Math.sin(angle)
 * @param startAngle The start angle
 * @param endAngle The end angle
 * @param increments The number of points to generate
 * @param startIndex The start index
 * @returns The array of points on the sine curve
 */
export function sineSegment(
    multiplier: number,
    startAngle: number,
    endAngle: number,
    increments: number,
    baseHeight: number = 0
  ): number[] {
    const increment = Math.abs(endAngle - startAngle) / increments;
    const result: number[] = [];
    let angle = startAngle;
    for (let i = 0; i < increments; i++) {
      let height = Math.round(baseHeight + multiplier * Math.sin(angle));
      result.push(height);
      angle += increment;
    }
    return result;
  }