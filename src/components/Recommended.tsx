import { getRecentNews } from "@/api/news";
import { get } from "http";
export default async function Recommended() {
  const news = await getRecentNews();

  return (
    <section className="py-10">
      <div className="mx-auto">
        <h2 className="text-xl font-bold mb-6">Recommended</h2>
        <div className="grid grid-cols-1 gap-1">
          {news.map(({ title, short_summary, imageUrl, _id }) => (
            <div className="bg-white p-4 flex" key={_id}>
              <img
                src={imageUrl}
                alt="News"
                className="w-20 h-20 object-cover"
              />
              <div
                className="ml-4 text-ellipsis overflow-hidden"
                style={{
                  display: "-webkit-box",
                  WebkitLineClamp: 3, // Limit to 3 lines total
                  WebkitBoxOrient: "vertical",
                }}
              >
                <span className="text-sm font-bold">{title}</span>
                <span className="text-xs"><br></br> {short_summary}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
