import './Search.scss'
import React from 'react'

import { SortIcon } from '../../assets/icons'

function Search() {
  return (
    <div className='search'>
      <div className="search_product">
        <label>Email</label>
        <div className="search_content">
          <input placeholder='email' name='email' type='text' />
          <button>search</button>
        </div>
      </div>
      <div className="search_sort">
        <h2 className='title'>Search result</h2>

        <label>Price</label>
        <div className="search_text">
          <input placeholder='decrease' name='decrease' type='text' />
          <input placeholder='ascending' name='ascending' type='text' />
        </div>

      </div>
      <div className="search_view">

      </div>
    </div>
  )
}

export default Search