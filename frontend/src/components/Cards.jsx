import { Card } from "./Card";
import { Footer } from "./Footer";

export const Cards = () => {
  return (
    <div className="container mx-auto">
      {[...Array(8)].map((_, index) => (
        <div
          key={index}
          className="bg-gray-200 py-4 flex flex-wrap justify-between gap-4 px-4 sm:px-8"
        >
          <Card className="w-full sm:w-1/2 lg:w-1/4" />
          <Card className="w-full sm:w-1/2 lg:w-1/4" />
          <Card className="w-full sm:w-1/2 lg:w-1/4 hidden sm:block" />
          <Card className="w-full sm:w-1/2 lg:w-1/4 hidden sm:block" />
        </div>
      ))}
    </div>
  );
};