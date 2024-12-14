import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth";



const AddJob = () => {
const navigate = useNavigate()
const {user}=useAuth()
    const handleAddJob = e=>{
        e.preventDefault()
        const formData = new FormData(e.target);
        // console.log(formData.entries())
        const initialData = Object.fromEntries(formData.entries())
        console.log(initialData)
        const {min,max,currency,...newJob}= initialData
        console.log(newJob)
        newJob.salaryRange = {min,max,currency}
        newJob.requirements = newJob.requirements.split('\n')
        newJob.responsibilities = newJob.responsibilities.split('\n')
        console.log(newJob)
        fetch('http://localhost:5000/jobs',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(newJob)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.insertedId)
                          Swal.fire({
                              position: "top-end",
                              icon: "success",
                              title: "job has has been saved",
                              showConfirmButton: false,
                              timer: 1500
                            });
                            navigate('/myPostedJobs')
                      })
    }
    return (
        <div>
             <form onSubmit={handleAddJob}  className="w-full  card-body items-center ">
      
     
      <div className=" border w-full lg:p-8 p-8 shadow-lg">
      <h2 className=" font-bold text-4xl text-center ">Add Job</h2>
         
          {/* job title */}
          <div className=" form-control w-full">
           <label className="label">
               <span>Job title</span>
             
           </label>
           <input className="input input-bordered " type="text" name="title" id="" placeholder="job title" required />
          </div>
          {/* job location */}
          <div className=" form-control">
           <label className="label">
               <span>Job location</span>
             
           </label>
           <input className="input input-bordered " type="text" name="location" id="" placeholder="job location" required />
          </div>
          {/* job type */}
          <div className=" form-control">
           <label className="label">
               <span>Job type</span>
             
           </label>
           <select defaultValue='Pick a job type' className="select select-ghost w-full max-w-xs">
  <option disabled >Pick a job type</option>
  <option>full time </option>
  <option>Intern</option>
  <option>part time</option>
</select>
          </div>
          {/* job field */}
          <div className=" form-control">
           <label className="label">
               <span>Job field</span>
             
           </label>
           <select defaultValue='Pick a job field' className="select select-ghost w-full max-w-xs">
  <option disabled>Pick a job field</option>
  <option>engineering </option>
  <option>marketing</option>
  <option>finance</option>
  <option>teaching</option>
</select>
          </div>
         {/*salary range */}
         <div className=" grid grid-cols-1 md:grid-cols-3 gap-4">
         <div className=" form-control">
           <label className="label">
               <span>salary range</span>
             
           </label>
           <input className="input input-bordered " type="text" name="min" id="" placeholder="min salary range" required />
          </div>
         <div className=" form-control">
           <label className="label">
               <span>max range</span>
             
           </label>
           <input className="input input-bordered " type="text" name="max" id="" placeholder="max salary range" required />
          </div>
           {/* job field */}
           <div className=" form-control">
           <label className="label">
               <span>Job currency</span>
             
           </label>
           <select defaultValue='currency' name ='currency' className="select select-ghost w-full max-w-xs">
  <option disabled >Currency</option>
  <option>USD </option>
  <option>BDT</option>
  <option>INR</option>

</select>
          </div>
          </div>
            {/* job description */}
            <div className=" form-control w-full">
           <label className="label">
               <span>Job description</span>
             
           </label>
           <textarea className="textarea textarea-primary" name ='description' placeholder="job description" required></textarea>
          </div>
   {/* company name */}
   <div className=" form-control">
           <label className="label">
               <span>company name</span>
             
           </label>
           <input className="input input-bordered " type="text" name="company" id="" placeholder="company name" required />
          </div>
 {/* job requirement */}
 <div className=" form-control w-full">
           <label className="label">
               <span> job requirements</span>
             
           </label>
           <textarea className="textarea textarea-primary" name ='requirements' placeholder=" each requirements put in a new line
           " required></textarea>
          </div>
 {/* job responsibilities */}
 <div className=" form-control w-full">
           <label className="label">
               <span> job responsibilities</span>
             
           </label>
           <textarea className="textarea textarea-primary" name ='responsibilities' placeholder="  job responsibilities
           " required></textarea>
          </div>
           {/* HR name */}
   <div className=" form-control">
           <label className="label">
               <span>HR name</span>
             
           </label>
           <input className="input input-bordered " type="text" name="hr_name" id="" placeholder="HR name" required />
          </div>
           {/* HR Email */}
   <div className=" form-control">
           <label className="label">
               <span>HR Email</span>
             
           </label>
           <input className="input input-bordered " type="text" defaultValue={user?.email} name="hr_email" id="" placeholder="HR Email" required />
          </div>
           {/*Application Deadline */}
   <div className=" form-control">
           <label className="label">
               <span>Application Deadline</span>
             
           </label>
           <input className="input input-bordered " type="date" name="deadline" id="" placeholder="Application Deadline" required />
          </div>
           {/* company logo url */}
   <div className=" form-control">
           <label className="label">
               <span>company logo url</span>
             
           </label>
           <input className="input input-bordered " type="url" name="company_logo" id="" placeholder="company logo url" required />
          </div>
          {/* submit button */}
      <button className="btn  my-2 w-full btn-warning">Submit </button>
  
      </div>
    
      
         </form>
        </div>
    );
};

export default AddJob;