import { useEffect, useState } from "react";
import { data } from "react-router-dom";
import HotJObsCard from "./HotJObsCard";


const HotJobs = () => {
const [jobs,setJobs]=useState([])
    useEffect(()=>{
fetch('http://localhost:5000/jobs')
.then(res=>res.json())
.then(data=>setJobs(data))

    },[])
    return (
        <div>
            <div className=" items-center gap-4 my-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                {
                    jobs.map(job=><HotJObsCard key={job._id} job={job}></HotJObsCard>)
                }
            </div>
        </div>
    );
};

export default HotJobs;