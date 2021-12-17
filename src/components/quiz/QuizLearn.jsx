import React from 'react'
import { icons } from '../../utils/icons/icons_object'
import { QuizVideo } from './QuizVideo'
import image from '../../utils/vector/learn.svg';

export const QuizLearn = ({ handleShowComponent }) => {
  return (
    <>
     <div className="quiz--icon" >
        { icons.back_icon }
      </div>
      <div className="quiz__content">
        <QuizVideo />/
        <h2 className="">What is this crypto token</h2>
        <p className="mg--b--3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae officia excepturi illum, accusantium repell</p>
      <button className="btn btn--primary" onClick={ handleShowComponent }>Next 1/3</button>
      </div>

      <figure>
        <img src={ image } alt="" />
      </figure> 
    </>
  )
}