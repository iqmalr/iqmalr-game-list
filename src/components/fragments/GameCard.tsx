"use client";
import Image from "next/image";
interface GameCardProps {
  name: string;
  rating: number;
  released: string;
  image: string;
  playing?: number;
}

const GameCard = ({
  name,
  rating,
  released,
  image,
  playing,
}: GameCardProps) => {
  return (
    <div className="border rounded-lg p-4 shadow-md relative ">
      <div className="relative w-[339px] h-[179px]">
        <Image src={image} alt={name} fill loading="lazy" />
      </div>

      <h2 className="text-lg font-semibold  truncate">{name}</h2>
      <p className="text-sm">Rating: {rating}</p>
      <p className="text-sm">Released: {released}</p>
      {playing !== undefined && (
        <p className="game-playing">Playing: {playing}</p>
      )}
    </div>
  );
};

export default GameCard;
