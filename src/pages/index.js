import styles from '@/styles/Home.module.css'
import Image from 'next/image'
import logoPokeBall from "../../public/images/pokeball.png"
import Card from './components/Card'

export async function getStaticProps() {
  const maxPokemons = 251
  const api = 'https://pokeapi.co/api/v2/pokemon/'

  const res = await fetch(`${api}/?limit=${maxPokemons}`)
  const data = await res.json()

  // add pokemon index
  data.results.forEach((element, index) => {
    element.id = index + 1
  });

  return {
    props: {
      pokemons: data.results,
    },
  }
}

export default function Home({ pokemons }) {
  return (
    <>
      <div className={styles.title_container}>
        <h2 className={styles.title}>Poke<span>Next</span></h2>
        <Image 
          src={logoPokeBall}
          alt="Pokeball"
        />
      </div>
      <div className={styles.pokemon_container}>
        {pokemons.map((pokemon) => (
          <Card key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </>
  )
}
