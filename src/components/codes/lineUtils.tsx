// ./codes/lineUtils.tsx
export function parseLineRanges(rangeString: string) {
  const ranges = rangeString.split(",").map((range) => {
    if (range.includes("-")) {
      const [start, end] = range.split("-").map(Number);
      return { start, end };
    } else {
      const line = Number(range);
      return { start: line, end: line };
    }
  });
  return ranges;
}

export function isLineInRange(lineNumber: number, ranges: { start: number; end: number }[]) {
  return ranges.some(({ start, end }) => lineNumber >= start && lineNumber <= end);
}