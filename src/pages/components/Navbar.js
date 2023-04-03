import Link from "next/link";
import logoPokeBall from "../../../public/images/pokeball.png"
import Image from "next/image";

export default function Navbar() {
  return (
    <nav>
      <div>
        <Image
          alt="Pokeball"
          src={logoPokeBall}
          width="30"
          height="30"
        />
        <h1>Pokemon</h1>
      </div>
      <ul>
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