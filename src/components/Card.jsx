function Card({ character, shuffleCharacters, characters, setCharacters }) {
  return (
    <div
      onClick={() => setCharacters(shuffleCharacters(characters))}
      className="flex cursor-pointer flex-col items-center gap-6 rounded-2xl p-3 shadow-lg"
    >
      <img src={character.images[0]} alt={character.name} className="h-52" />
      <p className="text-2xl">{character.name}</p>
    </div>
  );
}
export default Card;
