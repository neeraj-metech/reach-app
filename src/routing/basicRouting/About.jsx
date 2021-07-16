import React from 'react'
import { BrowserRouter as Router, Route, Switch, Link, useRouteMatch, useParams } from 'react-router-dom'

function About() {
    let match = useRouteMatch();
    return (
        <React.Fragment>
            <Router>
                <ul>
                    <li><Link to={`${match.url}/about2`}>About2</Link></li>
                    <li><Link to={`${match.url}/4`}>About3</Link></li>
                </ul>
                <Route exact path={`${match.url}/about2`} component={About2} />
                <Route path={`${match.url}/:aboutId`} component={About3} />
            </Router>
        </React.Fragment>
    )
}

function About2() {
    return (
        <h1>About2 page.</h1>
    )
}
function About3() {
    let { aboutId } = useParams();
    return (
        <h1>About{aboutId} page.</h1>
    )
}

export default About