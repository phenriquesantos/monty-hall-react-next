import Cartao from "@/components/Cartao";
import Link from 'next/link';

import styles from '@/styles/Formulario.module.css';
import EntradaNumerica from "@/components/EntradaNumerica";
import { useState } from "react";

export default function Form() {

  const [qtdePortas, setQtdePortas] = useState(3);
  const [comPresente, setComPresente] = useState(1);

  return (
    <div className={styles.formulario}>
      <div>
        <Cartao bgColor="#c0392c">
          <h1>Monty Hall</h1>
        </Cartao>
        <Cartao>
          <EntradaNumerica
            text="Qtde portas?"
            onChange={novaQtde => setQtdePortas(novaQtde)}
            value={qtdePortas}
          />
        </Cartao>
      </div>

      <div>
        <Cartao>
          <EntradaNumerica
            text="Porta com presente?"
            onChange={novoPortaComPresente => setComPresente(novoPortaComPresente)}
            value={comPresente}
          />
        </Cartao>
        <Cartao bgColor="#28a085">
          <Link href={`/jogo/${qtdePortas}/${comPresente}`} style={{ display: "flex", flex: "1" }}>
            <h2 className={styles.link}>Iniciar</h2>
          </Link>
        </Cartao>
      </div>
    </div>
  );
}
