import { MessageSquare, Users, Save, Eye, Settings, AlignLeft, Trash2, Printer } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const SurveyBuilder = () => {
  return (
    <div className="flex-1 bg-background">
      {/* Survey Header */}
      <div className="border-b bg-card">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-normal text-foreground">Untitled</h1>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                <MessageSquare className="h-4 w-4 mr-2" />
                Add collaborators
              </Button>
            </div>
          </div>
          
          {/* Progress Steps */}
          <div className="flex items-center gap-4 text-sm mb-4">
            <button className="text-muted-foreground hover:text-foreground">SUMMARY</button>
            <span className="text-muted-foreground">→</span>
            <button className="text-success font-medium">DESIGN SURVEY</button>
            <span className="text-muted-foreground">→</span>
            <button className="text-muted-foreground hover:text-foreground">CONNECT APPS</button>
            <span className="text-muted-foreground">→</span>
            <button className="text-muted-foreground hover:text-foreground">COLLECT RESPONSES</button>
            <span className="text-muted-foreground">→</span>
            <button className="text-muted-foreground hover:text-foreground">ANALYZE RESULTS</button>
          </div>

          {/* Toolbar */}
          <div className="flex items-center gap-4 text-sm border-t pt-4">
            <button className="flex items-center gap-2 text-foreground font-medium">
              <span>+</span> Build
            </button>
            <button className="flex items-center gap-2 text-muted-foreground hover:text-foreground">
              <AlignLeft className="h-4 w-4" /> Style
            </button>
            <button className="flex items-center gap-2 text-muted-foreground hover:text-foreground">
              <Settings className="h-4 w-4" /> Logic
            </button>
            <button className="flex items-center gap-2 text-muted-foreground hover:text-foreground">
              Question bank
            </button>
            <button className="flex items-center gap-2 text-muted-foreground hover:text-foreground">
              <Badge variant="secondary" className="text-xs">PRO</Badge>
              Paid features
            </button>
            <div className="ml-auto flex items-center gap-2">
              <Button variant="outline" size="sm" className="text-sm">
                Manage survey extras
              </Button>
              <Button variant="default" size="sm" className="text-sm bg-[hsl(var(--header-bg))]">
                Preview survey
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Survey Canvas */}
      <div className="p-8 flex justify-center">
        <div className="w-full max-w-4xl">
          <div className="bg-card rounded-lg shadow-md p-8 mb-6">
            <div className="flex items-center gap-2 mb-6">
              <Button variant="outline" size="sm" className="text-sm">
                Add logo
              </Button>
            </div>
            
            <h2 className="text-xl font-semibold text-success mb-8">Untitled</h2>
            
            {/* Question */}
            <div className="border-2 border-border rounded-lg p-6 hover:border-primary/50 transition-colors">
              <div className="flex items-start gap-4">
                <span className="font-medium text-muted-foreground">Q1</span>
                <div className="flex-1">
                  <input
                    type="text"
                    placeholder="Enter your question"
                    className="w-full text-base border-0 border-b border-dashed border-border focus:border-primary outline-none pb-2 mb-4"
                  />
                  <div className="flex items-center justify-between">
                    <select className="text-sm border border-border rounded px-3 py-1.5 bg-background">
                      <option>Multiple Choice</option>
                    </select>
                    <button className="text-muted-foreground hover:text-foreground">
                      <Settings className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Button variant="outline" className="w-full" size="lg">
            <span className="text-base">+ NEW PAGE</span>
          </Button>
        </div>
      </div>
    </div>
  );
};
