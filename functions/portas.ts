import PortaModel from "@/model/porta";

export function criarPortas(qntde, numeroPremiada: number): PortaModel[]{
  return Array.from({ length: qntde }, (_, i) => {
    const numero = i + 1;
    const premiada = numero == numeroPremiada;
    return new PortaModel(i + 1, premiada);
  })
}

export function atualizarPortas(portas: PortaModel[], portaModificada: PortaModel){
  return portas.map(porta => {
    const eAModificada = porta.numero == portaModificada.numero;
    if(eAModificada)
      return portaModificada;
    else
      return portaModificada.aberta ? porta : porta.desselecionar();
    
  });
}