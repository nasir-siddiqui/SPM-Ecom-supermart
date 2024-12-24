import react from "react"

// components
import Header from "../src/components/Header"
import Category from "./components/Category";
import Hero from "./components/Hero";
import DisplayProduct from "./components/DisplayProduct";





function App() {
  return (
    <>
    <Header />
    <div className="mx-4">
      <Category />
      <Hero />
      {/* <DisplayProduct /> */}
    </div>
    
    </>
  )
}

export default App
