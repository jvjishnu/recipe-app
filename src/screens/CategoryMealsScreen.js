import React from 'react';
import { useSelector } from 'react-redux';
import { CATEGORIES } from '../data/dummy-data';
import { MealList } from '../components/MealList';
import { View, StyleSheet } from 'react-native';
import { DefaultText } from '../components/DefaultText';

export const CategoryMealsScreen = ({navigation}) => {
    const catId = navigation.getParam('categoryId')
    const availableMeals = useSelector(state => state.meals.filteredMeals);
    const dsiplayedMeals = availableMeals.filter(
        meal => meal.categoryIds.indexOf(catId) >= 0
    );
    if(dsiplayedMeals.length < 1) {
        return (
            <View style={styles.content}>
                <DefaultText>No Meals Found</DefaultText>
            </View>
        )
    }
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

const styles = StyleSheet.create({
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});