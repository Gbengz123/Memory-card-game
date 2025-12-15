import { useEffect, useState } from 'react';
import Card from './Card';

function Cards() {
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    async function getCharacters() {
      try {
        const res = await fetch('https://dattebayo-api.onrender.com/characters');
        if (!res.ok) throw new Error(`HTTP Error: ${res.status}`);

        const data = await res.json();
        setCharacters(data.characters);
      } catch (error) {
        console.error(`$Request failed: ${error}`);
      }
    }
    getCharacters();
  }, []);

  return (
    <div className="py-4 grid grid-cols-[repeat(auto-fit,minmax(230px,1fr))] justify-center gap-4">
      {characters.map((character) => {
        return <Card key={character.id} character={character} />;
      })}
    </div>
  );
}

export default Cards;
