import { useState } from "react";
import { StatusBar, StyleSheet, View } from "react-native";
import Categories from "../components/Categories";
import Header from "../components/Header";
import Restaurants from "../components/Restaurants";
import SearchBar from "../components/SearchBar";
import { commonCategories } from "../common/data";

export default function HomeScreen({ navigation }) {
  const [term, setTerm] = useState("Burger");

  return (
    <View style={styles.container}>
      <Header />
      <SearchBar setTerm={setTerm} />
      <Categories categories={commonCategories} setTerm={setTerm} term={term} />
      <View style={{ flex: 1 }}>
        <Restaurants navigation={navigation} term={term} />
      </View>
      <StatusBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgb(253,253,253)",
    flex: 1,
  },
});
