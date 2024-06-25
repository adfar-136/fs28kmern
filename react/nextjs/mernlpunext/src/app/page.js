import Image from "next/image";
import styles from "./page.module.css";
import Counter from "./components/Counter";
import Pomodoro from "./components/Pomodoro";
import Hello from "./components/Hello";

export default function Home() {
  return (
    <>
     <h1>Hello Motto</h1>
     <Counter/>
     <Pomodoro/>
     <Hello/>
    </>
  );
}
