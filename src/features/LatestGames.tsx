"use client";
// import { fetchGames } from "@/data/fetch";
import EachUtils from "@/utils/EachUtils";
import { lazy } from "react";

import { SkeletonCard } from "@/features/components/fragments/SkeletonCard";
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/features/components/ui/alert";
import { ScrollArea, ScrollBar } from "@/features/components/ui/scroll-area";
import useGetLocalLatestGames from "@/hooks/useGetLocalLatestGames";
const GameCard = lazy(() => import("@/features/components/fragments/GameCard"));

const LatestGames = () => {
  const { latestGames, loading, error } = useGetLocalLatestGames();

  if (error) {
    return (
      <Alert variant="destructive">
        <AlertTitle>No Data Available</AlertTitle>
        <AlertDescription>{error}</AlertDescription>
      </Alert>
    );
  }

  return (
    <div className="">
      <h1 className="text-2xl font-bold mb-4 ">List Latest Game</h1>
      <ScrollArea className=" whitespace-nowrap rounded-md border">
        <div className="flex space-x-4 p-4">
          {loading ? (
            Array.from({ length: 20 }).map((_, index) => (
              <div className="shrink-0" key={index}>
                <SkeletonCard className="h-[179px] w-[339px] rounded-xl" />
              </div>
            ))
          ) : (
            <EachUtils
              of={latestGames}
              render={(item) => (
                <div className="shrink-0">
                  <GameCard
                    key={item.id}
                    name={item.name}
                    rating={item.rating}
                    released={item.released}
                    image={item.background_image}
                    playing={item.added_by_status.playing}
                  />
                </div>
              )}
            />
          )}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
};

export default LatestGames;

//   const [latestGameList, setLatestGameList] = useState([]);
//   const [error, setError] = useState<string | null>(null);
//   const [loading, setLoading] = useState(true);
//   useEffect(() => {
//     const isMounted = true;

//     const getGames = async () => {
//       try {
//         const gameData = await fetchGames();
//         if (isMounted) {
//           setLatestGameList(
//             gameData.sort(
//               (a: { released: string }, b: { released: string }) =>
//                 new Date(b.released).getTime() - new Date(a.released).getTime()
//             )
//           );
//           setLoading(false);
//         }
//         console.log("latest games", latestGameList);

// setLatestGameList(
//   gameData.sort(
//     (a: { released: string }, b: { released: string }) =>
//       new Date(b.released).getTime() - new Date(a.released).getTime()
//   )
// );
//       } catch (error) {
//         console.error("Failed to load latest games:", error);
//         if (isMounted) {
//           setError("Failed to load games. Please try again later.");
//         }
//       }
//     };
//     getGames();
//   }, []);
