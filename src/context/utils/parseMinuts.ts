export function parseMinutes(data): string {
  const parse = new Date(data).getMinutes();
  const minutes = parse.toString();

  if (minutes.length === 1) {
    return 0 + minutes;
  }

  return minutes;
}
