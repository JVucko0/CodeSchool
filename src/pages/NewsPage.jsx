import React from "react";
import AddNews from "../components/newsPage/AddNews";
import DisplayNews from "../components/newsPage/DisplayNews";
import classes from "./NewsPage.module.css";
import { useState, useEffect, useCallback } from "react";
import axios from "axios";

function NewsPage() {
  const [news, setNews] = useState([]);

  const getNews = useCallback(async () => {
    try {
      const response = await axios.get(
        "http://localhost:3001/administracija"
      );
      const data = response.data;

      const newNews = [];
      for (const key in response.data) {
        const news = {
          id: key,
          ...data[key],
        };
        newNews.push(news);
      }
      setNews(newNews);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    getNews();
  }, [getNews]);


  const deleteNews = async (id) => {
    try {
      await axios.delete(
        `http://localhost:3001/administracija/${id}`
      );
      setNews((prevNews) => prevNews.filter((news) => news.id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  const addNews = async (news) => {
    try {
      const response = await axios.post(
        "http://localhost:3001/administracija",
        news
      );
      const data = response.data;
      const newNews = {
        id: data.name,
        ...news,
      };
      setNews((prevNews) => [...prevNews, newNews]);
    } catch (error) {
      console.log(error);
    }
  };
  
  return (
    <div className={classes["news-page"]}>
      <AddNews addNews={addNews} />
      <DisplayNews news={news} deleteNews={deleteNews} />
    </div>
  );
}

export default NewsPage;
