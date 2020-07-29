import React from 'react'
import { Platform, Text, View, StyleSheet } from 'react-native';
import { MealList } from '../components/MealList';
import { useSelector } from 'react-redux';
import { CustomHeaderButton } from '../components/HeaderButton';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { DefaultText } from '../components/DefaultText';

const isAndroid = Platform.OS === 'android' ? true : false
export const FavouritesScreen = ({navigation}) => {
    const favMeals = useSelector(state => state.meals.favMeals);
    if(favMeals.length < 1) {
        return (
            <View style={styles.content}>
                <DefaultText>No Favourite Meals Found</DefaultText>
            </View>
        );
    }
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

const styles = StyleSheet.create({
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});