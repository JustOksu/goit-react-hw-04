import axios from "axios";

const ACCESS_KEY = "1Wa-7CTx8d2JEaZFnSqCBUQzfWsVcYY6jXg_Vy-9STU";

export const fetchImages = async (query, page = 1) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    params: {
      query,
      page,
      per_page: 12,
      client_id: ACCESS_KEY,
    },
  });
  return response.data;
};
