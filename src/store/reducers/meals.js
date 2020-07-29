import { MEALS } from '../../data/dummy-data';
import { TOGGLE_FAVOURITE, SET_FILTERS } from '../actions/meals';

const initialState = {
    meals: MEALS,
    filteredMeals: MEALS,
    favMeals: []
};

export const mealsReducer = (state = initialState, action) => {
    switch(action.type) {
        case TOGGLE_FAVOURITE: 
            const existingIndex = state.favMeals.findIndex(meal => meal.id === action.mealId)
            if (existingIndex >= 0) {
                const updatedFavMeals = [...state.favMeals]
                updatedFavMeals.splice(existingIndex, 1)
                return {...state, favMeals: updatedFavMeals}
            } else {
                const meal = state.meals.find(meal => meal.id === action.mealId)
                return {...state, favMeals: state.favMeals.concat(meal)}
            }
        case SET_FILTERS:
            const appliedFilters = action.filters;
            const filterMeals = state.meals.filter(meal => {
                if(appliedFilters.glutenFree && !meal.isGlutenFree) {
                    return false
                }
                if (appliedFilters.lactoseFree && !meal.isLactoseFree) {
                    return false
                }
                if (appliedFilters.vegan && !meal.isVegan) {
                    return false
                }
                if (appliedFilters.vegetarian && !meal.isVegetarian) {
                    return false
                }
                return true
            });
            return {...state, filteredMeals: filterMeals}
        default:
            return state
    }
}