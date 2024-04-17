import { Button } from "./ui/button";
import { Link } from "react-router-dom";
export const TopShops = () => {
  return (
    <div className="bg-gray-900 h-full grid grid-cols-12 gap-2">
      <div className="col-span-5">
        <div className="text-white p-5 justify-center text-center ">
          <div className="font-bold md:text-3xl">Top Shops</div>

          <div className="font- text-sm md:text-lg p-4">
            Checkout the Top-10 Shops
          </div>
          <Button className="bg-pink-500 h-15 font-bold md:h-18 md:w-32">
            <Link to='/about'>Read More </Link> 
          </Button>
        </div>
      </div>

      <div className="col-span-7 pb-2">
        <div className="flex flex-wrap">
          {[...Array(12)].map((_, index) => (
            <div className="px-4" key={index}> <Link to='/shop'>
              <img
                src="https://api.pinupcoupons.com/uploads/images/ZAActiveStorage_VS/abcdepotuk.webp"
                alt="Logos"
                className={`rounded-full w-[8vh] p-2 h-[8vh] ${
                  index > 3 ? "hidden md:block" : ""
                }`}
              />
              <p
                className={`text-xs text-slate-300 ${
                  index > 3 ? "hidden md:block" : ""
                }`}
              >
                ABC Depot
              </p>
              </Link>
            </div>
            
          ))}
        </div>
      </div>
    </div>
  );
};
