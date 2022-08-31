import { useState } from "react";

const Home = () => {
  // let name = 'czarek';
  const [blogs, setBlogs] = useState([
    {
      title: "Moja strona www",
      body: "lorem ipsum...",
      author: "czarek",
      id: 1,
    },
    {
      title: "Zapraszam do pracy",
      body: "lorem ipsum...",
      author: "emil",
      id: 2,
    },
    {
      title: "Wypełnij formularz",
      body: "lorem ipsum...",
      author: "monika",
      id: 3,
    },
  ]);
  const [name, setName] = useState("czarek");
  const [age, setAge] = useState(29);
  const handleCLick = () => {
    setName("emil");
    setAge(30);
  };
  return (
    <div className="home">
      <h2>Strona główna</h2>
      <p>
        {name} ma {age} lat.
      </p>
      <button onClick={handleCLick}>Sprawdź</button>

      <div>
        {
          blogs.map((blog) => (
            <div className="blog-preview" key={blog.id}>
              <h2>{blog.title}</h2>
              <p><strong>Autor wpisu:</strong> {blog.author}</p>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default Home;
