import { CheckCircle2, MessageSquare, Home, MessageCircle, Bell, HelpCircle, User, MoreHorizontal, Send, Plus, Wand2, Lightbulb, Archive, Settings, Type, Trash2, Printer, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface SurveyHeaderProps {
  onChatToggle: () => void;
}

export const SurveyHeader = ({ onChatToggle }: SurveyHeaderProps) => {
  return (
    <div className="bg-white border-b">
      {/* Top bar with title and actions */}
      <div className="px-6 py-3 flex items-center justify-between border-b">
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
        <Button className="gap-2 bg-[hsl(152_69%_31%)] hover:bg-[hsl(152_69%_25%)] text-white">
          <Send className="h-4 w-4" />
          Publish survey
        </Button>
      </div>

      {/* Toolbar */}
      <div className="px-6 py-3 flex items-center justify-between border-b bg-background">
        <div className="flex items-center gap-4">
          <Button variant="ghost" className="gap-2 text-sm">
            <Plus className="h-4 w-4" />
            Build
          </Button>
          <Button variant="ghost" className="gap-2 text-sm">
            <Wand2 className="h-4 w-4" />
            Style
          </Button>
          <Button variant="ghost" className="gap-2 text-sm">
            <Lightbulb className="h-4 w-4" />
            Logic
          </Button>
          <Button variant="ghost" className="gap-2 text-sm">
            <Archive className="h-4 w-4" />
            Question bank
          </Button>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" className="gap-2 text-sm">
            <Settings className="h-4 w-4" />
            Options
          </Button>
          <Button variant="ghost" className="gap-2 text-sm">
            <Type className="h-4 w-4" />
            Format
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <Trash2 className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <Printer className="h-4 w-4" />
          </Button>
          <Button variant="ghost" className="gap-2 text-sm">
            Preview
            <ExternalLink className="h-3.5 w-3.5" />
          </Button>
        </div>
      </div>
    </div>
  );
};
