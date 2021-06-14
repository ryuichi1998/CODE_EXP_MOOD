import React from "react";
import {
    View,
} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

import Home from "../screens/Home";
import icons from "../constants/icons";
import TabIcon from "../components/TabIcon";
import { COLORS } from "../constants/themes";


const Tab = createBottomTabNavigator()

const Tabs = () => {
    return (
        <Tab.Navigator
            tabBarOptions={{
                showLabel: false,
                style: {
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    bottom: 0,
                    elavation: 0,
                    borderTopColor: "transparent",
                    height: 100,
                    backgroundColor: COLORS.white
                }
            }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({ focused }) => <TabIcon focused ={focused} icon={icons.home} />
                }}
            />
            <Tab.Screen
                name="Explore"
                component={Home}
                options={{
                    tabBarIcon: ({ focused }) => <TabIcon focused ={focused} icon={icons.feedback} />
                }}
            />
            <Tab.Screen
                name="Profile"
                component={Home}
                options={{
                    tabBarIcon: ({ focused }) => <TabIcon focused ={focused} icon={icons.user} />
                }}
            />
        </Tab.Navigator>
    )
}

export default Tabs;