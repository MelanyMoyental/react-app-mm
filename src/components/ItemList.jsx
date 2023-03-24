import React from 'react';
import data from '../data.json';
import Item from './item.jsx';

function ItemList() {
  return (
    <div>
      {data.map((item) => (
        <Item key={item.id} data={item} />
      ))}
    </div>
  );
}

export default ItemList;