import {
  FacebookLogo,
  InstagramLogo,
  TelegramLogo,
  TwitterLogo,
} from "@phosphor-icons/react";

import styles from "./Footer.module.css";
import Logo from "./Logo";

function Footer() {
  return (
    <footer className={styles.footer}>
      <Logo />
      <nav>
        <ul className={styles.nav_list}>
          <li>Home</li>
          <li>About Us</li>
          <li>Products</li>
          <li>Quality</li>
        </ul>
      </nav>
      <div className={styles.socials}>
        <div className={styles.social}>
          <TelegramLogo weight="fill" size={18} />
        </div>
        <div className={styles.social}>
          <InstagramLogo weight="fill" size={18} />
        </div>
        <div className={styles.social}>
          <TwitterLogo weight="fill" size={18} />
        </div>
        <div className={styles.social}>
          <FacebookLogo weight="fill" size={18} />
        </div>
      </div>
    </footer>
  );
}
export default Footer;
