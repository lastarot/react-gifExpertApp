import React, { useState } from 'react'
import PropsTypes from "prop-types";

const AddCategoria = ( { setcategorias } ) => {
    
    const [valor, setValor] = useState( '' );

    const inputChange = ( e ) => setValor(e.target.value);

    const submit = ( e ) => {
        e.preventDefault();
        if ( valor.trim().length > 2 ) {
            setcategorias( cate => [ valor, ...cate ]);
            console.log('Submit con valor ', valor);
            setValor( ' ' );
        }
    };
    
  return (
    <form onSubmit={ submit }>
      <input 
            type="text"
            value={ valor }
            onChange={ inputChange }
      />
      {/* <button> agregar catigoria </button> */}
    </form>
  )
}

AddCategoria.propTypes = {
    setcategorias: PropsTypes.func.isRequired
}

export default AddCategoria
