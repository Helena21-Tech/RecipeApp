import { List } from "@phosphor-icons/react";

import styles from "./Header.module.css";
import Logo from "./Logo";
import Nav from "./Nav";
import useScreenWidth from "./custom-hook/useScreenWidth";

export default function Header({ openNavMobile }) {
  const screenWidth = useScreenWidth();
  return (
    <header className={styles.header}>
      <Logo />
      {screenWidth <= 600 && (
        <div className={styles.navSmallScreen} onClick={() => openNavMobile()}>
          <List size={18} />
        </div>
      )}

      {screenWidth > 600 && <Nav />}
    </header>
  );
}
