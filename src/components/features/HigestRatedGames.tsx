"use client";
import { fetchGames } from "@/data/fetch";
import EachUtils from "@/utils/EachUtils";
import { useEffect, useState } from "react";
import GameCard from "../fragments/GameCard";
import { SkeletonCard } from "../fragments/SkeletonCard";
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";

const HigestRatedGames = () => {
  const [loading, setLoading] = useState(true);
  const [higestRatedGames, setHigestRatedGames] = useState([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const isMounted = true;
    const getGames = async () => {
      try {
        setLoading(true);
        const gameData = await fetchGames(30);
        if (isMounted) {
          setHigestRatedGames(
            gameData.sort(
              (a: { rating: number }, b: { rating: number }) =>
                b.rating - a.rating
            )
          );
          setLoading(false);
        }
        console.log("higest rated games", higestRatedGames);
      } catch (error) {
        console.error("Failed to load higest rated games:", error);
        if (isMounted) {
          setError("Failed to load games. Please try again later.");
        }
      }
    };
    getGames();
  }, [higestRatedGames]);
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
              <SkeletonCard
                key={index}
                className="h-[179px] w-[339px] rounded-xl"
              />
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
