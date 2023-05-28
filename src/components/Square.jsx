export const Square = ({children, updateTablero, index, isSelected})=>{
    const className = `square ${isSelected ? 'seleccionado' : ''}`
  
    const handleClick = ()=>{
      updateTablero(index)
    }
  
    return(
      <div className={className} onClick={handleClick}>
        {children}
      </div>
    )
  }