import { useState } from "react";

import styles from "./News.module.css";
import NewsList from "./NewsList";
import burger from "../../images/burger.jpg";
import tortilla from "../../images/tortilla.jpg";
import mexicanTacos from "../../images/mexicanTacos.jpg";
import SliderDots from "../SliderDots";

const NEWS = [
  [
    {
      img: burger,
      date: new Date(),
      title: "Burger with french fries and red cabbage salad",
      price: 35.0,
    },
    {
      img: tortilla,
      date: new Date(),
      title: "Tortilla wrap with falafel and fresh salad - vegan tacos",
      price: 25.0,
    },
    {
      img: mexicanTacos,
      date: new Date(),
      title: "Mexican tacos with beef in tomato sauce and salsa",
      price: 25.0,
    },
  ],
  [
    {
      img: burger,
      date: new Date(),
      title: "Burger with french fries and red cabbage salad",
      price: 35.0,
    },

    {
      img: mexicanTacos,
      date: new Date(),
      title: "Mexican tacos with beef in tomato sauce and salsa",
      price: 25.0,
    },
    {
      img: tortilla,
      date: new Date(),
      title: "Tortilla wrap with falafel and fresh salad - vegan tacos",
      price: 25.0,
    },
  ],
  [
    {
      img: tortilla,
      date: new Date(),
      title: "Tortilla wrap with falafel and fresh salad - vegan tacos",
      price: 25.0,
    },
    {
      img: burger,
      date: new Date(),
      title: "Burger with french fries and red cabbage salad",
      price: 35.0,
    },
    {
      img: mexicanTacos,
      date: new Date(),
      title: "Mexican tacos with beef in tomato sauce and salsa",
      price: 25.0,
    },
  ],
  [
    {
      img: mexicanTacos,
      date: new Date(),
      title: "Mexican tacos with beef in tomato sauce and salsa",
      price: 25.0,
    },
    {
      img: burger,
      date: new Date(),
      title: "Burger with french fries and red cabbage salad",
      price: 35.0,
    },
    {
      img: tortilla,
      date: new Date(),
      title: "Tortilla wrap with falafel and fresh salad - vegan tacos",
      price: 25.0,
    },
  ],
];
function News() {
  const [activeNews, setActiveNews] = useState(1);
  return (
    <section className={styles.news}>
      <h5 className={styles.heading_05}>Latest blog</h5>
      <h2 className={styles.heading_02}>Our latest foods news</h2>
      {NEWS.map((news, i) => (
        <NewsList key={i + 1} news={news} active={activeNews === i + 1} />
      ))}
      <SliderDots active={activeNews} setActive={setActiveNews} />
    </section>
  );
}
export default News;
