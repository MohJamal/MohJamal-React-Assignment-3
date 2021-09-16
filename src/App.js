import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Articles from "./Components/Articles";
import Users from "./Components/Users";
import CircularProgress from "@material-ui/core/CircularProgress";

function App() {
  const [loading, setLoading] = useState(true);
  const [articlesData, setArticlesData] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
      setArticlesData(res.data);
      setLoading(false);
    });
  }, []);

  return (
    <div className="App">
      {!loading ? (
        <>
          <h2>Articles</h2>
          <Articles articlesData={articlesData} />
          <h2>Users</h2>
          <Users />
        </>
      ) : (
        <CircularProgress style={{ width: 70, height: 70 }} />
      )}
    </div>
  );
}

export default App;
