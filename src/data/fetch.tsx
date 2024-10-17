import axios from "axios";

const api = axios.create({
  baseURL: process.env.BASE_URL,
  headers: {
    "x-rapidapi-key": process.env.RAPIDAPI_KEY,
    "x-rapidapi-host": process.env.RAPIDAPI_HOST,
  },
});
export const fetchGames = async (pageSize = 40) => {
  try {
    const response = await api.get("/games", {
      params: {
        key: process.env.API_KEY,
        page_size: pageSize,
      },
    });
    return response.data.results;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw { message: "Failed to fetch games", originalError: error };
  }
};
export const fetchPlatform = async () => {
  try {
    const response = await api.get("/platforms", {
      params: {
        key: process.env.API_KEY,
      },
    });
    return response.data.results;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw { message: "Failed to fetch platform", originalError: error };
  }
};
