import { useEffect, useState, useRef } from 'react';
import Card from './Card';

function shuffleCharacters(characterArr) {
  const arr = [...characterArr]; // avoid mutation
  // Loop and shuffle array
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function Cards({ score, highScore, setScore, setHighScore, setMessage }) {
  const [characters, setCharacters] = useState([]);
  const shuffledCharacters = useRef(null);
  const clickedCharacters = useRef(new Set());
  // fetch cahracter data on mount
  useEffect(() => {
    async function getCharacters() {
      try {
        const res = await fetch(
          'https://dattebayo-api.onrender.com/characters',
        );
        if (!res.ok) throw new Error(`HTTP Error: ${res.status}`);

        const data = await res.json();
        // prevent rerender of shuffled characters
        if (shuffledCharacters.current) {
          setCharacters(shuffledCharacters.current);
        } else {
          shuffledCharacters.current = shuffleCharacters(data.characters);
          setCharacters(shuffledCharacters.current);
        }
      } catch (error) {
        console.error(`$Request failed: ${error}`);
      }
    }
    getCharacters();
  }, []);

  function notify(message) {
    setMessage({
      ...message,
      messageTxt: message,
      active: true,
    });

    setTimeout(() => {
      setMessage({ ...message, messageTxt: message, active: false });
    }, 3000);
  }

  function handleClick(character) {
    setCharacters(shuffleCharacters(characters));
    if (!clickedCharacters.current.has(character.id)) {
      setScore(score + 1);
      clickedCharacters.current.add(character.id);
    } else {
      notify(`Opps! you've picked ${character.name} already`);
      if (score > highScore) setHighScore(score);
      setScore(0);
      clickedCharacters.current.clear();
    }
  }

  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(230px,1fr))] justify-center gap-4 py-4">
      {characters.length === 0 && (
        <>
          <Card character={null} />
          <Card character={null} />
          <Card character={null} />
          <Card character={null} />
          <Card character={null} />
          <Card character={null} />
          <Card character={null} />
          <Card character={null} />
          <Card character={null} />
          <Card character={null} />
        </>
      )}
      {characters.length !== 0 &&
        characters.map((character) => {
          return (
            <Card
              key={character.id}
              character={character}
              handleClick={handleClick}
            />
          );
        })}
    </div>
  );
}

export default Cards;
