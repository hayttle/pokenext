import Image from "next/image"
import styles from "@/styles/About.module.css"

export default function About() {
  return (
    <div className={styles.about}>
      <h1>Sobre o projeto</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita corporis vero, praesentium id, obcaecati
        deserunt dolore illum consequuntur quos doloribus ratione. Ipsum asperiores molestias perferendis est dolores
        error incidunt a.
      </p>
      <Image src="/images/charizard.png" width="300" height="300" alt="Charizard" />
    </div>
  )
}
