import Image from "next/image"
import styles from '../../styles/About.module.css'
import charizard from "../../../public/images/charizard.png"

export default function About() {
  return (
    <div className={styles.about}>
      <h1>Sobre o Projeto</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum natus porro eius quaerat delectus ut. Quam asperiores illum omnis doloremque delectus ipsam deserunt, sunt veniam aliquid laborum autem saepe aut.</p>
      <Image
        src={charizard}
        alt="Pokemon Charizard"
      />
    </div>
  )
}