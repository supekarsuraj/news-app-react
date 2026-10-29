// import React, { Component } from "react";
import PropTypes from "prop-types";

import React from 'react'

export default function NewsItem(props) {
        let { title, description, imageUrl, newsUrl ,publishedAt ,author, name } = props;
        function timeAgo(date) {
  const seconds = Math.floor(
    (new Date() - new Date(date)) / 1000
  );

  if (seconds < 60) return `${seconds} seconds`;

  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes} minutes`;

  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours} hours`;

  const days = Math.floor(hours / 24);
  if (days < 30) return `${days} days`;

  const months = Math.floor(days / 30);
  if (months < 12) return `${months} months`;

  const years = Math.floor(days / 365);
  return `${years} years`;
}

  return (
    <div>
   
      <div>
    
        <section className="card my-3" style={{ maxWidth: "320px" }}>
 <div
  className="badge bg-danger position-absolute end-0 translate-middle-y"
  style={{
    top: "-4px",
    zIndex: 2,
    width: "30%",
    borderRadius: "6px",
    padding: "5px"
  }}
>
  {name}
</div>
          <img src={imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h4 className="card-title">{title}</h4>
            <p className="card-text">{description}</p>
            <div class=" fg-2"> author by {author}
Last updated  {timeAgo(publishedAt)} ago</div>
            <a
              href={newsUrl}
          className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read more
            </a>
               

          </div>
        </section>
      </div>
   
    </div>
  )
}


