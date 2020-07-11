import { useState } from 'react'
import { useEffect } from 'react';
import { getGifs } from '../helpers/GetGifs';

export const useFetchGifs = ( category ) => {
    const [state, setstate] = useState({
        data : [],
        loading: true
    })

    useEffect( () => {
        getGifs( category )
        .then( gif => {
            setstate({
                data: gif,
                loading: false
            });
        } )
    }, [ category ] )

    return state;
}
