
import React from "react";
import NewsItem from "./NewsItem";
import PropTypes from "prop-types";
import Spinner from "./Spinner";

import {
  BrowserRouter as Router,

  Route,
  Link
} from "react-router-dom";



export default function News(props) {
   var  pageize = props.pageSize;

    var category = props.category;
  const [state, setState] = React.useState({
    article: [],
    loading: true,
    page: 1,
    totalResult: 0,
    
  });
 

  const fetchArticles = async (page) => {
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=68c2e70ddc9148abad0dab91c69c7a5b&page=${page}&pageSize=${pageize}`;

    const response = await fetch(url);
    const data = await response.json();

    setState((currentState) => ({
      ...currentState,
      article: data.articles || [],
      loading: false,
      page,
      totalResult: data.totalResults || 0,
      
      
    }));
  };

  React.useEffect(() => {
    fetchArticles(1);
  }, []);

  const handlePrevClick = () => {
    if (state.page > 1) {
      fetchArticles(state.page - 1);
    }
  };

  const handleNextClick = () => {
    const totalPages = Math.ceil(state.totalResult / 5);

    if (state.page < totalPages) {
      fetchArticles(state.page + 1);
    }
  };

  const totalPages = Math.ceil(state.totalResult / 5);

  return (
    <>
    <div className="container my-3">
      <h2 className="text-center">NewsMonkey - Top Headlines</h2>
    {state.loading && <Spinner/>}

      <div className="row">
        {state.article.map((element) => (
          
          <div className="col-md-4" key={element.url}>
            <NewsItem
            
              title={element.title ? element.title.slice(0, 45) : ""}
              description={
                element.description
                  ? element.description.slice(0, 100)
                  : ""
              }
              imageUrl={element.urlToImage}
              newsUrl={element.url}
              publishedAt={element.publishedAt}
              author={element.author}
              name={element.source.name}
            />
          </div>
        ))}
      </div>

      <div className="d-flex justify-content-between my-3">
        <button
          type="button"
          className="btn btn-primary"
          onClick={handlePrevClick}
          disabled={state.page === 1 || state.loading}
        >
          &larr; Previous
        </button>

        <span>
          Page {state.page} of {totalPages}
        </span>

        <button
          type="button"
          className="btn btn-primary"
          onClick={handleNextClick}
          disabled={
            state.loading ||
            state.page >= totalPages ||
            state.article.length === 0
          }
        >
          Next &rarr;
        </button>
      </div>
    </div>
    </>
  );
}
