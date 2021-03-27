import React from 'react'
import { useFetchGift } from '../hooks/useFetchGift'
import GrillaGiftItem from './grillaGiftItem';

const GrillaGift = ( { categoria } ) => {


const { data: imagenes, loading } = useFetchGift( categoria );

  return (
    <>
      <h3 className="animate__animated animate__flipInX "> { categoria } </h3>
      { loading && <p className="animate__animated animate__lightSpeedInLeft">Cargando......</p> }
      <div className="grillas-tarjetas">
        { imagenes.map( img =>
        <GrillaGiftItem 
                key={ img.id }  
                { ...img } />
        )}
      </div>
    </>
    
  )
}

export default GrillaGift
