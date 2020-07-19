import React from 'react'
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { MEALS } from '../data/dummy-data';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { CustomHeaderButton } from '../components/HeaderButton';
import { DefaultText } from '../components/DefaultText';

const ListItem = ({children}) => {
    return (
        <View style={styles.listItem}>
            <DefaultText>{children}</DefaultText>
        </View>
    );
}

export const MealDetailScreen = ({navigation}) => {
    const mealId = navigation.getParam('mealId');
    const selectedMeal = MEALS.find(meal => meal.id === mealId);
    const { affordability, complexity, duration, imageUrl, ingredients, steps } = selectedMeal
    return (
        <ScrollView>
            <Image style={styles.image} source={{uri: imageUrl}} />
            <View style={styles.mealDetails}>
                <DefaultText>{duration}m</DefaultText>
                <DefaultText>{complexity.toUpperCase()}</DefaultText>
                <DefaultText>{affordability.toUpperCase()}</DefaultText>
            </View>
            <Text style={styles.title}>Ingredients</Text>
            {ingredients.map((ingredient, index) => <ListItem key={index}>{ingredient}</ListItem>)} 
            <Text style={styles.title}>Steps</Text>
            {steps.map((step, index) => <ListItem key={index}>{step}</ListItem>)} 
        </ScrollView>
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
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 22,
        textAlign: 'center'
    },
    image: {
        width: '100%',
        height: 200
    },
    mealDetails: {
        flexDirection: 'row',
        padding: 15,
        justifyContent: 'space-around'
    },
    listItem: {
        marginVertical: 10,
        marginHorizontal: 20,
        borderColor: '#ccc',
        borderWidth: 1,
        padding: 10
    }
});