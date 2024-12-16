import styles from "./NewsItem.module.css";
import Button from "../Button";
function NewsItem({ item }) {
  const { img, date, price, title } = item;
  return (
    <li className={styles.news}>
      <img src={img} alt={title} />
      <div className={styles.details}>
        <div className={styles.date}>{date.toDateString()}</div>
        <h4 className={styles.heading_04}>{title}</h4>
        <div className={styles.more}>
          <h5 className={styles.price}>${price.toFixed(2, 0)}</h5>
          <Button extra={true}>Read More</Button>
        </div>
      </div>
    </li>
  );
}
export default NewsItem;
