
# 🔤 Word Scramble Game

A fun, interactive React-based word scramble game where players guess the correct word from a scrambled version. Features hint support, scoring, timer, and adaptive difficulty.

---

## 🎮 How to Play

1. A scrambled word is displayed on the screen.
2. Enter your guess in the input field.
3. Press **Submit** to check your answer.
4. If correct:
   - You earn **+10 points**.
   - A new scrambled word appears.
   - Difficulty increases every 5 correct guesses.
5. If wrong:
   - Try again until the timer runs out.
6. Click **💡 Show Hint** to get a clue.
7. If the timer hits **0**, the correct word is shown and the next word is loaded.

---

## 🧠 Features

- ✅ Randomly scrambled word display
- ✅ User input validation
- ✅ Feedback messages (Correct / Try Again / Time’s Up)
- ✅ Hint system for each word
- ✅ Score tracking (+10 per correct guess)
- ✅ Adaptive difficulty:
  - Easy: 4–6 letter words
  - Medium: 7–8 letters (after 5 correct answers)
  - Hard: 9+ letters (after 10 correct answers)
- ✅ Countdown timer (30s per word)
- ❌ No repeated words

---

## 🧰 Tech Stack

- React (JavaScript)
- Custom CSS for layout (minimal)
- State management with `useState` and `useEffect`

---

## 📁 Project Structure

```
src/
├── App.js
├── data/
│   └── words.js         # Word list with hints
├── utils/
│   └── scramble.js      # Scramble function
└── components/          # (if split into smaller parts)
```

---

## 🚀 Getting Started

```bash
git clone https://github.com/your-username/word-scramble-game.git
cd word-scramble-game
npm install
npm start
```

---

## 🧪 Git Strategy (Recommended)

- Use `main` for stable version
- Create feature branches:
  - `ft-timer`
  - `ft-score-tracker`
  - `ft-difficulty-scaling`
  - `ft-hint-system`
  - `fix-input-validation`

Commit each feature with clear messages for easy tracking.

---

## 📜 License

MIT

---

## 🙌 Acknowledgments

Built by Mtsumi as a fun coding challenge.
