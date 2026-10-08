import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Services from "./components/Services";
import Clients from "./components/Clients";
import Testimonial from "./components/Testimonials";
import Team from "./components/Team";
import Footer from "./components/Footer";

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
        <Testimonial />
       <Team />
       <Footer/>
      </main>
    </>
  )
}