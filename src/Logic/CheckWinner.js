import { COMBINACIONES_GANADORAS } from "../constants/constans"

export const checkWinner = (tableroParaRevisar) => {

    // revisamos todas las convinaciones ganadoras para ver si X o U ganó
    for(const combo of  COMBINACIONES_GANADORAS ){
      const [a, b, c] = combo
      if(
        tableroParaRevisar[a] &&
        tableroParaRevisar[a] === tableroParaRevisar[b] &&
        tableroParaRevisar[a] === tableroParaRevisar[c]
        ){
          return tableroParaRevisar[a] //"X" / "O"
        }
    }

    // si no hay ganador
    return null
  }