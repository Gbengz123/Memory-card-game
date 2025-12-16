function Card({ character, handleClick }) {
  return (
    <div
      onClick={() => handleClick(character)}
      className="flex cursor-pointer flex-col items-center gap-4 rounded-2xl bg-slate-50 p-3 shadow-lg transition-transform duration-75 ease-linear hover:scale-105"
    >
      {!character ? (
        <div className="h-62.5 w-full animate-pulse rounded-lg bg-gray-300"></div>
      ) : (
        <>
          <img
            src={character.images[0]}
            alt={character.name}
            className="h-52 rounded-lg"
          />
          <p className="text-2xl">{character.name}</p>
        </>
      )}
    </div>
  );
}
export default Card;
