import React, { use } from 'react';
import PlayersCard from '../PlayersCard/PlayersCard';

const AvailablePlayers = ({ playersPromise, setAvailableBalance, availableBalance, setPurchasedPlayer, purchasedPlayer }) => {
  const playersData = use(playersPromise);

  return (
    <div className="px-3 grid grid-cols-1 md:grid-cols-3 gap-6 md:w-[1100px] font-sora mx-auto mt-6 md:mt-8 md:mb-72 mb-60">
      {playersData.map((player) => (
        <PlayersCard
          key={player.id}
          player={player}
          availableBalance={availableBalance}
          setAvailableBalance={setAvailableBalance}
          purchasedPlayer={purchasedPlayer}
          setPurchasedPlayer={setPurchasedPlayer}
        ></PlayersCard>
      ))}
    </div>
  );
};

export default AvailablePlayers;
