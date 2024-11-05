// import axios from "axios";

// const api = axios.create({
//   baseURL: process.env.NEXT_PUBLIC_BASE_URL,
//   headers: {
//     "x-rapidapi-key": process.env.NEXT_PUBLIC_RAPIDAPI_KEY,
//     "x-rapidapi-host": process.env.NEXT_PUBLIC_RAPIDAPI_HOST,
//   },
// });
// export const fetchGames = async (pageSize = 20) => {
//   try {
//     const response = await api.get("/games", {
//       params: {
//         key: process.env.NEXT_PUBLIC_API_KEY,
//         page_size: pageSize,
//       },
//     });
//     return response.data.results;
//   } catch (error) {
//     console.error("Error fetching data:", error);
//     throw { message: "Failed to fetch games", originalError: error };
//   }
// };
// export const fetchPlatform = async () => {
//   try {
//     const response = await api.get("/platforms", {
//       params: {
//         key: process.env.NEXT_PUBLIC_API_KEY,
//       },
//     });
//     return response.data.results;
//   } catch (error) {
//     console.error("Error fetching data:", error);
//     throw { message: "Failed to fetch platform", originalError: error };
//   }
// };
