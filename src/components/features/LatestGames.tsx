"use client";
import { fetchGames } from "@/data/fetch";
import EachUtils from "@/utils/EachUtils";
import { lazy, useEffect, useState } from "react";
import { SkeletonCard } from "../fragments/SkeletonCard";
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";
const GameCard = lazy(() => import("../fragments/GameCard"));

const LatestGames = () => {
  const [latestGameList, setLatestGameList] = useState([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    let isMounted = true;

    const getGames = async () => {
      try {
        const gameData = await fetchGames(30);
        if (isMounted) {
          setLatestGameList(
            gameData.sort(
              (a: { released: string }, b: { released: string }) =>
                new Date(b.released).getTime() - new Date(a.released).getTime()
            )
          );
          setLoading(false);
        }
        console.log("latest games", latestGameList);

        // setLatestGameList(
        //   gameData.sort(
        //     (a: { released: string }, b: { released: string }) =>
        //       new Date(b.released).getTime() - new Date(a.released).getTime()
        //   )
        // );
      } catch (error) {
        console.error("Failed to load latest games:", error);
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
      <h1 className="text-2xl font-bold mb-4 ">List Latest Game</h1>
      <ScrollArea className=" whitespace-nowrap rounded-md border">
        <div className="flex space-x-4 p-4">
          {/* <div className="grid grid-cols-5 gap-4"> */}
          {loading ? (
            Array.from({ length: 20 }).map((_, index) => (
              <SkeletonCard
                key={index}
                className="h-[179px] w-[339px]  rounded-xl"
              />
            ))
          ) : (
            <EachUtils
              of={latestGameList}
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
