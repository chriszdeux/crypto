import React from 'react'
import kraken from '../../temp/kraken.png';
import { animations_object } from '../../utils/animations/animations_object';
import { icons } from '../../utils/icons/icons_object';
import image from '../../utils/vector/winner.svg';
export const QuizComplete = ({ handleShowComponent }) => {
  const { intro, intro_down } = animations_object;
  return (
    <div className={`quiz__completed ${ intro }`}>
      <div className={`well__done ${ intro_down }`} style={{ animationDelay: '1s' }}>
      <h1>Well done!</h1>
      <h2>You earned <span>$5</span> in crypto</h2>
      {/* <div className="close" >
        { icons.back_icon }
      </div> */}
      <figure className="quiz__asset mg--v--3">
        <img src={ kraken } alt="" />
        <img src={ kraken } alt="" />
      </figure>
      <button className="btn btn--primary" onClick={ handleShowComponent }>Continue</button>
      </div>
      <figure className="winner">
        <img src={ image } alt="" />
      </figure>
    </div>
  )
}
