import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Services from "./components/Services";

export default function App(){
  return (
    <>
    <Navbar />
      <main id="top" style={{ height: "200vh" }}>
        <h1>Test content</h1>
         <Hero />
        <Stats />
        <Services />
      </main>
    </>
  )
}