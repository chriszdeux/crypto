import { cleanup } from '@testing-library/react'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { SwapButton } from '../components/buttons/SwapButton'
import { GainerLoser } from '../components/cards/GainerLoser'
import { InterestedEarned } from '../components/cards/InterestedEarned'
import { LearnAndEarnCard } from '../components/cards/LearnAndEarnCard'
import { MainNewsCard } from '../components/cards/MainNewsCard'
import { CryptoTable } from '../components/crytp-table/CryptoTable'
import { ErrorConnect } from '../components/errors/ErrorConnect'
import { CryptoFeature } from '../components/feature/CryptoFeature'
import { GenericFooter } from '../components/footer/GenericFooter'
import { Header } from '../components/header/Header'
import { ForYou } from '../components/learning/ForYou'
import { LoadingText } from '../components/loading/LoadingText'
import { BackgroundImage } from '../components/main/BackgroundImage'
import { MainDisplay } from '../components/main/MainDisplay'
import { DeskMenu } from '../components/menu/DeskMenu'
import { Menu } from '../components/menu/Menu'
import { Navbar } from '../components/navbar/Navbar'
import { Pagination } from '../components/pagination/Pagination'
import { SwapCrypto } from '../components/swap-crypto/SwapCrypto'
import { VideoTest, videotest } from '../components/VideoTest'
import { useShowComponent } from '../hooks/ShowComponent'
import { useScrollTop } from '../hooks/useScrollTop'
import { animations_object } from '../utils/animations/animations_object'
import { reducerMyInvested } from '../utils/functions/reducerFunction'
import { scrollTop } from '../utils/functions/scrollTop'

export const HomePage = () => {
  // debugger
  const { loading, error, data } = useSelector(state => state.data_reducer)

  const { intro } = animations_object
  useEffect(() => {
    scrollTop()
  }, [  ])
  return (
    <>
    <section className={` home__page ${ intro }` } >

      <div className="home__main">

        <GainerLoser />
        <CryptoFeature />
        <Pagination />
        {
          loading
          ? <LoadingText />
          : error
          ? <ErrorConnect />
          : <CryptoTable data={ data }/>
        }

        <Pagination />
      </div>

    </section>
    </>
  )
}
