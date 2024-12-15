import Article from "@/components/ArticleDetails";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Recommended from "@/components/Recommended";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="bg-gray-50 text-gray-900">
      <Header />
      <div className="mx-auto grid grid-cols-3 md:grid-cols-3 gap-6">
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


