import React from "react";
import { Text, View, StyleSheet } from "react-native";

export const CategoriesScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>The Categoty Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
  },
});

export default CategoriesScreen;
