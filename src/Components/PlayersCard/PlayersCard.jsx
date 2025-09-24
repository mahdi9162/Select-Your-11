import React from 'react';
import personImg from '../../assets/user-1.png';
import flagImg from '../../assets/report-1.png';
import toast from 'react-hot-toast';

const PlayersCard = ({ player, setAvailableBalance, availableBalance, setPurchasedPlayer, purchasedPlayer }) => {
  const { image, name, country, role, rating, battingStyle, bowlingStyle, priceUSD } = player;

  const handleSelectedBtn = (playerData) => {
    if (availableBalance < playerData.priceUSD) {
      toast.error('Teha nai hala! vagh 😆😆');
      return;
    }

    if (purchasedPlayer.length === 11) {
      toast.error('Vai ki 12da player niya khelben!😒');
      return;
    }
    const remainingBalance = availableBalance - playerData.priceUSD;
    setAvailableBalance(remainingBalance);
    setPurchasedPlayer([...purchasedPlayer, playerData]);
    toast.success(`Selected ${purchasedPlayer.length + 1}`);
  };

  const isPlayerSelected = () => {
    return purchasedPlayer.some((p) => p.id === player.id);
  };

  return (
    <div class="card shadow-lg p-6">
      <figure className="">
        <img className="h-[200px] w-full object-cover object-top rounded-xl" src={image} alt="player image" />
      </figure>
      <div class="">
        <div className="flex items-center my-2.5">
          <img className="w-5 mr-2" src={personImg} alt="" />
          <h2 className="text-lg font-semibold">{name}</h2>
        </div>
        <div className="flex justify-between my-2.5 pb-3.5 border-b-2 border-gray-100">
          <div className="flex items-center">
            <img className="w-4 h-4 mr-3" src={flagImg} alt="" />
            <p className="text-sm text-gray-400">{country}</p>
          </div>
          <p className="text-sm py-1 p-3 bg-gray-200 border-1 border-gray-100 rounded-lg">{role}</p>
        </div>
        <div className="flex justify-between items-center">
          <p className="font-semibold">Rating</p>
          <p className="text-gray-400 text-sm">{rating}</p>
        </div>

        <div className="flex justify-between items-center my-2.5">
          <p className="font-semibold text-sm">{battingStyle}</p>
          <p className="text-sm text-gray-400">{bowlingStyle}</p>
        </div>

        <div className="flex items-center justify-between">
          <p className="font-semibold text-sm">
            Price : $<span>{priceUSD}</span>
          </p>
          <button disabled={isPlayerSelected()} onClick={() => handleSelectedBtn(player)} class="btn px-2">{`${
            isPlayerSelected() ? 'Selected' : 'Choose Player'
          }`}</button>
        </div>
      </div>
    </div>
  );
};

export default PlayersCard;
