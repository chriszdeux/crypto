import React, { useContext, useEffect } from 'react'
import { icons } from '../../utils/icons/icons_object'
import kraken from '../../temp/kraken.png';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { DataContext } from '../../context/context';
import { LazyLoadImage } from 'react-lazy-load-image-component'
export const TopAsset = ({ item }) => {
  const { id, name, image, price_change_percentage_24h } = !!item && item
  const { setHandleAsset } = useContext(DataContext)
  const [color, setColor] = useState('')

  useEffect(() => {
    (price_change_percentage_24h > 0)
     ? setColor('gainer--color')
     : setColor('loser--color')

  }, [item])
  // debugger
  return (
    <li className="top--asset">
        <div>
      <figure>
        <LazyLoadImage src={
           image } alt={ name } />
      </figure>
      <Link to={`/crypto/crypto-asset/${id}`}>
        <h3 onClick={() => setHandleAsset(id)}>{ name }</h3>
      </Link>

      </div>
      <h3 className={ color }>
        <span >
          { 
          price_change_percentage_24h >= 0 
            ? icons.up_icon 
            : icons.down_icon 
          }
        </span> { price_change_percentage_24h } %</h3>
      {/* <h3 style={{ color: '#f56b6b' }}><span>{ icons.down_icon }</span> 3.65%</h3> */}
    </li>
  )
}
