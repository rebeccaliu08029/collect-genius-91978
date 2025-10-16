import { Award, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export const PromoBanner = () => {
  return (
    <div className="bg-[hsl(var(--banner-bg))] border-b border-border">
      <div className="px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Award className="h-5 w-5 text-[hsl(var(--banner-foreground))]" />
          <div className="text-sm">
            <span className="font-semibold text-[hsl(var(--banner-foreground))]">Try our best features</span>
            <span className="text-[hsl(var(--banner-foreground))]/80 ml-2">
              Add our most popular paid features to your survey! If you like them, just upgrade to a{" "}
              <button className="underline font-medium">paid plan</button>.
            </span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button size="sm" className="bg-warning text-warning-foreground hover:bg-warning/90 font-medium">
            See pricing
          </Button>
          <button className="p-1 hover:bg-black/5 rounded">
            <X className="h-4 w-4 text-[hsl(var(--banner-foreground))]" />
          </button>
        </div>
      </div>
    </div>
  );
};
