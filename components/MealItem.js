import { View, Text, Pressable, Image, StyleSheet, Platform } from "react-native";

function MealItem({ title, imageUrl, duration, complexity, affordability }){
    return (
    <View style={styles.mealitem}>
        <Pressable android_ripple={{ color: '#ccc'}}
        style={({pressed}) => (pressed ? styles.buttonPressed : null)}
        >
            <View style={styles.innerContainer}>
                <View >
                    <Image source={{uri: imageUrl }} style={styles.image} />
                    <Text style={styles.title}>{title}</Text>            
                    <View style={styles.details}>
                        <Text style={styles.detailItem}>{duration}m</Text>
                        <Text style={styles.detailItem}>{complexity.toUpperCase()}</Text>
                        <Text style={styles.detailItem}>{affordability.toUpperCase()}</Text>
                    </View>
                </View>
            </View>
        </Pressable>
    </View>
    );
}

export default MealItem

const styles = StyleSheet.create({
    innerContainer: {
        borderRadius: 8,
        overflow: 'hidden'
    },
    mealitem: {
        margin: 16,
        borderRadius: 20,
        overflow: 'hidden',
        backgroundColor: 'white',
        elevation: 4,
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 8,
        overflow: Platform.OS ==='android' ? "hidden": 'visible',
    },
    image: {
        width: '100%',
        height: 200
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
        margin: 8,
    },
    details: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8,
    },
    detailItem: {
        marginHorizontal: 4,
        fontSize: 12,
    },
    buttonPressed:{
        opacity: 0.5
    },
})