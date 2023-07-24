import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import CollegeDetails from "../Pages/Home/Home/collegeDetails";
import AllColleges from "../Pages/AllColleges/AllColleges";
import AllCollegeDetails from "../Pages/AllColleges/AllCollegeDetails";
import Admission from "../Pages/Admission/Admission";
import AdmissionDetails from "../Pages/Admission/AdmissionDetails";
import MyCollege from "../Pages/MyCollege/MyCollege";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: 'login',
            element:<Login></Login>
        },
        {
          path:'signup',
          element: <SignUp></SignUp>
        },
        {
          path:'collegeDetails/:id',
          element: <CollegeDetails></CollegeDetails>,
          loader: ({params}) => fetch(`https://endgame-first-project-server.vercel.app/colleges/${params.id}`)
        },
        {
          path:'allCollegeDetails/:id',
          element: <AllCollegeDetails></AllCollegeDetails>,
          loader: ({params}) => fetch(`https://endgame-first-project-server.vercel.app/colleges/${params.id}`)
        },
        {
          path:'allColleges',
          element:<AllColleges></AllColleges>
        },
        {
          path:'admission',
          element:<Admission></Admission>
        },
        {
          path:'admission/:id',
          element:<AdmissionDetails></AdmissionDetails>,
          loader: ({params}) => fetch(`https://endgame-first-project-server.vercel.app/admission/${params.id}`)
        },
        {
          path:'myCollege',
          element: <MyCollege></MyCollege>
        }
      ]
    },
  ]);

  export default router;