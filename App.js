import React from 'react'

import { AuthContextProvider } from './src/contexts'
import Login from './src/screens/Login'
import Tabs from './src/navigation'

const App = () => {
    return (
        <AuthContextProvider>
            <Tabs />
            <Login />
        </AuthContextProvider>
    )
}

export default App