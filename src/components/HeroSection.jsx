import { setSearchedQuery } from "@/redux/jobSlice";
import { Button } from "@base-ui/react";
import { Search } from "lucide-react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const[query , setQuery] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const searchJobHandler = () =>{
      dispatch(setSearchedQuery(query));
      navigate("/browse")
  }

  return (
    <div className="text-center">
      <div className="flex flex-col gap-5 my-10">
        <span className="mx-auto px-4 py-2 rounded-full bg-gray-100 text-[#F83002] font-medium">
          No. 1 Job Hunt Website
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold">
          Search, Apply & <br /> Get Your{" "}
          <span className="text-[#6A38C2]">Dream Jobs</span>
        </h1>
        <p className="text-lg text-gray-600">
          Discover exciting opportunities, apply confidently, and take the next
          step toward your successful career.
        </p>
        <div className="flex w-[90%] sm:w-[70%] md:w-[50%] lg:w-[40%] shadow-lg border border-gray-200 pl-3 rounded-full mx-auto gap-4 items-center">
          <input
            type="text"
            placeholder=" Find your dream job"
            onChange={(e)=> setQuery(e.target.value)}
            className="pl-1 w-full outline-none  rounded-full"
          />
          <Button onClick={searchJobHandler} className="rounded-r-full bg-[#6A38C2] hover:bg-[#6A38C2]/90 text-white px-4 py-2">
            <Search className="w-5 h-5 " />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
