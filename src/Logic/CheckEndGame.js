export const checkEndGame = (newTablero) =>{
    //every "revisa" todas las posiciones de un arreglo 
    return newTablero.every((square) => square != null)
  }