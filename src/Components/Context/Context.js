import React from 'react'

const defaultVal = { name: 'defaultName', model: 'defaultModel' }
const UserContext = React.createContext(defaultVal);

const UserProvider = UserContext.Provider
const UserConsumer = UserContext.Consumer

export { UserProvider, UserConsumer }
export default UserContext
