import { StyleSheet, Text, View } from "react-native";

function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.lightHeader}>Grab your</Text>
      <Text style={styles.boldHeader}>delicious meal!</Text>
    </View>
  );
}

export default Header;

const styles = StyleSheet.create({
  container: {
    paddingTop: 16,
    marginHorizontal: 25,
  },
  lightHeader: {
    fontSize: 25,
  },

  boldHeader: {
    fontSize: 40,
    fontWeight: "bold",
  },
});
