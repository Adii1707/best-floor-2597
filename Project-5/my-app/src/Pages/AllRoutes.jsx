import {Routes, Route} from "react-router-dom";
import {Home} from "./Home";
import Login from "./Login";
import SignUp from "./SignUp";
import Cart from "./Cart";




const AllRoutes = ()=>{
    return (
        <>
        <Routes>
            <Route path= "/" element= {<Home/>}></Route>
            <Route path= "/Login" element= {<Login/>}></Route>
            <Route path= "/Cart" element= {<Cart/>}></Route>
            <Route path= "/SignUp" element= {<SignUp/>}></Route>
        </Routes>
        </>
    )
}
export default AllRoutes;