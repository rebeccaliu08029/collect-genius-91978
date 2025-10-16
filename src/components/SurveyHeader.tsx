import { CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export const SurveyHeader = () => {
  return (
    <div className="border-b bg-card/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold mb-1">Customer Feedback Survey</h1>
            <p className="text-sm text-muted-foreground">Let's find the best way to share your survey</p>
          </div>
          <div className="flex items-center gap-3">
            <Badge variant="secondary" className="gap-2">
              <CheckCircle2 className="h-3.5 w-3.5 text-success" />
              10 Questions Ready
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
};
