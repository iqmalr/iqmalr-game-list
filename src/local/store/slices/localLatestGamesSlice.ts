import localLatestGamesData from "@/data/game.json";
import { Game } from "@/type/game";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface LocalLatestGamesDataState {
  latestGames: Game[];
  loading: boolean;
  error: string | null;
}
const initialState: LocalLatestGamesDataState = {
  latestGames: [],
  loading: false,
  error: null,
};

export const getLocalLatestGames = createAsyncThunk(
  "localLatestGames/getLocalLatestGames",
  async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("localLatestGamesData", localLatestGamesData);

    const sortedLocalLatestdGames = [...localLatestGamesData].sort(
      (a, b) => b.added - a.added
    );
    console.log("Sorted Local Latest Games:", sortedLocalLatestdGames);

    return sortedLocalLatestdGames;
  }
);

const localLatestGameSlice = createSlice({
  name: "localLatestGame",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getLocalLatestGames.pending, (state) => {
        state.loading = true;
        state.error = null;
        console.log("loading getLatestGames state started");
      })
      .addCase(getLocalLatestGames.fulfilled, (state, action) => {
        state.loading = false;
        console.log("loading getLatestGames state stop");
        state.latestGames = action.payload as Game[];
        state.error = null;
        console.log("2 Data loaded successfully:", state.latestGames);
      })
      .addCase(getLocalLatestGames.rejected, (state, action) => {
        state.loading = false;
        state.error =
          action.error.message || "Gagal memuat data platform lokal";
        console.log("3 Error loading data:", state.error);
      });
  },
});
export default localLatestGameSlice.reducer;
