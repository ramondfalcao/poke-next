import Link from "next/link";
import logoPokeBall from "../public/images/pokeball.png"
import Image from "next/image";
import styles from '../src/styles/Navbar.module.css'

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Image
          alt="Pokeball"
          src={logoPokeBall}
          width="30"
          height="30"
        />
        <h1>Pokemon</h1>
      </div>
      <ul className={styles.link_items}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">Sobre</Link>
        </li>
      </ul>
    </nav>
  )
}