import { SurveyHeader } from "@/components/SurveyHeader";
import { ChatInterface } from "@/components/ChatInterface";
import { SurveyBuilder } from "@/components/SurveyBuilder";

const Index = () => {
  return (
    <div className="flex flex-col h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <SurveyHeader />
      <main className="flex-1 overflow-hidden relative">
        <SurveyBuilder />
        {/* Chat overlay on the right */}
        <div className="fixed right-0 top-[73px] bottom-0 w-[400px] bg-card/95 backdrop-blur-sm border-l shadow-lg">
          <ChatInterface />
        </div>
      </main>
    </div>
  );
};

export default Index;
