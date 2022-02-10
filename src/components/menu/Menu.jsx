import React, { useContext, useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import { DataContext } from '../../context/context';
import { useHandleToggleAnimation } from '../../hooks/useHandleToggleAnimation';
import shib from '../../temp/shib.png';
import { animations_object } from '../../utils/animations/animations_object';
import { MainButton } from '../buttons/MainButton';
import { MenuButton } from '../buttons/MenuButton';
import { BackgroundWaves } from '../waves/BackgroundWaves';

export const Menu = ({values}) => {
  const { handleShowComponent, showComponent, animation } = values
// debugger
const { handleBalance: {
  portafolio_balance
} } = useContext(DataContext)
const [cleanBalance, setCleanBalance] = useState(0);
// const { animation, handleAnimation } = useHandleToggleAnimation()

useEffect(() => {
  setCleanBalance( new Intl.NumberFormat().format((portafolio_balance).toFixed(2)) )
}, [ portafolio_balance ])
  const { intro_left } = animations_object;
  return (
      <>
    <section className={`menu pd--t--3 ${ animation }`}>
      {/* <figure className="profile__image mg--b--3">
        <img src={ shib } alt="" />
      </figure> */}
      <div className="menu__stats">
        {/* <h2 className="username">User name</h2> */}
        <h2 className="balance">My balance:  <span>${ cleanBalance > 0 ? cleanBalance : 'Calculating balance' }</span></h2>
      </div>
      <nav className="navbar c95 ">
        <ul className="navbar__list mg--t--3">
        <li className="navbar--item mg--b"> <NavLink to="/crypto/" className={ (nav) => nav.isActive ? 'active' : '' } >Main</NavLink> </li>
          <li className="navbar--item mg--b"> <NavLink to="/crypto/portafolio"  className={ (nav) => nav.isActive ? 'active' : '' }>Portafolio</NavLink> </li>
          <li className="navbar--item mg--b"><NavLink to="/crypto/trade" className={ (nav) => nav.isActive ? 'active' : '' }>Trade</NavLink></li>
          <li className="navbar--item mg--b"><NavLink to="/crypto/exchange" className={ (nav) => nav.isActive ? 'active' : '' }>Exchanges</NavLink></li>
          {/* <li className="navbar--item mg--b"><Link to="/pay">Pay</Link></li> */}
          {/* <li className="navbar--item mg--b">For you</li> */}
          {/* <li className="navbar--item mg--b"><Link to="/earn">Learn and earn</Link></li> */}
          {/* <li className="navbar--item mg--b"><Link to="/news">Crypto News</Link></li> */}
          <li className="navbar--item mg--b"><NavLink to="/crypto/nft" className={ (nav) => nav.isActive ? 'active' : '' }>NFT's</NavLink></li>
          {/* <li className="navbar--item mg--b"><Link>Notifications</Link></li> */}
        </ul>
      </nav>
      <BackgroundWaves />
      {/* <MainButton message={'Logout'}/> */}
      <MenuButton values={{handleShowComponent, showComponent }}/>
    </section>
    <div className='layout' onClick={ handleShowComponent }>
    </div>

    </>
  )
}
