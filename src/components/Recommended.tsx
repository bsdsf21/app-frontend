import { getNews } from "@/api/news";

export default async function Recommended() {

    const news = await getNews();
  
    return (
      <section className="py-10" >
        <div className="container mx-auto">
          <h2 className="text-xl font-bold mb-6">Recommended</h2>
          <div className="grid grid-cols-1 gap-1">
            {news.map(({ title, summaryText, imagelink, _id }) => (
              <div className="bg-white p-4 flex" key={_id}>
                <img
                  src={imagelink}
                  alt="News"
                  className="w-20 h-20 object-cover"
                />
                <div className="ml-4">
                  <h3 className="text-sm font-bold">{title}</h3>
                  <p className="text-sm text-ellipsis">{summaryText}</p>
                </div>
              </div>
            ))}
            </div>
        </div>
      </section>
    );
} 