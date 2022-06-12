import { Image, Pressable, StyleSheet, Text, View } from "react-native";

export default function ({ restaurant, navigation }) {
  return (
    <Pressable
      onPress={() => navigation.navigate("Restaurant", { id: restaurant.id })}
    >
      <View style={styles.container}>
        <View style={[styles.innerContainer, styles.elevates]}>
          <Image style={styles.image} source={{ uri: restaurant.image_url }} />
          <View style={styles.infoContainer}>
            <Text style={styles.header}>{restaurant.name}</Text>
            <View style={styles.info}>
              <Text style={styles.rating}>{restaurant.rating}</Text>
              <Text style={styles.money}>{restaurant.price}</Text>
            </View>
          </View>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    marginVertical: 10,
    justifyContent: "center",
    marginBottom: 10,
  },
  elevates: {
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "gold",
  },
  innerContainer: {
    justifyContent: "center",
    height: 100,
    alignSelf: "stretch",
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 75,
    height: 75,
    borderRadius: 50,
    marginLeft: 10,
  },
  infoContainer: {
    flex: 1,
    paddingHorizontal: 10,
  },
  header: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4,
  },
  info: { flexDirection: "row" },
  rating: { marginRight: 20 },
  money: {
    color: "gold",
  },
});
