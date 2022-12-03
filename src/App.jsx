import { useState } from "react";

const WORD = "bird";

function App() {
  const [wordDisplay, setWordDisplay] = useState(WORD.replace(/[a-z]/gi, "_"));

  return (
    <main className="flex h-screen flex-col items-center justify-center gap-y-8">
      <h1 className="text-4xl font-black">Guess the Word</h1>

      <p className="text-8xl font-extrabold uppercase tracking-widest">
        {wordDisplay}
      </p>

      <div className="flex gap-x-2">
        <label htmlFor="guess">Guess a letter:</label>
        <input
          type="text"
          className="w-8 border-2 border-gray-300"
          maxLength={1}
          id="guess"
          onChange={(e) => {
            const guess = e.target.value;
            setWordDisplay((prev) => {
              return prev
                .split("")
                .map((letter, index) => {
                  if (WORD[index].toLowerCase() === guess.toLowerCase()) {
                    return WORD[index];
                  }
                  return letter;
                })
                .join("");
            });

            e.target.value = "";
          }}
        />
      </div>
    </main>
  );
}

export default App;
