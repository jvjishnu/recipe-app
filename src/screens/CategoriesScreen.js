import React from 'react'
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Platform } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import { Colours } from '../constants/Colours';

const isAndroid = Platform.OS === 'android' ? true : false
export const CategoriesScreen = ({navigation}) => {
    const renderItem = (itemData) => {
        return( 
            <TouchableOpacity style={styles.gridItem} onPress={() => navigation.navigate({routeName: 'CategoryMeals'})}>
                <View>
                    <Text>{itemData.item.title}</Text>
                </View>
            </TouchableOpacity>
        );
    }

    return (
            <FlatList 
                data={CATEGORIES} 
                renderItem={renderItem} 
                eyExtractor={(item, index) => item.id} numColumns={2}/>     
    );
}

CategoriesScreen.navigationOptions = {
    title: 'Meal Categories',
    headerStyle: {
        backgroundColor: isAndroid ? Colours.PRIMARY : ''
    },
    headerTintColor: isAndroid ? 'white' : Colours.PRIMARY
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150
    }
});