import  React, { useEffect } from "react";
import logo from './logo.gif';
import './App.css';
import Main from "./components/main/main";

function App() {

  const [posts, setPosts] = React.useState([]);

  // url to fetch (id of datas contents)
  const newStories = "https://hacker-news.firebaseio.com/v0/topstories.json";
  const jobStories = "https://hacker-news.firebaseio.com/v0/jobstories.json";
  const askStories = "https://hacker-news.firebaseio.com/v0/askstories.json";

  // fetching datas
  const fetchData = async(datas) => {
    const url = datas;
    try {
      const response = await fetch(url);
      if (response.ok === false) {
        throw new Error("Response Error:" + response.text);
      }
      const json = await response.json();
      // Display each element content
      const promises = json
        .slice(0, 15)
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

  // On first load, display news stories
  useEffect( () => {fetchData(newStories)}, [])


return(
  <div className="container">
    <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
            Hacker News
        </h1>
        <nav>
            <ul>
                <li onClick={() => fetchData(newStories)}>New</li>
                <li onClick={() => fetchData(jobStories)}>Jobs</li>
                <li onClick={() => fetchData(askStories)}>Ask</li>
                <li>Comments</li>
                <li>Show</li>
            </ul>
        </nav>
    </header>
    <Main posts={posts}/>
  </div>
)
}

export default App;
