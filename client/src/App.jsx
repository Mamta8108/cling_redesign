import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Services from "./components/Services";
import Clients from "./components/Clients";
import Testimonial from "./components/Testimonials";

export default function App(){
  return (
    <>
    <Navbar />
      <main id="top" style={{ height: "200vh" }}>
        <h1>Test content</h1>
         <Hero />
        <Stats />
        <Services />
        <Clients />
        <Testimonials />
      </main>
    </>
  )
}