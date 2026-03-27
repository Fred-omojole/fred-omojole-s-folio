export function readingTimeLabel(text: string): string {
  const words = text.trim().split(/\s+/).length || 0;
  const minutes = Math.max(1, Math.round(words / 200));
  return `${minutes} min read`;
}
