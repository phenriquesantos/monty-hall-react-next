
import Porta from "@/components/Porta";
import { atualizarPortas, criarPortas } from "functions/portas";
import { useState } from "react";
import Link from 'next/link';

import styles from '@/styles/Jogo.module.css';

export default function Jogo() {
  const [portas, setPortas] = useState(criarPortas(4, 2));

  const renderizarPortas = () => {
    return portas.map(porta => (
      <Porta
        value={porta}
        onChange={novaPorta => setPortas(atualizarPortas(portas, novaPorta))}
        key={porta.numero}
      />));
  }

  return (
    <div className={styles.jogo}>
      <div className={styles.portas}>
        {renderizarPortas()}
      </div>

      <div className={styles.botoes}>
        <Link href="/">
          <button>Reiniciar Jogo</button>
        </Link>
      </div>
    </div>
  );
}