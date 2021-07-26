import React, { useEffect, useState } from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Route, Switch, Link, useHistory } from 'react-router-dom'
import AddUser from './AddUser'
import Header from './Header'
import UserList from './UserList'
import About from './About'
import Contact from './Contact'
import Delete from './Delete'
import View from './View'

function MiniProject() {
    const [users, setUsers] = useState([]);
    const handleAddUser = (user) => {
        setUsers([...users, user])
    }

    const handelDelete = (id) => {
        const newUserList = users.filter((user) => {
            return user.id != id
        })
        setUsers(newUserList)
    }

    useEffect(() => {
        const retriveingData = (JSON.parse(localStorage.getItem('users'))) ? JSON.parse(localStorage.getItem('users')) : []
        if (retriveingData.length) {
            setUsers(retriveingData)

        }
    }, [])

    useEffect(() => {
        localStorage.setItem('users', JSON.stringify(users))
    }, [users])

    return (
        <React.Fragment>
            <Router>
                <Header />
                <Switch>
                    <Route exact path="/"> <UserList users={users} /> </Route>
                    <Route exact path="/about" component={About} />
                    <Route exact path="/contact" component={Contact} />
                    <Route exact path="/view/:id"> <View users={users} /> </Route>
                    <Route exact path="/delete/:id"> <Delete handelDelete={handelDelete} /> </Route>
                    <Route path="/adduser"> <AddUser handleAddUser={handleAddUser} /> </Route>

                </Switch>
            </Router>
        </React.Fragment >
    )
}

export default MiniProject