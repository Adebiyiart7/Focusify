import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// LOCAL IMPORTS
import Routes from "../config/Routes";
import tabBarIcon from "./tabBarIcon";
import useTheme from "../hooks/useTheme";
import HomeScreen from "../screens/HomeScreen";
import ManageScreen from "../screens/ManageScreen";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const { colors } = useTheme();

  return (
    <Tab.Navigator
      tabBarOptions={{
        labelStyle: { marginBottom: 6, fontSize: 11, fontWeight: "500" },
        labelPosition: "below-icon",
        tabStyle: {
          height: 57,
          backgroundColor: colors.background,
          borderTopColor: colors.border,
        },

        activeTintColor: colors.primary,
        iconStyle: {
          marginTop: 8,
        },
        style: { elevation: 0, height: 57, borderTopColor: colors.border },
      }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => tabBarIcon({ route, focused }),
      })}
    >
      <Tab.Screen name={Routes.Home} component={HomeScreen} />
      <Tab.Screen name={Routes.Manage} component={ManageScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
