import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import { Link } from "react-router-dom";


const MyPostedJobs = () => {
    const {user}=useAuth()
    const [jobs,setJobs]=useState([])
    useEffect(()=>{
        fetch(`http://localhost:5000/jobs?email=${user.email}`)
        .then(res=>res.json())
        .then(data=>{
            setJobs(data)
        })
    },[user.email])
    return (
        <div>
       <h2>     my posted jobs{jobs.length}</h2>
       
       <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>job title</th>
        <th>Deadline</th>
        <th>Application Count</th>
        <th>Applications</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
    {
        jobs.map((job,idx)=>  <tr key={job._id} className="bg-base-200">
            <th>{idx+1}</th>
            <td>{job.title}</td>
            <td>{job.applicationDeadline}</td>
            <td>{job.applicationCount}</td>
            <td>
                <Link to={`/view-applications/${job._id}`}>view Applications</Link>
            </td>
          </tr>)
    }
   
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MyPostedJobs;