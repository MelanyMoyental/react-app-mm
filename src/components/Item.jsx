import React from "react";
import Catcomida from "../assets/comida-cat.png";
import Dogcomida from "../assets/comida-dog.png";
import Locion from "../assets/locion.png";
import Cama from "../assets/cama.png";
import Collares from "../assets/collares.png";

import {
  Center,
  Card,
  CardBody,
  Image,
  Heading,
  Text,
  Divider,
  Stack,
  CardFooter,
  Button,
} from "@chakra-ui/react";

import { Link } from "react-router-dom";
const Item = ({ id, img, name, stock, category }) => {
  return (
    <div>
      <div key={id}>
        <Center p="1rem">
          <Card className="card-main">
            <CardBody>
              <Image borderRadius="lg" src={img} />
              <Stack mt="6" spacing="3">
                <Heading size="md">{name}</Heading>

                <Text color="blue.800" fontSize="l">
                  Category: {category}
                </Text>
                <Text color="red.600" fontSize="xl">
                  Stock: {stock}
                </Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter className="card-footer">
              <Center className="btn-center">
                <Button variant="solid" colorScheme="blue">
                  <Link to={`/item/${id}`}>Detalles</Link>
                </Button>
              </Center>
            </CardFooter>
          </Card>
        </Center>
      </div>
    </div>
  );
};

export default Item;