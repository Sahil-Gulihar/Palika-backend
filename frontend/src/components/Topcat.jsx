import { Link } from "react-router-dom";
export const Topcat = () => {
  return (
    <div className="text-center p-4">
      <div className="font-serif text-2xl pb-2 md:text-4xl text-green-600">
        TOP CATEGORIES
      </div>

      <div>
        <ul className="flex justify-between md:p-6 p-1">
          <li>
            <Link to="/xyz">
              <div className="relative w-[20vw] h-[20vw] transition ease-in-out duration-20000">
                <img
                  src="https://m.media-amazon.com/images/I/91Zb64yWENL._AC_SY200_.jpg"
                  alt=""
                  className="object-cover w-full h-full "
                />
                <p className="absolute w-full h-full flex items-center justify-center top-0 text-white font-bold bg-black/50 hover:text-2xl ">
                  Home Essentials
                </p>
              </div>
            </Link>
          </li>
          <li>
            <Link to="/xyz">
              <div className="relative w-[20vw] h-[20vw] transition ease-in-out duration-20000">
                <img
                  src="https://m.media-amazon.com/images/I/51ZpF7hDnvL._AC_SY200_.jpg"
                  alt=""
                  className="object-cover w-full h-full "
                />
                <p className="absolute w-full h-full flex items-center justify-center top-0 text-white font-bold bg-black/50 hover:text-2xl ">
                  Laptops
                </p>
              </div>
            </Link>
          </li>
          <li>
            <Link to="/xyz">
              <div className="relative w-[20vw] h-[20vw] transition ease-in-out duration-20000">
                <img
                  src="https://images-eu.ssl-images-amazon.com/images/G/31/Local/Wk12/Furn_1x._SY116_CB579146779_.jpg"
                  alt=""
                  className="object-cover w-full h-full "
                />
                <p className="absolute w-full h-full flex items-center justify-center top-0 text-white font-bold bg-black/50 hover:text-2xl ">
                  Furniture
                </p>
              </div>
            </Link>
          </li>
          <li>
            <Link to="/xyz">
              <div className="relative w-[20vw] h-[20vw] transition ease-in-out duration-20000">
                <img
                  src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF-1-186-116._SY116_CB636110853_.jpg"
                  alt=""
                  className="object-cover w-full h-full "
                />
                <p className="absolute w-full h-full flex items-center justify-center top-0 text-white font-bold bg-black/50 hover:text-2xl ">
                  Clothing
                </p>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
