import './App.css';
import Header from './components/Header';
import Cards from './components/Cards';
import { useState } from 'react';

function App() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [message, setMessage] = useState({ messageTxt: '', active: false });
  return (
    <div className="relative flex min-h-screen w-screen min-w-sm flex-col px-6 sm:px-10">
      <div
        className={`absolute -top-7.5 left-1/2 z-20 flex h-10 w-fit -translate-x-1/2 items-center rounded-3xl bg-white p-4 text-sm shadow-lg transition-all duration-150 ease-in ${message.active ? 'translate-y-18 opacity-100' : '-translate-y-18 opacity-0'} `}
      >
        {message.messageTxt}
      </div>
      <Header score={score} highScore={highScore} />
      <Cards
        score={score}
        highScore={highScore}
        setScore={setScore}
        setHighScore={setHighScore}
        setMessage={setMessage}
      />
    </div>
  );
}

export default App;
