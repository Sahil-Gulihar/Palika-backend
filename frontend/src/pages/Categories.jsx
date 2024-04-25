import { Header } from "@/components/Header";
import { Navbar } from "@/components/Navbar";
import { Cards } from "@/components/Cards";
import CategorySlider from "@/components/CategorySlider";
import { Footer } from "@/components/Footer";

export const Categories = () => {
  return (
    <>
      <div className="bg-black">
        <Header />
        <Navbar />
      </div>
      {/* <img
        src="https://www.offerpalika.com/images/about.webp"
        className=""
        alt="wow"
      /> */}

      <Cards />
      <CategorySlider />
      <Footer />
    </>
  );
};
