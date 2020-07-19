import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TouchableNativeFeedback, Platform, ImageBackground } from 'react-native';
import { DefaultText } from './DefaultText';

const isAndroid = Platform.OS === 'android' ? true : false
export const MealItem = ({title, onSelectMeal, duration, complexity, affordability, image}) => {
    const TouchableComp = (isAndroid && Platform.Version >= 21) ? TouchableNativeFeedback : TouchableOpacity
    return (
        <View style={styles.mealItem}>
            <TouchableComp onPress={onSelectMeal}>
                <View>
                    <View style={{...styles.mealRow, ...styles.mealHeader}}>
                        <ImageBackground source={{uri: image}} style={styles.bgImage}>
                            <View style={styles.titleContainer}>
                                <Text style={styles.title} numberOfLines={1}>{title}</Text>
                            </View>
                        </ImageBackground>
                    </View>
                    <View style={{...styles.mealRow, ...styles.mealDetail}}>
                        <DefaultText>{duration}m</DefaultText>
                        <DefaultText>{complexity.toUpperCase()}</DefaultText>
                        <DefaultText>{affordability.toUpperCase()}</DefaultText>
                    </View>
                </View>
            </TouchableComp>
        </View>
    );
}

const styles = StyleSheet.create({
    mealRow: {
        flexDirection: 'row'
    },
    mealItem: {
        height: 200,
        width: '92%',
        backgroundColor: '#f5f5f5',
        margin: '4%',
        borderRadius: 10,
        overflow: 'hidden'
    },
    mealHeader: {
        height: '85%'
    },
    mealDetail: {
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '15%'
    },
    bgImage: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end'
    },
    titleContainer: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        paddingHorizontal: 12,
        paddingVertical: 5,
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 20,
        color: 'white',
        textAlign: 'center'
    }
});