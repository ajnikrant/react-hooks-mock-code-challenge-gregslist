import React, {useState} from "react";

function Search({search, setSearch}) {

  function handleSubmit(e) {
    e.preventDefault();
    console.log("submitted");
  }
  
    function handleSearch(e){
      setSearch(e)
    }


  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={search}
        onChange={(e) => handleSearch(e.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
