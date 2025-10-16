import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

interface CollectResponsesCTAProps {
  onNavigate: () => void;
}

export const CollectResponsesCTA = ({ onNavigate }: CollectResponsesCTAProps) => {
  return (
    <Card className="border-2 animate-fade-in my-4">
      <CardContent className="p-4">
        <Button
          variant="outline"
          className="w-full gap-2"
          onClick={onNavigate}
        >
          Go to Collect Responses
          <ArrowRight className="h-4 w-4" />
        </Button>
      </CardContent>
    </Card>
  );
};
