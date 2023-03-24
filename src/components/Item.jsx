import React from 'react';
import Card from 'react-bootstrap/Card';
import cama from '../assets/cama.png';

function Item (props) {

  const { id, name, price,stock } = props.data;

  return (
    <div>
      <div key = {id}>
      <Card style={{ width: '15rem', height: '100rem', margin: '3px', border: 'solid 2px black'}}>
        <img src={cama}/>
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>Price:{price}</Card.Text>
          <Card.Text>Stock:{stock}</Card.Text>
          <button>Details</button>
        </Card.Body>
      </Card>
      </div>
    </div>
  );
}

export default Item;