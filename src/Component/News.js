import React, { Component } from "react";
import NewsItem from "./NewsItem";


// import React from 'react'

export default function News() {
  const [state, setState] = React.useState({ article: [], loading: true, page: 1 });

  const fetchArticles = async (page) => {
    const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=68c2e70ddc9148abad0dab91c69c7a5b&page=${page}`;
    const response = await fetch(url);
    const data = await response.json();
    setState((currentState) => ({
      ...currentState,
      article: data.articles || [],
      loading: false,
      page
    }));
  };

  React.useEffect(() => {
    fetchArticles(1);
  }, []);

  const handlePrevClick = () => {
    if (state.page > 1) fetchArticles(state.page - 1);
  };

  const handleNextClick = () => fetchArticles(state.page + 1);

  return (
    <div>
            <div className="container my-3">
        <h2>NewsMonkey - Top Headlines</h2>
           <div className="row">
        {state.article.map((element) => {
          return (
         
              <div className="col-md-4" key={element.url}>
                <NewsItem 
                  title={element.title ? element.title.slice(0, 45) : ""}
                  description={
                    element.description ? element.description.slice(0, 100) : ""
                  }
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
           
          );
        })}
         </div>
         <div className="container d-flex justify-content-between"><button type="button" className="btn btn-primary" onClick={handlePrevClick} disabled={state.page === 1}>
            &larr; Previous
          </button>
          <button type="button" className="btn btn-primary" onClick={handleNextClick}>
            Next &rarr;
          </button></div>
          
        </div>
    </div>
  )
}


