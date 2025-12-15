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

function Cards() {
  const [characters, setCharacters] = useState([]);
  const shuffledCharacters = useRef(null);
  // fetch cahracter data on mount
  useEffect(() => {
    async function getCharacters() {
      try {
        const res = await fetch('https://dattebayo-api.onrender.com/characters');
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

  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(230px,1fr))] justify-center gap-4 py-4">
      {characters.map((character) => {
        return (
          <Card
            key={character.id}
            character={character}
            shuffleCharacters={shuffleCharacters}
            characters={characters}
            setCharacters={setCharacters}
          />
        );
      })}
    </div>
  );
}

export default Cards;
