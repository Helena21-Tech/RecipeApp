import { Heart } from "@phosphor-icons/react";
import styles from "./RecipesAd.module.css";

export default function RecipesAd({ img, recipeName, rating, plusClass }) {
  return (
    <div
      className={`${styles.recipe} ${
        plusClass === 1
          ? styles.recipe_01
          : plusClass === 2
          ? styles.recipe_02
          : ""
      }`}
    >
      <img src={img} alt="Recipe Image" />
      <div className={styles.recipe_details}>
        <h3 className={styles.recipe_name}>{recipeName}</h3>
        <Heart size={32} />
      </div>
      <div className={styles.recipe_rating}>
        <span>⭐</span>
        {rating.toFixed(1)}
      </div>
    </div>
  );
}
