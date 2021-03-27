import React from 'react'

const GrillaGiftItem = ( { title, url } ) => {

  return (
    <div className="tarjeta animate__animated animate__flipInX animate__delay-1s">
     <img src={ url } alt={ title } /> 
     <p> { title } </p>
    </div>
  )
}

export default GrillaGiftItem
