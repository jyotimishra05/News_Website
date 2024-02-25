
// NewsApp.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NewsItems from './NewsItems';
import Pagination from './Pagination';

const NewsApp = ({category,searchTerm}) => {
  const [news, setNews] = useState([]);
  const[loading,setLoading]=useState(false);
  
  
  const [currentPage, setCurrentPage] = useState(1);
  const [darkTheme, setDarkTheme] = useState(false);
  const toggleTheme = () => {
    setDarkTheme((prevTheme) => !prevTheme);
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=in&category=${category}&q=${searchTerm}&apiKey=${import.meta.env.VITE_API_KEY}&page=${currentPage}`
        );
        setNews(response.data.articles);
        // console.log(response.data.articles)
        setLoading(false)
      } catch (error) {
        console.error('Error fetching news:', error);
        setLoading(false)
      }
    };

    fetchData();
  }, [searchTerm, category,currentPage]);
  

  console.log("searchTerm",searchTerm)

  return (

    <div>
    {loading ? <h1 className='text-center my-5 py-5'>Loading...</h1>:
    <div className={`app ${darkTheme ? 'dark-theme' : 'light-theme'}`}>
    <h2 className='text-center py-4 my-5 fixed-top bg'><span className="latest">Latest</span><span className="badge bg-light text-dark">News</span>
    <div className="float-end mx-4">
    <button className="theme-toggle btn btn-primary " onClick={toggleTheme}>
      {darkTheme ? 'Light Theme' : 'Dark Theme'}
   </button> 
   </div>
   </h2>
   
   
      
     <div>
        {news.map((article, index) => (
          <div key={index} className='mb-3 d-inline-block  mx-3 px-2 my-5 py-5'>
            <NewsItems title={article.title} imgUrl={article.urlToImage} description={article.description} url={article.url}/>
          </div>
        ))}
      </div>
      <Pagination setCurrentPage={setCurrentPage} currentPage={currentPage} news={news}/>
    </div>}
    </div>
  );
};

export default NewsApp;



