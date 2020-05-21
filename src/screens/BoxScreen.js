import React, {useState} from "react";
import { View, Text, StyleSheet, Button, FlatList} from "react-native";



const BoxScreen = ()=>{
    return(
        <View style={styles.viewStyles}>
            <Text style={styles.textStyles}>Child #1</Text>
            <Text style={styles.textStyles2}>Child #2</Text>
            <Text style={styles.textStyles3}>Child #3</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    viewStyles: {
        borderWidth: 3,
        borderColor: 'black',
        height: 200,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    textStyles: {
        borderWidth: 3,
        borderColor: 'blue',
        backgroundColor: 'red',
        width: 50,
        height: 50,
    },

    textStyles2: {
        borderWidth: 3,
        borderColor: 'yellow',
        backgroundColor: 'green',
        width: 50,
        height: 50,
        alignSelf: 'center',
    },

    textStyles3: {
        borderWidth: 3,
        borderColor: 'yellow',
        backgroundColor: 'blue',
        width: 50,
        height: 50,

        alignItems: 'flex-end'
    }
});

export default BoxScreen
