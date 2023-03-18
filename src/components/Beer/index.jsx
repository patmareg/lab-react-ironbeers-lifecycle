import React from 'react';
import './index.css'

const Beer = ({ beer }) => {
  return (
    <div className='Beer'>
      <div className='image-div'>
        <img src={beer.image_url}/>
      </div>
      <div>
        <h3>{beer.name}</h3>
        <h5 style={{color: 'grey'}}>{beer.tagline}</h5>
        <p><b>Created by: </b>{beer.contributed_by.split('<')[0]}</p>
      </div>
    </div>
  );
};

export default Beer;