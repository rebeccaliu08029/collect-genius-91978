import { CheckCircle2, MessageSquare } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface SurveyHeaderProps {
  onChatToggle: () => void;
}

export const SurveyHeader = ({ onChatToggle }: SurveyHeaderProps) => {
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
            <Button onClick={onChatToggle} variant="default" className="gap-2">
              <MessageSquare className="h-4 w-4" />
              Chat Assistant
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
