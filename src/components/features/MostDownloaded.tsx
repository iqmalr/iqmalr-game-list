"use client";
import { fetchGames } from "@/data/fetch";
import EachUtils from "@/utils/EachUtils";
import { lazy, useEffect, useState } from "react";
import { SkeletonCard } from "../fragments/SkeletonCard";
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";
const GameCard = lazy(() => import("../fragments/GameCard"));

const MostDownloaded = () => {
  const [mostDownloadedGameList, setMostDownloadedGameList] = useState([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const getGames = async () => {
      try {
        setLoading(true);
        const gameData = await fetchGames(30);
        if (isMounted) {
          setMostDownloadedGameList(
            gameData.sort(
              (a: { added: number }, b: { added: number }) => b.added - a.added
            )
          );
          setLoading(false);
        }
        console.log("most downloaded games", mostDownloadedGameList);
      } catch (error) {
        console.error("Failed to load most downloaded games:", error);
        if (isMounted) {
          setError("Failed to load games. Please try again later.");
        }
      }
    };

    getGames();

    return () => {
      isMounted = false;
    };
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
      <h1 className="text-2xl font-bold mb-4">Most Downloaded Game</h1>
      <ScrollArea className=" whitespace-nowrap rounded-md border">
        <div className="flex space-x-4 p-4">
          {loading ? (
            Array.from({ length: 20 }).map((_, index) => (
              <SkeletonCard
                key={index}
                className="h-[179px] w-[339px]  rounded-xl"
              />
            ))
          ) : (
            <EachUtils
              of={mostDownloadedGameList}
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
      {/* <div className="mb-6">
        <label htmlFor="platform-select" className="block text-lg mb-2">
          Pilih Platform:
        </label>
        <select id="platform-select" className="border rounded p-2">
          <option value="">-- Pilih Platform --</option>
          <EachUtils
            of={platforms}
            render={(platformName, index) => (
              <option key={index} value={platformName}>
                {platformName}
              </option>
            )}
          />
        </select>
      </div> */}
    </div>
  );
};

export default MostDownloaded;
