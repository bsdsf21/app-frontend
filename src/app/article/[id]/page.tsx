import Article from "@/components/ArticleDetails";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Recommended from "@/components/Recommended";

export default function Home() {
  return (
    <div className="bg-gray-50 text-gray-900">
      <Header />
      <Hero />
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 py-10">
        <div className="col-span-2">
          <Article />
        </div>
        <div>
          <Recommended />
        </div>
      </div>
      <Footer />
    </div>
  );
}
