import React, { useState, useEffect } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const Slides = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slidesCount = 3; // Total number of slides

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((currentSlide + 1) % slidesCount);
    }, 3000); // Change the interval value to adjust the time between slides (3000ms = 3 seconds)

    return () => clearInterval(interval);
  }, [currentSlide, slidesCount]);

  const handleNext = () => {
    setCurrentSlide((currentSlide + 1) % slidesCount);
  };

  const handlePrevious = () => {
    setCurrentSlide((currentSlide - 1 + slidesCount) % slidesCount);
  };

  return (
    <div className="md:grid md:grid-cols-12">
      <div className="md:col-span-1"></div>
      <Carousel className="md:col-span-10">
        <CarouselContent currentSlide={currentSlide}>
          <CarouselItem>
            <img
              className="w-full"
              src="https://t3.ftcdn.net/jpg/05/71/06/76/360_F_571067620_JS5T5TkDtu3gf8Wqm78KoJRF1vobPvo6.jpg"
              alt=""
            />
          </CarouselItem>
          <CarouselItem>
            <img
              className="w-full"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR14NETh5SYT4HXp3KvnmgmvB5xNqj0a1oEKw&usqp=CAU"
              alt=""
            />
          </CarouselItem>
          <CarouselItem>
            <img
              src="https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630"
              alt=""
              className="w-full"
            />
          </CarouselItem>
        </CarouselContent>
        <CarouselNext className="hidden sm:block bg-gray-400" onClick={handleNext} />
        <CarouselPrevious className="bg-gray-400 hidden sm:block" onClick={handlePrevious} />
      </Carousel>
    </div>
  );
};