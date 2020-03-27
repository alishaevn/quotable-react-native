import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import Ionicons from 'react-native-vector-icons/Ionicons'

import Home from '../screens/Home'
import Profile from '../screens/Profile'
import { colors } from '../utilities/colors'

const Tab = createBottomTabNavigator()

const Tabs = () => (
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
            tabBarOptions={{
                activeTintColor: colors.forestGreen,
                inactiveTintColor: colors.gray,
            }}
        >
            <Tab.Screen
                name='Home'
                component={Home}
            />
            <Tab.Screen
                name='Profile'
                component={Profile}
            />
        </Tab.Navigator>
    </NavigationContainer>
)

export default Tabs