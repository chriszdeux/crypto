import React, { useContext, useEffect, useState } from 'react';

// import Chart from 'chart.js/auto';
// import chart from 'rea'
// import { Line } from 'react-chartjs-2';
import { getRelativePosition } from 'chart.js/helpers';

import { CryptoTable } from '../components/crytp-table/CryptoTable'
import { SwapCrypto } from '../components/swap-crypto/SwapCrypto';
import { icons } from '../utils/icons/icons_object';
// import { ChartTest } from '../../components/charts/ChartTest';
import { PortafolioChart } from '../components/charts/PortafolioChart';
import { LearnAndEarnCard } from '../components/cards/LearnAndEarnCard';
import { InterestedEarned } from '../components/cards/InterestedEarned';
import { BackgroundImage } from '../components/main/BackgroundImage';
import image from '../utils/vector/portafolio.svg'
import { NewsInfo } from '../components/news/NewsInfo';
import { animations_object } from '../utils/animations/animations_object';
import { ForYou } from '../components/learning/ForYou';
import { useSelector } from 'react-redux';
import { PortafolioTable } from '../components/crytp-table/PortafolioTable';
import { EmptyComponent } from '../components/emptyComponent/EmptyComponent';
import { AssetTransactions } from '../components/coin-asset/AssetTransactions';
import { DataContext } from '../context/context';
import { WishlistTable } from '../components/crytp-table/WishlistTable';
import { SuggestedCard } from '../components/buttons/SuggestedCard';
import { GainerLoser } from '../components/cards/GainerLoser';
export const PortafolioPage = () => {
  const { intro } = animations_object;
  const data = useSelector(state => state.wishlist_reducer)
  const dataAssets = useSelector(state => state.buy_asset_reducer)
  // debugger
  const dataTransaction = useSelector(state => state.transaction_reducer)

  const { setHandleBalance, handleBalance:{
    portafolio_balance, 
  }  } = useContext(DataContext)
  // useEffect(() => {
  //   setHandleBalance({
  //     portafolio_balance: 0,
  //     total_amount_invested: 0,
  //   })
  // }, [  ])
  // debugger
  const [cleanBalance, setCleanBalance] = useState(0);
  useEffect(() => {
    setHandleBalance({
      portafolio_balance: 0, total_amount_invested: 0 })
  }, [  ])

// const { animation, handleAnimation } = useHandleToggleAnimation()

useEffect(() => {
  setCleanBalance( new Intl.NumberFormat().format((portafolio_balance).toFixed(2)) )
}, [ portafolio_balance ])
  return (
    <section className="portafolio">
      {/* <Line data={data} options={options}/> */}
      <div className="portafolio__main__section" >
        {/* <PortafolioChart /> */}
        <div className={`portafolio__assets mg--v ${ intro }`} style={{ animationDelay: '.6s' }}>
          <h2 className="mg--v">Your Assets <span>Balance: ${ cleanBalance }</span></h2>
          {
            dataAssets.length > 0
            ? <PortafolioTable />
            : <EmptyComponent message="You haven't bought any assets yet"/>
          }
        </div>
          <GainerLoser />
        <div className={`portafolio__wishlist mg--v ${ intro }`} style={{ animationDelay: '.9s' }}>
          <h2 className="mg--v">Wishlist</h2>
          {
            data.length > 0
            ? <WishlistTable data={ data }/>
            : <EmptyComponent message="You haven't added anything to your wishlist yet"/>
          
          }
        </div>

      </div>
      <aside className={`portafolio__aside c100 ${ intro }`} style={{ animationDelay: '1.5s' }}>
       {
         dataTransaction.length > 0 &&
         <div className={`portafolio__aside__content `}>
         <h2>Transaction history</h2>
           {/* <SwapCrypto /> */}
           
           <AssetTransactions id=""/>
 
           {/* <ForYou /> */}
           {/* <InterestedEarned /> */}
           {/* <SwapCrypto /> */}
         </div>
       }
      </aside>
      <BackgroundImage image={ image }/>
    </section>
  )
}
