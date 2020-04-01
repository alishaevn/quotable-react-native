import React, { useContext } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import Ionicons from 'react-native-vector-icons/Ionicons'

import { AuthContext } from '../contexts'
import Home from '../screens/Home'
import Profile from '../screens/Profile'
import { colors } from '../utilities/colors'

const Tab = createBottomTabNavigator()

const Tabs = props => {
    const { isAuthenticated } = useContext(AuthContext)

    if (isAuthenticated) {
        return (
            <NavigationContainer>
                <Tab.Navigator
                    screenOptions={({ route }) => ({
                        tabBarIcon: ({ focused, color }) => {
                            let iconName

                            if (route.name === 'Home') {
                                iconName = focused
                                    ? 'ios-information-circle'
                                    : 'ios-information-circle-outline'
                            } else if (route.name === 'Profile') {
                                iconName = focused
                                    ? 'ios-list-box'
                                    : 'ios-list'
                            }

                            return <Ionicons name={iconName} size={25} color={color} />
                        },
                    })}
                    screeprops={{ props }}
                    tabBarOptions={{
                        activeTintColor: colors.forestGreen,
                        inactiveTintColor: colors.gray,
                    }}
                >
                    <Tab.Screen
                        name='Home'
                        component={Home}
                        props={props}
                    />
                    <Tab.Screen
                        name='Profile'
                        component={Profile}
                        props={props}
                    />
                </Tab.Navigator>
            </NavigationContainer>
        )
    }

    return null
}

export default Tabs