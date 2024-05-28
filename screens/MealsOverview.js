import { FlatList, View, StyleSheet } from 'react-native'
import { MEALS } from '../data/dummy-data.js'


import MealItem from '../components/MealItem.js';


function MealsOverview({ route }){
    const catId = route.params.categoryID;

    const displayedMeals = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(catId) >= 0;
    });

    function renderMealItem(itemData){
        const item = itemData.item
        const mealitemProps = {
            title: item.title,
            imageUrl: item.imageUrl,
            affordability: item.affordability,
            complexity: item.complexity,
            duration: item.duration,

        }
        return <MealItem {...mealitemProps}/>
    }

    return <View style={styles.container}>
        <FlatList data={displayedMeals} keyExtractor={(item) => item.id} renderItem={renderMealItem}/>
    </View>
};

export default MealsOverview

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    }
})