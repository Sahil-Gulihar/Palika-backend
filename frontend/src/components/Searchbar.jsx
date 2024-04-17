export const SearchBar = () => {
  return (
    <div className="bg-white p-4 col-g gap-x-4 h-12 rounded-3xl overflow-hidden md:w-[120vh] flex items-center">
      <div className="flex-1">
        <input
          type="text"
          placeholder="Search"
          className="focus:border-transparent focus:outline-none w-full"
        />
      </div>
      <div className="ml-4">
        <button className="bg-blue-700 w-10 h-10 p-2 flex items-center rounded-full
         justify-end">
          <svg
            className="w-6 h-6 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeWidth="2"
              d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};
