import styles from "./Sidebar.module.css";
export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      ></img>
      <div className={styles.profile}>
        <strong>Diogo de Souza</strong>
        <span>Web Developer</span>
      </div>
      <footer>
        <a href="#">Edit your profile</a>
      </footer>
    </aside>
  );
}
