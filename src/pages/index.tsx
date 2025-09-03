import Porta from "@/components/Porta";
import Presente from "@/components/Presente";
import PortaModel from "@/model/porta";
import { atualizarPortas, criarPortas } from "functions/portas";
import { useState } from "react";

export default function Home() {
  return (
    <div style={{ display: "flex" }}>
      <h1>Inicio do jogo</h1>
    </div>
  );
}
