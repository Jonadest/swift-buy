
import "../Footer/footer.css";

const Footer = ()=>{
    const currentYear = new Date().getFullYear();
    return(
        <div className="container-fuild">
  <div className="py-5  footer">
    <ul className="nav justify-content-center  pb-3 mb-3">
      <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Home</a></li>
      <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Foods</a></li>
      <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Snacks</a></li>
      <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Drinks</a></li>
      <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">About</a></li>
    </ul> 

    
    <p className="text-center text-body-secondary">© {currentYear} Swift Buy</p>
  </div>
</div>
    )
}

export default Footer;