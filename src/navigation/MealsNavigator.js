import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { CategoriesScreen, CategoryMealsScreen, MealDetailScreen } from '../screens';
import { Colours } from '../constants/Colours';

const isAndroid = Platform.OS === 'android' ? true : false
const navOptions = {
    headerStyle: {
        backgroundColor: isAndroid ? Colours.PRIMARY : ''
    },
    headerTintColor: isAndroid ? 'white' : Colours.PRIMARY
}
const MealNavigator = createStackNavigator({
    Categories: {
        screen: CategoriesScreen,
        title: 'Meal Categories'
    },
    CategoryMeals: {
        screen: CategoryMealsScreen
    },
    MealDetail: {
        screen: MealDetailScreen
    }
}, {
    defaultNavigationOptions: navOptions
});

export const MealsNavigator = createAppContainer(MealNavigator)