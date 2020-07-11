import React, {useState} from 'react'
import {AddCategories} from './Components/AddCategories'
import {GifGrid} from './Components/GifGrid'



const GifExpertApp = () => {

    const [categories, setCategories] = useState([ 'Rick And Morty' ])

    return(
        <>
            <h2>Gif Expert App</h2>
                <AddCategories categories={ setCategories } />
            <hr />

            <ol>
                {
                    categories.map( categories => (
                        <GifGrid 
                            key= { categories }
                            category = { categories }
                        />
                    ))
                }
            </ol>

        </>
    )
}

export default GifExpertApp