import Link from "next/link";
import { getRecentNews } from "@/api/news";
const Card1 = async () => {
  const news = await getRecentNews();
  return (
    <div>
      <Link href={`/article/${news[0]["_id"]}`}>
        <div className="bg-white p-4" key={news[0]["_id"]}>
          <img
            src={news[0]["imageUrl"]}
            alt="News"
            className="w-full h-48 object-cover"
          />
          <h3 className="font-bold mt-4">{news[0]["title"]}</h3>
          <p className="text-sm mt-2">{news[0]["short_summary"]}</p>
        </div>
      </Link>
    </div>
  );
};

export default Card1;
