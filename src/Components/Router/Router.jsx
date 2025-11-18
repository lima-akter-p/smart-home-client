import React from 'react';
import { createBrowserRouter } from "react-router";
import HomeLayout from '../Layout/HomeLayout';
import Home from '../../Pages/Home/Home';
import AllProperties from '../../Pages/Home/AllProperties/AllProperties';
import AuthLayout from '../Layout/AuthLayout';
import Login from '../../Pages/Login/Login';
import Register from '../../Pages/Register/Register';

import MyRatings from '../../Pages/MyRatings/MyRatings';
import AddProperties from '../../Pages/AddProperties/AddProperties';
import MyProperties from '../../Pages/MyProperties/MyProperties';
import PrivateRoute from './PrivateRoute';
import ViewDetails from '../../Pages/ViewDetails';
import UpdateProperty from '../UpdateProperty/UpdateProperty';





 export const router = createBrowserRouter([

    {
        path:"/",
        element:<HomeLayout></HomeLayout>,

        children: [
            {
                index:true,
                
                element:<Home></Home>
                
                
            },
            {
                path:"/all-properties",
                element:<AllProperties></AllProperties>
            },
            {
                path:"/my-properties",
                element:   <PrivateRoute><MyProperties></MyProperties> </PrivateRoute> 
            },
            {
                path:"/my-ratings",
                element:<PrivateRoute><MyRatings></MyRatings></PrivateRoute>
            },
            {
                path:"/add-properties",
                element:<PrivateRoute><AddProperties></AddProperties></PrivateRoute>
            },
            {
                path:"/view-details",
                element:<PrivateRoute><ViewDetails></ViewDetails></PrivateRoute>
            },
            {
                path:"/update-property/:id",
                element:<PrivateRoute><UpdateProperty></UpdateProperty>
                </PrivateRoute>
                
            }
        
         
        ]

    },
    {
        path:'/auth',
        element:<AuthLayout></AuthLayout>,
        children:[
          
            {
                path:"/auth/login",
                element:<Login></Login>
            },
            {
                path:"/auth/register",
                element:<Register></Register>
            }
        ]
    }
    

])


