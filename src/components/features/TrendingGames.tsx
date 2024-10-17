"use client";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
// import GameList from "@/data/game.json";
import { fetchGames } from "@/data/fetch";
import EachUtils from "@/utils/EachUtils";
import { useEffect, useState } from "react";
import GameCard from "../fragments/GameCard";
import { SkeletonCard } from "../fragments/SkeletonCard";
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";

const TrendingGames = () => {
  const [trendingGameList, setTrendingGameList] = useState([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    let isMounted = true;
    const getGames = async () => {
      try {
        const gameData = await fetchGames(30);
        if (isMounted) {
          setTrendingGameList(
            gameData.sort(
              (
                a: { added_by_status: { playing: number } },
                b: { added_by_status: { playing: number } }
              ) => b.added_by_status.playing - a.added_by_status.playing
            )
          );
          setLoading(false);
        }
        // setTrendingGameList(
        //   gameData.sort(
        //     (
        //       a: { added_by_status: { playing: number } },
        //       b: { added_by_status: { playing: number } }
        //     ) => b.added_by_status.playing - a.added_by_status.playing
        //   )
        // );
        console.log("trending games", trendingGameList);
      } catch (error) {
        console.error("Failed to load trending games:", error);
        if (isMounted) {
          setError("Failed to load games. Please try again later.");
        }
      }
    };

    getGames();
  }, []);
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
      <div className="text-2xl font-bold mb-4 ">List Trending Game</div>
      <ScrollArea className=" whitespace-nowrap rounded-md border">
        <div className="flex space-x-4 p-4">
          {loading ? (
            Array.from({ length: 20 }).map((_, index) => (
              <div className="shrink-0">
                <SkeletonCard
                  key={index}
                  className="h-[179px] w-[339px]  rounded-xl"
                />
              </div>
            ))
          ) : (
            <EachUtils
              of={trendingGameList}
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

export default TrendingGames;