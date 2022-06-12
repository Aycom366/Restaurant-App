import { useState } from "react";
import yelp from "../api/yelp";

export default () => {
  const [result, setResult] = useState({
    data: null,
    loading: false,
    error: null,
  });

  const searchRestaurant = async (id) => {
    setResult({ data: null, error: null, loading: true });
    try {
      const response = await yelp.get(`/${id}`);
      setResult({
        data: response.data,
        error: null,
        loading: false,
      });
    } catch (error) {
      setResult({ data: null, error: "Something went wrong", loading: false });
    }
  };

  return { ...result, searchRestaurant };
};
