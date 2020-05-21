import React, {useState} from "react";
import { View, Text, StyleSheet, Button, FlatList} from "react-native";

const ColorsScreenComponent = () => {
    const [colors, setColors] = useState([]);

    return(
        <View>
            <Button onPress={()=>{
                setColors([...colors, randomRgb()])
            }} title="Add Color"/>
            <Text>Some Text</Text>
            <FlatList
                keyExtractor={item=>item}
                data={colors}
                renderItem={({item})=>{
                return <View style={{height: 100, width: 100, backgroundColor: item}}/>
            }}/>
        </View>
    );
};

const randomRgb = ()=>{
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    return `rgb(${red}, ${green}, ${blue})`;
};


const styles = StyleSheet.create({

});


export default ColorsScreenComponent
