import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";

type QuestionType = "text" | "rating" | "multipleChoice" | "checkbox" | "dropdown";

interface Question {
  id: number;
  type: QuestionType;
  title: string;
  options?: string[];
}

const questions: Question[] = [
  {
    id: 1,
    type: "rating",
    title: "How satisfied are you with our service?",
  },
  {
    id: 2,
    type: "multipleChoice",
    title: "Which features do you use most often?",
    options: ["Dashboard", "Reports", "Analytics", "Settings"],
  },
  {
    id: 3,
    type: "text",
    title: "What suggestions do you have for improvement?",
  },
  {
    id: 4,
    type: "checkbox",
    title: "Which of the following best describes you?",
    options: ["Individual User", "Small Business", "Enterprise", "Developer"],
  },
  {
    id: 5,
    type: "rating",
    title: "How likely are you to recommend us to others?",
  },
  {
    id: 6,
    type: "multipleChoice",
    title: "How often do you use our product?",
    options: ["Daily", "Weekly", "Monthly", "Rarely"],
  },
  {
    id: 7,
    type: "text",
    title: "What is your primary use case?",
  },
  {
    id: 8,
    type: "checkbox",
    title: "Which integrations do you use?",
    options: ["Slack", "Email", "Calendar", "CRM", "None"],
  },
  {
    id: 9,
    type: "multipleChoice",
    title: "How would you rate our customer support?",
    options: ["Excellent", "Good", "Average", "Poor", "Never contacted"],
  },
  {
    id: 10,
    type: "text",
    title: "Any final comments or feedback?",
  },
];

export const SurveyBuilder = () => {
  const renderQuestionInput = (question: Question) => {
    switch (question.type) {
      case "text":
        return (
          <Textarea 
            placeholder="Type your answer here..." 
            className="min-h-[100px] bg-background"
            disabled
          />
        );
      
      case "rating":
        return (
          <div className="flex gap-2 py-2">
            {[1, 2, 3, 4, 5].map((num) => (
              <button
                key={num}
                className="h-10 w-10 rounded-lg border-2 border-border hover:border-primary hover:bg-primary/10 transition-colors disabled:opacity-50"
                disabled
              >
                {num}
              </button>
            ))}
          </div>
        );
      
      case "multipleChoice":
        return (
          <RadioGroup disabled className="space-y-3">
            {question.options?.map((option, idx) => (
              <div key={idx} className="flex items-center space-x-2">
                <RadioGroupItem value={option} id={`q${question.id}-${idx}`} />
                <Label htmlFor={`q${question.id}-${idx}`} className="cursor-pointer">
                  {option}
                </Label>
              </div>
            ))}
          </RadioGroup>
        );
      
      case "checkbox":
        return (
          <div className="space-y-3">
            {question.options?.map((option, idx) => (
              <div key={idx} className="flex items-center space-x-2">
                <Checkbox id={`q${question.id}-${idx}`} disabled />
                <Label htmlFor={`q${question.id}-${idx}`} className="cursor-pointer">
                  {option}
                </Label>
              </div>
            ))}
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="h-full overflow-y-auto bg-muted/30">
      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="space-y-4">
          {questions.map((question, index) => (
            <Card key={question.id} className="p-6 border border-border bg-card shadow-sm hover:shadow-md transition-shadow">
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded bg-muted flex items-center justify-center text-sm font-medium text-muted-foreground">
                    Q{index + 1}
                  </div>
                  <div className="flex-1 space-y-3">
                    <div className="flex items-center justify-between">
                      <input 
                        type="text"
                        value={question.title}
                        className="text-base font-normal bg-transparent border-none outline-none flex-1 text-foreground"
                        readOnly
                      />
                      <Badge variant="outline" className="text-xs capitalize ml-4">
                        {question.type === "multipleChoice" ? "Multiple Choice" : question.type === "text" ? "Open Text" : question.type}
                      </Badge>
                    </div>
                    
                    <div className="pt-2">
                      {renderQuestionInput(question)}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};
