import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner"; // अगर loader use करना है

const NewsBoard = ({ category, query }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const url = query
      ? `https://newsapi.org/v2/everything?q=${query}&apiKey=${import.meta.env.VITE_API_KEY}`
      : `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;

    setLoading(true);

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setArticles(data.articles || []);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setArticles([]);
        setLoading(false);
      });
  }, [category]);

  return (
    <div className="container">
      <h2 className="text-center my-4">
        Latest <span className="badge bg-danger">News</span>
      </h2>

      {loading && <Spinner />}

      {!loading && (
        <div className="row g-2">
          {articles.map((news, index) => (
            <div className="col-12 col-md-6 col-lg-4 col-xl-3" key={index}>
              <NewsItem
                title={news.title}
                description={news.description}
                src={news.urlToImage}
                url={news.url}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default NewsBoard;
