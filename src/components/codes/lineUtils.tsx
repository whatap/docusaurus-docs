export function parseLineRanges(rangeString: string) {
  return rangeString.split(",").map((range) => {
    if (range.includes("-")) {
      const [start, end] = range.split("-").map(Number);
      return { start, end };
    } else {
      const line = Number(range);
      return { start: line, end: line };
    }
  });
}

export function isLineInRange(lineNumber: number, ranges: { start: number; end: number }[]) {
  if (!ranges || ranges.length === 0) {
    return false;
  }
  return ranges.some(({ start, end }) => lineNumber >= start && lineNumber <= end);
}