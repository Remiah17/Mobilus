import React from "react";
import StoreItem from "./store-item";

function Store() {
  const storeDb = [
    {
      url: "./images/shirt.png",
      name: "Mobilus T-shirt",
      description: "white shirt with mobilus logo printed infront",
      price: "$5.00",
    },
    {
      url: "./images/MVPPlus.png",
      name: "MVP +",
      description: "Get all the benefits of an MVP for a year.",
      price: "$30.00",
    },
    {
      url: "./images/MVPPlusPlus.png",
      name: "MVP ++",
      description: "Get all the benefits of an MVP for a lifetime.",
      price: "$99.00",
    },
  ];

  return (
    <div className="App-header">
      <h1>Store</h1>
      <div className="minigame-container">
        {storeDb.map((tm, index) => {
          return (
            <StoreItem
              imgUrl={tm.url}
              title={tm.name}
              description={tm.description}
              key={index}
              price={tm.price}
            />
          );
        })}
      </div>

      <img src="./images/CL.jpg" className="App-logo" alt="logo" />
      <p>Mobilus server for Minecraft.</p>
    </div>
  );
}

export default Store;
