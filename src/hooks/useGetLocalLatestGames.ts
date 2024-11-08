import { getLocalLatestGames } from "@/local/store/slices/localLatestGamesSlice";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./storeHooks";

const useGetLocalLatestGames = () => {
  const dispatch = useAppDispatch();
  const { latestGames, loading, error } = useAppSelector((state) => {
    return state.localLatestGames;
  });

  useEffect(() => {
    dispatch(getLocalLatestGames());
  }, []);
  return { latestGames, loading, error };
};

export default useGetLocalLatestGames;
