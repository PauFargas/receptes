import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import MealsOverview from './screens/MealsOverview';
import MealDetailScreen from './screens/MealDetailScreen';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
    <StatusBar style='light'/>
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: '#351401'}, //A STACK NAVIGATOR PER A QUE SIGUI GLOBAL
        headerTintColor: 'white',
        contentStyle: {backgroundColor: '#3f2f25'}
      }}>
        <Stack.Screen name="MealsCategories" component={CategoriesScreen} 
        options={{title: 'Categories', 
        }}/>
        <Stack.Screen name="MealsOverview" component={MealsOverview} 
        />
        <Stack.Screen  name="MealDetail" component={MealDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
container:{

}
});
