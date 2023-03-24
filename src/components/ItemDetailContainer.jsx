import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import data from "./data.json";

const ItemDetailContainer = ({ itemId }) => {
  const [item, setItem] = useState(null);

  useEffect(() => {
    const fetchItem = async () => {
      // Simulamos una llamada asincrónica a un servidor
      const response = await new Promise((resolve) => {
        setTimeout(() => {
          // Buscamos el producto por su ID
          const item = data.find((item) => item.id === itemId);
          resolve(item);
        }, 2000);
      });

      setItem(response);
    };

    fetchItem();
  }, [itemId]);

  return item ? <ItemDetail item={item} /> : <p>Cargando</p>;
};

export default ItemDetailContainer;
