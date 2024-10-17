"use client";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import EachUtils from "@/utils/EachUtils";
import platformData from "../../data/platformKosong.json"; // Mengimpor data platform
import useLoading from "../hooks/useLoading";
import PlatformCard from "./PlatformCard";
import { SkeletonCard } from "./SkeletonCard";
type Props = {};

const ErrorEmptyData = (props: Props) => {
  const loading = useLoading(500);
  const sortedPlatform = platformData.sort(
    (a, b) => b.games_count - a.games_count
  );

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">List of Platforms</h1>
      <div className="grid grid-cols-5 gap-4">
        {loading ? (
          Array.from({ length: 20 }).map((_, index) => (
            <SkeletonCard key={index} className="h-[100px] w-auto rounded-xl" />
          ))
        ) : platformData.length === 0 ? (
          <Alert variant="destructive">
            <AlertTitle>No Data Available</AlertTitle>
            <AlertDescription>
              We couldn't find any platforms to display. Please check back
              later.
            </AlertDescription>
          </Alert>
        ) : (
          <EachUtils
            of={sortedPlatform}
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

export default ErrorEmptyData;
