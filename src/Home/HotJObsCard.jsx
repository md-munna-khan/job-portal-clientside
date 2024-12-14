import { p } from "motion/react-client";
import { Link } from "react-router-dom";


const HotJObsCard = ({job}) => {
    const {_id,title,location,jobType,category,salaryRange,description,requirements,responsibilities,company,status,applicationDeadline,company_logo}=job
    return (
        <div className="">
            <div className=" space-y-2 p-8 border rounded-md s shadow-lg ">
            <div className="flex items-center">
                <img className="w-12 " src={company_logo} alt="" />
            
              <p>{company}</p>
              <p>{location}</p>
              </div>
              <div className="pt-4" >
                <p className="text-2xl">{title}</p>
                <p>{description}</p>
              </div>
              <div>
                <p>category:{category}</p>
              </div>
              <div className=" flex-wrap flex gap-2">
                {
                    requirements.map((skill,idx)=><p key={idx} className="border p-2 rounded-md hover:bg-orange-500">
                        {skill}
                    </p>)
                }
              </div>
              <div>
              <p>salary: {salaryRange.min}-{salaryRange.max}</p>
              </div>
              {/* <button  className="btn btn-info"> Apply Now</button> */}
              <Link to={`/job-details/${_id}`}  className="btn btn-info"> Apply Now</Link>
            </div>
        </div>
    );
};

export default HotJObsCard;