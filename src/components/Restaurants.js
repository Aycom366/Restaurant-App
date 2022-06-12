import { useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
} from "react-native";
import useRestaurants from "../hooks/useRestaurants";
import RestaurantCard from "./RestaurantCard";

function Restaurants({ term, navigation }) {
  const { data, loading, error, searchRestaurants } = useRestaurants();

  useEffect(() => {
    searchRestaurants(term);
  }, [term]);

  if (loading) return <ActivityIndicator size="large" marginVertical={30} />;
  if (error)
    return (
      <View>
        <Text>{error}</Text>
      </View>
    );

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Top Resturants </Text>
      <FlatList
        data={data}
        keyExtractor={(restaurant) => restaurant.id}
        renderItem={({ item }) => (
          <RestaurantCard restaurant={item} navigation={navigation} />
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 25,
    marginVertical: 5,
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 20,
    paddingBottom: 10,
  },
});

export default Restaurants;
