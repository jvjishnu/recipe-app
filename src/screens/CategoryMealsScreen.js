import React from 'react';
import { CATEGORIES, MEALS } from '../data/dummy-data';
import { MealList } from '../components/MealList';

export const CategoryMealsScreen = ({navigation}) => {
    const catId = navigation.getParam('categoryId')
    const dsiplayedMeals = MEALS.filter(
        meal => meal.categoryIds.indexOf(catId) >= 0
    );
    return (
        <MealList dsiplayedMeals={dsiplayedMeals} navigation={navigation}/>
    );
}

CategoryMealsScreen.navigationOptions = (navigationData) => {
    const catId = navigationData.navigation.getParam('categoryId')
    const selectedCategory = CATEGORIES.find(item => item.id === catId)
    return {
        title: selectedCategory.title
    }
}