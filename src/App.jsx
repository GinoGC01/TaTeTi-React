import { useState } from 'react'
import './App.css'


import { TURNS } from './constants/constans'
import { checkEndGame } from './Logic/CheckEndGame'
import { checkWinner } from './Logic/CheckWinner'
import confetti from 'canvas-confetti'
import { SectionTurns } from './components/SectionTurns'
import SectionModalWinner from './components/SectionModalWinner'
import Tablero from './components/Tablero'


function App() {
  //tablero de 9 posiciones que se rellena con null 
  const [tablero, setTablero] = useState(()=>{
    const tableroDelLocalStorage = window.localStorage.getItem('partidaEnCurso')

    return(
      tableroDelLocalStorage 
      ? JSON.parse(tableroDelLocalStorage) 
      :  Array(9).fill(null)
      )

  })

  // Estado de los turnos (comienza la X)
  const [turno, setTurno] = useState(()=>{
    const turnLocalStorage = window.localStorage.getItem('turno')
    return(
      // si hay turno en el local storage, retorna el turno guardado. Sino, turno por defeecto
      turnLocalStorage
      ?? TURNS.x
    )
  })

  const [winner, setWinner] = useState(null) //null no hay ganador, false es empate
  
  // actualiza el tablero, respecto a los turnos
  const updateTablero = (index) => {
  // si en el indice "n" del tablero hay "algo", no hagas nada. (para no sobreescribir) Esto es porque, por defecto, el valor es "null". Entonces, si no es null el valor de cada objeto del arreglo (Es decir, es "X" u "O") no hagas nada (Return si nada es justamente eso, nada, no retorna nada). Además, hay que tener en cuenta que el juego debe "terminar" cuando el tablero este lleno, o haya un ganador, por eso ("winner")
  if(tablero[index] || winner) return
  // creo un nuevo tablero - no debo mutar el original por motivos de renderizado
  // aprender SPREAD y REST OPERATOR
  const newTablero = [...tablero]
  // le asigno al nuevo tablero, en el index seleccionado (recordar que updateTablero se ejectura cada vez que a un sqare se hace click) el valor del turno ("X" o "O")
  newTablero[index] = turno
  // actualizamos el tablero con la funcion del estado
  setTablero(newTablero)


  const nuevoTurno = turno === TURNS.x ? TURNS.o : TURNS.x
  setTurno(nuevoTurno)

  // guardamos partida en el Local Storage

  window.localStorage.setItem('partidaEnCurso', JSON.stringify(newTablero))
  window.localStorage.setItem('turno', nuevoTurno)



  const newWiner = checkWinner(newTablero)
  const empate = checkEndGame(newTablero)

  if(newWiner){
    confetti()
    setWinner(newWiner)
  }

  else if(empate){
    setWinner(false)
  }
}
  
  // reset game
  const ComenzarDeNuevo = ()=>{
    const tableroResetGame = Array(9).fill(null)
    setTablero(tableroResetGame)
    setTurno(TURNS.x)
    setWinner(null)

    window.localStorage.removeItem('partidaEnCurso');
    window.localStorage.removeItem('turno');
  }

  return (
    <main className='game-container'>
      <h1>TA Te ti</h1>

      <button onClick={ComenzarDeNuevo}>Resetear Tablero</button>

      <Tablero tablero={tablero} updateTablero={updateTablero}/>

      <SectionTurns ComenzarDeNuevo={ComenzarDeNuevo} turno={turno} winner={winner}/>

      <SectionModalWinner ComenzarDeNuevo={ComenzarDeNuevo} winner={winner}/>

    </main>

      
  )
}

export default App
