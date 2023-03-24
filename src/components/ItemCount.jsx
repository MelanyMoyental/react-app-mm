import React, { useState } from "react";

function ItemCount() {
  // Inicializar el estado del stock a 1
  const [stock, setStock] = useState(1);


  // Función para sumar el stock
  const sumarStock = () => {
    setStock(stock + 1);
  };

  // Función para restar el stock
  const restarStock = () => {
    // Verificar que el stock no llegue a 0
    if (stock > 1) {
      setStock(stock - 1);
    }
  };

  return (
    <div>
      <h2>Contador de stock</h2>
      <p>Stock actual: {stock}</p>
      <button onClick={restarStock}>Restar</button>
      <button onClick={sumarStock}>Sumar</button>
    </div>
  );
}

export default ItemCount;
