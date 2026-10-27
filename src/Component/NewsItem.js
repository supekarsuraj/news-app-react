// import React, { Component } from "react";
import PropTypes from "prop-types";

import React from 'react'

export default function NewsItem(props) {
        let { title, description, imageUrl, newsUrl } = props;

  return (
    <div>
    return (
      <div>
        <section className="card my-3" style={{ maxWidth: "320px" }}>
          <img src={imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h4 className="card-title">{title}</h4>
            <p className="card-text">{description}</p>
            <a
              href={newsUrl}
              className="btn-solid theme-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read more
            </a>
          </div>
        </section>
      </div>
    );
    </div>
  )
}


