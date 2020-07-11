import React from 'react'
import { View, Text, StyleSheet } from 'react-native';

export const FavouritesScreen = () => {
    return (
        <View style={styles.screen}>
            <Text>Favourites Screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});