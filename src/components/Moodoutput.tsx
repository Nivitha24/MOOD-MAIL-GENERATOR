import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

type Props = {
  subject: string;
  footer: string;
  quote: string;
  onReset: () => void;
};

const MoodOutput = ({ subject, footer, quote, onReset }: Props) => {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="rounded-2xl border border-blue-200 bg-gradient-to-br from-white to-blue-50 shadow-md p-6 space-y-6 transition-all duration-300">
      <h2 className="text-2xl font-bold text-gray-800 text-center">MoodMail Results</h2>

      <div className="space-y-1">
        <label className="block font-medium text-sm text-gray-600 flex justify-between items-center">
          📧 Subject
          <Button variant="ghost" size="sm" onClick={() => copyToClipboard(subject)}>
            📋 Copy
          </Button>
        </label>
        <Input value={subject} readOnly />
      </div>

      <div className="space-y-1">
        <label className="block font-medium text-sm text-gray-600 flex justify-between items-center">
          ✨ Footer Signature
          <Button variant="ghost" size="sm" onClick={() => copyToClipboard(footer)}>
            📋 Copy
          </Button>
        </label>
        <Textarea value={footer} readOnly />
      </div>

      <div className="space-y-1">
        <label className="block font-medium text-sm text-gray-600 flex justify-between items-center">
          💬 Quote
          <Button variant="ghost" size="sm" onClick={() => copyToClipboard(quote)}>
            📋 Copy
          </Button>
        </label>
        <Textarea value={quote} readOnly />
      </div>

      <Button
        variant="destructive"
        className="w-full mt-4"
        onClick={onReset}
      >
        🔁 Reset
      </Button>
    </div>
  );
};

export default MoodOutput;
