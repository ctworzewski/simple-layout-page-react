const Home = () => {
  const handleCLick = () => {
    console.log("Cześć Czarek!");
  };
  return (
    <div className="home">
      <h2>Strona główna</h2>
      <button onClick={handleCLick}>Sprawdź</button>
    </div>
  );
};

export default Home;
