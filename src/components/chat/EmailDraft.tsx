import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import { useState } from "react";

interface EmailDraftProps {
  onSend: (subject: string, body: string) => void;
}

export const EmailDraft = ({ onSend }: EmailDraftProps) => {
  const [subject, setSubject] = useState("You're invited to share your feedback");
  const [body, setBody] = useState(
    `Hi [First Name],

I'd love to hear your thoughts! I've created a quick survey to gather feedback and your input would be incredibly valuable.

The survey takes just 5 minutes to complete, and your responses will help us make better decisions.

[Survey Link]

Thank you for taking the time to share your perspective!

Best regards,
[Your Name]`
  );

  return (
    <Card className="border-2 animate-fade-in my-4">
      <CardHeader className="pb-4">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-lg bg-accent/10">
            <Mail className="h-5 w-5 text-accent" />
          </div>
          <CardTitle className="text-lg">Email Draft</CardTitle>
        </div>
        <p className="text-sm text-muted-foreground mt-2">
          Customize your email invitation before sending
        </p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="subject">Subject Line</Label>
          <Input
            id="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            placeholder="Email subject"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="body">Email Body</Label>
          <Textarea
            id="body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            rows={12}
            className="font-mono text-xs resize-none"
          />
          <p className="text-xs text-muted-foreground">
            Use [First Name], [Last Name], and [Survey Link] for personalization
          </p>
        </div>
        <Button
          variant="gradient"
          className="w-full"
          onClick={() => onSend(subject, body)}
        >
          Send Survey Invitations
        </Button>
      </CardContent>
    </Card>
  );
};
