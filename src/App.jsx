import { useState } from "react";
import { Post } from "./Post";
import { Header } from "./components/Header";
import reactLogo from "./assets/react.svg";
import "./global.css";
import styles from "./App.module.css";
import { Sidebar } from "./components/Sidebar";

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}></div>
      <Sidebar />
      <main>
        <Post
          author="Diogo de Souza"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea amet sed porro, magnam minus consectetur atque fugit. Soluta labore, non rerum nulla inventore quod eveniet in nostrum aliquam cupiditate ipsa!"
        />
        <Post
          author="Raul de Souza"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea amet sed porro, magnam minus consectetur atque fugit. Soluta labore, non rerum nulla inventore quod eveniet in nostrum aliquam cupiditate ipsa!"
        />
      </main>
    </div>
  );
}
