import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

type Props = {
  mood: string;
  setMood: (val: string) => void;
  onGenerate: () => void;
  disabled?: boolean;
};

const MoodInput = ({ mood, setMood, onGenerate, disabled }: Props) => {
  return (
    <div className="rounded-2xl border border-indigo-200 bg-white shadow-xl p-6 ring-1 ring-indigo-100 hover:ring-indigo-300 transition-all duration-300 space-y-4">
      <h2 className="text-2xl font-bold text-center text-gray-800">
        MoodMail Generator
      </h2>

      <Input
        placeholder="How are you feeling today? (happy, sad, angry...)"
        value={mood}
        onChange={(e) => setMood(e.target.value)}
        disabled={disabled}
        className="text-base"
      />

      <Button
        className="w-full bg-indigo-600 text-white hover:bg-indigo-700 transition-colors"
        onClick={onGenerate}
        disabled={disabled}
      >
        Generate Email Template
      </Button>
    </div>
  );
};

export default MoodInput;
