import Moodinput from "@/components/Moodinput";
import Moodoutput from "@/components/Moodoutput";
import { useState } from "react";

const Home = () => {
  const [mood, setMood] = useState("");
  const [subject, setSubject] = useState("");
  const [footer, setFooter] = useState("");
  const [generated, setGenerated] = useState(false);
  const [quote, setQuote] = useState("");

  const today = new Date();
  const formattedDate = today.toLocaleDateString("en-US", {
    weekday: "long",
    month: "short",
    day: "numeric",
  });

  const handleGenerate = () => {
    const lowerMood = mood.toLowerCase();

    if (lowerMood.includes("happy")) {
      setSubject(`Feeling Great Today!`);
      setFooter("😊 Stay Awesome!");
      setQuote("💛 The purpose of our lives is to be happy.");
    } else if (lowerMood.includes("sad")) {
      setSubject(`Just another tough day `);
      setFooter("🫂 Sending hugs......");
      setQuote("🌧️ Even the darkest night will end and the sun will rise.");
    } else if (lowerMood.includes("angry")) {
      setSubject(`Need to cool off... `);
      setFooter("😮‍💨 Deep Breaths......");
      setQuote("🔥 Speak when you are angry and you will make the best speech you will ever regret.");
    } else if (lowerMood.includes("nervous")) {
      setSubject(`Feeling nervous but moving forward `);
      setFooter("😬 You've got this");
      setQuote("🫣 Feel the fear and do it anyway.");
    } else if (lowerMood.includes("excited")) {
      setSubject(`Big energy vibes incoming!`);
      setFooter("🤩 Go for it!");
      setQuote("⚡ Enthusiasm moves the world. ");
    } else {
      setSubject(`Mood update `);
      setFooter("🤔 Catch you later!");
      setQuote("🌀 Emotions are just visitors, let them come and go.");
    }

    setGenerated(true);
  };

  const handleReset = () => {
    setMood("");
    setSubject("");
    setFooter("");
    setQuote("");
    setGenerated(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 flex items-center justify-center px-4">
      <div className="relative max-w-xl w-full p-6 rounded-2xl shadow-lg bg-white space-y-6 border border-blue-200">
        {/* Date in top-right */}
        <div className="absolute down-10 right-10 text-sm text-gray-400 font-medium">
          📅 {formattedDate}
        </div>

        {!generated ? (
          <Moodinput
            mood={mood}
            setMood={setMood}
            onGenerate={handleGenerate}
            disabled={false}
          />
        ) : (
          <Moodoutput
            subject={subject}
            footer={footer}
            quote={quote}
            onReset={handleReset}
          />
        )}
      </div>
    </div>
  );
};

export default Home;
