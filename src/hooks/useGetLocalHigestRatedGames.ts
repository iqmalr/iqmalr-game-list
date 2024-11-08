import { getLocalHigestRatedGames } from "@/local/store/slices/localHigestRatedGamesSlice";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./storeHooks";

const useGetLocalHigestRatedGames = () => {
  const dispatch = useAppDispatch();
  const { higestRatedGames, loading, error } = useAppSelector((state) => {
    return state.localHigestRatedGames;
  });

  useEffect(() => {
    dispatch(getLocalHigestRatedGames());
  }, []);
  return { higestRatedGames, loading, error };
};

export default useGetLocalHigestRatedGames;
