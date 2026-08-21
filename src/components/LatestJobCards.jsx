import { motion } from "framer-motion";
import React from "react";
import { Badge } from "./ui/badge";
import { useNavigate } from "react-router-dom";

const LatestJobCards = ({job}) => {
  const navigate = useNavigate();
  return (
    <motion.div
  onClick={() => navigate(`/description/${job._id}`)}
  whileHover={{
    scale: 1.05,
    y: -5,
  }}
  whileTap={{
    scale: 0.98,
  }}
  transition={{
    type: "spring",
    stiffness: 300,
    damping: 15,
  }}
  className="p-5 rounded-md shadow-xl bg-white border border-gray-100 cursor-pointer"
>
      <div>
        <h1 className="font-medium text-lg">{job?.company?.name}</h1>
        <p className="text-sm text-gray-500">India</p>
      </div>
      <div>
        <h1 className='font-bold text-lg my-2'>{job?.title}</h1>
        <p className='text-sm text-gray-600'>{job?.description}</p>
      </div>
      <div className="flex items-center gap-2 mt-4">
        <Badge className="text-blue-700 rounded-full bg-slate-100 font-bold " variant="ghost">{job?.position} Positions</Badge>
        <Badge className="text-[#F28482] rounded-full bg-slate-200 font-bold  " variant="ghost">{job?.jobType} </Badge>
        <Badge className="text-[#7209b7] rounded-full bg-slate-200 font-bold " variant="ghost">{job?.salary}LPA</Badge>
      </div>
    </motion.div>
  );
};

export default LatestJobCards;
