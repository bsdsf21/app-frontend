import Link from "next/link";
import { getRecentNews } from "@/api/news";
import Image from "next/image";
const Card2 = async () => {
  const news = await getRecentNews();
  return (
    <div className="bg-[#1A1A1A] gap-1 p-2">
      <Link href={`/article/${news[1]["_id"]}`}>
        <div className="w-full lg:flex flex-row-reverse">
          {/* Image Section */}
          <div
            className="h-40 lg:w-40 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-r text-center overflow-hidden"
            title="Woman holding a mug"
          >
            <Image
              src={news[1]["imageUrl"]}
              alt="News"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text Section */}
          <div className="bg-[#1A1A1A] p-4 flex flex-col justify-between leading-normal">
            <div className="mb-8">
              <div className="text-white font-bold text-sm mb-2 overflow-hidden">
                {news[1]["title"]}
              </div>
              <p
                className="text-white text-xs text-ellipsis"
              >
                {news[1]["short_summary"]}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card2;
