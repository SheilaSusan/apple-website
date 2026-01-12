import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Highlights from "./components/Highlights"


const App = () => {

  return (
    <main className="bg-black text-white min-h-screen">
      <Navbar />
      <Hero />
      <Highlights />
    </main>
  )
}

export default App
