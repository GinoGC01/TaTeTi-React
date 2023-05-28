import { ModalWinner } from "./ModalWinner"


export default function SectionModalWinner({winner, ComenzarDeNuevo}) {
  return (
    <section>
        {
        winner != null && (
            <ModalWinner winner={winner} ComenzarDeNuevo={ComenzarDeNuevo}/>
        )
        }
    </section>
  )
}
