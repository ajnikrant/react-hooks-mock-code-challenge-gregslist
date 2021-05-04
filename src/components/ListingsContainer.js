import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({itemsArray, deleteFunction}) {

  const renderItems = itemsArray.map((listingitem) =>  <ListingCard key={listingitem.id} deleteFunction={deleteFunction} item={listingitem} /> )

  return (
    <main>
      <ul className="cards">
        {renderItems}
      </ul>
    </main>
  );
}

export default ListingsContainer;
