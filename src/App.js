import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Completed from './pages/Completed'
import Trash from './pages/Trash'
import Edit from './pages/Edit'

export default function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Route path="/" exact component={Home} />
        <Route path="/completed" exact component={Completed} />
        <Route path="/trash" exact component={Trash} />
        <Route path="/edit" exact component={Edit} />
      </div>
    </Router>
  )
}
