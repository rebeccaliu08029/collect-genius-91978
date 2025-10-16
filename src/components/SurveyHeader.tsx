import { CheckCircle2, MessageSquare } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface SurveyHeaderProps {
  onChatToggle: () => void;
}

export const SurveyHeader = ({ onChatToggle }: SurveyHeaderProps) => {
  return (
    <div className="border-b bg-[hsl(210_15%_15%)] text-white">
      <div className="px-6 py-3">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-xl font-medium mb-0.5">Untitled</h1>
            <div className="flex items-center gap-4 text-xs text-muted-foreground">
              <span className="text-white/60">SUMMARY</span>
              <span className="text-success font-medium">DESIGN SURVEY</span>
              <span className="text-white/60">CONNECT APPS</span>
              <span className="text-white/60">COLLECT RESPONSES</span>
              <span className="text-white/60">ANALYZE RESULTS</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Badge variant="secondary" className="gap-2 bg-white/10 text-white border-white/20">
              <CheckCircle2 className="h-3.5 w-3.5 text-success" />
              10 Questions
            </Badge>
            <Button onClick={onChatToggle} className="gap-2 bg-accent hover:bg-accent/90 text-accent-foreground">
              <MessageSquare className="h-4 w-4" />
              Chat Assistant
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
