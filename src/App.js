import  React, { useState, useEffect } from "react";
import logo from './logo.gif';
import './App.css';
import Main from "./components/main/main";

function App() {

  const [posts, setPosts] = React.useState([]);

   const getNew = async() => {
      const url = "https://hacker-news.firebaseio.com/v0/topstories.json";
      try {
        const response = await fetch(url);
        if (response.ok === false) {
          throw new Error("Response Error:" + response.text);
        }
        const json = await response.json();
        const promises = json
          .slice(0, 10)
          .map(id =>
            fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`).then(
              response => response.json()
            )
          );
        const result = await Promise.all(promises);
        setPosts(result);
      } catch (err) {
        console.error(err);
      }
    }

    const getJobs = async() => {
      const url = "https://hacker-news.firebaseio.com/v0/jobstories.json";
      try {
        const response = await fetch(url);
        if (response.ok === false) {
          throw new Error("Response Error:" + response.text);
        }
        const json = await response.json();
        const promises = json
          .slice(0, 20)
          .map(id =>
            fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`).then(
              response => response.json()
            )
          );
        const result = await Promise.all(promises);
        setPosts(result);
      } catch (err) {
        console.error(err);
      }
    }

    const getAsks = async() => {
      const url = "https://hacker-news.firebaseio.com/v0/askstories.json";
      try {
        const response = await fetch(url);
        if (response.ok === false) {
          throw new Error("Response Error:" + response.text);
        }
        const json = await response.json();
        const promises = json
          .slice(0, 20)
          .map(id =>
            fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`).then(
              response => response.json()
            )
          );
        const result = await Promise.all(promises);
        setPosts(result);
      } catch (err) {
        console.error(err);
      }
    }

  useEffect( () => {getNew()}, [])


return(
  <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1>
          Hacker News
      </h1>
      <nav>
          <ul>
              <li onClick={getNew}>New</li>
              <li onClick={getJobs}>Jobs</li>
              <li onClick={getAsks}>Ask</li>
              <li>Comments</li>
              <li>Show</li>
          </ul>
      </nav>
      <Main posts={posts}/>
  </header>
)
}

export default App;
