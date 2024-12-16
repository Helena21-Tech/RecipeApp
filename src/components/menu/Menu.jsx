import { useState } from "react";

import styles from "./Menu.module.css";
import MenuList from "./MenuList";
import tomatoSaladImg from "../../images/TomatoSalad.png";
import noodleImg from "../../images/Noodle.png";
import chickenImg from "../../images/Chicken.png";
import salmonVegImg from "../../images/salmonVeg.png";

import SliderDots from "../SliderDots";
const MENU = [
  [
    {
      img: tomatoSaladImg,
      title: "Tomato salad",
      type: "Vegetable",
      price: 25,
      sizing: "small",
    },
    {
      img: noodleImg,
      title: "Noodle cooking",
      type: "Vegetable",
      price: 20,
      sizing: "largest",
    },
    {
      img: chickenImg,
      title: "Barbecue chicken",
      type: "Chicken",
      price: 90,
      sizing: "medium",
    },
    {
      img: salmonVegImg,
      title: "Salmon with vegs",
      type: "Vegetable",
      price: 20,
      sizing: "large",
    },
  ],
  [
    {
      img: noodleImg,
      title: "Noodle cooking",
      type: "Vegetable",
      price: 20,
      sizing: "largest",
    },
    {
      img: tomatoSaladImg,
      title: "Tomato salad",
      type: "Vegetable",
      price: 25,
      sizing: "small",
    },

    {
      img: salmonVegImg,
      title: "Salmon with vegs",
      type: "Vegetable",
      price: 20,
      sizing: "large",
    },
    {
      img: chickenImg,
      title: "Barbecue chicken",
      type: "Chicken",
      price: 90,
      sizing: "medium",
    },
  ],
  [
    {
      img: salmonVegImg,
      title: "Salmon with vegs",
      type: "Vegetable",
      price: 20,
      sizing: "large",
    },
    {
      img: noodleImg,
      title: "Noodle cooking",
      type: "Vegetable",
      price: 20,
      sizing: "largest",
    },
    {
      img: tomatoSaladImg,
      title: "Tomato salad",
      type: "Vegetable",
      price: 25,
      sizing: "small",
    },
    {
      img: chickenImg,
      title: "Barbecue chicken",
      type: "Chicken",
      price: 90,
      sizing: "medium",
    },
  ],
  [
    {
      img: chickenImg,
      title: "Barbecue chicken",
      type: "Chicken",
      price: 90,
      sizing: "medium",
    },
    {
      img: tomatoSaladImg,
      title: "Tomato salad",
      type: "Vegetable",
      price: 25,
      sizing: "small",
    },
    {
      img: salmonVegImg,
      title: "Salmon with vegs",
      type: "Vegetable",
      price: 20,
      sizing: "large",
    },
    {
      img: noodleImg,
      title: "Noodle cooking",
      type: "Vegetable",
      price: 20,
      sizing: "largest",
    },
  ],
];
export default function Menu() {
  const [activeMenuArr, setActiveMenuArr] = useState(1);
  return (
    <section className={styles.menu}>
      <h2 className={styles.heading_02}>Our popular foods menu</h2>
      {MENU.map((arr, i) => (
        <MenuList menuArr={arr} key={i + 1} active={activeMenuArr === i + 1} />
      ))}
      <SliderDots active={activeMenuArr} setActive={setActiveMenuArr} />
    </section>
  );
}
