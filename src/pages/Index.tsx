import { TopNavigation } from "@/components/layout/TopNavigation";
import { PromoBanner } from "@/components/layout/PromoBanner";
import { SurveyBuilder } from "@/components/layout/SurveyBuilder";
import { ChatInterface } from "@/components/ChatInterface";

const Index = () => {
  return (
    <div className="flex flex-col h-screen bg-background">
      <TopNavigation />
      <PromoBanner />
      <main className="flex-1 flex overflow-hidden">
        <SurveyBuilder />
        <div className="w-96 border-l shadow-lg flex-shrink-0">
          <ChatInterface />
        </div>
      </main>
    </div>
  );
};

export default Index;
