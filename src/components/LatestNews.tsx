import { getNews } from "@/api/news";

const LatestNews = async () => {
  const news = await getNews();

  return (
    <section className="py-10">
      <div className="container mx-auto">
        <h2 className="text-xl font-bold mb-6">Latest News</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {news.map(({ title, summaryText, imagelink, _id }) => (
            <div className="bg-white p-4" key={_id}>
              <img
                src={imagelink}
                alt="News"
                className="w-full h-48 object-cover"
              />
              <h3 className="font-bold mt-4">{title}</h3>
              <p className="text-sm mt-2">{summaryText}</p>
            </div>
          ))}

          {/* Add more cards */}
        </div>
      </div>
    </section>
  );
};
export default LatestNews;
