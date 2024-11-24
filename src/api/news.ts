export interface INewsCard {
  _id: string;
  title: string;
  Headings: string[];
  categories: string[];
  originalnewslink: string;
  summaryText: string;
  datetime: string;
  source: string;
  imagelink: string;
}

export const getNews = async () => {
  const news: INewsCard[] = [
    {
      _id: "648f1b2c4fa12345abcd1234",
      imagelink: "https://img.freepik.com/free-photo/colorful-design-with-spiral-design_188544-9588.jpg",
      source: "BBC News",
      originalnewslink: "https://bbc.com/article123",
      summaryText: "A major event occurred today in the tech industry.",
      datetime: "2024-11-21T10:30:00Z",
      title: "Tech Giants Announce Merger",
      Headings: ["Introduction", "Details", "Impact", "Conclusion"],
      categories: ["Technology", "Business"],
    },
    {
      _id: "648f1b2c4fa12345abcd1235",
      imagelink: "https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649",
      source: "Reuters",
      originalnewslink: "https://reuters.com/article456",
      summaryText: "The stock market experienced a sharp drop today.",
      datetime: "2024-11-21T15:45:00Z",
      title: "Markets Plunge Amid Global Uncertainty",
      Headings: ["Market Overview", "Reasons for Drop", "Expert Opinions"],
      categories: ["Finance", "Global"],
    },
    {
      _id: "648f1b2c4fa12345abcd1236",
      imagelink: "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
      source: "The Verge",
      originalnewslink: "https://theverge.com/news789",
      summaryText:
        "A new smartphone with groundbreaking features has been launched.",
      datetime: "2024-11-21T08:00:00Z",
      title: "Revolutionary Smartphone Launches",
      Headings: ["Overview", "Features", "Market Response"],
      categories: ["Technology", "Gadgets"],
    },
    {
      _id: "648f1b2c4fa12345abcd1237",
      imagelink: "https://media.istockphoto.com/id/1403500817/photo/the-craggies-in-the-blue-ridge-mountains.jpg?s=612x612&w=0&k=20&c=N-pGA8OClRVDzRfj_9AqANnOaDS3devZWwrQNwZuDSk=",
      source: "Al Jazeera",
      originalnewslink: "https://aljazeera.com/article567",
      summaryText:
        "An environmental summit concludes with significant agreements.",
      datetime: "2024-11-20T22:15:00Z",
      title: "Nations Agree on Climate Action",
      Headings: ["Summit Highlights", "Agreements Reached", "Future Plans"],
      categories: ["Environment", "Politics"],
    },
    {
      _id: "648f1b2c4fa12345abcd1238",
      imagelink: "https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630",
      source: "CNN",
      originalnewslink: "https://cnn.com/worldnews101",
      summaryText:
        "A rare celestial event captured the attention of millions worldwide.",
      datetime: "2024-11-20T18:30:00Z",
      title: "Solar Eclipse Enthralls Skywatchers",
      Headings: [
        "Phenomenon Explained",
        "Public Reactions",
        "Scientific Insights",
      ],
      categories: ["Science", "Astronomy"],
    },
  ];
  return news;
};
