import HigestRatedGames from "../features/HigestRatedGames";
import LatestGames from "../features/LatestGames";
import MostDownloaded from "../features/MostDownloaded";
import PlatformList from "../features/PlatformList";
import TrendingGames from "../features/TrendingGames";

type Props = {};

const HomePage = (props: Props) => {
  return (
    <div className="mx-16">
      <TrendingGames />
      <LatestGames />
      <HigestRatedGames />
      <MostDownloaded />
      <PlatformList />
    </div>
  );
};

export default HomePage;
