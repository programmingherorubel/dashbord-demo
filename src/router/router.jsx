import { createBrowserRouter } from "react-router-dom";
import Main from "../pages/Main";
import App from '../App'
import Dashbord from "../pages/Dashbord/Dashbord";
import DashbordHome from "../pages/Dashbord/DashbordHome";
import Market from "../pages/Dashbord/Market";
import Hotel from "../pages/Dashbord/Hotel";

const router = createBrowserRouter(
    [
        {
            path:'/',
            element:<Main/>,
            children:[
                {
                    path:'/',
                    element:<App/>
                }
            ]
        },
        {
            path:'/dashbord',
            element:<Dashbord/>,
            children:[
                
                {
                    path:'/dashbord/market',
                    element:<Market/>
                },
                {
                    path:'/dashbord/hotel',
                    element:<Hotel/>
                },
            ]
        }

    ]
)


export default router 