import React from 'react';

import Home from './components/Pages/Home/Home';
import Coaching from './components/Pages/Coaching/Coaching';
import Facility from './components/Pages/Facility/Facility';
import Contact from './components/Pages/Contact/Contact';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/Facility' component={Facility}/>
            <Route path='/Coaching' component={Coaching}/>
            <Route path='/Contact' component={Contact}/>
        </Switch>
    </main>
  )
  
  export default Main
