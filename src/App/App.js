import "./App.css";
import NavBar from "../App/components/nav-bar/index";
import PostList from "./components/post-list";
import HotPost from "./components/hot-post";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-9">
            <PostList page={1} />
          </div>
          <div className="col-md-3">
            <HotPost page={1} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
