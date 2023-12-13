import Homepage from "./Pages/Homepage";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";


const App = ()=>{
  return(
    <div className="container-fluid p-0">
      <Header />
      <Homepage/>
      <Footer/>
  </div>
  )
}

export default App;