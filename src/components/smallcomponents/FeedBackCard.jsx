import React, { useState } from "react";

const FeedBackCard = () => {
  const [selectedEmoji, setSelectedEmoji] = useState(null);
  const [selectedTag, setSelectedTag] = useState(null);
  const [suggestion, setSuggestion] = useState("");

  const emojis = [
    { id: 1, src: "/emoji1.png", alt: "Happy" },
    { id: 2, src: "/emoji2.png", alt: "Angry" },
    { id: 3, src: "/emoji3.png", alt: "Sad" },
    { id: 4, src: "/emoji4.png", alt: "Love" },
  ];

  const tags = ["Overall Service", "Efficiency", "Payment Issue"];

  return (
    <div className="w-full max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-lg border-2 border-dashed border-blue-200 font-poppins sm:max-w-sm">
      {/* Emoji Selection */}
      <div className="flex flex-wrap justify-center gap-4 mb-6">
        {emojis.map(({ id, src, alt }) => (
          <button
            key={id}
            onClick={() => setSelectedEmoji(id)}
            className={`p-2 rounded-full transition-all ${
              selectedEmoji === id
                ? "ring-4 ring-blue-500 ring-offset-2"
                : "hover:scale-105"
            }`}
          >
            <img src={src} alt={alt} className="w-12 h-12 sm:w-10 sm:h-10" />
          </button>
        ))}
      </div>

      {/* Heading */}
      <h2 className="text-center text-lg font-semibold mb-4">
        Tell Us What Can Be Improved?
      </h2>

      {/* Tag Selection */}
      <div className="flex flex-wrap justify-center gap-3 mb-4">
        {tags.map((tag, index) => (
          <button
            key={index}
            onClick={() => setSelectedTag(index)}
            className={`px-4 py-2 text-sm rounded-lg transition-all ${
              selectedTag === index
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Textarea for Suggestions */}
      <textarea
        className="w-full p-3 border rounded-lg mb-4 text-sm text-gray-700 resize-none focus:ring-2 focus:ring-blue-500 focus:outline-none"
        placeholder="Other suggestions..."
        value={suggestion}
        onChange={(e) => setSuggestion(e.target.value)}
      />

      {/* Submit Button */}
      <button className="w-full py-2 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:outline-none">
        Send
      </button>
    </div>
  );
};

export default FeedBackCard;
