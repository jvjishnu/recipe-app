import { Platform } from 'react-native';
import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import { 
    CategoriesScreen, 
    CategoryMealsScreen, 
    MealDetailScreen, 
    FavouritesScreen, 
    FiltersScreen 
} from '../screens';
import { Colours } from '../constants/Colours';
import { Ionicons } from '@expo/vector-icons'

const isAndroid = Platform.OS === 'android' ? true : false
const navOptions = {
    headerStyle: {
        backgroundColor: isAndroid ? Colours.PRIMARY : ''
    },
    headerTintColor: isAndroid ? 'white' : Colours.PRIMARY
}
const MealNavigator = createStackNavigator({
    Categories: {
        screen: CategoriesScreen,
        title: 'Meal Categories'
    },
    CategoryMeals: {
        screen: CategoryMealsScreen
    },
    MealDetail: {
        screen: MealDetailScreen
    }
}, {
    defaultNavigationOptions: navOptions
});

const FavNavigator = createStackNavigator({
    Favourites: FavouritesScreen,
    MealDetail: MealDetailScreen
}, {
    defaultNavigationOptions: navOptions
})

const tabScreenConfig = {
    Meals: {
        screen: MealNavigator,
        navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return <Ionicons name={'ios-restaurant'} size={25} color={tabInfo.tintColor}/>
            },
            tabBarColor: Colours.PRIMARY
        }
    },
    Favourites: {
        screen: FavNavigator,
        navigationOptions: {
            tabBarLabel: 'Favourites', //not necessary here, can be overridden if required
            tabBarIcon: (tabInfo) => {
                return <Ionicons name={'ios-star'} size={25} color={tabInfo.tintColor}/>
            },
            tabBarColor: Colours.ACCENT
        }
    }
}

const MealFavTabNavigator = isAndroid ? 
    createMaterialBottomTabNavigator(tabScreenConfig, {
        activeColor: 'white',
        shifting: true
    }) : 
    createBottomTabNavigator(tabScreenConfig, 
    {
        tabBarOptions: {
            activeTintColor: Colours.ACCENT
        }
    });

const FiltersNavigator = createStackNavigator({
        Filters: FiltersScreen
    }, {
        defaultNavigationOptions: navOptions
    })

const MainNavigator = createDrawerNavigator({
    Meals: {
        screen: MealFavTabNavigator
    },
    Filters: FiltersNavigator
}, {
    contentOptions: {
        activeTintColor: Colours.ACCENT,
        labelStyle: {
            fontFamily: 'open-sans-bold'
        }
    }
})

export const MealsNavigator = createAppContainer(MainNavigator)