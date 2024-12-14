import Lottie from "lottie-react";

import lottieAnimation from '../../assets/register.json'
import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";
import SocialLogin from "../../common/SocialLogin";
const Register = () => {
const {createUser} = useContext(AuthContext)
const handleRegister = e=>{
    e.preventDefault()
   
    const name = e.target.name.value
    const email = e.target.email.value
    const password = e.target.password.value
 
    console.log(name,email,password)
    createUser(email,password)
    .then((result)=>{
        console.log(result.user)
    })
    .catch((error)=>{
        console.log(error)
    })
}

    return (
        <div className="  min-h-screen  my-10 justify-center">
          <form onSubmit={handleRegister} className="w-full  card-body grid grid-cols-6 items-center ">
        
       
       <div className="md:col-span-3 col-span-6 border lg:p-8 p-4 shadow-lg">
       <h2 className=" font-bold text-4xl text-center ">Register Now</h2>
               {/* input */}
           <div className=" form-control ">
            <label className="label">
                <span>full name</span>
              
            </label>
            <input className="input input-bordered " type="text" name="name" id="" placeholder="Full Name" required />
           </div>
           {/* input */}
           <div className=" form-control">
            <label className="label">
                <span>email</span>
              
            </label>
            <input className="input input-bordered " type="email" name="email" id="" placeholder="email" required />
           </div>
           {/* input */}
           <div className=" form-control">
            <label className="label">
                <span>Password</span>
              
            </label>
            <input className="input input-bordered " type="password" name="password" id="" placeholder="password" required />
            <label className="label">
                <span>Forget password</span>
              
            </label>
           </div>
         
       <button className="btn  my-2 w-full btn-warning">Register </button>
          <SocialLogin></SocialLogin>
       </div>
       <div className="md:col-span-3 col-span-6">
<Lottie animationData={lottieAnimation}></Lottie>
       </div>
         
          </form>
        </div>
    );
};

export default Register;