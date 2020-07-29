import React from 'react'
import { View, FlatList, StyleSheet } from 'react-native';
import { MealItem } from './MealItem';
import { useSelector } from 'react-redux';

export const MealList = ({dsiplayedMeals, navigation}) => {
    const favMeals = useSelector(state => state.meals.favMeals)

    const renderMealItem = (itemData) => {
        const isFav = favMeals.some(meal => meal.id === itemData.item.id)
        return (
            <MealItem 
                title={itemData.item.title} 
                duration={itemData.item.duration} 
                complexity={itemData.item.complexity}
                affordability={itemData.item.affordability}
                image={itemData.item.imageUrl}
                onSelectMeal={() => navigation.navigate({routeName: 'MealDetail', params: {
                    mealId: itemData.item.id,
                    mealTitle: itemData.item.title,
                    isFav: isFav
            }})}/>
        );
    }

    return (
        <View style={styles.list}>
            <FlatList 
                data={dsiplayedMeals}
                renderItem={renderMealItem}
                style={{width: '100%'}}/>
        </View>
    );
}

const styles = StyleSheet.create({
    list: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
}); 