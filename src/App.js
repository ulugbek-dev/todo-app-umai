import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Pending from './pages/Pending'
import Completed from './pages/Completed'
import Trash from './pages/Trash'
import AddTask from './pages/AddTask'
import Edit from './pages/Edit'
import { useSelector } from 'react-redux'

export default function App() {
  
  const indicator = useSelector(state => state.indicator).join(' ')

console.log(indicator)
  return (
    <Router>
      <div className={`App ${indicator}`}>
        <Navbar />

        <Route path="/" exact component={Pending} />
        <Route path="/completed" exact component={Completed} />
        <Route path="/trash" exact component={Trash} />
        <Route path="/add-task" exact component={AddTask} />
        <Route path="/edit" exact component={Edit} />
      </div>
    </Router>
  )
}
