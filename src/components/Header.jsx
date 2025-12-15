function Header() {
  return (
    <div className="flex flex-col p-2 items-center sm:flex-row ">
      <h1 className="font-bold text-3xl sm:text-4xl text-center">Naruto Memory card game</h1>
      <div className="font-bold flex flex-col items-center sm:ml-auto ">
        <div>current score: </div>
        <div>High score: </div>
      </div>
    </div>
  );
}

export default Header;
