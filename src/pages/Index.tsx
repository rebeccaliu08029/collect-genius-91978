import { SurveyHeader } from "@/components/SurveyHeader";
import { ChatInterface } from "@/components/ChatInterface";

const Index = () => {
  return (
    <div className="flex flex-col h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <SurveyHeader />
      <main className="flex-1 overflow-hidden">
        <ChatInterface />
      </main>
    </div>
  );
};

export default Index;
