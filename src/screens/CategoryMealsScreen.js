import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { CATEGORIES, MEALS } from '../data/dummy-data';
import { MealItem } from '../components/MealItem';

export const CategoryMealsScreen = ({navigation}) => {

    const renderMealItem = (itemData) => {
        return (
            <MealItem 
                title={itemData.item.title} 
                duration={itemData.item.duration} 
                complexity={itemData.item.complexity}
                affordability={itemData.item.affordability}
                image={itemData.item.imageUrl}
                onSelectMeal={() => navigation.navigate({routeName: 'MealDetail', params: {
                    mealId: itemData.item.id
            }})}/>
        );
    }

    const catId = navigation.getParam('categoryId')
    const dsiplayedMeals = MEALS.filter(
        meal => meal.categoryIds.indexOf(catId) >= 0
    );
    return (
        <View style={styles.screen}>
            <FlatList 
                data={dsiplayedMeals}
                renderItem={renderMealItem}
                style={{width: '100%'}}/>
        </View>
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
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});