import { Link } from "react-router-dom";
import "../Footer/footer.css";

const Footer = ()=>{
    const currentYear = new Date().getFullYear();
    return(
        <div className="container-fuild">
  <div className="py-5  footer">
    <ul className="nav justify-content-center  pb-3 mb-3">
      <li className="nav-item"><Link to="/home" className="nav-link px-2 text-body-secondary">Home</Link></li>

      <li className="nav-item"><Link to="/foods" className="nav-link px-2 text-body-secondary">Foods</Link></li>

      <li className="nav-item"><Link to="/snacks" className="nav-link px-2 text-body-secondary">Snacks</Link></li>

      <li className="nav-item"><Link to="/drinks" className="nav-link px-2 text-body-secondary">Drinks</Link></li>

      <li className="nav-item"><Link to="/about" className="nav-link px-2 text-body-secondary">About</Link></li>
    </ul> 

    
    <p className="text-center text-body-secondary">© {currentYear} Swift Buy</p>
  </div>
</div>
    )
}

export default Footer;