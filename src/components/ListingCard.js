import React, {useState} from "react";

function ListingCard({item, deleteFunction}) {
  const {id, description, image, location} = item
  const [favorited, setFavorited] = useState(false)

  function handleClick(){
    setFavorited((favorited) => !favorited)
  }

  function onClick(){
    // console.log(e.target.id)
    fetch(`http://localhost:6001/listings/${id}`, {
      method: "DELETE"
    })
      .then(r => r.json())
      .then(() => {deleteFunction(id)})
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {favorited ? (
          <button onClick={handleClick} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={handleClick} className="emoji-button favorite">☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button onClick={onClick} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
