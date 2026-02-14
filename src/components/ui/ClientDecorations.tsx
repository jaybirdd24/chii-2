"use client";

import dynamic from "next/dynamic";

const CustomCursor = dynamic(
  () =>
    import("@/components/ui/CustomCursor").then((m) => ({
      default: m.CustomCursor,
    })),
  { ssr: false }
);
const FilmGrain = dynamic(
  () =>
    import("@/components/ui/FilmGrain").then((m) => ({
      default: m.FilmGrain,
    })),
  { ssr: false }
);

export function ClientDecorations() {
  return (
    <>
      <CustomCursor />
      <FilmGrain />
    </>
  );
}
