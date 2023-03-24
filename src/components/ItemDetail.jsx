import React from React;

const ItemDetail = ({ item }) => {
  return (
    <div>
      <h2>{item.name}</h2>
      <p>{item.description}</p>
      <p>${item.price}</p>
    </div>
  );
};

export default ItemDetail;