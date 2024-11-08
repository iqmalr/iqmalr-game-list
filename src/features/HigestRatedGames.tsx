"use client";
// import { fetchGames } from "@/data/fetch";
import GameCard from "@/features/components/fragments/GameCard";
import { SkeletonCard } from "@/features/components/fragments/SkeletonCard";
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/features/components/ui/alert";
import { ScrollArea, ScrollBar } from "@/features/components/ui/scroll-area";
import useGetLocalHigestRatedGames from "@/hooks/useGetLocalHigestRatedGames";
import EachUtils from "@/utils/EachUtils";

const HigestRatedGames = () => {
  const { higestRatedGames, loading, error } = useGetLocalHigestRatedGames();

  if (error) {
    return (
      <Alert variant="destructive">
        <AlertTitle>No Data Available</AlertTitle>
        <AlertDescription>{error}</AlertDescription>
      </Alert>
    );
  }
  // const sortedHigestRatedGameList = GameList.sort(
  //   (a, b) => b.rating - a.rating
  // );
  // console.log("sortedHigestRatedGameList", sortedHigestRatedGameList);
  //   console.log(sortedGameList);

  return (
    <div className="">
      <h1 className="text-2xl font-bold mb-4 ">List Best Game</h1>
      <ScrollArea className="whitespace-nowrap rounded-md border">
        <div className="flex space-x-4 p-4">
          {loading ? (
            Array.from({ length: 20 }).map((_, index) => (
              <div className="shrink-0" key={index}>
                <SkeletonCard className="h-[179px] w-[339px]  rounded-xl" />
              </div>
            ))
          ) : (
            <EachUtils
              of={higestRatedGames}
              render={(item) => (
                <div className="shrink-0">
                  <GameCard
                    key={item.id}
                    name={item.name}
                    rating={item.rating}
                    released={item.released}
                    image={item.background_image}
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

export default HigestRatedGames;

//   const [loading, setLoading] = useState(true);
//   const [higestRatedGames, setHigestRatedGames] = useState([]);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const isMounted = true;
//     const getGames = async () => {
//       try {
//         setLoading(true);
//         const gameData = await fetchGames();
//         if (isMounted) {
//           setHigestRatedGames(
//             gameData.sort(
//               (a: { rating: number }, b: { rating: number }) =>
//                 b.rating - a.rating
//             )
//           );
//           setLoading(false);
//         }
//         console.log("higest rated games", higestRatedGames);
//       } catch (error) {
//         console.error("Failed to load higest rated games:", error);
//         if (isMounted) {
//           setError("Failed to load games. Please try again later.");
//         }
//       }
//     };
//     getGames();
//   }, []);
