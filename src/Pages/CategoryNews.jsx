import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import NewsCard from "../components/NewsCard";

const CategoryNews = () => {
  const { id } = useParams();
  console.log(id);
  // const userId = Number(id);
  // console.log(userId);
  const data = useLoaderData();
  console.log(data);

  const [categoryNews, setCategoryNews] = useState([]);

  useEffect(() => {
    if (id == "0") {
      setCategoryNews(data);
      return;
    } else if (id == "1") {
      const filteredNews = data.filter(
        (news) => news.others.is_today_pick == true
      );
      console.log(filteredNews);
      setCategoryNews(filteredNews);
      return;
    } else {
      const filteredNews = data.filter((news) => news.category_id == id);
      setCategoryNews(filteredNews);
      console.log(filteredNews);
    }
  }, [id, data]);

  return (
    <div>
      <h2 className="font-bold text-xl text-primary mb-5">
        Dragon News Home:{" "}
        <span className="text-secondary">{categoryNews.length}</span>
      </h2>

      <div className="grid grid-cols-1 gap-3">
        {categoryNews.map((news) => (
          <NewsCard news={news}></NewsCard>
        ))}
      </div>
    </div>
  );
};

export default CategoryNews;
