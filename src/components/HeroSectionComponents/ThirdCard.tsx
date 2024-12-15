import Link from "next/link";
import { getRecentNews } from "@/api/news";
const Card3 = async () => {
  const news = await getRecentNews();
  return (
    <div>
      <Link href={`/article/${news[2]["_id"]}`}>
        <div className="max-w-sm w-full lg:max-w-full lg:flex">
          {/* Image Section */}
          <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden">
            <img
              src={news[2]["imageUrl"]}
              alt="News"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text Section */}
          <div className=" bg-white p-4 flex flex-col justify-between leading-normal">
            <div className="mb-8">
              <div className="text-gray-900 font-bold text-sm mb-2 truncate overflow-hidden">
                {news[2]["title"]}
              </div>
              <p
                className="text-gray-700 text-xs text-ellipsis"
              >
                {news[2]["short_summary"]}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card3;
