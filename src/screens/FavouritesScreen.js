import React from 'react'
import { Platform } from 'react-native';
import { MealList } from '../components/MealList';
import { MEALS } from '../data/dummy-data';
import { CustomHeaderButton } from '../components/HeaderButton';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

const isAndroid = Platform.OS === 'android' ? true : false
export const FavouritesScreen = ({navigation}) => {
    const favMeals = MEALS.filter(meal => meal.id === 'm1' || meal.id === 'm2')
    return (
        <MealList dsiplayedMeals={favMeals} navigation={navigation}/>
    );
}

FavouritesScreen.navigationOptions = (navData) => {
    return {
        title: 'Your Favourites',
        headerLeft: () => 
        <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
            <Item iconName={isAndroid ? 'md-menu' : 'ios-menu'} onPress={() => navData.navigation.toggleDrawer()}/>
        </HeaderButtons>
    }
}