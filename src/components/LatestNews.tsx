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
            ({ _id, title, short_summary, imageUrl }) => (
              <NewsCard
                key={_id}
                _id={_id}
                title={title}
                short_summary={short_summary}
                imageUrl={imageUrl[0]}
              />
            )
          )}
        </div>
      </div>
    </section>
  );
};
export default LatestNews;
