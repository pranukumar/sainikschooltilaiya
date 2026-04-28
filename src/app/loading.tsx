export default function Loading() {
  return (
    <div
      className="min-h-[60vh] flex flex-col items-center justify-center gap-6"
      role="status"
      aria-label="Loading page content"
    >
      {/* Animated crest */}
      <div className="relative w-16 h-16">
        <div className="absolute inset-0 rounded-full border-4 border-[#0D1B2A]/10" />
        <div className="absolute inset-0 rounded-full border-4 border-t-[#C8A84B] border-r-transparent border-b-transparent border-l-transparent animate-spin" />
      </div>

      {/* Skeleton shimmer cards */}
      <div className="w-full max-w-2xl px-6 space-y-4">
        {[80, 60, 70].map((w, i) => (
          <div
            key={i}
            className="h-4 rounded bg-gray-200 animate-pulse"
            style={{ width: `${w}%` }}
          />
        ))}
      </div>

      <span className="sr-only">Loading…</span>
    </div>
  );
}
