import Navbar from "./components/Navbar.jsx"
import Hero from "./components/Hero.jsx"
import Features from "./components/Features.jsx"
import Footer from "./components/Footer.jsx"
function App() {
  



  return (
    <div className="flex min-h-screen flex-col bg-[#FFF9F2] text-[#800020]">
      <Navbar/>
      <Hero/>
      
      <Features/>
      <Footer/>

      
    </div>
  );
}

export default App;