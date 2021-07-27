import React from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Route, Switch, Link, useHistory } from 'react-router-dom'
import Navbar from './Comp/Navbar'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import AddContact from './Pages/AddContact'
import Edit from './Pages/Edit'
import View from './Pages/View'
import Delete from './Pages/Delete'

function App() {

    return (
        <React.Fragment>
            <Router>
                <Navbar />
                <Switch>
                    <Route exact path="/"> <Home /> </Route>
                    <Route exact path="/about" component={About} />
                    <Route exact path="/contact" component={Contact} />
                    <Route exact path="/add-contact" component={AddContact} />
                    <Route exact path="/edit/:id" component={Edit} />
                    <Route exact path="/view/:id" component={View} />
                    <Route exact path="/delete/:id" component={Delete} />
                </Switch>
            </Router>
        </React.Fragment >
    )
}

export default App