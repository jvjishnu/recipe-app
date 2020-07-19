import React, { useState, useEffect, useCallback } from 'react'
import { View, Text, StyleSheet, Platform, Switch } from 'react-native';
import { CustomHeaderButton } from '../components/HeaderButton';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { Colours } from '../constants/Colours';
import { DefaultText } from '../components/DefaultText';

const isAndroid = Platform.OS === 'android' ? true : false
const FilterSwitch = ({filterName, onChange, value}) => {
    return (
        <View style={styles.filterContainer}>
            <DefaultText>{filterName}</DefaultText>
            <Switch 
                trackColor={{
                    true: isAndroid ? '#8d45e4' : Colours.PRIMARY
                }}
                thumbColor={isAndroid ? Colours.PRIMARY : ''}
                value={value} 
                onValueChange={onChange}
            />
        </View>
    );
}

export const FiltersScreen = ({navigation}) => {
    const [isGlutenFree, setIsGlutenFree] = useState(false)
    const [isLactoseFree, setIsLactoseFree] = useState(false)
    const [isVegan, setIsVegan] = useState(false)
    const [isVegetarian, setIsVegetarian] = useState(false)

    const saveFilters = useCallback(() => {
        const appliedFilters = {
            glutenFree: isGlutenFree,
            lactoseFree: isLactoseFree,
            vegan: isVegan,
            vegetarian: isVegetarian
        }
        console.log(appliedFilters)
    }, [isGlutenFree, isLactoseFree, isVegan, isVegetarian]);

    useEffect(() => {
        navigation.setParams({save: saveFilters})
    }, [saveFilters]);

    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Available Filters</Text>
            <FilterSwitch 
                filterName={'Gluten Free'} 
                value={isGlutenFree} 
                onChange={newValue => setIsGlutenFree(newValue)}
            />
            <FilterSwitch 
                filterName={'Lactose Free'} 
                value={isLactoseFree} 
                onChange={newValue => setIsLactoseFree(newValue)}
            />
            <FilterSwitch 
                filterName={'Vegan'} 
                value={isVegan} 
                onChange={newValue => setIsVegan(newValue)}
            />
            <FilterSwitch 
                filterName={'Vegetarian'} 
                value={isVegetarian} 
                onChange={newValue => setIsVegetarian(newValue)}
            />
        </View>
    );
}

FiltersScreen.navigationOptions = (navData) => {
    return {
        title: 'Filter Meals',
        headerLeft: () => 
        <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
            <Item iconName={isAndroid ? 'md-menu' : 'ios-menu'} onPress={() => navData.navigation.toggleDrawer()}/>
        </HeaderButtons>,
        headerRight: () => 
        <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
            <Item iconName={isAndroid ? 'md-save' : 'ios-save'} onPress={() => {navData.navigation.getParam('save')()}}/>
        </HeaderButtons>
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center'
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 22,
        textAlign: 'center',
        margin: 20
    },
    filterContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '80%',
        marginVertical: 10
    }
});