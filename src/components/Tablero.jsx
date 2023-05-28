import { Square } from "./Square"

export default function Tablero({tablero, updateTablero}) {
  return (
    <section className="game">
        {tablero.map((celda, index)=>{
        return(<Square key={index} index={index} updateTablero={updateTablero}>{celda}</Square>)
        })}
    </section>
  )
}
