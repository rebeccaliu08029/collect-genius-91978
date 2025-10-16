import { Button } from "@/components/ui/button";

interface QuickReplyProps {
  options: string[];
  onSelect: (option: string) => void;
  disabled?: boolean;
}

export const QuickReply = ({ options, onSelect, disabled }: QuickReplyProps) => {
  return (
    <div className="flex flex-wrap gap-2 mb-4 animate-slide-up">
      {options.map((option) => (
        <Button
          key={option}
          variant="outline"
          size="sm"
          onClick={() => onSelect(option)}
          disabled={disabled}
          className="rounded-full"
        >
          {option}
        </Button>
      ))}
    </div>
  );
};
