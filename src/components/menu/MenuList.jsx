import styles from "./MenuList.module.css";
import MenuItem from "./MenuItem";
export default function MenuList({ menuArr, active }) {
  return (
    <ul className={`${active === true ? styles.active : styles.menuList}`}>
      {menuArr.map((item, i) => (
        <MenuItem item={item} key={i + 1} />
      ))}
    </ul>
  );
}
