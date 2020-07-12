import React from 'react'
import { View, Text, StyleSheet, Platform } from 'react-native';
import { CustomHeaderButton } from '../components/HeaderButton';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

const isAndroid = Platform.OS === 'android' ? true : false
export const FiltersScreen = () => {
    return (
        <View style={styles.screen}>
            <Text>Filters Screen</Text>
        </View>
    );
}

FiltersScreen.navigationOptions = (navData) => {
    return {
        title: 'Filter Meals',
        headerLeft: () => 
        <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
            <Item iconName={isAndroid ? 'md-menu' : 'ios-menu'} onPress={() => navData.navigation.toggleDrawer()}/>
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