import styles from "./Header.module.css";
import igniteLogo from "../assets/ignite-logo.svg";

export function Header() {
  console.log(styles.header);
  return (
    <header className={styles.header}>
      <img src={igniteLogo} alt="" />
    </header>
  );
}
