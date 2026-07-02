import { createFileRoute } from "@tanstack/react-router";

// No head() here: the home route inherits title/description/og/twitter from
// __root.tsx, and ships no og:image so serve-time hosting can inject the
// project's social preview (explicit og:image or latest screenshot).
export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div
      className="flex min-h-screen items-center justify-center bg-[#fcfbf8] px-4"
    >
      <div className="max-w-xl text-center">
        <p className="text-sm font-medium uppercase tracking-[0.3em] text-muted-foreground">
          Online mağaza
        </p>
        <h1 className="mt-4 text-5xl font-bold tracking-tight text-foreground">
          EG Shop AZ
        </h1>
        <p className="mt-4 text-base text-muted-foreground">
          Layihə Hetzner VPS üzərində Node.js server kimi işləməyə hazırdır.
        </p>
      </div>
    </div>
  );
}
