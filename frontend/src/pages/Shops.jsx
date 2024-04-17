import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { Header } from "@/components/Header";
import { Navbar } from "@/components/Navbar";

export const Shops = () => {
  const items = Array.from({ length: 35 }, (_, index) => index + 1);
  return (
    <div>
      <div className="bg-black">
        <Header />
        <Navbar />
        <div className="flex justify-center"></div>
      </div>

      <div className="grid grid-cols-12">
        <div className="col-span-2"></div>

        <div className="col-span-8 flex">
          {" "}
          {/* Corrected typo: `col-span-8` instead of `cols-span-8` */}
          <div className="bg-gray-400">
            {items.map((item) => (
              <div className="px-4" key={item}>
                <Link to="/shop">
                  <img
                    src="https://api.pinupcoupons.com/uploads/images/ZAActiveStorage_VS/abcdepotuk.webp"
                    alt="Logos"
                    className="rounded-full w-[8vh] p-2 h-[8vh]"
                  />
                  <p className="text-xs text-slate-300">ABC Depot</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
