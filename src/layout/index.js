import React from "react";
import Header from "./header";
import Carousel from "./carousel";
import ListProduct from "./listProduct";
import Promotion from "./promotion";

function HomePage() {
  return (
    <div>
      <Header />
      <Carousel />
      <ListProduct />
      <Promotion />
    </div>
  );
}

export default HomePage;
