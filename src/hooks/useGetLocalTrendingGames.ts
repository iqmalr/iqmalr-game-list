import { getLocalTrendingGames } from "@/local/store/slices/localTrendingGamesSlice";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./storeHooks";

const useGetLocalTrendingGames = () => {
  const dispatch = useAppDispatch();
  const { trendingGames, loading, error } = useAppSelector(
    (state) => state.localTrendingGames
  );
  useEffect(() => {
    dispatch(getLocalTrendingGames());
  }, []);
  return { trendingGames, loading, error };
};

export default useGetLocalTrendingGames;
