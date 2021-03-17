import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <p>Home Page</p>
      <ul>
        <li>
          <Link to='/favorites'> favorites </Link>
        </li>
        <li>
          <Link to='/mynotes'> mynotes </Link>
        </li>
      </ul>
    </div>
  )
}

export default Home
