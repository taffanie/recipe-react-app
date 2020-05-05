import React from 'react';
import style from './recipe.module.css';
import HeartButton from './HeartButton';

// TODO: show ingredients on hover

const Recipe = ({title, image, calories, diet, ingredients}) => {
  return(
    <div className={style.recipes}>
      <div className={style.recipe}>
        <HeartButton />
        <ul className={style.overlay}>
          <h4>Ingredients:</h4>
            {ingredients.map(ingredient => (
              <li className={style.text}>{ingredient.text}</li>
            ))}
        </ul>
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