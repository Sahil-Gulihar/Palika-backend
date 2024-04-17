import CategorySlider from "@/components/CategorySlider";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Navbar } from "@/components/Navbar";
import { Slides } from "@/components/Slides";
import { Topcat } from "@/components/Topcat";
import { TopShops } from "@/components/Topshops";


export const Dashboard = () => {
  return (
    <>
      <div className="bg-black">
        <Header />
        <Navbar />
        <div className="flex justify-center"></div>
        <Slides />
      </div>
      <Topcat />
      <TopShops />
      {/* Do we need an element here? */}
      

     

      <div className="grid grid-cols-12 p-4 bg-blue-100">
        <img
          src="https://www.offerpalika.com/images/about.jpg"
          className="h-[20vh] col-span-5 gap-2"
          alt="lol"
        />
        <div className="col-span-0.2 md:hidden inline"></div>
        <div className="col-span-6 ">
          <div className="font-bold underline text-cyan-500">
          Who we are?
          </div>
          
          <div className="font-semibold ">Have you ever wondered who is behind it? We will see.</div>
           <div className="md:hidden inline">
           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin risus facilisis suscipit. 
          </div> 
          <div className="hidden md:block">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut nisi id risus facilisis suscipit. Mauris accumsan nisl mauris, quis aliquam turpis ultricies quis. Mauris rutrum, felis blandit sodales bibendum, massa elit consectetur felis, eu vulputate nulla sem vestibulum quam. Nullam ullamcorper ac eros quis cursus. Fusce placerat accumsan dolor, in dapibus dui posuere quis. Cras quis semper diam, vel imperdiet justo. Sed ac feugiat nulla, a tempus lacus. Sed sed semper neque, vitae finibus purus. Aliquam fermentum, est eu mattis imperdiet, neque velit facilisis mauris, a auctor leo urna in nulla. 
          </div> 
        </div>
      </div>
      <CategorySlider />
      <Footer />
    </>
  );
};
