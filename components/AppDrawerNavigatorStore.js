import React from "react";
import { createDrawerNavigator } from "react-navigation-drawer";
import OrderedItemsScreen from "../screens/OrderedItemsScreen";
import RequestedItemsScreen from "../screens/RequestedItemsScreen";
import { AppStackNavigator } from "./AppStackNavigationStore";
import { AppTabNavigator } from "./AppTabNavigator";
import CustomSideBarMenu from "./CustomSideBarMenuStore";

export const AppDrawerNavigatorStore = createDrawerNavigator(
  {
    Home: {
      screen: AppTabNavigator,
    },
    OrderedItems:  {
      screen: AppStackNavigator,
    },
    RequestedItems:  {
      screen: RequestedItemsScreen,
    }
  },
  {
    contentComponent: CustomSideBarMenu,
  },
  {
    initialRouteName: "Home",
  }
);
