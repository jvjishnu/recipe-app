import React, { useEffect, useCallback } from 'react'
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { CustomHeaderButton } from '../components/HeaderButton';
import { DefaultText } from '../components/DefaultText';
import { toggleFavourite } from '../store/actions/meals';

const ListItem = ({children}) => {
    return (
        <View style={styles.listItem}>
            <DefaultText>{children}</DefaultText>
        </View>
    );
}

export const MealDetailScreen = ({navigation}) => {
    const mealId = navigation.getParam('mealId');
    const avaiableMeals = useSelector(state => state.meals.meals);
    const selectedMeal = avaiableMeals.find(meal => meal.id === mealId);
    const { affordability, complexity, duration, imageUrl, ingredients, steps } = selectedMeal;
    const isFavourite = useSelector(state => state.meals.favMeals.some(meal => meal.id === mealId));

    const dispatch = useDispatch();

    const toggleFavouriteHandler = useCallback(() => {
        dispatch(toggleFavourite(mealId))
    }, [dispatch, mealId]);

    useEffect(() => {
        navigation.setParams({toggleFav: toggleFavouriteHandler})
    }, [toggleFavouriteHandler])

    useEffect(() => {
        navigation.setParams({isFav: isFavourite})
    }, [isFavourite]);

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
    const mealTitle = navigationData.navigation.getParam('mealTitle');
    const toggleFav = navigationData.navigation.getParam('toggleFav')
    const isFav = navigationData.navigation.getParam('isFav')
    return {
        title: mealTitle,
        headerRight: () =>
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                <Item iconName={isFav ? 'ios-star' : 'ios-star-outline'} onPress={toggleFav}/>
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