import {
  FloatingLabel,
  Form,
  Container,
  Row,
  Col,
  Button,
} from "../../utils/imports";
import "./write-post.scss";
//style={{ border: "solid 2px red" }}

function WritePost() {
  const handleSubmit = (e) => {
    //e指的是事件对象
    // step-1 阻止表单默认提交行为

    e.preventDefault();
    // step-2 获取表单数据
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries()); // entries() 方法返回一个新的Array Iterator对象，该对象包含数组中每个索引的键/值对。
    console.log("data: ", data);
    // 要拿到表单数据，就必须在Form.Control里面加上name属性，否则获取不到数据
    // const form = e.target;与  const formData = new FormData(e.target);的区别是
    // 前者是表单元素，后者是表单数据

    // step-3 数据校验（minlength,maxlength,text,number,regExp）
    //自己写代码去校验，如果校验失败提示用户不要提交数据

    // step-4 提交数据

    // 这种情况就叫做非受控表单，因为表单数据不受React控制，而是由DOM控制，这个不好。

    const title = formData.get("floatingInput");
    const content = formData.get("floatingTextarea");
    console.log(title, content);
  };

  return (
    <Container fluid>
      <Row>
        <Col lg={12}>
          <Form noValidate onSubmit={handleSubmit}>
            {/* noValidate 属性规定在提交表单时不对其进行验证。禁用表单校验功能，后续交给Bootstrap去管 */}
            <FloatingLabel
              controlId="floatingInput"
              label="Enter your Title, 2-32 characters."
              className="mb-3"
            >
              <Form.Control
                name="title"
                type="text"
                placeholder="Leave a comment here"
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingTextarea"
              label="Enter your Contents, 1-1000 characters."
            >
              <Form.Control
                as="textarea"
                placeholder="Leave a comment here"
                style={{ height: "20rem" }}
                className="mb-3 no-resize"
                name="content"
              />
            </FloatingLabel>
            <Button as="input" type="submit" value="Submit" className="mb-3" />{" "}
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default WritePost;
