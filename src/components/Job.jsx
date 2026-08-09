import React from "react";
import { Button } from "./ui/button";
import { Bookmark } from "lucide-react";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { useNavigate } from "react-router-dom";

const Job = () => {
  const navigate = useNavigate();
  const jobId = "abcd";
  return (
    <div className=" p-5 rounded-md shadow-xl bg-white border border-gray-100">
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-500">2 days ago</p>
        <Button variant="outline" className="rounded-full" size="icon">
          <Bookmark />
        </Button>
      </div>
      <div className="flex items-center gap-2 my-2">
        <Button className="p-6" variant="outline" size="icon">
          <Avatar>
            <AvatarImage src="https://i.pinimg.com/736x/db/4b/bd/db4bbdb49d44d22ec2ecc467a77c8182.jpg " />
          </Avatar>
        </Button>
        <div>
          <h1  className="font-medium text-lg">Company Name</h1>
          <p className="text-sm text-gray-500">India</p>
        </div>
      </div>

      <div>
        <h1 className="text-lg font-bold my-2">Title</h1>
        <p className="text-sm text-gray-600">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime eos
          eaque ipsa voluptas minus, velit optio veniam tempora id blanditiis!
        </p>
      </div>
      <div className="flex items-center gap-2 mt-4">
        <Badge
          className="text-blue-700 rounded-full bg-slate-100 font-bold "
          variant="ghost"
        >
          12 Positions
        </Badge>
        <Badge
          className="text-[#F28482] rounded-full bg-slate-200 font-bold  "
          variant="ghost"
        >
          Part Time{" "}
        </Badge>
        <Badge
          className="text-[#7209b7] rounded-full bg-slate-200 font-bold "
          variant="ghost"
        >
          24LPA
        </Badge>
      </div>
      <div className="flex items-center gap-4 mt-4">
        <Button onClick={()=>navigate(`/description/${jobId}`)} variant="outline">Details</Button>
        <Button className="bg-[#7209b7] text-white hover:bg-[#560bad]">Save for Later</Button>
      </div>
    </div>
  );
};

export default Job;
