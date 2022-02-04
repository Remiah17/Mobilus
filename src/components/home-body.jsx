import React, { useState, useEffect } from "react";

function Header() {
  const [featureshow, changeFeature] = useState({
    imgUrl: "./images/home-body-img.png",
    title: "Fastest Server Ever",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent atluctus sem. Donec eget turpis vitae lectus tincidunt tincidunt sed afelis. Maecenas consectetur ligula a neque aliquam, non euismod diamviverra. Maecenas non lacus ut enim scelerisque gravida non at quam.Cras ut faucibus felis. Integer mattis, ex sed ornare rhoncus, ligulaleo elementum turpis, et imperdiet nibh ex et lorem. Integerullamcorper risus in leo consectetur lobortis. Morbi pellentesquepurus fermentum, ullamcorper quam at, hendrerit est. Donec tempushendrerit erat, vel rhoncus dolor.",
  });

  const [currentPage, SetPage] = useState(0);

  const newLocal = [
    {
      imgUrl: "./images/home-body-img.png",
      title: "Fastest Server Ever",
      description:
        "Our server runs in all countries, 24/7. Giving you the fastest server you'll ever played.",
    },
    {
      imgUrl: "./images/home-body-img-2.png",
      title: "Best Minecraft Minigames",
      description: "We give you tons of minigames you can enjoy with friends.",
    },
    {
      imgUrl: "./images/home-body-img-3.png",
      title: "Over 5 million players!",
      description: "Play with over 5 million players in our server.",
    },
    {
      imgUrl: "./images/home-body-img-4.png",
      title: "Best custom skins available!",
      description: "best custom skins available on the marketplace.",
    },
  ];
  const fDatabase = newLocal;
  useEffect(() => {
    const interval = setInterval(() => {
      if (currentPage < 3) {
        SetPage(currentPage + 1);
      } else {
        SetPage(0);
      }
      changeFeature(fDatabase[currentPage]);
    }, 3000);

    return () => clearInterval(interval);
  }, [fDatabase, currentPage]);

  return (
    <div className="App-header">
      <div className="home-img-container">
        <img src={featureshow.imgUrl} className="home-img" alt="home-img" />
        <h1 className="home-title">{featureshow.title}</h1>
        <p className="home-description">{featureshow.description}</p>
      </div>

      <img src="./images/CL.jpg" className="App-logo" alt="logo" />
      <p>Mobilus server for Minecraft.</p>
    </div>
  );
}

export default Header;
