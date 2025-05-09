import React, { useState, useEffect } from 'react';
import './App.css';
import words from './data/words';
import { scrambleWord } from './utils/scramble';

function App() {
  const [currentWord, setCurrentWord] = useState({});
  const [wordPool, setWordPool] = useState(words);

  const [scrambled, setScrambled] = useState('');
  const [userGuess, setUserGuess] = useState('');
  const [feedback, setFeedback] = useState('');
  const [score, setScore] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);

  const [timeLeft, setTimeLeft] = useState(30);

  const getWordsByDifficulty = (pool) => {
    if (correctCount >= 10) return pool.filter(w => w.word.length >= 9);
    if (correctCount >= 5) return pool.filter(w => w.word.length >= 7);
    return pool.filter(w => w.word.length <= 6);
  };

  const pickNewWord = () => {
    setTimeLeft(30);
    const filtered = getWordsByDifficulty(wordPool);

    if (filtered.length === 0) {
      setScrambled('');
      setCurrentWord({});
      return;
    }

    const index = Math.floor(Math.random() * filtered.length);
    const selected = filtered[index];

    setCurrentWord(selected);
    setScrambled(scrambleWord(selected.word));
    setUserGuess('');
    setFeedback('');
    setWordPool(prev => prev.filter(w => w.word !== selected.word));
  };

  useEffect(() => {
    pickNewWord();
  }, []);

  useEffect(() => {
    if (!scrambled) return;

    if (timeLeft === 0) {
      setFeedback(`⏰ Time's up! The word was "${currentWord.word}".`);
      setTimeout(pickNewWord, 2000);
      return;
    }

    const timer = setTimeout(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft, scrambled]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!userGuess.trim()) {
      setFeedback('Enter a guess!');
      return;
    }

    if (userGuess.toLowerCase() === currentWord.word.toLowerCase()) {
      setFeedback('✅ Correct!');
      setScore(score + 10);
      setCorrectCount(correctCount + 1);
      pickNewWord();
    } else {
      setFeedback('❌ Try again!');
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>🔤 Word Scramble Game</h1>
      <h2>Scrambled: {scrambled}</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={userGuess}
          onChange={(e) => setUserGuess(e.target.value)}
          placeholder="Your guess..."
        />
        <button type="submit">Submit</button>
      </form>

      <button onClick={() => alert(currentWord.hint)}>💡 Show Hint</button>

      <p>{feedback}</p>
      <p>Score: {score}</p>
      <p>⏱️ Time Left: {timeLeft}s</p>
    </div>
  );
}

export default App;
