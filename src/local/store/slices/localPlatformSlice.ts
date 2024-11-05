// import localPlatformData from "@/data/platform.json";
// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// interface Platform {
//   id: number;
//   name: string;
//   slug: string;
//   games_count: number;
//   image_background: string;
//   image: string | null;
//   year_start: number | null;
//   year_end: number | null;
//   games: any[];
// }

// interface LocalPlatformState {
//   platforms: Platform[];
//   loading: boolean;
//   error: string | null;
// }

// const initialState: LocalPlatformState = {
//   platforms: [],
//   loading: false,
//   error: null,
// };

// export const getLocalPlatforms = createAsyncThunk(
//   "localPlatform/getLocalPlatforms",
//   async () => {
//     await new Promise((resolve) => setTimeout(resolve, 1000));

//      return [...platformData];
//     // return localPlatformData.sort((a, b) => b.games_count - a.games_count);
//   }
// );

// const localPlatformSlice = createSlice({
//   name: "localPlatform",
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(getLocalPlatforms.pending, (state) => {
//         state.loading = true;
//       })
//       .addCase(getLocalPlatforms.fulfilled, (state, action) => {
//         state.loading = false;
//         state.platforms = action.payload;
//         state.error = null;
//       })
//       .addCase(getLocalPlatforms.rejected, (state, action) => {
//         state.loading = false;
//         state.error =
//           action.error.message || "Gagal memuat data platform lokal";
//       });
//   },
// });

// export default localPlatformSlice.reducer;
// localPlatformSlice.ts
import platformData from "@/data/platform.json";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface Platform {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
  image: string | null;
  year_start: number | null;
  year_end: number | null;
  games: any[];
}
interface LocalPlatformState {
  platforms: Platform[];
  loading: boolean;
  error: string | null;
}

const initialState: LocalPlatformState = {
  platforms: [],
  loading: false,
  error: null,
};
// const sortPlatforms = (
//   platforms: Platform[],
//   sortBy: "games_count" | "name" = "games_count"
// ) => {
//   return [...platforms].sort((a, b) => {
//     if (sortBy === "games_count") {
//       return b.games_count - a.games_count; // Descending order
//     }
//     // Sort by name
//     return a.name.localeCompare(b.name); // Ascending order
//   });
// };
export const getLocalPlatforms = createAsyncThunk(
  "localPlatform/getLocalPlatforms",
  async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    // Create a new array instead of modifying the original
    console.log("Raw Platform Data:", platformData);
    console.log("Platform Data Type:", typeof platformData);
    console.log("Is Array?", Array.isArray(platformData));
    // return [...platformData];
    // const platforms = [...platformData];
    // console.log("Copied Platform Data:", platforms);
    // return platforms;
    const sortedPlatforms = [...platformData].sort(
      (a, b) => b.games_count - a.games_count
    );

    console.log("Sorted Platform Data:", sortedPlatforms);
    return sortedPlatforms;
  }
);

const localPlatformSlice = createSlice({
  name: "localPlatform",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getLocalPlatforms.pending, (state) => {
        state.loading = true;
        state.error = null;
        console.log("1 Loading platform state started");
      })
      .addCase(getLocalPlatforms.fulfilled, (state, action) => {
        state.loading = false;
        state.platforms = action.payload;
        state.error = null;
        console.log("2 Data loaded successfully:", state.platforms);
      })
      .addCase(getLocalPlatforms.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to load platform data";
        state.platforms = [];
        console.log("3 Error loading data:", state.error);
      });
  },
});

export default localPlatformSlice.reducer;
