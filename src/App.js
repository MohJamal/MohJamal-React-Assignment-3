import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Articles from "./Components/Articles";
import Users from "./Components/Users";
import CircularProgress from "@material-ui/core/CircularProgress";

function App() {
  const [loading, setLoading] = useState(true);
  const [articlesData, setArticlesData] = useState([]);
  const [usersData, setUsersData] = useState([]);

  let axiosConfig = {
    headers: {
      "app-id": "613e64e2748b558d779ce190",
    },
  };

  const fetchData = () => {
    const articlesAPI = "https://jsonplaceholder.typicode.com/posts";
    const usersAPI = "https://dummyapi.io/data/v1/user?limit=50";

    const getArticles = axios.get(articlesAPI);
    const getUsers = axios.get(usersAPI, axiosConfig);

    axios.all([getArticles, getUsers]).then(
      axios.spread((...allData) => {
        setArticlesData(allData[0].data);
        setUsersData(allData[1].data.data);
        setLoading(false);
      })
    );
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      {!loading ? (
        <>
          <h2>Articles</h2>
          <Articles articlesData={articlesData} />
          <h2>Users</h2>
          <Users usersData={usersData} />
        </>
      ) : (
        <CircularProgress style={{ width: 70, height: 70 }} />
      )}
    </div>
  );
}

export default App;
