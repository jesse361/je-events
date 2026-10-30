export function SampleNote({ children }: { children: React.ReactNode }) {
  return (
    <p className="rounded-2xl border border-line bg-soft px-4 py-3 text-sm leading-6 text-muted">
      <span className="font-semibold text-navy">Sample content. </span>
      {children}
    </p>
  );
}
