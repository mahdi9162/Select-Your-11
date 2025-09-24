import toast, { Toaster } from 'react-hot-toast';
import { Suspense, useState } from 'react';
import './App.css';
import AvailablePlayers from './Components/AvailablePlayers/AvailablePlayers';
import Navbar from './Components/Navbar/Navbar';
import HeroSec from './Components/HeroSection/HeroSec';
import SelectedPlayers from './Components/SelectedPlayers/SelectedPlayers';
import FooterSec from './Components/FooterSection/FooterSec';

const fetchPlayers = async () => {
  const res = await fetch('/players.json');
  return res.json();
};

const playersPromise = fetchPlayers();

function App() {
  const [toggle, setToggle] = useState(true);
  const [availableBalance, setAvailableBalance] = useState(600000);
  const [purchasedPlayer, setPurchasedPlayer] = useState([]);

  const removePlayer = (removePlayer) => {
    const availablePlayers = purchasedPlayer.filter((players) => players !== removePlayer);
    setPurchasedPlayer(availablePlayers);
    setAvailableBalance(availableBalance + (removePlayer.priceUSD - 10000));
    toast.success('Deleted Successfully');
  };

  return (
    <>
      <Navbar availableBalance={availableBalance}></Navbar>
      <HeroSec></HeroSec>

      <div className="px-3 md:w-[1100px] mx-auto mt-20 flex justify-between items-center">
        <h2 className="font-bold md:text-2xl">{`${toggle ? 'Available Players' : `Selected Players (${purchasedPlayer.length}/11)`}`}</h2>
        <div className="font-semibold">
          <button
            onClick={() => setToggle(true)}
            className={`cursor-pointer text-sm md:text-lg py-2 px-2 md:px-4 border-1 border-gray-200 border-r-0 rounded-l-2xl ${
              toggle && 'bg-[#e7fe29]'
            }`}
          >
            Available
          </button>
          <button
            onClick={() => setToggle(false)}
            className={`cursor-pointer text-sm md:text-lg py-2 px-2 md:px-3 border-1 border-gray-200 border-l-0 rounded-r-2xl ${
              toggle || 'bg-[#e7fe29]'
            }`}
          >
            Selected (<span>{purchasedPlayer.length}</span>)
          </button>
        </div>
      </div>

      {/* Toggling Is Here */}
      {toggle ? (
        <Suspense
          fallback={
            <div className="flex justify-center mt-10">
              <span class="loading loading-bars loading-xl"></span>
            </div>
          }
        >
          <AvailablePlayers
            setPurchasedPlayer={setPurchasedPlayer}
            purchasedPlayer={purchasedPlayer}
            setAvailableBalance={setAvailableBalance}
            availableBalance={availableBalance}
            playersPromise={playersPromise}
          ></AvailablePlayers>
        </Suspense>
      ) : (
        <SelectedPlayers setToggle={setToggle} removePlayer={removePlayer} purchasedPlayer={purchasedPlayer}></SelectedPlayers>
      )}

      <FooterSec></FooterSec>
      <Toaster />
    </>
  );
}

export default App;
