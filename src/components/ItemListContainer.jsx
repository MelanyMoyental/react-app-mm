import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import Data from "../data.json";
import { useParams } from "react-router-dom";
import { Heading, Center } from "@chakra-ui/react";
const ItemListContainer = () => {
  const { category } = useParams();
  // console.log(category);

  // const [mascotas, setMascotas] = useState([]);

  /*   useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(Data);
        const data = await response.json();
        setMascotas(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []); */

  const catFilter = Data.filter((mascota) => mascota.category === category);
  return (
    <div>
      <Center bg="#D6EAF8" h="100px" color="black">
        <Heading as="h2" size="2xl">
        </Heading>
      </Center>
      {category ? <ItemList mascotas={catFilter} /> : <ItemList mascotas={Data} />}
    </div>
  );
};

export default ItemListContainer;