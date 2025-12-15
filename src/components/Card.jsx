function Card({ character }) {
  return (
    <div className="flex cursor-pointer flex-col items-center gap-10 rounded-2xl p-3 shadow-lg">
      <img src={character.images[0]} alt={character.name} className="h-52 w-52 border" />
      <p className="text-2xl">{character.name}</p>
    </div>
  );
}
export default Card;
