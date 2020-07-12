import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import { CategoryGridTile } from '../components/CategoryGridTile';
import { color } from 'react-native-reanimated';

export const CategoriesScreen = ({navigation}) => {
    const renderItem = (itemData) => {
        return( 
            <CategoryGridTile
                title={itemData.item.title}
                colour={itemData.item.colour}
                onSelect={() => {navigation.navigate({routeName: 'CategoryMeals', params: {
                    categoryId: itemData.item.id
            }})}}/>
        );
    }

    return (
        <View>
            <FlatList
                data={CATEGORIES} 
                renderItem={renderItem} 
                eyExtractor={(item, index) => item.id} numColumns={2}/>     
        </View>
    );
}