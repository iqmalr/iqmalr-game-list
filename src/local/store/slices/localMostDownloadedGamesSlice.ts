// import localPlatformData from "@/data/platform.json";
import localMostDownloadedGamesData from "@/data/game.json";
import { Game } from "@/type/game";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface LocalMostDownloadedGamesDataState {
  mostDownloadedGames: Game[];
  loading: boolean;
  error: string | null;
}

const initialState: LocalMostDownloadedGamesDataState = {
  mostDownloadedGames: [],
  loading: false,
  error: null,
};

export const getLocalMostDownloadedGames = createAsyncThunk(
  "localMostDownloadedGames/getLocalMostDownloadedGames",
  async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("localMostDownloadedGamesData", localMostDownloadedGamesData);
    const sortedLocalMostDownloadedGames = [
      ...localMostDownloadedGamesData,
    ].sort((a, b) => b.added - a.added);
    console.log(
      "Sorted Local Most Downloaded Games:",
      sortedLocalMostDownloadedGames
    );
    // return localMostDownloadedGamesData.sort((a, b) => b.added - a.added);
    return sortedLocalMostDownloadedGames;
  }
);
const localMostDownloadedGameSlice = createSlice({
  name: "localMostDownloadedGame",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getLocalMostDownloadedGames.pending, (state) => {
        state.loading = true;
        state.error = null;
        console.log("1 Loading getLocalMostDownloadedGames state started");
      })
      .addCase(getLocalMostDownloadedGames.fulfilled, (state, action) => {
        state.loading = false;
        console.log("1 Loading getLocalMostDownloadedGames state stop");

        state.mostDownloadedGames = action.payload as Game[];
        state.error = null;
        console.log("2 Data loaded successfully:", state.mostDownloadedGames);
      })
      .addCase(getLocalMostDownloadedGames.rejected, (state, action) => {
        state.loading = false;
        state.error =
          action.error.message || "Gagal memuat data platform lokal";
        console.log("3 Error loading data:", state.error);
      });
  },
});

export default localMostDownloadedGameSlice.reducer;
