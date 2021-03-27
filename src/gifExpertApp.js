import React, { useState } from "react";
import AddCategoria from "./componente/addCategoria";
import GrillaGift from "./componente/grillaGift";

const GifExpertApp = ( ) => {

    const [categorias, setcategorias ] = useState( [''] );
    // const add = () => setcategorias( cate => [ ...categorias, 'Digimon' ] );
    // const add = () => setcategorias( [ ...categorias, 'Digimon' ] );
    return (
        <>
            <h2> GifExpertApp </h2>
            <AddCategoria setcategorias={ setcategorias }/>
            <hr />

            <ol>
            { 
                categorias.map( categoria => 
                // (<li key={ categoria }> { categoria } </li>)
                <GrillaGift
                        key={ categoria }
                        categoria={ categoria }
                />
                )
            }
            </ol>
        </>

    );
}
export default GifExpertApp;
