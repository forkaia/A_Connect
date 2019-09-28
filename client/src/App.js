import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom"
import Home from './pages/Home'
import Info from './pages/Info'
import './App.css';

function App() {
    return (
        <Fragment>
            <Router>
                <Route path='/' exact={true}><Home /></Route>
            </Router>
            <Router>
                <Route path='/info' exact={true}><Info /></Route>
            </Router>
        </Fragment>
    )
}

export default App;
