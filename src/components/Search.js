import React from 'react'
import StarRating from './StarRating'

const Search = ({text,handleChange,rating,handleRating}) => {
    return (
        <div className='header-container' >
            <h1>Our Movie App</h1>
            <div className="search-container">
                <form>
                    <input type="text" value={text} onChange={handleChange}  />

                </form>
                <StarRating  rating={rating} handleRating={handleRating} />
            </div>
        </div>
    )
}

export default Search
