import { useState } from "react";
import yelp from "../api/yelp";

export default () => {
  const [results, setResults] = useState({
    data: null,
    loading: false,
    error: null,
  });

  const searchRestaurants = async (term) => {
    setResults({ data: null, error: null, loading: true });
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 15,
          term,
          location: "San Francisco",
        },
      });
      setResults({
        data: response.data.businesses,
        error: null,
        loading: false,
      });
    } catch (error) {
      setResults({ data: null, error: "Something went wrong", loading: false });
    }
  };

  return { ...results, searchRestaurants };
};
