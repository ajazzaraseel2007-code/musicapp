import Header from "../../components/Header";
import ContinueListening from "../../components/ContinueListening";
import TrendingNow from "../../components/TrendingNow";
import ForYou from "../../components/ForYou";
import MusicPlayer from "../../components/MusicPlayer";
import BottomNav from "../../components/BottomNav";
import { continueListening, trendingNow, forYou, nowPlaying } from "../../data/songs";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0D0D12] text-white">
      {/* Scrollable content; bottom padding keeps it clear of the fixed player + nav */}
      <div className="pb-40">
        <Header name="Fatimah" />
        <ContinueListening songs={continueListening} />
        <TrendingNow songs={trendingNow} />
        <ForYou songs={forYou} />
      </div>

      <div className="fixed inset-x-0 bottom-0 mx-auto max-w-md">
        <MusicPlayer song={nowPlaying} />
        <BottomNav />
      </div>
    </div>
  );
}
