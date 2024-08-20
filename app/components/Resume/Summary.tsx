export default function Summary({ summary }: { summary: string[] }) {
  if (summary?.length === 0) {
    return null;
  }
  return <p>{summary}</p>;
}
