import React from 'react'
import LatestJobCards from './LatestJobCards';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';


const LatestJobs = () => {
  const {allJobs} = useSelector(store=>store.job);
  return (
    <div className="max-w-7xl mx-auto my-20 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold"><span className="text-[#6A38C2 ]">Latest & Top</span> Job Openings</h1>
        <motion.div
                  initial={{opacity:0,y:-100}}
                   animate={{opacity:1,y:0}}
                   exit={{opacity:0,y:-100}}
                   transition={{duration:0.3}}
         className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 my-5">
         {
            allJobs.length <= 0 ? <span>No Job Available</span> :allJobs?.slice(0,6).map((job) => <LatestJobCards key={job._id} job={job}/>)
         }
             
        </motion.div> 
    </div>
  )
}

export default LatestJobs
