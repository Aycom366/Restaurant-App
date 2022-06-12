import { useEffect } from "react";
import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  Image,
  Text,
  View,
} from "react-native";
import useRestaurant from "../hooks/useRestaurant";

export default function RestaurantScreen({ route }) {
  const { data, loading, error, searchRestaurant } = useRestaurant();
  const { id } = route.params;
  const dimensions = Dimensions.get("window");
  const imageWidth = dimensions.width;
  const imageHeight = Math.round((dimensions.width * 9) / 16);

  useEffect(() => {
    searchRestaurant(id);
  }, []);

  if (loading) return <ActivityIndicator size="large" marginVertical={30} />;
  if (error)
    return (
      <View>
        <Text>{error}</Text>
      </View>
    );

  return (
    <View>
      {data && (
        <FlatList
          data={data.photos}
          renderItem={({ item }) => (
            <Image
              style={{ width: imageWidth, height: imageHeight }}
              source={{ uri: item }}
            />
          )}
        />
      )}
    </View>
  );
}
