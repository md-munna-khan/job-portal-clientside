import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";



const Navbar = () => {
    const {user,logOut}=useContext(AuthContext)
    const handleLogOut=()=>{
        logOut()
        .then(()=>{
            console.log('log out successful')
        })
        .catch((error=>{
            console.log('failed sign out')
        }))
    }
    return (
        <section className="flex justify-between items-center">
         {/* logo */}
         <div>
<h4 className="lg:text-5xl text-3xl">JOB_PORTAL</h4>
         </div>
         {/* structure */}
         <div className="flex gap-4">
<p><Link to='/'>Home</Link></p>
<p><Link to='/my-applications'>My Applications</Link></p>
<p><Link to='/add-job'>Add A Job</Link></p>
<p><Link to='/myPostedJobs'>My Posted Jobs</Link></p>

         </div>
         {/* button */}
         <div className="flex gap-4">
            {
                user? <> <button className="btn btn-warning" onClick={handleLogOut}>Log Out</button></>:<>
                     <p><Link to='/login'>Login</Link></p>
                     <p><Link to='/register'>Register</Link></p>
                </>
            }
    

         </div>
        </section>
    );
};

export default Navbar;