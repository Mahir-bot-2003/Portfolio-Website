import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Archives from "@/components/Archives";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Certifications from "@/components/Certifications";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />

        <About />

        <Skills />

        <Projects />

        <Archives />

        <Experience />

        <Education />

        <Certifications />

        <Achievements />

        <Contact />
      </main>
    </>
  );
}
