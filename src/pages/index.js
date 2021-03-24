import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Favorites from './Favorites'
import Home from './Home'
import MyNotes from './MyNotes'
import Layout from '../components/Layout'

const Pages = () => {
  return (
    <Router>
      <Layout>
        <Route path='/' component={Home} exact />
        <Route path='/mynotes' component={MyNotes} />
        <Route path='/favorites' component={Favorites} />
      </Layout>
    </Router>
  )
}

export default Pages
