import { Link, useLoaderData } from "react-router-dom";


const JobDetails = () => {
    const{_id,title ,applicationDeadline,jobType,} =useLoaderData()
   
    return (
        <div className="p-8 border my-10">
        <p>{title}</p>
        <p>{applicationDeadline}</p>
        <p>{jobType}</p>
      <Link to={`/job-apply/${_id}`}>
      <button className="btn btn-warning">Apply now</button>
      </Link>
        </div>
    );
};

export default JobDetails;