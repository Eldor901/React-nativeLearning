import React, {useReducer} from 'react'
import {View, Text, StyleSheet, Button} from 'react-native'

const NUMBER_INCREMENT = 1;

const reducer = (state, action)=>{
    switch (action.type) {
        case "Increase":
            return {...state, counter: state.counter + action.payload};
        case "Decrease":
            return {...state, counter: state.counter - action.payload};
        default:
            return state;
    }
};


const CounterScreen = ()=>{
    const [state, dispatch]= useReducer(reducer, {counter: 0});
    const {counter} = state;

    return (
        <View>
            <Button title="increase" onPress={()=> dispatch({type: 'Increase', payload: NUMBER_INCREMENT})}/>
            <Button title="decrease" onPress={
                ()=>dispatch({type: 'Decrease', payload: NUMBER_INCREMENT})}/>
            <Text>Current Count: {counter}</Text>
        </View>
    );
};


const styles = StyleSheet.create({

});


export  default CounterScreen;
