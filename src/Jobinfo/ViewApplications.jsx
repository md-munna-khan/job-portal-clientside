import { useLoaderData } from "react-router-dom";


const ViewApplications = () => {
    const applications = useLoaderData()
    const handleStatusChange = (e,id)=>{
     console.log(e.target.value,id)
     const data = {
      status:e.target.value
     }
     fetch(`http://localhost:5000/job-applications/${id}`,{
      method:"PATCH",
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(data)
     })
     .then(res =>res.json())
     .then(data=> {
      console.log(data)
     })
    }
    return (
        <div>
            <h2>applications for this job:{applications.length}</h2>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>email</th>
        <th>status</th>
        <th>update status</th>
      
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
    {
        applications.map((job,idx)=>  <tr key={job._id} className="bg-base-200">
            <th>{idx+1}</th>
            <td>{job.application_email}</td>
         <td>
          {/* xs */}
<select onChange={(e)=> handleStatusChange(e,job._id)} defaultValue={job.status|| 'change status'} className="select select-bordered select-xs w-full max-w-xs">
  <option disabled selected>change status</option>
  <option>Under Review </option>
  <option>set Interview</option>
  <option>Hired</option>
  <option>Rejected</option>
</select>
         </td>
           
          </tr>)
    }
   
    </tbody>
  </table>
</div>
        </div>
    );
};

export default ViewApplications;