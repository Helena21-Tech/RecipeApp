import styles from "./MenuItem.module.css";
export default function MenuItem({ item }) {
  const { img, title, type, price, sizing } = item;
  return (
    <li className={styles.item}>
      <img src={img} alt={title} className={styles[sizing]} />
      <div className={styles.food}>
        <h4 className={styles.heading_04}>{title}</h4>
        <p className={styles.type}>{type}</p>
        <div className={styles.price}>${price}</div>
      </div>
    </li>
  );
}
