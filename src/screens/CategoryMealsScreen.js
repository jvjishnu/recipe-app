import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { CATEGORIES, MEALS } from '../data/dummy-data';


export const CategoryMealsScreen = ({navigation}) => {

    const renderMealItem = (itemData) => {
        return (
            <View>
                <Text>{itemData.item.title}</Text>
            </View>
        );
    }

    const catId = navigation.getParam('categoryId')
    const selectedCategory = CATEGORIES.find(item => item.id === catId)
    const dsiplayedMeals = MEALS.filter(
        meal => meal.categoryIds.indexOf(catId) >= 0
    );
    return (
        <View style={styles.screen}>
            <FlatList 
                data={dsiplayedMeals}
                renderItem={renderMealItem}/>
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