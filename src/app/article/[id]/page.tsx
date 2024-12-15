import Article from "@/components/ArticleDetails";
import Footer from "@/components/Footer";
import Recommended from "@/components/Recommended";
import Header from "@/components/Header";

interface ArticlePageProps { 
  params: { id: string }
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { id } = await params;
  return (
    <div className="bg-gray-50 text-gray-900">
      <div className="mx-auto grid grid-cols-3 md:grid-cols-3">
        <div className="col-span-2">
          <Article id={id as string} />
        </div>
        <div className="col-span-1 px-6">
          <Recommended />
        </div>
      </div>
      <Footer />
    </div>
  );
}
