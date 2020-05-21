import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity} from "react-native";

const HomeScreen = ({navigation}) => {

  return (
    <View>
      <Text style={styles.text}>Home Hi</Text>
      <Button onPress={()=> navigation.navigate('Components')}
              title="Go to components demo"/>
      <Button onPress={()=> navigation.navigate('List')}
              title="Go to List demo"/>
      <Button onPress={()=> navigation.navigate('Image')}
              title="Go to Image demo"/>
      <Button onPress={()=> navigation.navigate('Counter')}
                title="Go to  Counter demo"/>
      <Button onPress={()=> navigation.navigate('Colors')}
                title="Go to  Colors demo"/>
      <Button onPress={()=> navigation.navigate('Square')}
                title="Go to  Colors Square"/>
      <Button onPress={()=> navigation.navigate('Text')}
                title="Go to  Text demo"/>
        <Button onPress={()=> navigation.navigate('Box')}
                title="Go to  Box screen"/>
    </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 50,
  },
});

export default HomeScreen;
