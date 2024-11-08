import { getLocalPlatforms } from "@/local/store/slices/localPlatformSlice";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./storeHooks";

const useGetLocalPlatforms = () => {
  const dispatch = useAppDispatch();
  const { platforms, loading, error } = useAppSelector((state) => {
    return state.localPlatform;
  });

  useEffect(() => {
    dispatch(getLocalPlatforms());
  }, []);
  return { platforms, loading, error };
};
export default useGetLocalPlatforms;
