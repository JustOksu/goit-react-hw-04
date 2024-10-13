import { useState } from "react";

const SearchBar = ({ onSearchSubmit }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearchSubmit(query);
    setQuery("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search images"
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
