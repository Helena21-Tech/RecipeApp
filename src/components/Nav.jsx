import { ShoppingCart } from "@phosphor-icons/react";
import { motion } from "framer-motion";

import styles from "./Nav.module.css";
import Button from "./Button";
import useScreenWidth from "./custom-hook/useScreenWidth";

const NAV_OPTIONS = ["Home", "About Us", "Products", "Contact Us"];
export default function Nav() {
  const screenWidth = useScreenWidth();
  const list = {
    visible: { opacity: 1 },
    hidden: {
      opacity: 0,
    },
  };
  const item = {
    visible: { translateX: "0px" },
    hidden: {
      translateX: "-300px",
    },
  };
  return (
    <>
      <nav>
        <motion.ul
          className={
            screenWidth > 600
              ? `${styles.nav_list}`
              : `${styles.nav_list_mobile}`
          }
          initial="hidden"
          animate="visible"
          variants={list}
        >
          {NAV_OPTIONS.map((option, i) => (
            <motion.li
              variants={item}
              whileHover={
                screenWidth > 600
                  ? { borderBottom: "solid 2px #22262a" }
                  : { fontSize: "18px" }
              }
              key={i}
            >
              {option}
            </motion.li>
          ))}
        </motion.ul>
      </nav>
      <div className={styles.cartBtn}>
        <div>
          <ShoppingCart size={24} />
          <span></span>
        </div>
        <Button>Contact Us</Button>
      </div>
    </>
  );
}
