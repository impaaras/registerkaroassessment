import { Star, Target, Users, Briefcase, PlayCircle } from "lucide-react";
import Link from "next/link";
import heroImage from "./images/hero.png";
import Logo from "./images/logo.png";
import Image from "next/image";
import { Footer } from "./components/Footer";
import { WelcomeSection } from "./components/WelcomeComponent";
import { StatusCount } from "./components/StatusCount";
import { FAQ } from "./components/FAQ";
import { MobileComponent } from "./components/MobileComponent";
import { Payment } from "./components/Payment";
import { BlogSection } from "./components/Blog";
import Companies from "./components/Companies";

import { About } from "./components/About";

import ServicesSection from "./components/ServicesSection";
import WhyChoose from "./components/WhyChoose";
import VideoIntro from "./components/VideoIntro";
import TestimonialsSection from "./components/TestimonialSection";
import ClientsSection from "./components/Clients";
import TrustedCompanies from "./components/TrustedCompany";
import Banner from "./components/Banner";
import HeroSection from "./components/HeroSection";

export default function Home() {
  return (
    <main>
      <Banner />
      <HeroSection />
      <TrustedCompanies />
      <ServicesSection />
      <About />
      <WhyChoose />
      <VideoIntro />
      <ClientsSection />
      <Payment />
      <BlogSection />
      <TestimonialsSection />
      <FAQ />
      <MobileComponent />
      <StatusCount />
      <WelcomeSection />
      <Companies />
      <Footer />
    </main>
  );
}
