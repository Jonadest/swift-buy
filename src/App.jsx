import Homepage from "./Pages/Homepage";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { Route, Routes} from 'react-router-dom';
import Login from "./Pages/Login Signup/Login";
import Foods from "./Pages/Foods/Foods";
import About from "./Pages/About/About";
import Snacks from "./Pages/Snacks/Snacks";
import Cart from "./Pages/Cart/Cart";
import Drinks from "./Pages/Drinks/Drinks";


const App = ()=>{
 
  return(
    <div className="container-fluid p-0">
      <Header />
      
        <Routes>
          <Route path="/home" element = {<Homepage/>}/>
          <Route path="/login" element = {<Login/>}/>
          <Route path="/about" element = {<About/>}/>
          <Route path="/foods" element = {<Foods/>}/>
          <Route path="/snacks" element = {<Snacks/>}/>
          <Route path="/cart" element = {<Cart/>}/>
          <Route path="/drinks" element = {<Drinks/>}/>
          
          
        </Routes>
        <Footer/>
      </div>
  
  )
}

export default App;