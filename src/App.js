import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import CreatePost from "./pages/CreatePost";
import Post from "./pages/Post";

function App() {
  return (
    <>
      <div className="navbar">
        <a href="/">MainPage</a>
        <a href="/createpost">CreatePost</a>
      </div>
      <Router>
        <Route path="/" exact component={MainPage}></Route>
        <Route path="/createpost" render={(props) => <CreatePost />}></Route>
        <Route path="/Post/:postId" render={(props) => <Post />}></Route>
      </Router>
    </>
  );
}

export default App;
