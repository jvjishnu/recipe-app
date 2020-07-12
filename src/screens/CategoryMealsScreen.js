import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native';

export const CategoryMealsScreen = ({navigation}) => {
    return (
        <View style={styles.screen}>
            <Text>Category Meals Screen</Text>
            <Button title={'Go to Meal Details'} onPress={() => navigation.navigate({routeName: 'MealDetail'})}/>
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