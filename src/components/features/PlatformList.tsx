"use client";
import { fetchPlatform } from "@/data/fetch";
import EachUtils from "@/utils/EachUtils";
import { useEffect, useState } from "react";
import PlatformCard from "../fragments/PlatformCard";
import { SkeletonCard } from "../fragments/SkeletonCard";
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";

type Props = {};

const PlatformList = (props: Props) => {
  const [platform, setPlatform] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    let isMounted = true;
    const getPlatform = async () => {
      try {
        setLoading(true);
        const platformData = await fetchPlatform();
        if (isMounted) {
          setPlatform(
            platformData.sort(
              (a: { games_count: number }, b: { games_count: number }) =>
                b.games_count - a.games_count
            )
          );
          setLoading(false);
        }
        console.log("platform :", platform);
      } catch (error) {
        console.error("Failed to load platform:", error);
        if (isMounted) {
          setError("Failed to load platform. Please try again later.");
        }
      }
    };
    getPlatform();
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
  // const sortedPlatform = platformData.sort(
  //   (a, b) => b.games_count - a.games_count
  // );

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">List of Platforms</h1>
      <div className="grid grid-cols-5 gap-4">
        {loading ? (
          Array.from({ length: 20 }).map((_, index) => (
            <SkeletonCard key={index} className="h-[100px] w-auto rounded-xl" />
          ))
        ) : (
          <EachUtils
            of={platform}
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
