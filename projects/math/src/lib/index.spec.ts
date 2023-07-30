import { normalCurveHeights } from './normal-curve-heights.function';
import { sineSegment } from './sine-segment.function';

it('should make a sine curve with starting at 0, max height 80, ending back at 0', () => {
  const a = sineSegment(80, 0, Math.PI, 16);
  expect(Math.max(...a) == 80).toBeTruthy();
  expect(Math.min(...a) == 0).toBeTruthy();
  expect(a[0] == 0).toBeTruthy();
  expect(a[a.length - 1] == 0).toBeTruthy();
});

it('should create normal curve heights', () => {
  const test = normalCurveHeights([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2, 100);
  const heights = test.map((v) => Math.round(v));
  expect(Math.max(...heights) == 100).toBeTruthy();
});
