import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";

const App = () => {
  return (
    <div className="bg-black h-full font-ubunto scroll-smooth">
     
        <NavBar />
        <Outlet />
        <Footer />
    </div>
  );
};

export default App;
