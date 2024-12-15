import { getRecentNews } from "@/api/news";
import NewsCard from "./NewsCard";

const LatestNews = async () => {
  const news = await getRecentNews();
  // get array from 3rd index to end
  const latestNews = news.slice(3);
  return (
    <section>
      <div className="mx-auto">
        <h2 className="text-xl font-bold mb-6">Latest News</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {latestNews.map(
            ({ title, short_summary, imageUrl, _id, source, datetime }) => (
              <NewsCard
                key={_id}
                title={title}
                short_summary={short_summary}
                imageUrl={imageUrl}
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
