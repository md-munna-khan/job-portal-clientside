import {
  createBrowserRouter,
 
} from "react-router-dom";
import MainLayout from "../layout/MainLayout";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "../Home/Home";
import JobDetails from "../Jobinfo/JobDetails";
import PrivateRoute from "./PrivateRoute";
import JobApply from "../Jobinfo/JobApply";
import MyApplications from "../MyApplications/MyApplications";
import AddJob from "../Jobinfo/AddJob";
import MyPostedJobs from "../Jobinfo/MyPostedJobs";
import ViewApplications from "../Jobinfo/ViewApplications";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement:<p className="text-red-600 text-center">404 Not Found Page</p>,
    children:[
      {
     
          path:'/',
        element:<Home></Home>
      },
      {
     
          path:'/job-details/:id',
      element:<PrivateRoute><JobDetails></JobDetails></PrivateRoute>,
      loader:({params})=>fetch(`http://localhost:5000/jobs/${params.id}`)
      },
      {
     
          path:'/job-apply/:id',
          element:<PrivateRoute><JobApply></JobApply></PrivateRoute>
      },
      {
     
          path:'/my-applications',
          element:<PrivateRoute><MyApplications></MyApplications></PrivateRoute>
      },
      {
     
          path:'/add-job',
          element:<PrivateRoute><AddJob></AddJob></PrivateRoute>
      },
      {
     
          path:'/myPostedJobs',
          element:<PrivateRoute><MyPostedJobs></MyPostedJobs></PrivateRoute>
      },
      {
     
          path:'/view-applications/:job_id',
          element:<PrivateRoute><ViewApplications></ViewApplications></PrivateRoute>,
          loader:({params})=> fetch(`http://localhost:5000/job-applications/jobs/${params.job_id}`)
      },
      {
     
          path:'/login',
          element:<Login></Login>
      },
      {
     
          path:'/register',
          element:<Register></Register>
      },
      
     {

     }
    ]
    
  },
]);
export default router