import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { CategoriesScreen, CategoryMealsScreen, MealDetailScreen } from '../screens';

const MealNavigator = createStackNavigator({
    Categories: CategoriesScreen,
    CategoryMeals: CategoryMealsScreen,
    MealDetail: MealDetailScreen
});

export const MealsNavigator = createAppContainer(MealNavigator)