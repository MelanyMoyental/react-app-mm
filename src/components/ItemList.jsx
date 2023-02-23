const ItemList = ({ mascotas }) => {
    return (
      <>
        <Container maxW="container.sm" className="main-catalogue">
          {mascotas?.map((mascota) => (
            <Item
              key={mascota.id}
              id={mascota.id}
              name={mascota.name}
              description={bike.description}
              price={mascota.price}
              stock={mascota.stock}
              category={mascota.category}
            />
          ))}
        </Container>
      </>
    );
  };
  
  export default ItemList;