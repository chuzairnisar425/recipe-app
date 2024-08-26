import React from 'react'
import { useParams } from 'react-router-dom'

function RecipeDetails() {
  const { id } = useParams()
  return (
    <div>
      {id}
    </div>
  )
}

export default RecipeDetails