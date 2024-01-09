import Footer from "./components/Footer/Footer"
import Hero from "./components/Hero/Hero"
import NavBar from "./components/NavBar/NavBar"

const App = () => {
  return (
    <div className=" bg-black h-screen font-ubunto scroll-smooth">
      <NavBar/>
      <Hero/>
      <Footer/>
    </div>
  )
}

export default App