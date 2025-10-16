import { CheckCircle2, MessageSquare, Home, MessageCircle, Bell, HelpCircle, User, MoreHorizontal, Send } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface SurveyHeaderProps {
  onChatToggle: () => void;
}

export const SurveyHeader = ({ onChatToggle }: SurveyHeaderProps) => {
  return (
    <div className="bg-white border-b">
      {/* Top bar with title and actions */}
      <div className="px-6 py-3 border-b">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Home className="h-4 w-4" />
            </Button>
            <div className="flex items-center gap-2">
              <h1 className="text-base font-medium text-foreground">Product feedback survey</h1>
              <Badge variant="outline" className="text-xs">Draft</Badge>
              <Button variant="ghost" size="icon" className="h-6 w-6">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="flex flex-col items-end gap-2">
            <div className="flex items-center gap-3">
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-8 w-8 relative"
                onClick={onChatToggle}
              >
                <MessageCircle className="h-4 w-4" />
                <span className="absolute -top-1 -right-1 bg-muted text-muted-foreground text-[10px] font-medium px-1 rounded">12</span>
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <User className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Bell className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <HelpCircle className="h-4 w-4" />
              </Button>
              <div className="h-8 w-8 rounded-full bg-success flex items-center justify-center text-white text-xs font-medium">
                MM
              </div>
            </div>
            <Button className="gap-2 bg-success hover:bg-success/90 text-white">
              <Send className="h-4 w-4" />
              Publish survey
            </Button>
          </div>
        </div>
      </div>

      {/* Navigation steps */}
      <div className="px-6 py-3 flex items-center justify-between bg-muted/20">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>Summary</span>
          </div>
          <div className="flex items-center gap-2 text-sm font-medium text-success border-b-2 border-success pb-3 -mb-3">
            <span>Design survey</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>Collect responses</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>Connect apps</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>Analyze results</span>
          </div>
        </div>
      </div>
    </div>
  );
};
