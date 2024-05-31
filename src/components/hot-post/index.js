import { useState, useEffect } from "react";
import hotListMock from "./hot-post.mock.json";

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
      <li className="list-group-item active">Hot Posts</li>
      {hotList.map((item) => (
        <li className="list-group-item" key={item.id}>
          <div className="d-flex justify-content-between">
            <span>{item.title}</span>
            <span>{item.updateTime}</span>
          </div>
        </li>
      ))}
    </ul>
  );
}
export default HotPost;
