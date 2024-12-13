import React from "react";
import { getNews } from "@/api/news";
const Article = async () => {
  const news = await getNews();
  return (
    <div className=" bg-gray-50">
      <div className="max-w-4xl mx-auto bg-white shadow-md overflow-hidden">
        {/* Article Header */}
        <div className="relative">
          <img
            src={news[2]["imagelink"]}
            alt="Article"
            className="w-full h-64 object-cover"
          />
        </div>

        {/* Article Content */}
        <div className="p-6">
          <div>
            <h1 className="text-2xl text-black font-bold mb-3">
              {news[2]["title"]}
            </h1>
          </div>
          <div className="mb-4 text-gray-500 text-sm flex justify-between">
            <span>Author: Jane Doe</span>
            <span>Published: November 24, 2024</span>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            vitae congue ligula. Curabitur vel bibendum ligula. Fusce feugiat,
            quam id dapibus convallis, erat turpis cursus metus, nec luctus ex
            ante ac nulla. Sed tristique, eros nec aliquet ultrices, felis sem
            euismod urna, nec laoreet eros nunc nec augue.
          </p>
          <p className="mt-4 text-gray-700 leading-relaxed">
            Proin luctus dolor non augue dictum, non vulputate elit suscipit.
            Morbi sit amet sagittis dolor. Duis vestibulum nisi eu tortor
            suscipit, non faucibus risus vulputate. Suspendisse vel quam nec
            nulla commodo cursus.
          </p>
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
