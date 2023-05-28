import { Square } from "./Square"

export const ModalWinner = ({winner, ComenzarDeNuevo})=>{

   const winnerText =  winner === false ? 'Empate' : `Ganó:`

    return(
      <section className='modal-winner'>
        <div className="text-modal-winner__container">
          <h2>{winnerText}</h2>
  
          <header className='winner-modal__square'>
            {winner && (<Square>{winner}</Square>)}
          </header>
  
          <button onClick={ComenzarDeNuevo}>
            Comenzar de nuevo
          </button>
        </div>
      </section>
    )
  }