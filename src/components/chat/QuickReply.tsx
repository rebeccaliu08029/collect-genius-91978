import { Button } from "@/components/ui/button";

interface QuickReplyProps {
  options: string[];
  onSelect: (option: string) => void;
  disabled?: boolean;
}

export const QuickReply = ({ options, onSelect, disabled }: QuickReplyProps) => {
  return (
    <div className="flex flex-wrap gap-2 mb-3 animate-slide-up pl-9">
      {options.map((option) => (
        <Button
          key={option}
          variant="outline"
          size="sm"
          onClick={() => onSelect(option)}
          disabled={disabled}
          className="rounded text-xs h-8"
        >
          {option}
        </Button>
      ))}
    </div>
  );
};
