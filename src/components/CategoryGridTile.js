import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Platform, TouchableNativeFeedback } from 'react-native';

const isAndroid = Platform.OS === 'android' ? true : false
export const CategoryGridTile = ({title, onSelect, colour}) => {
    const TouchableComp = (isAndroid && Platform.Version >= 21) ? TouchableNativeFeedback : TouchableOpacity
    return (
        <View style={styles.gridItem}>
        <TouchableComp 
            style={{ flex: 1 }} 
            onPress={onSelect}>
            <View style={{...styles.container, backgroundColor: colour}}>
                <Text style={styles.title} numberOfLines={2}>{title}</Text>
            </View>
        </TouchableComp>
        </View>
    );
}

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        height: 150,
        margin: 10,
        borderRadius: 10,
        overflow: 'hidden'
    },
    container: {
        flex: 1,
        borderRadius: 10,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowRadius: 10,
        elevation: 3,
        padding: 15,
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 22,
        textAlign: 'right'
    }
});