import { useState, useEffect } from "react";
import hotListMock from "./hot-post.mock.json";
import ListGroup from "react-bootstrap/ListGroup";
import "./hot-post.scss";

function HotPost(props) {
  const [hotList, setHotList] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHotList(hotListMock);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ListGroup as="ul">
      <ListGroup.Item as="li" active>
        Hot Posts
      </ListGroup.Item>
      {hotList.map((item) => (
        <ListGroup.Item
          as="li"
          key={item.id}
          className="d-flex justify-content-between"
        >
          <span>{item.title}</span>
          <span>{item.updateTime}</span>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}
export default HotPost;
