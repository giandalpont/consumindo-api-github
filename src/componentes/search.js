import React from 'react'
import PropTypes from 'prop-types'

const Search =  ({ hendleSearch, isDisabled}) => (
    <input 
        className='search' 
        type='search'  
        placeholder='Search....' 
        disabled={ isDisabled }
        onKeyUp={ hendleSearch }
    />
)

Search.propTypes = {
    hendleSearch: PropTypes.func.isRequired,
    isDisabled: PropTypes.bool.isRequired
}

export default Search