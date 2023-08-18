import React from "react";
import styles from "./Header.module.css";
import logo from "../../assets/logo/ahead_logo.png";
import Button from "../Button/Button";

function Header() {
  const navItems = [
    { name: "emotions", id: 1 },
    { name: "manifesto", id: 2 },
    { name: "Self-awareness test", id: 3 },
    { name: "work with us", id: 4 },
  ];

  return (
    <header className={styles.header}>
      <figure className={styles.logo}>
        <img src={logo} alt="ahead_logo" />
      </figure>

      <nav className={styles.nav_container}>
        <ul className={styles.nav_links_list}>
          {navItems.map((item) => (
            <li className={styles.nav_list_item} key={item.id}>
              <a href="#">{item.name}</a>
            </li>
          ))}
        </ul>
      </nav>

      <Button primary>Download App</Button>
    </header>
  );
}

export default Header;
