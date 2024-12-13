import { INewsCard } from "@/api/news";
import Link from "next/link";
import { getNews } from "@/api/news";
import Header from '../components/Header';

const Hero = async () => {
  const news = await getNews();
  return (
    <section>
      <div className="container mx-auto grid grid-cols-2 bg-white text-black">
        <div>
          <Link href={`/article/${news[0]["_id"]}`}>
            <div className="bg-white p-4" key={news[0]["_id"]}>
              <img
                src={news[0]["imagelink"]}
                alt="News"
                className="w-full h-48 object-cover"
              />
              <h3 className="font-bold mt-4">{news[0]["title"]}</h3>
              <p className="text-sm mt-2">{news[0]["summaryText"]}</p>
            </div>
          </Link>
        </div>
        <div className="grid grid-rows-2 gap-2">
          <div className="bg-[#1A1A1A] gap-1 p-2">
            <Link href={`/article/${news[0]["_id"]}`}>
              <div className="max-w-sm w-full lg:max-w-full lg:flex flex-row-reverse">
                {/* Image Section */}
                <div
                  className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-r text-center overflow-hidden"
                  title="Woman holding a mug"
                >
                  <img
                    src={news[0]["imagelink"]}
                    alt="News"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Text Section */}
                <div className="bg-[#1A1A1A] p-4 flex flex-col justify-between leading-normal">
                  <div className="mb-8">
                    <div className="text-white font-bold text-sm mb-2 truncate overflow-hidden">
                      {news[0]["title"]}
                    </div>
                    <p
                      className="text-white text-xs text-base overflow-hidden text-ellipsis"
                      style={{
                        display: "-webkit-box",
                        WebkitLineClamp: 3, // Adjust this number to control the number of visible lines
                        WebkitBoxOrient: "vertical",
                      }}
                    >
                      {news[0]["summaryText"]}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          {/* Card 2 */}
          <div>
            <Link href={`/article/${news[1]["_id"]}`}>
              <div className="max-w-sm w-full lg:max-w-full lg:flex">
                {/* Image Section */}
                <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden">
                  <img
                    src={news[1]["imagelink"]}
                    alt="News"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Text Section */}
                <div className=" bg-white p-4 flex flex-col justify-between leading-normal">
                  <div className="mb-8">
                    <div className="text-gray-900 font-bold text-sm mb-2 truncate overflow-hidden">
                      {news[1]["title"]}
                    </div>
                    <p
                      className="text-gray-700 text-xs overflow-hidden text-ellipsis"
                      style={{
                        display: "-webkit-box",
                        WebkitLineClamp: 3, // Adjust this number to control the number of visible lines
                        WebkitBoxOrient: "vertical",
                      }}
                    >
                      {news[1]["summaryText"]}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
