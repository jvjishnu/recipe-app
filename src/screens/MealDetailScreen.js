import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { MEALS } from '../data/dummy-data';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { CustomHeaderButton } from '../components/HeaderButton';
import { Colours } from '../constants/Colours';

export const MealDetailScreen = ({navigation}) => {
    const mealId = navigation.getParam('mealId');
    const selectedMeal = MEALS.find(meal => meal.id === mealId);
    return (
        <View style={styles.screen}>
            <Text>Meal Detail Screen</Text>
            <Text>{selectedMeal.title}</Text>
        </View>
    );
}

MealDetailScreen.navigationOptions = (navigationData) => {
    const mealId = navigationData.navigation.getParam('mealId');
    const selectedMeal = MEALS.find(meal => meal.id === mealId);
    return {
        title: selectedMeal.title,
        headerRight: () =>
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                <Item iconName={'ios-star'} onPress={() => console.log('Marked')}/>
            </HeaderButtons>
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});