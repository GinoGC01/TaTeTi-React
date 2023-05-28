import { TURNS } from "../constants/constans"
import { Square } from "./Square"

export const SectionTurns = ({turno, winner, ComenzarDeNuevo})=>{
    return(
        <>
            <section className="turnos">
                <Square isSelected={turno === TURNS.x}>{TURNS.x}</Square>
                <Square isSelected={turno === TURNS.o}>{TURNS.o}</Square>
            </section>
        </>

    )
}