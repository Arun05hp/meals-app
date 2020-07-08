import React from "react";
import MealList from "../components/MealList";

import { useSelector } from "react-redux";

import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";

export const FavoritesScreen = ({ navigation }) => {
  const availableMeals = useSelector((state) => state.meals.favoriteMeals);

  return <MealList listData={favMeals} navigation={navigation} />;
};

FavoritesScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Your Favorites",
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Menu"
          iconName="ios-menu"
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
  };
};

export default FavoritesScreen;
