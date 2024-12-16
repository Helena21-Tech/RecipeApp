import styles from "./Button.module.css";
export default function Button({ children, extra }) {
  return (
    <button
      className={`${styles.btn} ${
        extra === true ? styles.extra : styles.default
      }`}
    >
      {children}
    </button>
  );
}
