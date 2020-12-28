/** @format */

import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Leaderboard from './components/Leaderboard'

const App = () => {
  return (
    <Router>
      <Header />
      <Container>
        <Leaderboard />
      </Container>
    </Router>
  )
}

export default App
