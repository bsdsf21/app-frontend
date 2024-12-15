import { getRecentNews } from "@/api/news";
import Link from "next/link";

export default async function Recommended() {
  const news = await getRecentNews();
  const topnews = news.slice(0, 8);
  return (
    <section className="py-10">
      <div className="mx-auto">
        <h2 className="text-xl font-bold mb-6">Recommended</h2>
        <div className="grid grid-cols-1 gap-1">
          {topnews.map(({ _id, title, short_summary, imageUrl}) => (
            <Link href={`/article/${_id}`} key={_id}>
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
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
