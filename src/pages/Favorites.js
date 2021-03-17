import React, { useEffect } from 'react'

const Favorites = () => {
  useEffect(() => {
    document.title = 'Favorites'
  })
  return (
    <div>
      <h1>Favorites</h1>
      <p>Favorites Page</p>
    </div>
  )
}

export default Favorites
