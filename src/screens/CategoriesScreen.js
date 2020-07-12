import React from 'react'
import { View, FlatList, Platform } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import { CategoryGridTile } from '../components/CategoryGridTile';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { CustomHeaderButton } from '../components/HeaderButton';

const isAndroid = Platform.OS === 'android' ? true : false
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

CategoriesScreen.navigationOptions = (navData) => {
    return {
        title: 'Meal Categories',
        headerLeft: () => 
        <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
            <Item iconName={isAndroid ? 'md-menu' : 'ios-menu'} onPress={() => navData.navigation.toggleDrawer()}/>
        </HeaderButtons>
    }
}