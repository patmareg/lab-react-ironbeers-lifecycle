import React, { useCallback, useEffect, useState } from 'react';
import { getBeers } from '../../services/BeersService';
import Beer from '../Beer';
import './index.css'

const BeersList = () => {
  const [beers, setBeers] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchBeers = useCallback(() => {
    getBeers()
      .then(response => {
        setLoading(false)
        setBeers(response)
      })
  }, [])

  useEffect(() => {
    fetchBeers()
  }, [fetchBeers])

  return (
    <div className='BeersList'>
      {loading && <p>loading...</p>}
      {!loading && <div>
        <div className='home-div'>
          <img src='https://static.thenounproject.com/png/3574480-200.png'/>
        </div>
          {beers.map(beer => {
            return <Beer beer={beer}/>
          })}
        </div>  
      }
    </div>
  );
};

export default BeersList;