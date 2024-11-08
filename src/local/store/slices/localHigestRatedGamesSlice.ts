// import localPlatformData from "@/data/platform.json";
import localHigestRatedGamesData from "@/data/game.json";
import { Game } from "@/type/game";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface LocalHigestRatedGamesDataState {
  higestRatedGames: Game[];
  loading: boolean;
  error: string | null;
}

const initialState: LocalHigestRatedGamesDataState = {
  higestRatedGames: [],
  loading: false,
  error: null,
};

export const getLocalHigestRatedGames = createAsyncThunk(
  "localHigestRatedGames/getLocalHigestRatedGames",
  async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("localHigestRatedGamesData", localHigestRatedGamesData);
    const sortedLocalHigestRatedGames = [...localHigestRatedGamesData].sort(
      (a, b) => b.added - a.added
    );
    console.log("Sorted Local HigestRatedGames:", sortedLocalHigestRatedGames);
    // return localMostDownloadedGamesData.sort((a, b) => b.added - a.added);
    return sortedLocalHigestRatedGames;
  }
);
const localHigestRatedGamesSlice = createSlice({
  name: "localHigestRatedGames",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getLocalHigestRatedGames.pending, (state) => {
        state.loading = true;
        state.error = null;
        console.log("1 Loading getLocalHigestRatedGames state started");
      })
      .addCase(getLocalHigestRatedGames.fulfilled, (state, action) => {
        state.loading = false;
        console.log("1 Loading getLocalHigestRatedGames state stop");

        state.higestRatedGames = action.payload as Game[];
        state.error = null;
        console.log("2 Data loaded successfully:", state.higestRatedGames);
      })
      .addCase(getLocalHigestRatedGames.rejected, (state, action) => {
        state.loading = false;
        state.error =
          action.error.message || "Gagal memuat data platform lokal";
        console.log("3 Error loading data:", state.error);
      });
  },
});

export default localHigestRatedGamesSlice.reducer;
