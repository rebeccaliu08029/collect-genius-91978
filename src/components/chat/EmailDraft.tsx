import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Mail, Eye } from "lucide-react";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import confetti from "canvas-confetti";

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
  const [showPreview, setShowPreview] = useState(false);

  const handleSend = () => {
    // Trigger confetti animation
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
    onSend(subject, body);
  };

  const previewBody = body
    .replace(/\[First Name\]/g, "John")
    .replace(/\[Last Name\]/g, "Doe")
    .replace(/\[Survey Link\]/g, "https://survey.example.com/xyz123");

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
        <div className="flex gap-2">
          <Button
            variant="outline"
            className="flex-1"
            onClick={() => setShowPreview(true)}
          >
            <Eye className="h-4 w-4 mr-2" />
            Email Preview
          </Button>
          <Button
            variant="gradient"
            className="flex-1"
            onClick={handleSend}
          >
            Send Survey Invitations
          </Button>
        </div>

        <Dialog open={showPreview} onOpenChange={setShowPreview}>
          <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>Email Preview</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div className="border-b pb-4">
                <p className="text-sm text-muted-foreground">Subject</p>
                <p className="font-semibold">{subject}</p>
              </div>
              <div className="bg-card p-6 rounded-lg border">
                <pre className="whitespace-pre-wrap font-sans text-sm">
                  {previewBody}
                </pre>
              </div>
              <p className="text-xs text-muted-foreground">
                This is a preview with sample data. Actual emails will be personalized for each recipient.
              </p>
            </div>
          </DialogContent>
        </Dialog>
      </CardContent>
    </Card>
  );
};
