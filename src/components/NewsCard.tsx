import Image from "next/image";
import Link from "next/link";

export interface INewsCard {
  _id: string;
  imageUrl: string;
  title: string;
  short_summary: string;
}

export default function NewsCard({
  _id,
  title,
  short_summary,
  imageUrl,
}: INewsCard) {
  return (
    <Link href={`/article/${_id}`}>
      <div className="bg-white p-4" key={_id}>
        <Image
          src={imageUrl || "/placeholder-image.jpg"}
          alt="News"
          className="w-full h-48 object-cover"
          width={1000}
          height={1000}
        />
        <h6 className="font-bold mt-4">{title}</h6>
        <p className="text-xs mt-2">{short_summary}</p>
      </div>
    </Link>
  );
}
