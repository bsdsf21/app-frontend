export interface INewsCard {
  _id: string;
  url?: string;
  imageUrl: string;
  source?: string;
  content?: string;
  title: string;
  datetime?: string
  short_summary?: string;
  long_summary?: string;  
}

export const getRecentNews = async (): Promise<INewsCard[]> => {
  const response= await fetch('http://16.171.28.118:8000/recent-news/?count=15', {
    cache: 'no-store', // Avoids caching for dynamic data
  });
  const data = await response.json();
  return data?.recent_news;
}
