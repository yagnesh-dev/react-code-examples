import { useState } from "react";
import SingleProduct from "./SingleProduct";

const Home = () => {
  const productsArray = [
    {
      id: 0,
      name: "Adidas",
      price: 200,
      image: "www.google.com",
    },
    {
      id : 1,
      name: "Bdidas",
      price: 200,
      image: "www.google.com",
    },
  ];
  const [prod] = useState(productsArray);
  return (
    <div>
      {prod.map((eachVal) => {
        return (
          <p>
            <SingleProduct prod={eachVal} />
          </p>
        );
      })}
    </div>
  );
};
export default Home;
