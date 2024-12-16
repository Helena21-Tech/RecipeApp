import styles from "./AboutFeature.module.css";
export default function AboutFeature({ icon, title, text }) {
  return (
    <li className={styles.feature}>
      <div className={styles.iconBox}>{icon}</div>
      <h4 className={styles.heading_04}>{title}</h4>
      <p className={styles.featureText}>{text}</p>
    </li>
  );
}
