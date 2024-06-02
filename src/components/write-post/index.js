import {
  FloatingLabel,
  Form,
  Container,
  Row,
  Col,
  Button,
} from "../../utils/imports";
import "./write-post.scss";
import { useState, useEffect } from "react";
import Ajv from "ajv";
import ajvErrors from "ajv-errors";

//写一个schema对象，用来校验表单数据
const schema = {
  type: "object",
  properties: {
    title: {
      type: "string",
      minLength: 2,
      maxLength: 32,
      errorMessage: {
        type: "Title must be String.",
        minLength: "Title must no less than 2 characters.",
        maxLength: "Title must no more than 32 characters.",
      },
    },
    content: {
      type: "string",
      minLength: 1,
      maxLength: 1000,
      errorMessage: {
        type: "Content must be String.",
        minLength: "Content must no less than 1 characters.",
        maxLength: "Content must no more than 1000 characters.",
      },
    },
  },
};

//创建一个ajv实例
const ajv = new Ajv({ allErrors: true });
ajvErrors(ajv);
const validate = ajv.compile(schema);

function WritePost() {
  const [errors, setErrors] = useState({});
  const [postDetail, setPostDetail] = useState({ title: "", content: "" });
  const [touched, setTouched] = useState({ title: false, content: false });

  useEffect(() => {
    const isValid = validate(postDetail);
    if (!isValid) {
      const newErrors = {};
      validate.errors.forEach((error) => {
        const key = error.instancePath.substring(1);
        newErrors[key] = error.message;
      });
      setErrors(newErrors);
    } else {
      setErrors({});
    }
  }, [postDetail]);

  const handleChange = (e) => {
    //step-1 获取用户输入的数据
    const { name, value } = e.target;
    //e.target指的是触发事件的元素，这里指的是表单元素

    //step-2 更新state
    setPostDetail({
      ...postDetail,
      [name]: value,
    });

    setTouched((prevTouched) => ({
      ...prevTouched,
      [name]: true,
    }));
    //这里的name是表单元素的name属性，value是表单元素的value属性
    //展开运算符...postDetail，是把postDetail对象里面的所有属性展开，然后再把[name]:value添加进去
    //同名属性会被覆盖，不同名属性会被添加
  };

  const handleSubmit = (e) => {
    //e指的是事件对象
    // step-1 阻止表单默认提交行为
    e.preventDefault();
    setTouched({ title: true, content: true });

    console.log("errors:", errors);
    if (Object.keys(errors).length > 0) {
      return;
    }

    // 如果没有错误，可以提交数据

    // step-4 提交数据
  };

  return (
    <Container fluid>
      <Row>
        <Col lg={12}>
          <Form noValidate onSubmit={handleSubmit}>
            {/* onSubmit={handleSubmit} */}
            {/* noValidate 属性规定在提交表单时不对其进行验证。禁用表单校验功能，后续交给ajv去管 */}
            <FloatingLabel
              controlId="floatingInput"
              label="Enter your Title"
              className="mb-3"
            >
              <Form.Control
                name="title"
                type="text"
                placeholder="Leave a comment here"
                value={postDetail.title}
                // 把表单数据绑定到state中，相当于把表单数据变成了state数据，交给React控制
                onChange={handleChange}
                className={`${
                  errors.title && touched.title ? "is-invalid" : ""
                }`}
              />
              {touched.title && (
                <span className="text-danger">
                  {errors.title ? errors.title : "Looks good"}
                </span>
              )}
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingTextarea"
              label="Enter your Contents"
            >
              <Form.Control
                as="textarea"
                placeholder="Leave a comment here"
                style={{ height: "20rem" }}
                name="content"
                value={postDetail.content}
                // 把表单数据绑定到state中，相当于把表单数据变成了state数据，交给React控制，设置了 value 属性需要设置 onChange 属性，用来更新 state 中的数据
                onChange={handleChange}
                // className={`no-resize ${errors.content ? "is-invalid" : ""}`}
                className={`${
                  errors.content && touched.content ? "is-invalid" : ""
                }`}
              />
              <Container>
                <Row>
                  <Col>
                    {touched.content && (
                      <span className="text-danger">
                        {errors.content ? errors.content : "Looks good"}
                      </span>
                    )}
                  </Col>
                  <Col className="align-right">
                    <Form.Text>{postDetail.content.length}/1000</Form.Text>
                  </Col>
                </Row>
              </Container>
            </FloatingLabel>
            <Button
              as="input"
              type="submit"
              value="Submit"
              className="mb-3 mt-3"
            />
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default WritePost;
