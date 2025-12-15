function Card({
  character,
  shuffleCharacters,
  characters,
  setCharacters,
  score,
  highScore,
  setScore,
  setHighScore,
  clickedCharacters,
}) {
  function handleClick(character) {
    setCharacters(shuffleCharacters(characters));
    if (!clickedCharacters.current.has(character.id)) {
      setScore(score + 1);
      clickedCharacters.current.add(character.id);
    } else {
      if (score > highScore) setHighScore(score);
      setScore(0);
      clickedCharacters.current.clear();
    }
  }

  return (
    <div
      onClick={() => handleClick(character)}
      className="flex cursor-pointer flex-col items-center gap-6 rounded-2xl p-3 shadow-lg"
    >
      <img src={character.images[0]} alt={character.name} className="h-52" />
      <p className="text-2xl">{character.name}</p>
    </div>
  );
}
export default Card;
