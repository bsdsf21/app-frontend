import React from "react";
import { getNewsById } from "@/api/news";

interface ArticleProps {
  id: string;
}

const Article = async ({ id }: ArticleProps) => {
  const news = await getNewsById(id);
  const { _id, title, imageUrl, long_summary, source, date_time } = news;
  return (
    <div className=" bg-gray-50">
      <div className="max-w-4xl mx-auto bg-white shadow-md overflow-hidden">
        <div className="relative">
          <img
            src={imageUrl}
            alt="Article"
            className="w-full h-64 object-cover"
          />
        </div>
        <div className="p-6">
          <div>
            <h1 className="text-2xl text-black font-bold mb-3">{title}</h1>
          </div>
          <div className="mb-4 text-gray-500 text-sm flex justify-between">
            <span>{source}</span>
            <span>{date_time && new Date(date_time).toLocaleString()}</span>
          </div>
          <p className="text-gray-700 leading-relaxed">{long_summary}</p>
        </div>

        {/* Tags */}
        <div className="p-6 border-t border-gray-200">
          <h2 className="text-lg font-bold text-gray-700 mb-3">Tags:</h2>
          <div className="flex gap-2">
            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
              Tech
            </span>
            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
              Next.js
            </span>
            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
              Web Development
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Article;
