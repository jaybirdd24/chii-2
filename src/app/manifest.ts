import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Chii Wellness",
    short_name: "Chii",
    description:
      "Acupuncture, Chinese medicine, physiotherapy, massage, waxing, and facials in Mount Maunganui.",
    start_url: "/",
    display: "browser",
    background_color: "#FFF8F0",
    theme_color: "#87A06F",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
