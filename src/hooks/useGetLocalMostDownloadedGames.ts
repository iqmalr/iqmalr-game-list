import { getLocalMostDownloadedGames } from "@/local/store/slices/localMostDownloadedGamesSlice";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./storeHooks";

const useGetLocalMostDownloadedGames = () => {
  const dispatch = useAppDispatch();
  const { mostDownloadedGames, loading, error } = useAppSelector((state) => {
    return state.localMostDownloadedGames;
  });

  useEffect(() => {
    dispatch(getLocalMostDownloadedGames());
  }, []);
  return { mostDownloadedGames, loading, error };
};

export default useGetLocalMostDownloadedGames;
