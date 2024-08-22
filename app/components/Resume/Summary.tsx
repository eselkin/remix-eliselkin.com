export default function Summary({ summary }: { summary: string[] }) {
  if (summary?.length === 0) {
    return null;
  }
  return (
    <div>
      {summary.map((s) => (
        <p key={s}>{s}</p>
      ))}
    </div>
  );
}
