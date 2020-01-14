import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Toast, ListGroup, ListGroupItem, ToastHeader } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const API = ({ search, collapse }) => {
  const [articles, setArticles] = useState([
    { title: 'loading...', link: 'http' },
    { title: 'loading...', link: 'http' },
    { title: 'loading...', link: 'http' },
    { title: 'loading...', link: 'http' },
    { title: 'loading...', link: 'http' }
  ]);

  useEffect(() => {
    const query = search.split(' ').join('%20');
    axios
      .get(
        `https://www.googleapis.com/customsearch/v1?q=${query}&cx=004338190528834504815%3Aqickfrmrnzv&num=5&key=AIzaSyBFlBEBKe9x0eWGoXHEZ9PqrXL3Fsw2mWk`
      )
      .then(res => setArticles(res.data.items));
  }, []);

  return (
    <Toast className="flashcard stackoverflow">
      <ToastHeader id="stackoverflow-title">
        Related StackOverflow Articles{' '}
        <FontAwesomeIcon
          icon={faTimes}
          onClick={() => collapse()}
          className="delete-cross stackoverflow-btn"
          size="xs"
        />
      </ToastHeader>
      <ListGroup>
        {articles.map((article, idx) => (
          <ListGroupItem key={idx}>
            <a href={article.link} target="_blank">
              {article.title.slice(0, article.title.indexOf('- S'))}
            </a>
          </ListGroupItem>
        ))}
      </ListGroup>
    </Toast>
  );
};

export default API;
