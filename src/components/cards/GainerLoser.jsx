import React, { useContext, useRef } from 'react'
import { DataContext } from '../../context/context'
import { useFetchCoins } from '../../hooks/fetchHooks/useFetchCoins'
import { useIntersectionObserver } from '../../hooks/useIntersection'
import { animations_object } from '../../utils/animations/animations_object'
import { SuggestedCard } from '../buttons/SuggestedCard'
import { ErrorConnect } from '../errors/ErrorConnect'
import { LoadingText } from '../loading/LoadingText'
import { GainerCard } from './GainerCard'
import { LoserCard } from './LoserCard'
import { RandomAssetsCard } from './RandomAssetsCard'

export const GainerLoser = () => {
  const { currentPosition } = useContext(DataContext)
  const { loading, data, error } = useFetchCoins(currentPosition)
  const { intro, exit } = animations_object
  const assetRef = useRef(null)
  const isVisible = useIntersectionObserver(assetRef)
  // debugger
  return (
    <div className={`feature c100 ${ isVisible ? intro : exit } `}  ref={ assetRef }>
      <h2>Top 3 Gainers and Losers</h2>
      <h3 className="based--100--coins">Based on 100 coins</h3>
      <div className="gainers__losers">
        {
          loading
            ? <LoadingText />
            : error
              ? <ErrorConnect />
              :
              <>
                <GainerCard data={ data }/>
                <LoserCard data={ data }/>
                <RandomAssetsCard />
                <SuggestedCard />
              </>
        }
      </div>
    </div>
  )
}
