import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ( { category } ) => {

    const { data : gifs, loading } = useFetchGifs( category )
    
    return (
        <div>
            <h1 className="animate__animated animate__bounceIn animate__delay-2s"> { category } </h1>

            { 
                loading ? 
                    <h4 className="animate__animated animate__bounce animate__repeat-2">Loading...</h4> 
                :
                    <div className="card__gird">
                        { gifs.map( gif => (
                            <GifGridItem key={ gif.id } { ...gif } />
                        )) }
                    </div>
                
            }

        </div>
    )
}
