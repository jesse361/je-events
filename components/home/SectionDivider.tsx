export function SectionDivider() {
  return (
    <div className="bg-white" aria-hidden="true">
      <div className="h-1.5 w-full bg-gradient-to-r from-navy via-magenta to-violet" />
      <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-5 sm:px-6">
        <span className="h-px flex-1 bg-line" />
        <span className="h-2 w-2 rounded-full bg-magenta" />
        <span className="h-px flex-1 bg-line" />
      </div>
    </div>
  );
}
