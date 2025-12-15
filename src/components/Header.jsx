function Header({ score, highScore }) {
  return (
    <div className="flex flex-col items-center p-2 sm:flex-row">
      <h1 className="text-center text-3xl font-bold sm:text-4xl">
        Naruto Memory card game
      </h1>
      <div className="flex flex-col font-bold sm:ml-auto">
        <div>current score: {score}</div>
        <div>High score: {highScore}</div>
      </div>
    </div>
  );
}

export default Header;
