import React from 'react';
import SelectedCards from '../SelectedCards/SelectedCards';

const SelectedPlayers = ({ purchasedPlayer, removePlayer, setToggle }) => {
  return (
    <>
      {purchasedPlayer.map((player) => (
        <SelectedCards key={player.id} removePlayer={removePlayer} player={player}></SelectedCards>
      ))}

      <div className="flex md:w-[1100px] px-3 mx-auto mt-10 mb-52">
        <button
          onClick={() => setToggle(true)}
          className="font-bold cursor-pointer bg-[#e7fe29] hover:hover:shadow-lg hover:border-yellow-200 transition-all duration-500 px-2 py-2 md:px-4 md:py-3 rounded-2xl border-2 text-sm md:text-base"
        >
          Add More Player
        </button>
      </div>
    </>
  );
};

export default SelectedPlayers;
