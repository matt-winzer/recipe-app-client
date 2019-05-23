import React from 'react'
import styles from './recipes-list-scroll.module.scss'

import Card from '../Card'
import RecipeCardSmall from '../RecipeCardSmall'
import InfiniteScroll from 'react-infinite-scroll-component'

const RecipesListScroll = ({ title, recipes, fetchRecipes, moreRecipes }) => {
  console.log(moreRecipes)
  const recipeComponents = recipes.map(recipe => (
    <RecipeCardSmall
      key={recipe.id}
      recipe={recipe}
    />
  ))
  return (
    <Card className={styles.recipesCard}>
      <h2>{title}</h2>
      <InfiniteScroll
        className={styles.recipesContainer}
        dataLength={recipes.length}
        next={fetchRecipes}
        hasMore={moreRecipes}
        loader={<h4>Loading...</h4>}
      >
        {recipeComponents}
      </InfiniteScroll>
    </Card>
  )
}

export default RecipesListScroll