"use client";

interface PlatformCardProps {
  name: string;
  games_count: number;
}

const PlatformCard = ({ name, games_count }: PlatformCardProps) => {
  return (
    <div className="border rounded-lg p-4 shadow-md h-[100px]">
      <div>{name}</div>
      <div>{games_count}</div>
    </div>
  );
};

export default PlatformCard;
