import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useTheme } from "styled-components";
import { FontAwesome, Ionicons } from "@expo/vector-icons"

const { Navigator, Screen } = createBottomTabNavigator();

import { Catalog } from "../screens/Catalog";
import { Cart } from "../screens/Cart";
import { Profile } from "../screens/Profile";

export function AppRoutes(){
    const theme = useTheme();
    return(
        <Navigator
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: theme.colors.primary,
                tabBarInactiveTintColor: theme.colors.secondary
            }}
        >
            <Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarIcon: (({ size, color}) =>
                        <FontAwesome 
                            name="user"
                            size={size}
                            color={color}
                        />
                    )
                }}
            />

            <Screen
                name="Home"
                component={Catalog}
                options={{
                    tabBarIcon: (({ size, color}) =>
                        <Ionicons  
                        name="home"
                        size={size}
                        color={color}
                    />
                    )
                }}
            />

            <Screen
                name="Cart"
                component={Cart}
                options={{
                    tabBarIcon: (({ size, color}) =>
                        <FontAwesome  
                            name="cart-arrow-down"
                            size={size}
                            color={color}
                        />
                    )
                }}
            />
        </Navigator>
    );
}