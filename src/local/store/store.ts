import localHigestRatedGamesReducer from "@/local/store/slices/localHigestRatedGamesSlice";
import localLatestGamesReducer from "@/local/store/slices/localLatestGamesSlice";
import localMostDownloadedGamesReducer from "@/local/store/slices/localMostDownloadedGamesSlice";
import localPlatformReducer from "@/local/store/slices/localPlatformSlice";
import localTrendingGamesReducer from "@/local/store/slices/localTrendingGamesSlice";
import { configureStore } from "@reduxjs/toolkit";
export const store = configureStore({
  reducer: {
    // platform: platformReducer,
    localPlatform: localPlatformReducer,
    localMostDownloadedGames: localMostDownloadedGamesReducer,
    localTrendingGames: localTrendingGamesReducer,
    localLatestGames: localLatestGamesReducer,
    localHigestRatedGames: localHigestRatedGamesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
