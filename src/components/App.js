import React, {useEffect, useState} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [itemsArray, setItemsArray] = useState([])
  const [search, setSearch] = useState("")


  useEffect(()=>{
    fetch('http://localhost:6001/listings')
    .then(res => res.json())
    .then(setItemsArray)
  }, [])

  function handleDelete(deletedItemID){
    const updatedArray = itemsArray.filter((item) => item.id !==deletedItemID)
    setItemsArray(updatedArray)
  }

 
  const updatedSearch = itemsArray.filter(
    (item) => item.description.toLowerCase().includes(search.toLowerCase())
    )

  return (
    <div className="app">
      <Header setSearch={setSearch} search={search}/>
      <ListingsContainer deleteFunction={handleDelete} itemsArray={updatedSearch}/>
    </div>
  );
}

export default App;
