import { motion } from "framer-motion";

import styles from "./Home.module.css";
import Button from "./Button";
import img from "../images/image-04.png";
import imgOrange from "../images/orange.png";
import imgRecipe01 from "../images/image-02.png";
import imgRecipe02 from "../images/image-03.png";
import RecipesAd from "./RecipesAd";

export default function Home() {
  return (
    <section className={styles.home}>
      <div className={styles.home_details}>
        <h5 className={styles.heading_5}>Welcome to our restaurant</h5>
        <h2 className={styles.heading_2}>
          Delicious foods for every occasion and festival
        </h2>
        <p>
          Delicious foods for every occasion and festival. Delicious foods for
          every occasion and festival.
        </p>
        <Button>Order Now</Button>
      </div>

      <motion.div className={styles.home_img}>
        <motion.img
          src={img}
          alt="Pizza"
          className={styles.img_pizza}
          animate={{
            scale: [1, 1, 1.5, 1.5, 1, 1],
            rotate: [0, 90, 180, 180, 90, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatDelay: 2,
          }}
        />
        <div className={styles.adRecipe}>
          <RecipesAd
            img={imgRecipe02}
            recipeName="Jollof Spaghetti"
            rating={4.8}
            plusClass={1}
          />
          <RecipesAd
            img={imgRecipe01}
            recipeName="Roasted chicken wings"
            rating={5.0}
            plusClass={2}
          />
        </div>
      </motion.div>
      <img
        src={imgOrange}
        alt="Orange Splash"
        className={`${styles.img_orange}`}
      />
    </section>
  );
}
