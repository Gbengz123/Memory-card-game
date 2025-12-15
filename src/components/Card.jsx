function Card({ character }) {
  return (
    <div className="flex flex-col gap-10 shadow-lg rounded-2xl p-3 items-center cursor-pointer">
      <img src={character.images[0]} alt={character.name} className="w-52 h-52 border" />
      <p className="text-2xl">{character.name}</p>
    </div>
  );
}
export default Card;
