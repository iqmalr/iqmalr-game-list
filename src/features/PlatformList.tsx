"use client";

import PlatformCard from "@/features/components/fragments/PlatformCard";
import { SkeletonCard } from "@/features/components/fragments/SkeletonCard";
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/features/components/ui/alert";
import useGetLocalPlatforms from "@/hooks/useGetLocalPlatforms";
import EachUtils from "@/utils/EachUtils";

const PlatformList = () => {
  const { platforms, loading, error } = useGetLocalPlatforms();
  // const dispatch = useAppDispatch();

  // const { platforms, loading, error } = useAppSelector((state) => {
  // console.log("Current State:", state);
  //   return state.localPlatform;
  // });

  // useEffect(() => {
  //   dispatch(getLocalPlatforms());
  // }, []);

  // useEffect(() => {
  //   console.log("Platforms updated:", platforms);
  //   console.log("Loading state:", loading);
  //   console.log("Error state:", error);
  // }, [platforms, loading, error]);

  if (error) {
    console.log(error);
    return (
      <Alert variant="destructive">
        <AlertTitle>No Data Available</AlertTitle>
        <AlertDescription>{error}</AlertDescription>
      </Alert>
    );
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">List of Platforms</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {loading ? (
          Array.from({ length: 20 }).map((_, index) => (
            <div key={index} className="shrink-0">
              <SkeletonCard className="h-[100px] w-full rounded-xl" />
            </div>
          ))
        ) : (
          <EachUtils
            of={platforms}
            render={(platform) => (
              <PlatformCard
                key={platform.id}
                name={platform.name}
                games_count={platform.games_count}
              />
            )}
          />
        )}
      </div>
    </div>
  );
};

export default PlatformList;

// const [platform, setPlatform] = useState([]);
// const [loading, setLoading] = useState(true);
// const [error, setError] = useState<string | null>(null);
// useEffect(() => {
//   const isMounted = true;
//   const getPlatform = async () => {
//     try {
//       setLoading(true);
//       const platformData = await fetchPlatform();
//       if (isMounted) {
//         setPlatform(
//           platformData.sort(
//             (a: { games_count: number }, b: { games_count: number }) =>
//               b.games_count - a.games_count
//           )
//         );
//         setLoading(false);
//       }
//       console.log("platform :", platform);
//     } catch (error) {
//       console.error("Failed to load platform:", error);
//       if (isMounted) {
//         setError("Failed to load platform. Please try again later.");
//       }
//     }
//   };
//   getPlatform();
// }, []);
// const sortedPlatform = platformData.sort(
//   (a, b) => b.games_count - a.games_count
// );
