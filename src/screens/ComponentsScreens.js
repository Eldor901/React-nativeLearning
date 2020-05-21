import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentsScreen = () => {
  const greeting = "231";

  return (
    <View>
      <Text style={styles.textStyle}>Getting Started with react Native</Text>
      <Text style={styles.textStyle2}> React Native</Text>
        <Text style={styles.textStyle3}> My name is Eldor</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 45,
  },
  textStyle2: {
      fontSize: 20,
  },

  textStyle3: {
      fontSize: 10,
  }
});

export default ComponentsScreen;
