import CategorySlider from "@/components/CategorySlider"
import { Footer } from "@/components/Footer"
import { Header } from "@/components/Header"
import { Navbar } from "@/components/Navbar"

export const NotFound=()=>{
    return <div>
        <div className="bg-black">
        <Header />
        <Navbar />
        </div>
        <div className="flex justify-center p-6">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUA62yDeEorfWB5-JpjtYypNZ3uAR5YoC7Zw&usqp=CAU" alt="" />
            
        </div>
        <div className="flex justify-center p-6">
            Page Not Found
            
        </div>

        <CategorySlider />
        <Footer />
        
    </div>
}