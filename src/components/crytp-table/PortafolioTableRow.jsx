import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react/cjs/react.development';
import { DataAssetContext, DataContext } from '../../context/context';
import { useFetchAsset } from '../../hooks/fetchHooks/useFetchAsset';
import { icons } from '../../utils/icons/icons_object';
import { ErrorConnect } from '../errors/ErrorConnect';
import { LoadingText } from '../loading/LoadingText';

export const PortafolioTableRow = ({ item }) => {
  const { setHandleAsset } = useContext(DataContext) 
  const { id, name, symbol, image, amount_crypto } = item
  const { loading, error, data } = useFetchAsset(id)
  // const { current_price_usd, price_change_24h,  } = data.length > 0 && data
  // debugger
  const [balance, setBalance] = useState(0);
  const [countBalance, setCountBalance] = useState(balance);
  useEffect(() => {
    setBalance(0)
    // debugger
    setBalance( data.current_price_usd?.replace(/\,/g, '') * amount_crypto )
  }, [ data ])
  // debugger
  useEffect(() => {
    // debugger
    if(data.id && balance !==NaN) {
      // debugger
      // debugger0
      setCountBalance(countBalance + balance)
      console.log( countBalance )
    }
    
  }, [ data ])
  // debugger
  return (
   <>
      {
        loading
          ? <LoadingText />
          : error 
            ? <ErrorConnect />
            :
            <tbody>
            <tr className="table__row c100 animation_animated animation_fadeIn">
              <td className="coin">
                <figure className="crypto__coin">
                  <img className="coin--image" src={ image } alt={ id } />
                </figure>
              </td>

              <td className="coin--name">{ name }<br /><span className="short--name pd--h">{ symbol }</span></td>


              <td className="coin--name">$ { new Intl.NumberFormat().format(balance) }<br /><span className="short--name pd--h">{ new Intl.NumberFormat().format(amount_crypto) } { symbol }</span></td>

              <td className="price">
                ${ data.current_price_usd } <br />
                {/* <span className="supply">
                Supply $1,521,625.236  
                </span> */}
                <span className={`market--mark ${ data.price_change_percentage_24h > 0 ? 'gainer--color' : 'loser--color' }`  }>
                  { data.price_change_percentage_24h > 0 ? icons.up_icon : icons.down_icon} { data.price_change_percentage_24h }%
                  </span>
              </td>
              <td  className="link--asset" onClick={() => setHandleAsset(id)}>
                <Link to="/crypto-asset">
                { icons.forward_icon }
                </Link>
              </td>
              {/* <td className="market--cap--24h">
                
              </td> */}
            </tr>
          </tbody>


      }
   </>
  )
};
