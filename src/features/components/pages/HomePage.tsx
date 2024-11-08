import HigestRatedGames from "@/features/HigestRatedGames";
import LatestGames from "@/features/LatestGames";
import MostDownloaded from "@/features/MostDownloaded";
import PlatformList from "@/features/PlatformList";
import TrendingGames from "@/features/TrendingGames";
import Hero from "@/features/components/fragments/Hero";

const HomePage = () => {
  return (
    <div className="mx-16">
      <Hero />
      <TrendingGames />
      <LatestGames />
      <HigestRatedGames />
      <MostDownloaded />
      <PlatformList />
    </div>
  );
};

export default HomePage;
