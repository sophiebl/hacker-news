import  React, { useState, useEffect } from "react";
import axios from "axios";
// import Header from "./components/header/header.js";
// import Main from "./components/main/main.js";
import logo from './logo.gif';
import './App.css';

function App() {

const [posts, setPosts] = useState(null);

const fetchDataNews = async () => {
  const response = await axios.get(
    'https://hacker-news.firebaseio.com/v0/topstories.json');
    setPosts(response.data);
  };


return(
  <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1>
          Hacker News
      </h1>
      <nav>
          <ul>
              <li onClick={fetchDataNews}>New</li>
              <li onClick={fetchDataPast}>Pasts</li>
              <li>Comments</li>
              <li>Ask</li>
              <li>Show</li>
              <li>Jobs</li>
          </ul>
      </nav>
      <div className="posts">
      {posts &&
        posts.map((post, index) => {

          return (
            <div className="post" key={index}>
              <h3>Post {index + 1}</h3>
            </div>
          );
        })}
    </div>
  </header>
)
}

export default App;
