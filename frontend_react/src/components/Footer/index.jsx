import styles from "./style.module.scss";

function Footer() {
  return (
    <footer className={styles["footer"]}>
      <div className={styles["waves"]}>
        <div className={styles["wave"]} id={styles["wave1"]}></div>
        <div className={styles["wave"]} id={styles["wave2"]}></div>
        <div className={styles["wave"]} id={styles["wave3"]}></div>
        <div className={styles["wave"]} id={styles["wave4"]}></div>
      </div>
      <ul className={styles["social-icon"]}>
        <li className={styles["social-icon__item"]}>
          <a className={styles["social-icon__link"]} href="#">
            <ion-icon name="logo-facebook"></ion-icon>
          </a>
        </li>
        <li className={styles["social-icon__item"]}>
          <a className={styles["social-icon__link"]} href="#">
            <ion-icon name="logo-twitter"></ion-icon>
          </a>
        </li>
        <li className={styles["social-icon__item"]}>
          <a className={styles["social-icon__link"]} href="#">
            <ion-icon name="logo-linkedin"></ion-icon>
          </a>
        </li>
        <li className={styles["social-icon__item"]}>
          <a className={styles["social-icon__link"]} href="#">
            <ion-icon name="logo-instagram"></ion-icon>
          </a>
        </li>
      </ul>
      <ul className={styles["menu"]}>
        <li className={styles["menu__item"]}>
          <a className={styles["menu__link"]} href="#">
            Home
          </a>
        </li>
        <li className={styles["menu__item"]}>
          <a className={styles["menu__link"]} href="#">
            About
          </a>
        </li>
        <li className={styles["menu__item"]}>
          <a className={styles["menu__link"]} href="#">
            Services
          </a>
        </li>
        <li className={styles["menu__item"]}>
          <a className={styles["menu__link"]} href="#">
            Team
          </a>
        </li>
        <li className={styles["menu__item"]}>
          <a className={styles["menu__link"]} href="#">
            Contact
          </a>
        </li>
      </ul>
      <p>&copy;2021 SE06-7.1 | All Rights Reserved</p>
    </footer>
  );
}

export default Footer;
