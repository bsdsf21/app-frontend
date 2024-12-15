import { INewsCard } from "@/api/news";
import Link from "next/link";

export default function NewsCard({
  _id,
  title,
  short_summary,
  datetime,
  source,
  imageUrl,
}: INewsCard) {
  return (
    <Link href={`/article/${_id}`}>
      <div className="bg-white p-4" key={_id}>
        <img src={imageUrl} alt="News" className="w-full h-48 object-cover" />
        <h6 className="font-bold mt-4">{title}</h6>
        <p className="text-xs mt-2">{short_summary}</p>
      </div>
    </Link>
  );
}
