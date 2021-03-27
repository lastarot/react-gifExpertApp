import { useEffect, useState } from 'react'
import { getGifs } from '../util/getGift';

export const useFetchGift = ( categoria ) => {
    
    const [objeto, setObjeto] = useState({
        data: [],
        loading: true
    });

    useEffect( () => {

        getGifs( categoria )
           .then( img => {

            setTimeout(()=>{
                setObjeto({
                    data: img,
                    loading: false
                });
            }, 3000)

           });

    }, [ categoria ])



    return objeto;

}

