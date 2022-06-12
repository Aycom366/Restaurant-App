import { StyleSheet, TextInput, View } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { elevation } from "../common/styles";
import { useState } from "react";

export default function SearchBar({ setTerm }) {
  const [input, setInput] = useState("");

  const handleEndEditing = () => {
    if (!input) return;
    setTerm(input);
    setInput("");
  };

  return (
    <View style={[styles.container, styles.elevation]}>
      <FontAwesome name="search" size={20} />
      <TextInput
        style={styles.input}
        placeholder="Restaurants, food"
        value={input}
        onChangeText={(text) => setInput(text)}
        onEndEditing={handleEndEditing}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 25,
    marginVertical: 5,
    backgroundColor: "white",
    padding: 15,
    borderRadius: 10,
  },
  elevation,
  input: {
    fontSize: 20,
    marginLeft: 10,
  },
});
