import React, { useState, useEffect } from "react";
import MinigameItem from "./minigame-item";

function Minigames() {
  const [minigamesList, SetMinigamesList] = useState([
    {
      imgUrl: "./images/home-body-img.png",
      title: "Fastest Server Ever",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent atluctus sem. Donec eget turpis vitae lectus tincidunt tincidunt sed afelis. Maecenas consectetur ligula a neque aliquam, non euismod diamviverra. Maecenas non lacus ut enim scelerisque gravida non at quam.Cras ut faucibus felis. Integer mattis, ex sed ornare rhoncus, ligulaleo elementum turpis, et imperdiet nibh ex et lorem. Integerullamcorper risus in leo consectetur lobortis. Morbi pellentesquepurus fermentum, ullamcorper quam at, hendrerit est. Donec tempushendrerit erat, vel rhoncus dolor.",
    },
  ]);

  const minigamesDatabase = [
    {
      imgUrl: "./images/noob.jpg",
      title: "Noobs Adventure",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent atluctus sem. Donec eget turpis vitae lectus tincidunt tincidunt sed afelis. Maecenas consectetur ligula a neque aliquam, non euismod diamviverra. Maecenas non lacus ut enim scelerisque gravida non at quam.Cras ut faucibus felis. Integer mattis, ex sed ornare rhoncus, ligulaleo elementum turpis, et imperdiet nibh ex et lorem. Integerullamcorper risus in leo consectetur lobortis. Morbi pellentesquepurus fermentum, ullamcorper quam at, hendrerit est. Donec tempushendrerit erat, vel rhoncus dolor.",
    },
    {
      imgUrl: "./images/skywars.jpg",
      title: "Sky Wars",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent atluctus sem. Donec eget turpis vitae lectus tincidunt tincidunt sed afelis. Maecenas consectetur ligula a neque aliquam, non euismod diamviverra. Maecenas non lacus ut enim scelerisque gravida non at quam.Cras ut faucibus felis. Integer mattis, ex sed ornare rhoncus, ligulaleo elementum turpis, et imperdiet nibh ex et lorem. Integerullamcorper risus in leo consectetur lobortis. Morbi pellentesquepurus fermentum, ullamcorper quam at, hendrerit est. Donec tempushendrerit erat, vel rhoncus dolor.",
    },
    {
      imgUrl: "./images/bedwars.jpg",
      title: "Bed Wars",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent atluctus sem. Donec eget turpis vitae lectus tincidunt tincidunt sed afelis. Maecenas consectetur ligula a neque aliquam, non euismod diamviverra. Maecenas non lacus ut enim scelerisque gravida non at quam.Cras ut faucibus felis. Integer mattis, ex sed ornare rhoncus, ligulaleo elementum turpis, et imperdiet nibh ex et lorem. Integerullamcorper risus in leo consectetur lobortis. Morbi pellentesquepurus fermentum, ullamcorper quam at, hendrerit est. Donec tempushendrerit erat, vel rhoncus dolor.",
    },
    {
      imgUrl: "./images/hungergames.jpg",
      title: "Hunger Games",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent atluctus sem. Donec eget turpis vitae lectus tincidunt tincidunt sed afelis. Maecenas consectetur ligula a neque aliquam, non euismod diamviverra. Maecenas non lacus ut enim scelerisque gravida non at quam.Cras ut faucibus felis. Integer mattis, ex sed ornare rhoncus, ligulaleo elementum turpis, et imperdiet nibh ex et lorem. Integerullamcorper risus in leo consectetur lobortis. Morbi pellentesquepurus fermentum, ullamcorper quam at, hendrerit est. Donec tempushendrerit erat, vel rhoncus dolor.",
    },
    {
      imgUrl: "./images/peerbattle.webp",
      title: "Peer Battle",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent atluctus sem. Donec eget turpis vitae lectus tincidunt tincidunt sed afelis. Maecenas consectetur ligula a neque aliquam, non euismod diamviverra. Maecenas non lacus ut enim scelerisque gravida non at quam.Cras ut faucibus felis. Integer mattis, ex sed ornare rhoncus, ligulaleo elementum turpis, et imperdiet nibh ex et lorem. Integerullamcorper risus in leo consectetur lobortis. Morbi pellentesquepurus fermentum, ullamcorper quam at, hendrerit est. Donec tempushendrerit erat, vel rhoncus dolor.",
    },
    {
      imgUrl: "./images/craftcart.jpg",
      title: "Craft Cart",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent atluctus sem. Donec eget turpis vitae lectus tincidunt tincidunt sed afelis. Maecenas consectetur ligula a neque aliquam, non euismod diamviverra. Maecenas non lacus ut enim scelerisque gravida non at quam.Cras ut faucibus felis. Integer mattis, ex sed ornare rhoncus, ligulaleo elementum turpis, et imperdiet nibh ex et lorem. Integerullamcorper risus in leo consectetur lobortis. Morbi pellentesquepurus fermentum, ullamcorper quam at, hendrerit est. Donec tempushendrerit erat, vel rhoncus dolor.",
    },
    {
      imgUrl: "./images/cubewars.jpg",
      title: "Cube Wars Smasher",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent atluctus sem. Donec eget turpis vitae lectus tincidunt tincidunt sed afelis. Maecenas consectetur ligula a neque aliquam, non euismod diamviverra. Maecenas non lacus ut enim scelerisque gravida non at quam.Cras ut faucibus felis. Integer mattis, ex sed ornare rhoncus, ligulaleo elementum turpis, et imperdiet nibh ex et lorem. Integerullamcorper risus in leo consectetur lobortis. Morbi pellentesquepurus fermentum, ullamcorper quam at, hendrerit est. Donec tempushendrerit erat, vel rhoncus dolor.",
    },
    {
      imgUrl: "./images/hardcore.jpg",
      title: "Ultra Hardcore",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent atluctus sem. Donec eget turpis vitae lectus tincidunt tincidunt sed afelis. Maecenas consectetur ligula a neque aliquam, non euismod diamviverra. Maecenas non lacus ut enim scelerisque gravida non at quam.Cras ut faucibus felis. Integer mattis, ex sed ornare rhoncus, ligulaleo elementum turpis, et imperdiet nibh ex et lorem. Integerullamcorper risus in leo consectetur lobortis. Morbi pellentesquepurus fermentum, ullamcorper quam at, hendrerit est. Donec tempushendrerit erat, vel rhoncus dolor.",
    },
    {
      imgUrl: "./images/skyblock.jpg",
      title: "Skyblock",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent atluctus sem. Donec eget turpis vitae lectus tincidunt tincidunt sed afelis. Maecenas consectetur ligula a neque aliquam, non euismod diamviverra. Maecenas non lacus ut enim scelerisque gravida non at quam.Cras ut faucibus felis. Integer mattis, ex sed ornare rhoncus, ligulaleo elementum turpis, et imperdiet nibh ex et lorem. Integerullamcorper risus in leo consectetur lobortis. Morbi pellentesquepurus fermentum, ullamcorper quam at, hendrerit est. Donec tempushendrerit erat, vel rhoncus dolor.",
    },
    {
      imgUrl: "./images/herobrine.jfif",
      title: "Escape Herobrine",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent atluctus sem. Donec eget turpis vitae lectus tincidunt tincidunt sed afelis. Maecenas consectetur ligula a neque aliquam, non euismod diamviverra. Maecenas non lacus ut enim scelerisque gravida non at quam.Cras ut faucibus felis. Integer mattis, ex sed ornare rhoncus, ligulaleo elementum turpis, et imperdiet nibh ex et lorem. Integerullamcorper risus in leo consectetur lobortis. Morbi pellentesquepurus fermentum, ullamcorper quam at, hendrerit est. Donec tempushendrerit erat, vel rhoncus dolor.",
    },
    {
      imgUrl: "./images/hideandseek.jpg",
      title: "Hide and Seek",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent atluctus sem. Donec eget turpis vitae lectus tincidunt tincidunt sed afelis. Maecenas consectetur ligula a neque aliquam, non euismod diamviverra. Maecenas non lacus ut enim scelerisque gravida non at quam.Cras ut faucibus felis. Integer mattis, ex sed ornare rhoncus, ligulaleo elementum turpis, et imperdiet nibh ex et lorem. Integerullamcorper risus in leo consectetur lobortis. Morbi pellentesquepurus fermentum, ullamcorper quam at, hendrerit est. Donec tempushendrerit erat, vel rhoncus dolor.",
    },
  ];
  useEffect(() => {
    SetMinigamesList(minigamesDatabase);
  }, []);

  return (
    <div className="App-header">
      <h1>Minigames</h1>
      <div className="minigame-container">
        {minigamesList.map((mgame, index) => {
          return (
            <MinigameItem
              imgUrl={mgame.imgUrl}
              title={mgame.title}
              description={mgame.description}
              key={index}
            />
          );
        })}
      </div>
      <img src="./images/CL.jpg" className="App-logo" alt="logo" />
      <p>Mobilus server for Minecraft.</p>
    </div>
  );
}

export default Minigames;
