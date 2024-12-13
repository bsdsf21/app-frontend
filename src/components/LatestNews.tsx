import { getNews } from "@/api/news";
import NewsCard from "./NewsCard";

const LatestNews = async () => {
  const news = await getNews();
  return (
    <section>
      <div className="container mx-auto">
        <h2 className="text-xl font-bold mb-6">Latest News</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {news.map(
            ({ title, summaryText, imagelink, _id, source, datetime }) => (
              <NewsCard
                key={_id} // Add the key prop here
                title={title}
                summaryText={summaryText}
                imagelink={imagelink}
                _id={_id}
                source={source}
                datetime={datetime}
              />
            )
          )}
        </div>
      </div>
    </section>
  );
};
export default LatestNews;
