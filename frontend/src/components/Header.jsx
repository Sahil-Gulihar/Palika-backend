import { SearchBar } from "./Searchbar";
import { Button } from "@/components/ui/button";
export const Header = () => {
  return (
    <div className="flex justify-between flex-grow gap-5 items-center ">
      <a href="/">
        <img
          src="https://i.imgur.com/Utv88HY.png"
          alt="Palika logo"
          className="w-[14vh] md:w-[18vh]" ></img>
        
      </a>
      <SearchBar />
      <Button className="">Contact</Button>
    </div>
  );
};
