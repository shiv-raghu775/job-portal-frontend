import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Button } from "./ui/button";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setSearchedQuery } from "@/redux/jobSlice";

const category = [
  "Frontend Developer",
  "Backend Developer",
  "Data Analyst",
  "Graphic Designer",
  "FullStack Developer",
  "UI/UX Designer",
];

const CategoryCarousel = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const searchJobHandler = (query) =>{
        dispatch(setSearchedQuery(query));
        navigate("/browse")
    }

  return (
    <div>
      <Carousel className="w-full max-w-xl mx-auto my-10 px-10 sm:px-0">
        <CarouselContent>
          {category.map((cat, index) => (
            <CarouselItem
              key={index}
              className="md:basis-1/2 lg:basis-1/3"
            >
              <Button
                variant="outline"
                className="rounded-full bg-slate-100 px-3 py-2"
                onClick={()=> searchJobHandler(cat)}
              >
                {cat}
              </Button>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default CategoryCarousel;