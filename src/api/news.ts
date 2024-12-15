interface INews {
  _id: string;
  title: string;
  short_summary: string;
  long_summary: string;
  imageUrl: string;
  source: string;
  date_time: string;
}

export const getRecentNews = async (): Promise<INews[]> => {
  const response= await fetch('http://16.171.28.118:8000/recent-news/?count=15', {
    cache: 'no-store', // Avoids caching for dynamic data
  });
  const data = await response.json();
  return data?.recent_news;
}

export const getNewsById = async (id: string): Promise<INews> => {
  const response= await fetch(`http://16.171.28.118:8000/news/${id}`, {
    cache: 'no-store', // Avoids caching for dynamic data
  });
  const data = await response.json();
  return data;
}
