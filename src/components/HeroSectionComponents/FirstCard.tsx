import Link from "next/link";
import { getRecentNews } from "@/api/news";
import Image from "next/image";
const Card1 = async () => {
  const news = await getRecentNews();
  return (
    <div>
      <Link href={`/article/${news[0]["_id"]}`}>
        <div className="bg-white p-4" key={news[0]["_id"]}>
          <Image
            src={news[0]?.imageUrl[0] || "/placeholder-image.jpg/"}
            alt="News"
            className="w-full h-48 object-cover"
            width={1000}
            height={1000}
          />
          <h3 className="font-bold mt-4">{news[0]["title"]}</h3>
          <p className="text-sm mt-2">{news[0]["short_summary"]}</p>
        </div>
      </Link>
    </div>
  );
};

export default Card1;
