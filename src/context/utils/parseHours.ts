export function parseHours(date) {
  const hours = new Date(date).getHours();
  return hours.toString();
}
