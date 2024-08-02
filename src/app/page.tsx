import Header from "./components/Header";
import Hero from "./components/Hero";
import StatisticsPage from "./components/Statistics";
import ServicePage from "./components/ServicePage";
import Content from "./components/Content";
import IndustryPage from "./components/Industry";
import Customer from "./components/customer/page";
import Testimonial from "./components/Testimonial";
import Footer from "./components/Footer";
import Info from "./components/Info";
import Contact from "./components/Contact/page";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Info />
      <Header />
      <Hero />
      <StatisticsPage />
      <ServicePage />
      {/* <Content /> */}
      <IndustryPage />
      <Testimonial />
      <Customer />
      <Contact />
      <Footer />
    </main>
  );
}
