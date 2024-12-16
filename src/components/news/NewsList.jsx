import NewsItem from "./NewsItem";
import styles from "./NewsList.module.css";
function NewsList({ news, active }) {
  return (
    <ul
      className={`${styles.newsList} ${active === true ? styles.active : ""}`}
    >
      {news.map((item, i) => (
        <NewsItem item={item} key={i + 1} />
      ))}
    </ul>
  );
}
export default NewsList;
