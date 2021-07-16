import React from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Service from './Service'
import Contect from './Contect'

function BasicRoute() {
    return (
        <React.Fragment>
            <Router>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/service">Service</Link></li>
                        <li><Link to="/contect">Contect</Link></li>
                        <li><Link to="/dashboard">dashboard</Link></li>
                    </ul>
                </nav>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/service" component={Service} />
                    <Route path="/contect">
                        <Contect />
                    </Route>
                    <Route path="/dashboard">
                        <Dashboard />
                    </Route>
                </Switch>


            </Router>
        </React.Fragment>
    )
}

function Dashboard() {
    return (
        <h1>Dashboard page</h1>
    )
}
export default BasicRoute