import Hero from "../components/Hero";
import LatestNews from "../components/LatestNews";
import Recommended from "../components/Recommended";
import Footer from "../components/Footer";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="text-gray-900">
      <Hero />
      <div className="mx-auto grid grid-cols-1 md:grid-cols-3 py-10">
        <div className="col-span-2">
          <LatestNews />
        </div>
        <div className="col-span-1 px-6">
          <Recommended />
        </div>
      </div>
      <Footer />
    </div>
  );
}
