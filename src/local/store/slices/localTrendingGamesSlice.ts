import localTrendingGamesData from "@/data/game.json";
import { Game } from "@/type/game";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface LocalTrendingGamesDataState {
  trendingGames: Game[];
  loading: boolean;
  error: string | null;
}
const initialState: LocalTrendingGamesDataState = {
  trendingGames: [],
  loading: false,
  error: null,
};
export const getLocalTrendingGames = createAsyncThunk(
  "localTrendingGames/getLocalTrendingGames",
  async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("localTrendingGamesData", localTrendingGamesData);
    const sortedLocalTrendingGames = [...localTrendingGamesData].sort(
      (a, b) => b.added_by_status.playing - a.added_by_status.playing
    );
    console.log("Sorted Local Trending Games:", sortedLocalTrendingGames);
    return sortedLocalTrendingGames;
  }
);
const localTrendingGamesSlice = createSlice({
  name: "localTrendingGame",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getLocalTrendingGames.pending, (state) => {
        state.loading = true;
        state.error = null;
        console.log("1 Loading getLocalTrendingGames state started");
      })
      .addCase(getLocalTrendingGames.fulfilled, (state, action) => {
        state.loading = false;
        state.trendingGames = action.payload as Game[];
        state.error = null;
        console.log("2 Data loaded successfully:", state.trendingGames);
      })
      .addCase(getLocalTrendingGames.rejected, (state, action) => {
        state.loading = false;
        state.error =
          action.error.message || "Gagal memuat data trending game lokal";
        console.log("3 Error loading data:", state.error);
      });
  },
});
export default localTrendingGamesSlice.reducer;
