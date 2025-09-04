import Porta from "@/components/Porta";
import { atualizarPortas, criarPortas } from "functions/portas";
import { use, useEffect, useState } from "react";
import Link from 'next/link';
import { useRouter } from 'next/router';

import styles from '@/styles/Jogo.module.css';

export default function Jogo() {

  const router = useRouter();
  const [portas, setPortas] = useState([]);
  const [valido, setValido] = useState(false);

  useEffect(() => {
    const portas = +router.query.portas;
    const temPresente = +router.query.temPresente;
    setPortas(criarPortas(portas, temPresente));
  }, [router?.query]);

  useEffect(() => {
    const portas = +router.query.portas;
    const temPresente = +router.query.temPresente;
    const qtdePortaValidas = portas >= 3 && portas;
    const temPresenteValido = temPresente >= 1 && temPresente <= portas;
    setValido(qtdePortaValidas && temPresenteValido);
  }, [portas]);

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
        {valido ? renderizarPortas() : <h2>Valores invalidos</h2>}
      </div>

      <div className={styles.botoes}>
        <Link href="/">
          <button>Reiniciar Jogo</button>
        </Link>
      </div>
    </div>
  );
}
