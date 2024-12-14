
import Lottie from 'lottie-react';
import loginJson from '../../assets/login.json'
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import SocialLogin from '../../common/SocialLogin';
import { useLocation, useNavigate } from 'react-router-dom';
const Login = () => {
const {NewUserLogin}=useContext(AuthContext)

const location = useLocation();
const navigate = useNavigate()
console.log('in login page',location)
const form = location.state|| '/';
    const handleLogin = e=>{
        e.preventDefault()
       
        
        const email = e.target.email.value
        const password = e.target.password.value
     
        console.log(email,password)
        NewUserLogin(email,password)
        .then((result)=>{
            console.log(result.user)
            navigate(form)
        })
        .catch((error)=>{
            console.log(error)
        })
    }
    return (
        <div className="  min-h-screen  my-10 justify-center">
        <form onSubmit={handleLogin} className="w-full  card-body grid grid-cols-6 items-center ">
      
     
     <div className="md:col-span-3 col-span-6 border lg:p-8 p-4 shadow-lg">
     <h2 className=" font-bold text-4xl text-center ">Login Now</h2>
        
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
       
     <button className="btn  my-2 w-full btn-warning">Login </button>
     <SocialLogin></SocialLogin>
     </div>
     <div className="md:col-span-3 col-span-6">
<Lottie animationData={loginJson}></Lottie>
     </div>
     
        </form>
      </div>
    );
};

export default Login;