
import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

export default function News(props) {
  const pageSize = props.pageSize;
  const category = props.category;
  const apiKey = props.apiKey

  const [state, setState] = useState({
    article: [],
    loading: true,
    page: 1,
    totalResult: 0,
  });

  const fetchArticles = async (page) => {
    setState((prev) => ({ ...prev, loading: true }));

    try {
      const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${apiKey}&page=${page}&pageSize=${pageSize}`;

      const response = await fetch(url);
      const data = await response.json();

      if (data.status === "ok") {
        setState((prev) => ({
          ...prev,
          article:
            page === 1
              ? data.articles || []
              : [...prev.article, ...(data.articles || [])],
          loading: false,
          page: page,
          totalResult: data.totalResults || 0,
        }));
      } else {
        setState((prev) => ({ ...prev, loading: false }));
        console.log(data.message);
      }
    } catch (error) {
      console.log("Error fetching news:", error);
      setState((prev) => ({ ...prev, loading: false }));
    }
  };

  useEffect(() => {
    setState({
      article: [],
      loading: true,
      page: 1,
      totalResult: 0,
    });

    fetchArticles(1);
  }, [category, pageSize]);

  // Fetch next page
  const fetchMoreData = () => {
    if (!state.loading) {
      fetchArticles(state.page + 1);
    }
  };

  return (
    <>
      <div className="container my-3">

        <h2 className="text-center">
          {category.charAt(0).toUpperCase() + category.slice(1)}
          {" - Top Headlines"}
        </h2>

        {state.loading && state.article.length === 0 && <Spinner />}

        <InfiniteScroll
          dataLength={state.article.length}
          next={fetchMoreData}
          hasMore={state.article.length < state.totalResult}
          loader={
            <div className="text-center my-4">
              <Spinner />
              <p>Loading more news...</p>
            </div>
          }
          endMessage={
            <p className="text-center my-4">
              <b>You have seen all the news!</b>
            </p>
          }
        >

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
                  name={element.source?.name}
                />
              </div>
            ))}
          </div>

        </InfiniteScroll>

      </div>
    </>
  );
}
