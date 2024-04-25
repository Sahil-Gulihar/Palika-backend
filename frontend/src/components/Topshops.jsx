import { Button } from "./ui/button";
import { Link } from "react-router-dom";

export const TopShops = () => {
  function getGridColumnClass(index) {
    if (window.innerWidth < 768) {
      // Small screens
      return index < 4 ? "block" : "hidden";
    } else if (window.innerWidth >= 768 && window.innerWidth < 1024) {
      // Medium screens
      return index < 6 ? "block" : "hidden";
    } else {
      // Large screens
      return "block";
    }
  }

  function getColumnVisibilityClass(index) {
    if (window.innerWidth < 768) {
      // Small screens
      return index > 3 ? "hidden" : "";
    } else if (window.innerWidth >= 768 && window.innerWidth < 1024) {
      // Medium screens
      return index > 5 ? "hidden" : "";
    } else {
      // Large screens
      return "";
    }
  }

  return (
    <div className="bg-gray-900 h-full grid grid-cols-12 gap-2">
      <div className="col-span-5">
        <div className="text-white p-5 justify-center text-center ">
          <div className="font-bold md:text-3xl">Top Shops</div>
          <div className="font- text-sm md:text-lg p-4">
            Checkout the Top-10 Shops
          </div>
          <Button className="bg-pink-500 h-15 font-bold md:h-18 md:w-32">
            <Link to="/about">Read More </Link>
          </Button>
        </div>
      </div>
      <div className="col-span-7 pb-2">
        <div className="flex flex-wrap">
          <div className="w-full flex flex-wrap">
            {[...Array(6)].map((_, index) => (
              <div className={`px-4 ${getGridColumnClass(index)}`} key={index}>
                <Link to="/shop">
                  <img
                    src="https://api.pinupcoupons.com/uploads/images/ZAActiveStorage_VS/abcdepotuk.webp"
                    alt="Logos"
                    className={`rounded-full w-[8vh] p-2 h-[8vh] ${getColumnVisibilityClass(
                      index
                    )}`}
                  />
                  <p
                    className={`text-xs text-slate-300 ${getColumnVisibilityClass(
                      index
                    )}`}
                  >
                    ABC Depot
                  </p>
                </Link>
              </div>
            ))}
          </div>
          <div className="w-full flex flex-wrap">
            {[...Array(6)].map((_, index) => (
              <div
                className={`px-4 ${getGridColumnClass(index + 6)}`}
                key={index + 6}
              >
                <Link to="/shop">
                  <img
                    src="https://api.pinupcoupons.com/uploads/images/ZAActiveStorage_VS/abcdepotuk.webp"
                    alt="Logos"
                    className={`rounded-full w-[8vh] p-2 h-[8vh] ${getColumnVisibilityClass(
                      index + 6
                    )}`}
                  />
                  <p
                    className={`text-xs text-slate-300 ${getColumnVisibilityClass(
                      index + 6
                    )}`}
                  >
                    ABC Depot
                  </p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};