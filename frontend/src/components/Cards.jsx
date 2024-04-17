import { Card } from "./Card";
import { Footer } from "./Footer";

export const Cards = () => {
  return (
    <div>
      {[...Array(8)].map((_, index) => (
        <div key={index} className="bg-gray-200 pt-2 pb-5 flex justify-between px-8">
          <Card />
          <Card />
        </div>
        
      ))}
    </div>
  );
};
