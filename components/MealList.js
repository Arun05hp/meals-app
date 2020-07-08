import React from "react";
import { View, FlatList, StyleSheet } from "react-native";

import MealItem from "./MealItem";

const MealList = (props) => {
  const renderMealitem = (itemData) => {
    return (
      <MealItem
        title={itemData.item.title}
        image={itemData.item.imageUrl}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
        onSelectMeal={() =>
          props.navigation.navigate({
            routeName: "MealDetail",
            params: {
              mealId: itemData.item.id,
            },
          })
        }
      />
    );
  };
  return (
    <View style={styles.list}>
      <FlatList
        style={{ width: "100%", padding: 10 }}
        data={props.listData}
        renderItem={renderMealitem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
  },
});

export default MealList;
