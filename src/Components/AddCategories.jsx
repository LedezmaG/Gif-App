import React, {useState} from 'react'
import PropTypes from 'prop-types'


export const AddCategories = ( { categories } ) => {

    const [search, setSearch] = useState("");

    const handleSubmit = ( e ) => {
        e.preventDefault();
        if ( search.trim().length > 2 ) {
            categories( cats => [ search, ...cats ] )
            setSearch("")
        }
    }

    return (
        <form onSubmit={ handleSubmit }>
            <input 
            type="text" 
            className="Search" 
            value={search}
            onChange={ e => setSearch(e.target.value)} />
        </form>
    )
}

AddCategories.propTypes = {
    categories: PropTypes.func.isRequired,
}