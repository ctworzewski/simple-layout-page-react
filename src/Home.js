import { useState } from "react";

const Home = () => {
  // let name = 'czarek';

  const [name, setName]  = useState('czarek');
  const [age, setAge] = useState(29);
  const handleCLick = () => {
    setName('emil');
    setAge(30)
  };
  return (
    <div className="home">
      <h2>Strona główna</h2>
      <p>{name} ma {age} lat.</p>
      <button onClick={handleCLick}>Sprawdź</button>
    </div>
  );
};

export default Home;
