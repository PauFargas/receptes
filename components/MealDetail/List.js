import { Text, View, StyleSheet } from "react-native";

function List({data}) {
    return(        
        data.map((dataPoint) => {
            console.log(dataPoint); // Esto imprimirá cada dataPoint en la consola
            return (
                <View key={dataPoint} style={styles.listItem}>
                    <Text style={styles.itemText}>{dataPoint}</Text>
                </View>
            );
        })
    );    
}

export default List;

const styles = StyleSheet.create({
    listItem: {
        borderRadius: 6,
        paddingHorizontal: 8,
        paddingVertical: 4,
        marginVertical: 4,
        marginHorizontal: 12,
        backgroundColor: '#f89a5b',
    },
    itemText: {
        color: '#351401',
        textAlign: 'center',
    }
})