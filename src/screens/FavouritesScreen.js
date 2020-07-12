import React from 'react'
import { MealList } from '../components/MealList';
import { MEALS } from '../data/dummy-data';

export const FavouritesScreen = ({navigation}) => {
    const favMeals = MEALS.filter(meal => meal.id === 'm1' || meal.id === 'm2')
    return (
        <MealList dsiplayedMeals={favMeals} navigation={navigation}/>
    );
}

FavouritesScreen.navigationOptions = {
    title: 'Your Favourites'
}