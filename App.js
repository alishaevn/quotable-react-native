import React from 'react'

import { AuthContextProvider, UserContextProvider } from './src/contexts'
import Login from './src/screens/Login'
import Tabs from './src/navigation'

const App = () => {
    return (
        <AuthContextProvider>
            <UserContextProvider>
                <Tabs />
                <Login />
            </UserContextProvider>
        </AuthContextProvider>
    )
}

export default App