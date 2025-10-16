import { Upload } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";

interface FileDropzoneProps {
  onFileSelect: (file: File) => void;
}

export const FileDropzone = ({ onFileSelect }: FileDropzoneProps) => {
  const [isDragging, setIsDragging] = useState(false);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    const files = Array.from(e.dataTransfer.files);
    if (files[0]) {
      onFileSelect(files[0]);
    }
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files[0]) {
      onFileSelect(files[0]);
    }
  };

  return (
    <Card className="border-2 border-dashed animate-fade-in my-4">
      <CardContent className="p-8">
        <div
          className={`flex flex-col items-center justify-center space-y-4 transition-colors ${
            isDragging ? "bg-muted/50" : ""
          }`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <div className="p-4 rounded-full bg-primary/10">
            <Upload className="h-8 w-8 text-primary" />
          </div>
          <div className="text-center">
            <p className="text-sm font-medium mb-1">
              Drop your contact list here
            </p>
            <p className="text-xs text-muted-foreground mb-4">
              or click to browse (CSV, Excel)
            </p>
            <input
              type="file"
              accept=".csv,.xlsx,.xls"
              onChange={handleFileInput}
              className="hidden"
              id="file-upload"
            />
            <label
              htmlFor="file-upload"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors bg-primary text-primary-foreground hover:bg-primary/90 h-9 px-4 py-2 cursor-pointer"
            >
              Select File
            </label>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
