import "./App.scss";
import NavBar from "../nav-bar/index";
import PostList from "../post-list";
import HotPost from "../hot-post";

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
