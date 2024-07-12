import React from "react";
import Navbar from "../../component/Navbar";
import Hero from "../../component/Hero";
import Meditation from "../../component/Meditation";
import Education from "../../component/Education";
import Faq from "../../component/Faq";
import Footer from "../../component/Footer";
import Testimoni from "../../component/Testimoni";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Meditation />
      <Education />
      <Testimoni />
      <Faq />
      <Footer />
    </div>
  );
}
