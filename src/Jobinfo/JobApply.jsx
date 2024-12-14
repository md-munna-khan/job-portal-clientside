import { useNavigate, useParams } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";




const JobApply = () => {
   const {id}=useParams()
    const { user}=useAuth()
    const navigate = useNavigate()
    // const {user}= useContext(AuthContext)
    console.log('job_id',id)
    console.log('user',user)
    const handleJobApply = e=>{
        e.preventDefault()
        const form =e.target 
        const linkdIn = form.linkdIn.value
        const github = form.github.value
        const resume = form.resume.value
        console.log(linkdIn,github,resume)
        const jobApplication = {
            job_id: id,
            application_email:user.email,
            linkdIn,
            github,
            resume
        }

        fetch('http://localhost:5000/job-applications',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(jobApplication)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.insertedId)
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your work has been saved",
                    showConfirmButton: false,
                    timer: 1500
                  });
                  navigate('/my-applications')
            }
    )
    }
    return (
        <div>
            <form onSubmit={handleJobApply} className="w-full  card-body grid grid-cols-6 items-center ">
    
      <div className="md:col-span-3 col-span-6 border lg:p-8 p-4 shadow-lg">
      <h2 className=" font-bold text-4xl text-center ">Apply Now</h2>
         
          {/* input */}
          <div className=" form-control">
           <label className="label">
               <span>LinkdIn</span>
             
           </label>
           <input className="input input-bordered " type="url" name="linkdIn" id="" placeholder="linkdIn Url" required />
          </div>
          {/* input */}
          <div className=" form-control">
           <label className="label">
               <span>github</span>
             
           </label>
           <input className="input input-bordered " type="url" name="github" id="" placeholder="github Url" required />
          
          </div>
          {/* input */}
          <div className=" form-control">
           <label className="label">
               <span>Resume</span>
             
           </label>
           <input className="input input-bordered " type="url" name="resume" id="" placeholder="resume Url" required />
          
          </div>
        
      <button className="btn  my-2 w-full btn-warning">Apply </button>
      
      </div>
      <div className="md:col-span-3 col-span-6">

      </div>
      
         </form>
        </div>
    );
};

export default JobApply;

