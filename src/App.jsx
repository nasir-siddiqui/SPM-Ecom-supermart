import react from "react"

// components
import Header from "../src/components/Header"
import Category from "./components/Category";
import Hero from "./components/Hero";
import DisplayProduct from "./components/DisplayProduct";
import Footer from "./components/Footer";





function App() {
  return (
    <>
      <Header />
      <div className="flex justify-center mx-4 ">
        <div className="flex flex-col place-items-center justify-center max-w-full bg-green-100 px-2">
          <Category />
          <Hero />
          <DisplayProduct />
        </div>
      </div>
      <Footer />

    </>
  )
}

export default App
