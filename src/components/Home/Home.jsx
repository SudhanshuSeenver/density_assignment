import React from "react";
import styles from "./Home.module.css";
import Header from "../Header/Header";

function Home() {
  return (
    <div>
      <Header />
      <main>
        <section className={styles.hero_section}></section>
      </main>
    </div>
  );
}

export default Home;
