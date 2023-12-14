import "../Menu/menu.css";
import { Link } from "react-router-dom"
const Menu = ()=>{

  
    return(
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-center">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        
        <li className="nav-item">
          <Link className="nav-link" to="/foods">Foods</Link>
        </li>

        <li className="nav-item ">
          <Link className="nav-link " to="/snacks" role="button" >
            Snacks
          </Link>
          
        </li>
        <li className="nav-item ">
          <Link className="nav-link " to="/drinks" role="button" >
            Drinks
          </Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link"  to="/about">About</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/login"><i class="fa-solid fa-right-to-bracket"></i></Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/cart"><i class="fa-solid fa-cart-shopping fs-3 cart"></i></Link>
        </li>
       
      </ul>
    )

    const CustomLink = ({ to, children, ...props})=>{
      const path = window.location.pathname

      return(
        <li className={path === to ? "active" : ""}>
          <Link to={to} {...props} >
          {children}
          </Link>
        </li>
      )
    }
}

export default Menu;