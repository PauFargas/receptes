import { View, Text, StyleSheet} from 'react-native'

function Subtitle({children}){
    return (
        <View style={styles.subtitleContainer}>
            <Text style={styles.subtitle}>{children}</Text>
        </View>
    )
}

export default Subtitle;

const styles = StyleSheet.create({
    subtitle: {
        color: 'black',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',       
    },
    subtitleContainer:{
        padding: 6,
        borderBottomWidth: 2,
        marginHorizontal: 12,
        marginVertical: 4,
        borderBottomColor: 'rgb(179, 179, 179)'
    }
})