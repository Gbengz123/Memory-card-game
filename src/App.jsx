import './App.css';
import Header from './components/Header';
import Cards from './components/Cards';
import { useState } from 'react';

function App() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  return (
    <div className="flex min-h-screen w-screen min-w-sm flex-col px-6 sm:px-10">
      <Header score={score} highScore={highScore} />
      <Cards
        score={score}
        highScore={highScore}
        setScore={setScore}
        setHighScore={setHighScore}
      />
    </div>
  );
}

export default App;
