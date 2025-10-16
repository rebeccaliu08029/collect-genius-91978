import { Mail, Link2, Users, CheckCircle2, Info } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { useState } from "react";

export type CollectorType = "email" | "weblink" | "audience";

interface CollectorRecommendationProps {
  type: CollectorType;
  reason: string;
  onAccept: (settings: CollectorSettings) => void;
}

export interface CollectorSettings {
  anonymize: boolean;
  tracking: boolean;
  autoClose: boolean;
}

const collectorConfig = {
  email: {
    icon: Mail,
    title: "Email Collector",
    description: "Send personalized survey invitations to your email list",
    color: "text-accent",
    benefits: [
      "Track individual responses",
      "Send reminders to non-respondents",
      "Personalize survey content",
      "Export contact data with responses",
    ],
  },
  weblink: {
    icon: Link2,
    title: "Web Link Collector",
    description: "Share a single link across multiple channels",
    color: "text-primary",
    benefits: [
      "Easy to share anywhere",
      "Anonymous by default",
      "No contact list needed",
      "Works on any platform",
    ],
  },
  audience: {
    icon: Users,
    title: "Buy Audience",
    description: "Purchase targeted survey responses from our panel",
    color: "text-success",
    benefits: [
      "Reach specific demographics",
      "Fast response collection",
      "Quality-assured responses",
      "No existing audience needed",
    ],
  },
};

export const CollectorRecommendation = ({ type, reason, onAccept }: CollectorRecommendationProps) => {
  const config = collectorConfig[type];
  const Icon = config.icon;
  const [settings, setSettings] = useState<CollectorSettings>({
    anonymize: type === "weblink",
    tracking: type === "email",
    autoClose: false,
  });

  return (
    <Card className="border-2 shadow-lg animate-slide-up">
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className={cn("p-2 rounded-lg bg-gradient-to-br", 
              type === "email" ? "from-accent/10 to-accent/5" :
              type === "weblink" ? "from-primary/10 to-primary/5" :
              "from-success/10 to-success/5"
            )}>
              <Icon className={cn("h-6 w-6", config.color)} />
            </div>
            <div>
              <CardTitle className="text-xl mb-1">{config.title}</CardTitle>
              <CardDescription>{config.description}</CardDescription>
            </div>
          </div>
          <Badge variant="secondary" className="gap-1">
            <CheckCircle2 className="h-3 w-3" />
            Recommended
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="p-3 rounded-lg bg-muted/50 border">
          <div className="flex gap-2 mb-2">
            <Info className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
            <p className="text-sm font-medium">Why this collector?</p>
          </div>
          <p className="text-sm text-muted-foreground ml-6">{reason}</p>
        </div>

        <div>
          <p className="text-sm font-medium mb-2">Key Benefits:</p>
          <ul className="space-y-1.5">
            {config.benefits.map((benefit, index) => (
              <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className="h-4 w-4 text-success flex-shrink-0" />
                {benefit}
              </li>
            ))}
          </ul>
        </div>

        <Separator />

        <div className="space-y-3">
          <p className="text-sm font-medium">Collection Settings:</p>
          
          <div className="flex items-center justify-between">
            <Label htmlFor="anonymize" className="text-sm cursor-pointer">
              Anonymize responses
            </Label>
            <Switch
              id="anonymize"
              checked={settings.anonymize}
              onCheckedChange={(checked) => setSettings({ ...settings, anonymize: checked })}
              disabled={type === "email"}
            />
          </div>

          {type === "email" && (
            <div className="flex items-center justify-between">
              <Label htmlFor="tracking" className="text-sm cursor-pointer">
                Track response status
              </Label>
              <Switch
                id="tracking"
                checked={settings.tracking}
                onCheckedChange={(checked) => setSettings({ ...settings, tracking: checked })}
              />
            </div>
          )}

          <div className="flex items-center justify-between">
            <Label htmlFor="autoClose" className="text-sm cursor-pointer">
              Auto-close after 100 responses
            </Label>
            <Switch
              id="autoClose"
              checked={settings.autoClose}
              onCheckedChange={(checked) => setSettings({ ...settings, autoClose: checked })}
            />
          </div>
        </div>

        <Button
          variant="gradient"
          className="w-full"
          size="lg"
          onClick={() => onAccept(settings)}
        >
          {type === "email" ? "Upload Contacts & Continue" : 
           type === "weblink" ? "Generate Link" :
           "Browse Audience Options"}
        </Button>
      </CardContent>
    </Card>
  );
};

function cn(...inputs: string[]) {
  return inputs.filter(Boolean).join(" ");
}
