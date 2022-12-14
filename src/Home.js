import { useState } from "react";
import BlogList from "./BlogList";

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

  const handleDelete = (id) => {
    console.log("test");
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };
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

      <BlogList
        blogs={blogs}
        title="Wszystkie artykuły"
        handleDelete={handleDelete}
      />
      {/* <BlogList
        blogs={blogs.filter((blog) => blog.author === "czarek")}
        title="Blog Czarka"
      /> */}
    </div>
  );
};

export default Home;
