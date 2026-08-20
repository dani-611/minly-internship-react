import { useWatchlist } from "../hooks/useWatchlist";
import heroImg from '../assets/hero.png';
import reactLogo from '../assets/react.svg';
import viteLogo from '../assets/vite.svg';

export const Header = () => {
  const { count } = useWatchlist();

  return (
    <section id="center" className="text-center w-full flex flex-col items-center">
      <div className="hero">
        <img src={heroImg} className="base" width="170" height="179" alt="" />
        <img src={reactLogo} className="framework" alt="React logo" />
        <img src={viteLogo} className="vite" alt="Vite logo" />
      </div>
      <div className="flex justify-between items-center w-full max-w-7xl px-4 mt-4">
        <h1 className="text-center">My Movies</h1>
        <div className="bg-blue-600 text-white px-4 py-2 rounded-full font-semibold">
          Watchlist: {count}
        </div>
      </div>
    </section>
  );
};
