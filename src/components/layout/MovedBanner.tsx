import { MapPin } from "lucide-react";
import { siteContent } from "@/lib/content";

export function MovedBanner() {
  return (
    <div className="fixed top-0 left-0 right-0 z-40 h-8 bg-sage-700 text-cream-50">
      <div className="h-full flex items-center justify-center gap-1.5 px-4 text-center text-xs sm:text-sm">
        <MapPin className="w-3.5 h-3.5 shrink-0" />
        <span className="truncate">{siteContent.movedNotice}</span>
      </div>
    </div>
  );
}
