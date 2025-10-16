import { useState } from "react";
import { SurveyHeader } from "@/components/SurveyHeader";
import { ChatInterface } from "@/components/ChatInterface";
import { SurveyBuilder } from "@/components/SurveyBuilder";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

const Index = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <div className="flex flex-col h-screen bg-background">
      <SurveyHeader onChatToggle={() => setIsChatOpen(!isChatOpen)} />
      <main className="flex-1 overflow-hidden relative">
        <SurveyBuilder />
        {/* Chat overlay on the right */}
        {isChatOpen && (
          <div className="fixed right-0 top-[73px] bottom-0 w-[400px] bg-card/95 backdrop-blur-sm border-l shadow-lg animate-slide-in-right">
            <div className="flex items-center justify-between p-4 border-b">
              <h2 className="font-semibold">Chat Assistant</h2>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsChatOpen(false)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            <div className="h-[calc(100%-57px)]">
              <ChatInterface />
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Index;
