import { BowlFood } from "@phosphor-icons/react";
import styles from "./Logo.module.css";

function Logo() {
  return (
    <div className={styles.logo}>
      <BowlFood size={28} color="#fb8a22" />
      <h3 className={styles.logo_title}>FOOD</h3>
    </div>
  );
}
export default Logo;
