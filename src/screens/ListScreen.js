import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
  const friends = [
    { name: "Friend 1", age: 32, key: "1" },
    { name: "Friend 2", age: 21, key: "2" },
    { name: "Friend 3", age: 32, key: "3" },
    { name: "Friend 4", age: 42, key: "4" },
    { name: "Friend 5", key: "5" },
    { name: "Friend 6", key: "6" },
    { name: "Friend 7", key: "7" },
    { name: "Friend 8", key: "8" },
    { name: "Friend 9", key: "9" },
  ];

  return (
    <View>
      <FlatList
        keyExtractor={(friend) => friend.key}
        data={friends}
        renderItem={({ item }) => {
          return (
            <Text style={styles.textStyle}>
              {item.name} - Age: {item.age}
            </Text>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50,
  },
});

export default ListScreen;
