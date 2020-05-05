import React from 'react';
import style from './recipe.module.css';
import HeartButton from './HeartButton';

const Recipe = ({title, image, calories, diet, ingredients}) => {
  return(
    <div className={style.recipes}>
      <div className={style.recipe}>
        <HeartButton />
        <img className={style.image} src={image} alt="foodpic"/>
        <p className={style.calories}>{Math.round(calories)} calories</p>
        <h1 className={style.title}>{title}</h1>
        <p className={style.diet}>{diet.map(tag => (
          <span>{tag}&nbsp;&nbsp;</span>
        ))}</p>
        {/* <ul>
          {ingredients.map(ingredient => (
            <li>{ingredient.text}</li>
          ))}
        </ul> */}
      </div>
    </div>
  );
}

export default Recipe;