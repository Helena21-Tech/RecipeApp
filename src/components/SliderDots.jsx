import styles from "./SliderDots.module.css";
function SliderDots({ active, setActive }) {
  return (
    <div className={styles.dots}>
      {Array.from({ length: 4 }).map((num, i) => {
        return (
          <div
            className={`${styles.dot} ${active === i + 1 ? styles.active : ""}`}
            key={i + 1}
            onClick={() => setActive(i + 1)}
          ></div>
        );
      })}
    </div>
  );
}
export default SliderDots;
