import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import postDetailsMock from "../../mock-data/post-details.mock.json";

function PostDetails() {
  const { id } = useParams();
  console.log(id);

  const [postDetails, setPostDetails] = useState([]);

  useEffect(() => {
    const postStr = window.localStorage.getItem("postDetails"); //获取 localStorage 中的 postDetails
    const postJson = JSON.parse(postStr); //将字符串转换为对象
    console.log(postJson);
    setPostDetails(postJson); //将 postDetails 设置为 postJson
  }, []);

  //   useEffect(() => {
  //     const post = postDetailsMock.find((item) => item.id === parseInt(id));
  //     setPostDetails(post);
  //     console.log(post);
  //   }, [id]);

  //真实场景下，我们会通过 id 和 useEffect请求后端接口获取文章详情数据，这里我们使用 mock 数据代替，模拟请求后端接口获取文章详情数据
  //因为后端和前端并行开发，所以前端需要在后端接口开发完成之前使用 mock 数据代替
  //注意：useState()里面放postDetailsMock，不要加[]

  return (
    <>
      <h3>{postDetails.title}</h3>
      <p>{postDetails.content}</p>
    </>
  );
}

export default PostDetails;
