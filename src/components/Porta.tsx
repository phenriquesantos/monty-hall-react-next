import PortaModel from '@/model/porta';
import styles from '@/styles/Porta.module.css';
import Presente from './Presente';

interface PortaProps {
  value: PortaModel,
  onChange: (novaPorta: PortaModel) => void,
}

export default function Porta(props: PortaProps) {
  const porta = props.value;
  const selecionada = porta.selecionada && !porta.aberta ? styles.selecionada : '';

  const alternarSelecao = e => props.onChange(porta.alternarSelecao());

  const renderizarPorta = () => {
    return (
      <div className={styles.porta}>
        <div className={styles.numero}>{porta.numero}</div>
        <div className={styles.macaneta} onClick={e => abrir(e)}></div>
      </div>
    );
  }

  const abrir = (e) => {
    e.stopPropagation();
    props.onChange(porta.abrir());
  }

  return (
    <div className={styles.area} onClick={alternarSelecao}>
      <div className={`${styles.estrutura} ${selecionada}`}>
        {!porta.aberta 
          ? renderizarPorta() 
          : porta.premiada 
          ? <Presente /> 
          : false }
      </div>
      <div className={styles.chao}></div>
    </div>
  )
}
