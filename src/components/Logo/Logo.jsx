import { Link } from "react-router-dom"
const Logo = ()=>{
    return(
        <div className="logo-box">
        <Link to="/home"><img src="../src/Images/logo.png" alt="logo" className=" logo"/></Link>
           </div>
    )
}

export default Logo;