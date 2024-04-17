import { Link } from "react-router-dom";
export const Footer = () => {
  return (
    <div className="bg-gray-800 text-white">
      <div className="grid grid-cols-12 md:gap-2 gap-5">
        <div className="md:col-span-1 hidden md:inline"></div>
        <div className="md:col-span-3 col-span-12">
          <div className="font-bold md:text-2xl text-xl pb-2 md:p-2 font-poppins">
            Offer Palika
          </div>

          <div className="pb-1 md:pb-0">
            <input
              placeholder="Enter your Email"
              className="bg-gray-800 text-white font-bold border-b w-1/2 md:w-auto border-white"
            ></input>
          </div>
          <div className="md:py-2 py-1">
            <button className="rounded-full border border-white md:px-3 px-1 py-1 md:py-2 hover:bg-white hover:text-black">
              Subscribe
            </button>
          </div>
          <div className="md:py-4 py-1 text-slate-300">
            <span>Get monthly updates and free resources</span>
          </div>
        </div>
        <div className="md:col-span-3 col-span-12">
          <div className="font-bold text-xl font-poppins p-1 md:p-3">
            Mobirise
          </div>
          <div className="md:p-3">
            <div className="text-slate-300 text-base ">
              Phone: +1 (0) 000 0000 001
            </div>
            <div className="text-slate-300 text-base">
              <span className="hidden md:inline">
                Email: yourmail@example.com
              </span>
              <span className="md:hidden">Email: mail@gmail.com</span>
            </div>

            <div className="text-slate-300 text-base ">
              Address:1234 Street Name City, AA 99999
            </div>
          </div>
          <div className="hidden md:block">
            <span className="md:p-2 flex justify-start md:space-x-4">
              <div className="rounded-full border border-white inline-block">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkwn-6JQplQF4dcRnArxTpc5bX6tEEymNJ25UENOw54Q&s"
                  alt="Insta"
                  className="md:w-[4vh] md:p-2 p-0"
                />
              </div>
              <div className="rounded-full border border-white inline-block">
                <a href="https://www.facebook.com/people/Offer-Palika/61552570012818/" target="_blank">
                <img
                  src="https://i.imgur.com/oGm5Mej.png"
                  alt="fb"
                  className="md:w-[4vh]"
                />
                </a>
              </div>
              <div className="rounded-full border border-white inline-block">
                <a href="https://www.linkedin.com/company/100686834/admin/feed/posts/" target="_blank" rel="noopener noreferrer">
                <img
                  src="https://i.imgur.com/yFxHMpt.png"
                  alt="lINKEDiN"
                  className="md:w-[4vh]"
                />
                </a>
              </div>
              <div className="rounded-full border border-white inline-block">
                <img
                  src="https://i.pinimg.com/564x/e8/c9/82/e8c9828387de2a83e5469a95bc6d8574.jpg"
                  alt="Youtube"
                  className="md:w-[4vh] p-2"
                />
              </div>
            </span>
          </div>
        </div>
        <div className="md:col-span-2 col-span-6 md:p-3">
          <div className="font-bold md:text-xl font-poppins pb-1 md:pb-4">
            Recent News
          </div>
          <div className="text-slate-300 text-base "><Link to='/about'> About us</Link></div>
          <div className="text-slate-300 text-base ">Services </div>
          <div className="text-slate-300 text-base "><Link to='/contact'>Get In Touch </Link></div>
        </div>
        <div className="md:col-span-3 col-span-6 md:p-3">
          <div className="font-bold md:text-xl font-poppins pb-1 md:pb-4">Legal</div>
          <div className="text-slate-300 text-base "><Link to='/terms'>Terms and Conditions </Link></div>
          <div className="text-slate-300 text-base ">
          <Link to='/terms'>
            Data Protection regulations
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
