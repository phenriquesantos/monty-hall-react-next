import Porta from "@/components/Porta";
import Presente from "@/components/Presente";
import PortaModel from "@/model/porta";
import { atualizarPortas, criarPortas } from "functions/portas";
import { useState } from "react";

export default function Home() {  
  const [portas, setPortas] = useState(criarPortas(3, 2));

  const renderizarPortas = () => {
    return portas.map(porta => (
      <Porta 
        value={porta} 
        onChange={novaPorta => setPortas(atualizarPortas(portas, novaPorta))} 
        key={porta.numero} 
      />));
  }

  return (
    <div style={{ display: "flex" }}>
      { renderizarPortas() }
    </div>
  );
}
