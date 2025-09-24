import React from 'react';
import trash from '../../assets/trash.png';

const SelectedCards = ({ player, removePlayer }) => {
  const HandleTrashBtn = (player) => {
    removePlayer(player);
  };
  return (
    <>
      <div className="w-[92%] md:w-[1100px] mx-auto p-6 bg-white border border-gray-200 my-8 rounded-2xl shadow-sm">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <figure>
              <img className="w-16 h-16 rounded-2xl object-cover object-top" src={player.image} alt="player image" />
            </figure>
            <div>
              <p className="font-semibold md:text-xl">{player.name}</p>
              <p className="text-sm text-gray-400">{player.role}</p>
            </div>
          </div>
          <button onClick={() => HandleTrashBtn(player)} className="cursor-pointer">
            <img src={trash} alt="" />
          </button>
        </div>
      </div>
    </>
  );
};

export default SelectedCards;
