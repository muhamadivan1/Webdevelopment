import React from 'react'
import Navbar from './Components/navbar'
import Button from './Components/Button'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Login from './pages/login'
import Homepages from './pages/homepages'


const App = ()  => {
  return(
    <div>
      <BrowserRouter>
      <Navbar/>
      <switch>
        <Route exact path='/login'component={Login}/>
        <Route exact path='/'component={Homepages}/>
      </switch>
      </BrowserRouter>
      
    </div>
  )
}

export default App