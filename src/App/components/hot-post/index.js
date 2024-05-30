import { useState, useEffect } from "react";
import hotListMock from "../hot-post/hot-post.mock.json";

function HotPost(props) {
  const [hotList, setHotList] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHotList(hotListMock);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ul className="list-group">
      <li className="list-group-item active">Hot Post</li>
      {hotList.map((post) => (
        <li className="list-group-item key={post.id}">
          <div className="d-flex justify-content-between">
            <span>{post.title}</span>
            <span>{post.updateTime}</span>
          </div>
        </li>
      ))}
    </ul>
  );
}
export default HotPost;
