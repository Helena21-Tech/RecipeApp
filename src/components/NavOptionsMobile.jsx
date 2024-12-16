import { X } from "@phosphor-icons/react";
import styles from "./NavOptionsMobile.module.css";

import Nav from "./Nav";

export default function NavOptionsMobile({ closeNavMobile }) {
  return (
    <div className={`${styles.navMobile_backdrop}`}>
      <div className={styles.navClose} onClick={() => closeNavMobile()}>
        <X size={18} />
      </div>
      <Nav />
    </div>
  );
}
