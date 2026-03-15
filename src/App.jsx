import { useState } from "react";
import Navbar from "./Components/Navbar";
import NewsBoard from "./Components/NewsBoard";

const App = () => {
  const [category, setCategory] = useState("general");
  const [query, setQuery] = useState("")

  return (
    <>
      <Navbar setCategory={setCategory} setQuery={setQuery} />
      <NewsBoard category={category} query={query}/>
    </>
  );
};

export default App;