import { Home, Bell, User, Grid3x3 } from "lucide-react";
import { Button } from "@/components/ui/button";

export const TopNavigation = () => {
  return (
    <nav className="bg-[hsl(var(--header-bg))] text-[hsl(var(--header-foreground))] border-b border-border/20">
      <div className="px-4 h-14 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[hsl(var(--header-bg))]">
                <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
              </svg>
            </div>
          </div>
          <div className="flex items-center gap-4 text-sm">
            <button className="hover:text-white/80 transition-colors">Home</button>
            <button className="hover:text-white/80 transition-colors">Plans & Pricing</button>
            <button className="hover:text-white/80 transition-colors">Multi-survey Analysis</button>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Button size="sm" className="bg-warning text-warning-foreground hover:bg-warning/90 font-medium">
            Upgrade
          </Button>
          <Button size="sm" variant="outline" className="border-white/20 text-white hover:bg-white/10">
            Create survey
          </Button>
          <button className="p-2 hover:bg-white/10 rounded">
            <Grid3x3 className="h-5 w-5" />
          </button>
          <button className="p-2 hover:bg-white/10 rounded">
            <Bell className="h-5 w-5" />
          </button>
          <button className="p-2 hover:bg-white/10 rounded">
            <User className="h-5 w-5" />
          </button>
          <div className="w-8 h-8 rounded-full bg-[hsl(var(--success))] flex items-center justify-center text-white text-sm font-medium">
            RL
          </div>
        </div>
      </div>
    </nav>
  );
};
