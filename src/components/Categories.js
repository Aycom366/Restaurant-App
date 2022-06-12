import { FlatList, View } from "react-native";
import CategoryItem from "./CategoryItem";

export default function Categories({ term, categories, setTerm }) {
  return (
    <View>
      <FlatList
        data={categories}
        renderItem={({ item, index }) => {
          return (
            <CategoryItem
              index={index}
              name={item.name}
              imageUrl={item.imageUrl}
              active={item.name === term}
              handlePress={() => setTerm(item.name)}
            />
          );
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(category) => category.name}
      />
    </View>
  );
}
