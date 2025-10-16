import { Bot, User } from "lucide-react";
import { cn } from "@/lib/utils";

export type Message = {
  id: string;
  role: "user" | "assistant";
  content: string;
};

interface ChatMessageProps {
  message: Message;
}

export const ChatMessage = ({ message }: ChatMessageProps) => {
  const isAssistant = message.role === "assistant";

  return (
    <div
      className={cn(
        "flex gap-2 mb-3 animate-slide-up",
        isAssistant ? "justify-start" : "justify-end"
      )}
    >
      {isAssistant && (
        <div className="flex-shrink-0 w-7 h-7 rounded-full bg-success flex items-center justify-center">
          <Bot className="h-4 w-4 text-white" />
        </div>
      )}
      <div
        className={cn(
          "rounded-lg px-3 py-2 max-w-[75%] text-sm",
          isAssistant
            ? "bg-card border shadow-sm"
            : "bg-primary text-primary-foreground"
        )}
      >
        <p className="leading-relaxed whitespace-pre-wrap">{message.content}</p>
      </div>
      {!isAssistant && (
        <div className="flex-shrink-0 w-7 h-7 rounded-full bg-muted flex items-center justify-center">
          <User className="h-4 w-4 text-muted-foreground" />
        </div>
      )}
    </div>
  );
};
