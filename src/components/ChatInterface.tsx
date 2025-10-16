import { useState, useEffect, useRef } from "react";
import { ChatMessage, type Message } from "./chat/ChatMessage";
import { QuickReply } from "./chat/QuickReply";
import { CollectorRecommendation, type CollectorType, type CollectorSettings } from "./chat/CollectorRecommendation";
import { FileDropzone } from "./chat/FileDropzone";
import { EmailDraft } from "./chat/EmailDraft";
import { toast } from "@/hooks/use-toast";
import { ScrollArea } from "@/components/ui/scroll-area";

type ConversationStep = 
  | "intro"
  | "has-audience"
  | "wants-tracking"
  | "recommend-email"
  | "recommend-weblink"
  | "recommend-audience"
  | "upload-contacts"
  | "completed";

export const ChatInterface = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentStep, setCurrentStep] = useState<ConversationStep>("intro");
  const [showQuickReply, setShowQuickReply] = useState(false);
  const [quickReplyOptions, setQuickReplyOptions] = useState<string[]>([]);
  const [recommendation, setRecommendation] = useState<{
    type: CollectorType;
    reason: string;
  } | null>(null);
  const [showFileDropzone, setShowFileDropzone] = useState(false);
  const [showEmailDraft, setShowEmailDraft] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollToBottom();
  }, [messages, showQuickReply, recommendation, showFileDropzone, showEmailDraft]);

  const scrollToBottom = () => {
    setTimeout(() => {
      scrollRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const addMessage = (role: "user" | "assistant", content: string, delay = 0) => {
    setTimeout(() => {
      const newMessage: Message = {
        id: Date.now().toString() + Math.random(),
        role,
        content,
      };
      setMessages((prev) => [...prev, newMessage]);
    }, delay);
  };

  const showQuickReplies = (options: string[], delay = 500) => {
    setTimeout(() => {
      setQuickReplyOptions(options);
      setShowQuickReply(true);
    }, delay);
  };

  const handleQuickReply = (option: string) => {
    addMessage("user", option);
    setShowQuickReply(false);
    processResponse(option);
  };

  const processResponse = (response: string) => {
    switch (currentStep) {
      case "intro":
        if (response.toLowerCase().includes("yes") || response.toLowerCase().includes("ready")) {
          addMessage("assistant", "Perfect! Let me ask you a few questions to recommend the best collection method.\n\nDo you have your own audience or contact list to send this survey to?", 800);
          setCurrentStep("has-audience");
          showQuickReplies(["Yes, I have my own list", "No, I need to find respondents"], 1300);
        }
        break;

      case "has-audience":
        if (response.includes("Yes") || response.includes("own list")) {
          addMessage("assistant", "Great! Since you have your own audience, would you like to track who has responded and send reminders to those who haven't?", 800);
          setCurrentStep("wants-tracking");
          showQuickReplies(["Yes, track responses", "No, keep it simple"], 1300);
        } else {
          addMessage("assistant", "No problem! I have the perfect solution for you.", 800);
          setTimeout(() => {
            setRecommendation({
              type: "audience",
              reason: "Since you don't have an existing audience, purchasing responses from our targeted panel is the fastest way to get quality feedback. You can specify demographics and get guaranteed responses.",
            });
          }, 1300);
          setCurrentStep("recommend-audience");
        }
        break;

      case "wants-tracking":
        if (response.includes("track")) {
          addMessage("assistant", "Excellent choice! Tracking responses will help you maximize participation.", 800);
          setTimeout(() => {
            setRecommendation({
              type: "email",
              reason: "Email collector is perfect for you because you have your own audience and want to track responses. You'll be able to see who opened your survey, send targeted reminders, and personalize the experience.",
            });
          }, 1300);
          setCurrentStep("recommend-email");
        } else {
          addMessage("assistant", "Got it! A simple, anonymous approach is often best.", 800);
          setTimeout(() => {
            setRecommendation({
              type: "weblink",
              reason: "Web link collector is ideal for your needs. It's simple to share with your audience via email, social media, or any other channel. Responses are anonymous by default, reducing survey friction.",
            });
          }, 1300);
          setCurrentStep("recommend-weblink");
        }
        break;
    }
  };

  const handleAcceptRecommendation = (settings: CollectorSettings) => {
    if (recommendation?.type === "email") {
      setRecommendation(null);
      addMessage("assistant", "Perfect! Your email collector is configured. Now, let's upload your contact list to get started.", 500);
      setTimeout(() => {
        setShowFileDropzone(true);
      }, 1000);
      setCurrentStep("upload-contacts");
    } else {
      const collectorName = recommendation?.type === "weblink" ? "Web Link" : "Audience Panel";
      addMessage("assistant", `Great! Your ${collectorName} is ready to use. You can now start collecting responses!`, 500);
      setCurrentStep("completed");
      setRecommendation(null);
    }
  };

  const handleFileSelect = (file: File) => {
    setUploadedFile(file);
    setShowFileDropzone(false);
    addMessage("user", `Uploaded: ${file.name}`);
    addMessage("assistant", `Great! I've received your contact list with ${Math.floor(Math.random() * 500 + 100)} contacts. Now let's draft your email invitation.`, 800);
    setTimeout(() => {
      setShowEmailDraft(true);
    }, 1300);
  };

  const handleEmailSend = (subject: string, body: string) => {
    setShowEmailDraft(false);
    addMessage("user", "Send survey invitations");
    addMessage("assistant", "🎉 Perfect! Your survey invitations are being sent. You'll receive a confirmation once all emails are delivered.", 500);
    toast({
      title: "Survey invitations sent!",
      description: "Your emails are on their way to your contacts.",
    });
    setCurrentStep("completed");
  };

  // Initialize conversation
  useEffect(() => {
    addMessage("assistant", "Hi there! 👋 I can see you've created a survey with 10 questions. Based on your survey type, it looks like you're ready to start collecting responses!", 300);
    addMessage("assistant", "Would you like me to help you choose the best way to share your survey?", 1500);
    showQuickReplies(["Yes, let's get started!", "Tell me more first"], 2000);
  }, []);

  return (
    <div className="flex flex-col h-full">
      <ScrollArea className="flex-1 px-4">
        <div className="max-w-3xl mx-auto py-6">
          {messages.map((message) => (
            <ChatMessage key={message.id} message={message} />
          ))}
          
          {showQuickReply && (
            <QuickReply
              options={quickReplyOptions}
              onSelect={handleQuickReply}
              disabled={false}
            />
          )}

          {recommendation && (
            <CollectorRecommendation
              type={recommendation.type}
              reason={recommendation.reason}
              onAccept={handleAcceptRecommendation}
            />
          )}

          {showFileDropzone && (
            <FileDropzone onFileSelect={handleFileSelect} />
          )}

          {showEmailDraft && (
            <EmailDraft onSend={handleEmailSend} />
          )}
          
          <div ref={scrollRef} />
        </div>
      </ScrollArea>
    </div>
  );
};
