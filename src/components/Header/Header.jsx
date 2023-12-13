import "../Header/header.css";
import NavBar from "../NavBar/NavBar";

const Header = ()=>{
    return(
        <div className="header">
            
     <div className="logo-box">
<a href="#"><img src="../src/Images/logo.png" alt="logo" className=" logo"/></a>
   </div>

   <NavBar/>
   
   </div>
    )
}

export default Header;