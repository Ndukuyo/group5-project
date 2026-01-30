import React, { useContext } from 'react'
import { ProductContext } from './ProductContext'

function SearchBar() {

  const { setSearchTerm } = useContext(ProductContext)

  return (
    <>
    <div className="search-bar">
        <input 
          type="text" 
          placeholder="Search for product here" 
          onChange={ (e) => setSearchTerm(e.target.value) }
        />
        
        <button>Search</button>
    </div>
    </>
  )
}

export default SearchBar